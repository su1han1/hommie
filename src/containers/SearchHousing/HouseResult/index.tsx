import React from 'react'
import { Link } from 'react-router-dom'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Typography, Box, Grid } from "@material-ui/core"
import ResultItem from "./ResultItem"
import { getHouseList, HouseListState } from '../../../reducers'

interface Props {
    getHouseList: typeof getHouseList
    houseList: HouseListState
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingLeft: 50,
            paddingRight: 50,
            paddingBottom: 100,
        },
        result: {
            textDecoration: 'none',
        }
    })
)

export default (props: Props) => {
    const classes = useStyles();
    const { houseList } = props.houseList

    const results = houseList.map((house, index) => (
        <Grid item md={3} key={index}>
            <Link className={classes.result} to={`/house/detail/${house._id}`}><ResultItem image={house.images[0]} title={house.title} region={house.region} totalNum={house.totalRoom}
                occuNum={house.occuRoom} price={house.price} isSublease={house.isSublease}
            /></Link>
        </Grid>
    ))

    return (
        <div className={classes.root}>
            <Typography variant="h2">
                <Box mt={2} mb={2}>More than 1000 Houses</Box>
            </Typography>
            <Grid container spacing={3}>
                {results}
            </Grid>
        </div>
    )
}

