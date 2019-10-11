import React from 'react';
import { Button, Typography, Slider, Paper, Box } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"
import CustomPopper from './Popper';

const PlanSlider = withStyles({
    thumb: {
        '&:focus,&:hover,&$active': {
            boxShadow: "0px 0px 0px 8px rgba(31, 179, 156, 0.16)",
        },
    },
    valueLabel: {
        left: 'calc(-50% - 4px)',
        top: -22,
        '& *': {
            background: 'transparent',
            color: '#000',
        },
    },
    active: {},
})(Slider);

type sliderOnChange = (event: React.ChangeEvent<{}>, value: number | number[]) => void | undefined;

interface Props {
    maxBedValue: number,
    minBedValue: number,
    maxBathValue: number,
    minBathValue: number,
    bedValue: number[],
    bathValue: number[],
    bedOnChange: sliderOnChange,
    bathOnChange: sliderOnChange,
}

export default (props: Props) => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    function handleToggle() {
        setOpen(prevOpen => !prevOpen);
    }

    function handleClose(event: React.MouseEvent<EventTarget>) {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }
        setOpen(false);
    }

    return (
        
            <div>
                <Button
                    ref={anchorRef}
                    aria-controls="menu-list-grow"
                    aria-haspopup="true"
                    onClick={handleToggle}
                    variant="outlined"
                >
                    All Beds / Bathrooms <img src="./arrow-down.png" alt="arrow-down" />
                </Button>
                <CustomPopper open={open} anchorEl={anchorRef.current}>
                    <Paper style={{width:300}}>
                        <ClickAwayListener onClickAway={handleClose}>
                        <Box p={2}>
                            <Typography>
                                <Box mb={3}>Bedrooms:</Box>
                            </Typography>
                            <PlanSlider
                                value={props.bedValue}
                                aria-labelledby="bedrooms-slider"
                                valueLabelDisplay="on"
                                marks
                                min={props.minBedValue}
                                max={props.maxBedValue}
                                onChange={props.bedOnChange}
                            />
                            <Typography>
                                <Box mb={3}>Bathrooms:</Box>
                            </Typography>
                            <PlanSlider
                                value={props.bathValue}
                                aria-labelledby="bathrooms-slider"
                                valueLabelDisplay="on"
                                marks
                                min={props.minBathValue}
                                max={props.maxBathValue}
                                onChange={props.bedOnChange}
                            />
                        </Box>
                        </ClickAwayListener > 
                    </Paper>
                </CustomPopper>
        </div>
        
    )
}