import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Stepper, Button, Step, StepLabel } from '@material-ui/core'

interface Props {
    activePage: number,
    onNext: React.FormEventHandler,
    onPrevious: React.FormEventHandler,
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {

        },
        buttons: {
            display: 'flex',
            justifyContent: 'center',
            '& button': {
                color: '#fff',
            },
        },
        previousButton: {
            marginRight: 100,
        },
        stepLabel: {
            '& text': {
                fill: '#fff',
            }
            
        },
    })
)

export default (props: Props) => {
    const classes = useStyles()

    return (
        <React.Fragment>
            <div className={classes.buttons}>
                {props.activePage !== 0 && 
                    <Button variant='contained' color='primary' onClick={props.onPrevious} className={classes.previousButton}>Previous</Button>
                }
                {props.activePage !== 2 &&
                    <Button variant='contained' color='primary' onClick={props.onNext}>Next</Button>
                }
                {props.activePage === 2 &&
                    <Button variant='contained' color='primary'>Submit</Button>
                }
            </div>
            <div>
                <Stepper activeStep={props.activePage} alternativeLabel>
                    <Step><StepLabel className={classes.stepLabel}>&nbsp;</StepLabel></Step>
                    <Step><StepLabel className={classes.stepLabel}>&nbsp;</StepLabel></Step>
                    <Step><StepLabel className={classes.stepLabel}>&nbsp;</StepLabel></Step>
                </Stepper>
            </div>
        </React.Fragment>
    )
}