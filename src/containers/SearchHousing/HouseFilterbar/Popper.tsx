import React from 'react';
import { Fade } from '@material-ui/core';
import Popper, {PopperProps} from '@material-ui/core/Popper'

type onClickAway = (event: React.MouseEvent<Document, MouseEvent>) => void;

interface Props extends PopperProps {
    onClose: onClickAway,
}

export default (props: PopperProps) => {
    return (
        <Popper open={props.open} anchorEl={props.anchorEl} placement="bottom-start" transition>
            {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                    {props.children}
                </Fade>
            )}
        </Popper>
    )
}