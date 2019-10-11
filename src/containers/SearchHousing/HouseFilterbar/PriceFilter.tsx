import React from 'react';
import { Button, Slider, Paper, Box } from '@material-ui/core';
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
        },
        color: "#1FB39C",
    },
})(Slider);

type sliderOnChange = (event: React.ChangeEvent<{}>, value: number | number[]) => void | undefined;

interface Props {
    maxPriceValue: number,
    minPriceValue: number,
    priceValue: number[],
    priceOnChange: sliderOnChange,
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
                {`$${props.priceValue[0]} - ${props.priceValue[1]}`} <img src="./arrow-down.png" alt="arrow-down" />
            </Button>
            <CustomPopper open={open} anchorEl={anchorRef.current}>
                <Paper style={{ width: 300 }}>
                    <ClickAwayListener onClickAway={handleClose}>
                        <Box pt={3} pl={2} pr={2}>
                            <PlanSlider
                                value={props.priceValue}
                                aria-labelledby="price-slider"
                                valueLabelDisplay="on"
                                min={props.minPriceValue}
                                max={props.maxPriceValue}
                                onChange={props.priceOnChange}
                            />
                        </Box>
                    </ClickAwayListener >
                </Paper>
            </CustomPopper>
        </div>
    )
}