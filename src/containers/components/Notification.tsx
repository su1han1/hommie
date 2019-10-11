import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import { Snackbar, IconButton, SnackbarContent } from "@material-ui/core";
import { green, amber } from "@material-ui/core/colors";
import { CheckCircle, Warning, Error, Info, Close } from "@material-ui/icons"
import { connect } from "react-redux";
import { AppState, GlobalState, clearMsg } from '../../reducers'

const variantIcon = {
    success: CheckCircle,
    warning: Warning,
    error: Error,
    info: Info,
};

interface Props {
    clearMsg: typeof clearMsg
    global: GlobalState
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        success: {
            backgroundColor: green[600],
        },
        error: {
            backgroundColor: theme.palette.error.dark,
        },
        info: {
            backgroundColor: theme.palette.primary.main,
        },
        warning: {
            backgroundColor: amber[700],
        },
        icon: {
            fontSize: 20,
        },
        iconVariant: {
            opacity: 0.9,
            marginRight: theme.spacing(1),
        },
        content: {
            display: 'flex',
            alignItems: 'center',
        },
    }),
);

const Notification = (props: Props) => {
    const classes = useStyles();
    const { type, content, open } = props.global.msg;
    const Icon = variantIcon[type];

    function handleClose(event: React.SyntheticEvent | React.MouseEvent) {
        props.clearMsg();
    }

    return (
        <Snackbar
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            style={{top: 70}}
        >
            <SnackbarContent
                className={classes[type]}
                aria-describedby="client-snackbar"
                message={
                    <span id="client-snackbar" className={classes.content}>
                        <Icon className={clsx(classes.icon, classes.iconVariant)} />
                        {content}
                    </span>
                }
                action={[
                    <IconButton key="close" aria-label="close" color="inherit" onClick={handleClose}>
                        <Close className={classes.icon} />
                    </IconButton>,
                ]}
            />
        </Snackbar>
    )
}

const mapStateToProps = (state: AppState) => ({
    global: state.global
})

export default connect(
    mapStateToProps,
    { clearMsg }
)(Notification)