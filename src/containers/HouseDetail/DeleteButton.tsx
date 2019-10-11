import React from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    deleteButton: {
        backgroundColor: '#ff4747',
        color: '#fafafa',
        '&:hover': {
            backgroundColor: '#e63939'
        }
    }
})

interface Props {
    handleDelete: () => void
}

export default (props: Props) => {
    const classes = useStyles()

    const [open, setOpen] = React.useState(false)
    const handleClick = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div style={{marginTop: 40}}>
            <Button variant='contained' onClick={handleClick} className={classes.deleteButton}>DELETE THIS POST</Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle style={{ color: '#ff4747', fontSize: 20}}>DELETE THIS POST</DialogTitle>
                <DialogContent>
                    Do you really want to delete this post?
                </DialogContent>
                <DialogActions>
                    <Button variant='outlined' onClick={handleClose} style={{fontSize:'0.5rem'}}>No</Button>
                    <Button variant='outlined' onClick={props.handleDelete} className={classes.deleteButton} style={{fontSize:'0.5rem'}}>Yes</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}