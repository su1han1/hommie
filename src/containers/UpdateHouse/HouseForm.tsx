import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { TextField, Typography, Box, Select, FormControl, FormControlLabel, Checkbox, Button } from '@material-ui/core'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { FormatListNumbered, PeopleAlt, Hotel, House, CheckBoxOutlineBlank } from '@material-ui/icons'
import ImageUploader from './ImageUploader'
import { connect } from 'react-redux'
import { AppState, UserState, setMsg, updateHouse, HouseItem } from '../../reducers'
import { RouteComponentProps, withRouter } from 'react-router'

interface Props extends RouteComponentProps<{id: string}> {
    initHouse: HouseItem
    user: UserState
    updateHouse: typeof updateHouse
    setMsg: typeof setMsg
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        icon: {
            position: 'relative',
            top: 6,
            marginRight: 7,
        },
        title: {
            width: '60%',
        },
        selector: {
            width: '40%',
            '& select': {
                padding: '13.5px 14px',
            },
        },
        section: {
            marginBottom: 50,
        },
        sectionTitle: {
            marginBottom: 15,
        },
        checkBox: {
            color: '#4f4f4f',
        },
    })
)

const HouseForm = (props: Props) => {
    const classes = useStyles()
    React.useEffect(() => {
        console.log(props.user.user._id)
        console.log( props.initHouse.userID)
        if (props.user.user._id !== props.initHouse.userID) {
            props.history.push(`/house/detail/${props.match.params.id}`)
            props.setMsg('warning', 'You are not allow to edit this post.')
        }
    })

    const [house, setHouse] = React.useState(props.initHouse)
    const handleInputChange = (fieldName: keyof HouseItem) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setHouse({ ...house, [fieldName]: event.target.value })
    }
    const handleSelectChange = (fieldName: keyof HouseItem) => (event: React.ChangeEvent<{ value: unknown }>) => {
        setHouse({ ...house, [fieldName]: event.target.value })
    }
    const handleDateChange = (fieldName: keyof HouseItem) => (date: Date | null) => {
        setHouse({ ...house, [fieldName]: date })
    }
    const handleCheckChange = (fieldName: keyof HouseItem) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setHouse({ ...house, [fieldName]: event.target.checked })
    }
    const setImages = (newImages: string[]) => {
        setHouse({...house, images: newImages})
    }
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        props.updateHouse(house)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box className={classes.section}>
                <Typography className={classes.sectionTitle} variant='body2'>Title of your post</Typography>
                <TextField
                    id="house-title"
                    className={classes.title}
                    value={house.title}
                    onChange={handleInputChange('title')}
                    required
                />
            </Box>
            <Box className={classes.section}>
                <Typography className={classes.sectionTitle} variant='body2'>What is your situation?</Typography>
                <FormControl variant='outlined' style={{width:'100%'}}>
                    <Select
                        native
                        value={house.isSublease}
                        onChange={handleSelectChange('isSublease')}
                        className={classes.selector}
                        inputProps={{
                            name: 'isSublease',
                            id: 'outlined-isSublease-native-simple',
                        }}
                    >
                        <option value={1}>I want to sublease</option>
                        <option value={0}>I want to lease</option>
                    </Select>
                </FormControl>
            </Box>
            <Box className={classes.section} style={{ display: 'flex' }}>
                <div style={{marginRight: 50}}>
                    <Typography className={classes.sectionTitle} variant='body2'><Hotel className={classes.icon} />How many bedrooms in your unit?</Typography>
                    <FormControl variant='outlined' style={{ width: '100%' }}>
                        <Select
                            native
                            value={house.totalRoom}
                            onChange={handleSelectChange('totalRoom')}
                            className={classes.selector}
                            style={{ width: '100%' }}
                            inputProps={{
                                name: 'totalRoom',
                                id: 'outlined-totalRoom-native-simple',
                            }}
                        >
                            <option value={1}>1 room</option>
                            <option value={2}>2 rooms</option>
                            <option value={3}>3 rooms</option>
                            <option value={4}>4 rooms</option>
                            <option value={5}>5 rooms</option>
                            <option value={6}>6 rooms</option>
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <Typography className={classes.sectionTitle} variant='body2'><Hotel className={classes.icon} />How many bathrooms in your unit?</Typography>
                    <FormControl variant='outlined' style={{ width: '100%' }}>
                        <Select
                            native
                            value={house.totalBath}
                            onChange={handleSelectChange('totalBath')}
                            className={classes.selector}
                            style={{ width: '100%' }}
                            inputProps={{
                                name: 'totalBath',
                                id: 'outlined-totalBath-native-simple',
                            }}
                        >
                            <option value={1}>1 bathroom</option>
                            <option value={2}>2 bathrooms</option>
                            <option value={3}>3 bathrooms</option>
                            <option value={4}>4 bathrooms</option>
                            <option value={5}>5 bathrooms</option>
                            <option value={6}>6 bathrooms</option>
                        </Select>
                    </FormControl>
                </div>
            </Box>
            <Box className={classes.section}>
                <Typography className={classes.sectionTitle} variant='body2'><FormatListNumbered className={classes.icon} />How many room you want to lease?</Typography>
                <FormControl variant='outlined' style={{width:'100%'}}>
                    <Select
                        native
                        value={house.leaseRoom}
                        onChange={handleSelectChange('leaseRoom')}
                        className={classes.selector}
                        inputProps={{
                            name: 'leaseRoom',
                            id: 'outlined-leaseRoom-native-simple',
                        }}
                    >
                        <option value={1}>1 room</option>
                        <option value={2}>2 rooms</option>
                        <option value={3}>3 rooms</option>
                        <option value={4}>4 rooms</option>
                        <option value={5}>5 rooms</option>
                        <option value={6}>6 rooms</option>
                    </Select>
                </FormControl>
            </Box>
            <Box className={classes.section}>
                <Typography className={classes.sectionTitle} variant='body2'><PeopleAlt className={classes.icon} />How many roommate do you have?</Typography>
                <FormControl variant='outlined' style={{width:'100%'}}>
                    <Select
                        native
                        value={house.occuRoom}
                        onChange={handleSelectChange('occuRoom')}
                        className={classes.selector}
                        inputProps={{
                            name: 'occuRoom',
                            id: 'outlined-occuRoom-native-simple',
                        }}
                    >
                        <option value={0}>no roommate</option>
                        <option value={1}>1 roommate</option>
                        <option value={2}>2 roommates</option>
                        <option value={3}>3 roommates</option>
                        <option value={4}>4 roommates</option>
                        <option value={5}>5 roommates</option>
                        <option value={6}>6 roommates</option>
                    </Select>
                </FormControl>
            </Box>
            <Box className={classes.section}>
                <Typography className={classes.sectionTitle} variant='body2'><House className={classes.icon} />What is the lease duration?</Typography>
                <div style={{display: 'flex'}}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            style={{marginRight: 30}}
                            id="lease-start-date-picker"
                            label={<span style={{ color: '#4f4f4f'}}>Start on</span>}
                            value={house.leaseStart}
                            onChange={handleDateChange('leaseStart')}
                            KeyboardButtonProps={{
                                'aria-label': 'change start date',
                            }}
                        />
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            style={{ marginRight: 30 }}
                            id="lease-end-date-picker"
                            label={<span style={{ color: '#4f4f4f' }}>End on</span>}
                            value={house.leaseEnd}
                            onChange={handleDateChange('leaseEnd')}
                            KeyboardButtonProps={{
                                'aria-label': 'change end date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </div>
            </Box>
            <Box className={classes.section}>
                <Typography className={classes.sectionTitle} variant='body2'>Region</Typography>
                <TextField
                    required
                    id="house-region"
                    className={classes.title}
                    value={house.region}
                    onChange={handleInputChange('region')}
                />
            </Box>
            <Box className={classes.section}>
                <Typography className={classes.sectionTitle} variant='body2'>Address</Typography>
                <TextField
                    required
                    id="house-address"
                    className={classes.title}
                    value={house.address}
                    onChange={handleInputChange('address')}
                />
            </Box>
            <Box className={classes.section} style={{display:'flex'}}>
                <div style={{marginRight: 30}}>
                    <Typography className={classes.sectionTitle} variant='body2'>Rent</Typography>
                    <TextField
                        required
                        id="house-price"
                        type='number'
                        style={{width:250}}
                        value={house.price}
                        onChange={handleInputChange('price')}
                    />
                </div>
                <div>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={house.isNegotiatable}
                                onChange={handleCheckChange('isNegotiatable')}
                                value="isNegotiatable"
                                color="primary"
                                icon={<CheckBoxOutlineBlank className={classes.checkBox} />}
                            />
                        }
                        label="Price negotiatable?"
                    />
                    <br/>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={house.utilityIncluded}
                                onChange={handleCheckChange('utilityIncluded')}
                                value="utilityIncluded"
                                color="primary"
                                icon={<CheckBoxOutlineBlank className={classes.checkBox} />}
                            />
                        }
                        label="Utility included?"
                    />
                </div>
            </Box>
            <Box className={classes.section}>
                <Typography className={classes.sectionTitle} variant='body2'>Upload your house pictures:</Typography>
                <ImageUploader images={house.images} setImages={setImages} imageNum={5} imageRatio={16/9}/>
            </Box>
            <Box className={classes.section}>
                <Typography className={classes.sectionTitle} variant='body2'>Description of your place</Typography>
                <TextField
                    required
                    id="house-description"
                    className={classes.title}
                    variant='outlined'
                    value={house.description}
                    onChange={handleInputChange('description')}
                    multiline
                    rows='7'
                />
            </Box>
            <Button variant='contained' color='primary' type='submit' style={{ color: '#fff' }}>Submit</Button>
        </form>
    )
}

const mapStateToProps = (state: AppState) => ({
    user: state.user
})

export default withRouter(connect(
    mapStateToProps,
    { updateHouse, setMsg }
)(HouseForm))