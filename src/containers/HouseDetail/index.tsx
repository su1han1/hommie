import React from 'react'
import { Container, Typography, Box, Grid, Divider } from '@material-ui/core'
import HouseGallery from './HouseGallery'
import DetailItems from './DetailItems'
import DetailPrice from './DetailPrice'
import DeleteButton from './DeleteButton'
import { RouteComponentProps } from 'react-router'
import { AppState, HouseDetailState, getHouseDetail, deleteHouse } from '../../reducers'
import { connect } from 'react-redux'


interface Props extends RouteComponentProps<{id:string}> {
    getHouseDetail: typeof getHouseDetail
    houseDetail: HouseDetailState
    deleteHouse: typeof deleteHouse
}

const HouseDetail = (props: Props) => {
    const { house } = props.houseDetail
    const id = props.match.params.id
    React.useEffect(() => {props.getHouseDetail(id)},[null])
    const handleDelete = () => {
        props.deleteHouse(house._id)
    }

    return (
        <div>
            <HouseGallery images={house.images}/>
            <Container maxWidth='md' style={{marginBottom: 60}}>
                <Box mt={6} mb={4}>
                    <Typography variant='h3' style={{ textTransform: "uppercase", color: "#E69DC3" }}>
                        {`${house.region}  •  ${house.totalRoom} BED`}
                    </Typography>
                </Box>
                <Grid container>
                    <Grid item md={8}>
                        <Box mb={3}>
                            <Typography variant='h1'>{house.title}</Typography>
                        </Box>
                        <Divider/>
                        <DetailItems itemTitle='Floor Plan' items={house.floorPlan} totalRoom={house.totalRoom} totalBath={house.totalBath} />
                        <DetailItems itemTitle='Amenities' items={house.amenities} />
                        <DetailItems itemTitle='Facilities' items={house.facilities} />
                        <Box mt={'40px'} mb={1}>
                            <Typography variant='h4'>Description</Typography>
                        </Box>
                        <Box>
                            <Typography>{house.description}</Typography>
                        </Box>
                        <Box mt={'40px'} mb={1}>
                            <Typography variant='h4'>Address</Typography>
                        </Box>
                        <Box>
                            <Typography>{house.address}</Typography>
                        </Box>
                        <DeleteButton handleDelete={handleDelete} />
                    </Grid>
                    <Grid item lg={4}>
                        <DetailPrice 
                            price={house.price} leaseStart={house.leaseStart} leaseEnd={house.leaseEnd}
                            utilityIncluded={house.utilityIncluded} isNegotiatable={house.isNegotiatable}
                            url={props.match.url}
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

const mapStateToProps = (state: AppState) => ({
    houseDetail: state.house.houseDetail
})

export default connect(
    mapStateToProps,
    { getHouseDetail, deleteHouse }
)(HouseDetail)