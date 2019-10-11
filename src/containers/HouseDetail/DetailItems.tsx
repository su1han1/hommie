import React from 'react'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Typography, Box } from '@material-ui/core'
import slug from 'slug'

interface Props {
    itemTitle: string,
    items: string[],
    totalRoom?: number,
    totalBath?: number,
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: 40,
        },
        itemsBlock: {
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
        },
        item: {
            width: '50%',
            '& img': {
                width: 25,
                height: 25,
            }
        },
    })
)

export default (props: Props) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Typography variant='h4'>{props.itemTitle}</Typography>
            <Box className={classes.itemsBlock} mt={1}>
                {props.itemTitle === 'Floor Plan' && 
                    <Box className={classes.item} mb={1}>
                        <img src="/house-detail-icons/bedroom.png" alt="bedroom"/>
                        <Typography>{props.totalRoom === 1 ? '1 bedroom' : `${props.totalRoom} bedrooms`}</Typography>
                    </Box>
                }
                {props.itemTitle === 'Floor Plan' && 
                    <Box className={classes.item}>
                        <img src="/house-detail-icons/bathroom.png" alt="bathroom"/>
                        <Typography>{props.totalBath === 1 ? '1 bathroom' : `${props.totalBath} bathrooms`}</Typography>
                    </Box>
                }
                {props.items.map((item, index) => (
                    <Box className={classes.item} key={index}>
                        <img src={`/house-detail-icons/${slug(item, {lower: true})}.png`} alt={item} />
                        <Typography>{item}</Typography>
                    </Box>
                ))}
            </Box>
        </div>
    )
}