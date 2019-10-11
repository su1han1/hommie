import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
//@ts-ignore
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'
import { Modal, Backdrop, Button, Paper } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        uploadedGallery: {
            display: 'flex',
            alignItems: 'center',
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
                height: '80%'
            }
        },
        uploadedImage: {
            cursor: 'pointer',
            height: 100,
            width: 'auto',
            marginRight: 30,
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
    images: string[]
    setImages: (newImages: string[]) => void
    imageNum: number
    imageRatio: number
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
            const newImages = props.images.concat(cropperRef.getCroppedCanvas().toDataURL())
            props.setImages(newImages)
            setCropperSrc('')
        }
        setOpen(false)
    }
    const handleDelete = (index: number) => () => {
        let newImages = [...props.images]
        newImages.splice(index,1)
        props.setImages(newImages)
    }

    return (
        <React.Fragment>
            <div className={classes.uploadedGallery}>
                {props.images.map((image, index) => (
                    <div className={classes.uploadedImage} key={index}>
                        <div className={classes.deleteButton} onClick={handleDelete(index)} id={index.toString()}><img src="/delete.png" alt="Delete"/></div>
                        <img src={image} alt="Uploaded House"/>
                    </div>
                ))}
                {props.images.length < props.imageNum &&
                    <img src='/upload.png' alt='upload button' style={{ height: 60, cursor: 'pointer' }}
                        onClick={handleUploadButton}
                    />
                }
            </div>
            <input type="file" ref={uplaodRef} onChange={handleFileChange}
                accept='image/*' style={{display: 'none'}}
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
                        aspectRatio={props.imageRatio} 
                        style={{ height: 400, width: '100%'}}
                        src={cropperSrc}
                        ref={(cropper: any) => { cropperRef = cropper}}
                    />
                    <Button onClick={handleCrop}>Submit</Button>
                </Paper>
            </Modal>
        </React.Fragment>
    )
}