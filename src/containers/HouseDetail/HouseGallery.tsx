import React from 'react'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Grid } from '@material-ui/core'

interface Props {
    images: string[],
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: 505,
        },
        mainImage: {
            height: '100%',
            width: '100%',
            '& img': {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
            },
            borderRight: '2px solid #4f4f4f',
        },
        smImages: {
            display: 'flex',
            flexWrap: 'wrap',
            height: "100%",
            '& > :first-child': {
                display: 'none',
            },
            '& > :last-child': {
                opacity: 0.4,
            },
        },
        smImage: {
            height: '50%',
            width: '50%',
            '& img': {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
            },
        },
    })
)

export default (props: Props) => {
    const classes = useStyles()
    
    const { images } = props
    let showImages: string[]
    images.length > 5 ?
        showImages = images.slice(0,5):
        showImages = images

    return (
        <div className={classes.root}>
            <Grid container style={{height: '100%',}}>
                <Grid item md={6}>
                    <div className={classes.mainImage}><img src={props.images[0]} alt="1" /></div> 
                </Grid>
                <Grid item md={6} className={classes.smImages}>
                    {showImages.map((image, index) => (
                        <div className={classes.smImage} key={index}><img src={image} alt={`House  ${index}`} /></div>
                    ))}
                </Grid>
            </Grid>
        </div>
    )
}