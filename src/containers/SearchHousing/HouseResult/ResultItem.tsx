import React from 'react'
import { Typography, Box, Paper } from "@material-ui/core"
import { FavoriteBorder } from '@material-ui/icons'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

interface Props {
    image: string,
    title: string,
    totalNum: number,
    occuNum: number,
    region: string,
    price: number,
    isSublease: 0 | 1,
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25);",
            paddingTop: 1,
            borderRadius: 6,
        },
        itemImage: {
            backgroundImage: (props: Props) =>
                `url(${props.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "99%",
            height: 184,
            overflow: "hidden",
            margin: "0 auto",
        },
        vacIcon: {
            width: 21,
            height: 21,
            marginBottom: 2,
            marginRight: 1.5,
        },
        occuIcon: {
            width: 24,
            height: 24,
        },
        subtitleBar: {
            display: "flex",
            justifyContent: "space-between",
            height: 23,
        }
    })
)

export default (props: Props) => {
    const classes = useStyles(props)

    const vacancyGenerator = (num: number): Array<JSX.Element> => {
        let vacancies: Array<JSX.Element> = []
        for (let i = 0; i < num; i++) {
            vacancies.push(<img className={classes.vacIcon} src="./house-img/vacancy.png" alt="vacancy" key={i} />)
        }
        return vacancies
    }
    const occupiedGenerator = (num: number): Array<JSX.Element> => {
        let occus: Array<JSX.Element> = []
        for (let i = 0; i < num; i++) {
            occus.push(<img className={classes.occuIcon} src="./house-img/occupied.png" alt="occupied" key={i} />)
        }
        return occus
    }

    return (
        <Paper className={classes.root}>
            <div className={classes.itemImage}>
                <FavoriteBorder style={{position: "relative", top: 5, left: 5, color: "#fff"}}/>
            </div>
            <Box className={classes.subtitleBar} p={1}>
                <Box>
                    <Typography variant='h6' style={{ textTransform: "uppercase", color: "#E69DC3" }}>
                        {`${props.region}  •  ${props.totalNum} BED`}
                    </Typography>
                </Box>
                <Box>
                    {occupiedGenerator(props.occuNum)}
                    {vacancyGenerator(props.totalNum - props.occuNum)}
                </Box>
            </Box>
            <Box height={72} mt={1} p={1}>
                <Typography variant="h5">{props.title}</Typography>
            </Box>
            <Box className={classes.subtitleBar} pl={1} pr={1} pb={4}>
                <Box>
                    <Typography style={{ fontSize: 14, }}>{`$${props.price} / room`}</Typography>
                </Box>
                <Box>
                    {props.isSublease === 1 && 
                        <img src="./house-img/sublease.png" alt="sublease" style={{width:76, height:22}}/>}
                </Box>
            </Box>
        </Paper>
    )
}