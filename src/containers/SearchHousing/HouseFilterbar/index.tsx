import React from 'react';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Box, Button } from "@material-ui/core"
import PlanFilter from './PlanFilter'
import PriceFilter from "./PriceFilter"


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            paddingLeft: 50,
            paddingRight: 50,
            paddingTop: 10,
            paddingBottom: 10,
        },
        selectors: {
            display: "flex",
            flexGrow: 1,
            "& > div": {
                marginRight: 10,
            }
        },
        listFilter: {
            marginTop: 7,
            width: 25,
            height: 25,
        }
    })
)

interface Props {
    values: {
        bed: number[]
        bath: number[]
        price: number[]
    }    
    handleChange: (prop: "bed" | "bath" | "price") => (event: React.ChangeEvent<{}>, newValue: number | number[]) => void
    handleSubmit: () => void
}

export default (props: Props) => {
    const classes = useStyles();

    let maxBedValue: number = 6,
        minBedValue: number = 1;
    let maxBathValue: number = 6,
        minBathValue: number = 1;

    let maxPriceValue: number = 2000,
        minPriceValue: number = 0;
        
    return (
        <div className={classes.root}>
            <Box className={classes.selectors}>
                <PlanFilter 
                    maxBedValue={maxBedValue} minBedValue={minBedValue} bedValue={props.values.bed} bedOnChange={props.handleChange('bed')}
                    maxBathValue={maxBathValue} minBathValue={minBathValue} bathValue={props.values.bath} bathOnChange={props.handleChange('bath')}
                />
                <PriceFilter maxPriceValue={maxPriceValue} minPriceValue={minPriceValue} priceValue={props.values.price} priceOnChange={props.handleChange('price')} />
                <Button variant='outlined' color='primary' onClick={props.handleSubmit}>Search</Button>
            </Box>
            <Box mr={1}><img className={classes.listFilter} src="./filter_list_2.png" alt="with_map"/></Box>
            <Box><img className={classes.listFilter} src="./filter_list_1.png" alt="without_map"/></Box>
        </div>
    )
}