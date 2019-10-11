import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
//@ts-ignore
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'
import { Modal, Backdrop, Button, Paper, Typography, Box } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        uploadedGallery: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: 25,
        },
        uploadButton: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 80,
            width: 80,
            cursor: 'pointer',
            backgroundColor: '#ababab',
            borderRadius: '50%',
            '& > img': {
                display: 'block',
                height: 60,
            }
        },
        deleteButton: {
            visibility: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // transition: 'all 0.3s ease',
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            '& img': {
                height: '60%'
            }
        },
        uploadedImage: {
            cursor: 'pointer',
            height: 80,
            width: 'auto',
            borderRadius: '50%',
            overflow: 'hidden', 
            position: 'relative',
            '& > img': {
                height: '100%',
            },
            '&:hover > div': {
                visibility: 'visible'
            }
        },
        modal: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        modalPaper: {
            width: '60%',
        }
    })
)

interface Props {
    avatar: string
    setAvatar: (newAvatar: string) => void
}

export default (props: Props) => {
    const classes = useStyles()

    let cropperRef: any
    const uplaodRef = React.useRef<HTMLInputElement>(null)
    const [open, setOpen] = React.useState(false)
    const [cropperSrc, setCropperSrc] = React.useState('')
    const handleUploadButton = () => {
        if (uplaodRef.current) uplaodRef.current.click()
    }
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        if (event.target.files && event.target.files.length !== 0) {
            setOpen(true)
            const reader = new FileReader()
            reader.readAsDataURL(event.target.files[0])
            reader.onload = () => {
                if (reader.result) {
                    setCropperSrc(reader.result.toString())
                }
            }
        }
    }
    const handleClose = () => {
        setOpen(false)
    }
    const handleCrop = () => {
        if (typeof cropperRef.getCroppedCanvas() !== 'undefined' && typeof cropperRef.getCroppedCanvas() !== null) {
            props.setAvatar(cropperRef.getCroppedCanvas().toDataURL())
            setCropperSrc('')
        }
        setOpen(false)
    }
    const handleDelete = () => {
        props.setAvatar('')
    }

    return (
        <React.Fragment>
            <div className={classes.uploadedGallery}>
                {props.avatar !== '' &&
                    <div className={classes.uploadedImage}>
                        <div className={classes.deleteButton} onClick={handleDelete}><img src="/delete.png" alt="Delete" /></div>
                        <img src={props.avatar} alt="Avatar" />
                    </div>
                }
                {props.avatar === '' &&
                    <div className={classes.uploadButton}>
                        <img src='/plus.png' alt='upload button'
                            onClick={handleUploadButton}
                        />
                    </div>
                }
                {props.avatar === '' &&
                    <Typography><Box ml={2}>Select your avatar</Box></Typography>
                }
            </div>
            <input type="file" ref={uplaodRef} onChange={handleFileChange}
                accept='image/*' style={{ display: 'none' }}
            />
            <Modal
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Paper className={classes.modalPaper}>
                    <Cropper
                        viewMode={1}
                        aspectRatio={1}
                        style={{ height: 400, width: '100%' }}
                        src={cropperSrc}
                        ref={(cropper: any) => { cropperRef = cropper }}
                    />
                    <Button onClick={handleCrop}>Submit</Button>
                </Paper>
            </Modal>
        </React.Fragment>
    )
}