import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { InputAdornment, IconButton, TextField, Button, Link } from '@material-ui/core'
import AvatarUploader from './AvatarUploader'
import { Link as RouterLink } from 'react-router-dom'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { connect } from 'react-redux'
import { AppState, UserState, User, signUp } from '../../reducers'

interface Props {
    user: UserState
    signUp: typeof signUp
}

interface localState {
    confirmPassword: string,
    showPassword: boolean,
    isValid: boolean,
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '70%',
            paddingTop: 65,
            paddingBottom: 65,
        },
        inputArea: {
            display: 'block',
            width: '100%',
            marginBottom: 10,
            '& > div': {
                width: '100%',
            },
            '& > label': {
                color: 'rgba(0, 0, 0, 0.42)'
            },
        },
        signUp: {
            display: 'inline-block',
            marginLeft: 10,
            fontSize: 13,
        }
    })
)

const SignUpForm = (props: Props) => {
    const classes = useStyles()
    const [user, setUser] = React.useState(props.user.user);
    const [local, setLocal] = React.useState<localState>({
        confirmPassword: '',
        showPassword: false,
        isValid: true
    })
    const handleUserChange = (prop: keyof User) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [prop]: event.target.value });
    };
    const handleLocalChange = (prop: keyof localState) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocal({ ...local, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setLocal({ ...local, showPassword: !local.showPassword });
    };
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleValidatePassword = () => {
        user.password === local.confirmPassword ?
            setLocal({ ...local, isValid: true }) : setLocal({ ...local, isValid: false })
    }
    const setAvatar = (newAvatar: string) => {
        setUser({ ...user, avatar: newAvatar })
    }
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        if (local.isValid) props.signUp(user)
    }

    return (
        <form className={classes.root} onSubmit={handleSubmit}>
            <AvatarUploader 
                avatar={user.avatar}
                setAvatar={setAvatar}
            />
            <TextField
                className={classes.inputArea}
                id="email"
                label='Email Address'
                type='email'
                value={user.email}
                onChange={handleUserChange('email')}
                required
            />
            <TextField
                className={classes.inputArea}
                id="username"
                label='First Name & Last Name'
                type='text'
                value={user.username}
                onChange={handleUserChange('username')}
                required
            />
            <TextField
                className={classes.inputArea}
                id="password"
                label='Password'
                type={local.showPassword ? 'text' : 'password'}
                value={user.password}
                onChange={handleUserChange('password')}
                onKeyUp={handleValidatePassword}
                required
                inputProps={{ minLength: 8 }}
            />
            <TextField
                className={classes.inputArea}
                id="confirm-password"
                label='Confirm'
                type={local.showPassword ? 'text' : 'password'}
                value={local.confirmPassword}
                onChange={handleLocalChange('confirmPassword')}
                onKeyUp={handleValidatePassword}
                error={!local.isValid}
                helperText='Please check your password again.'
                InputProps={{
                    endAdornment:
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {local.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                }}
                required
            />
            <Button
                variant='contained'
                color='primary'
                type='submit'
                style={{ color: '#fff', marginTop: 20 }}
            >
                Sign Up
            </Button>
            <span className={classes.signUp}>Already have an account? Go to <Link component={RouterLink} to='/sign-in'>Sign in</Link></span>
        </form>
    )
}

const mapStateToProps = (state: AppState) => ({
    user: state.user
})

export default connect(
    mapStateToProps,
    { signUp }
)(SignUpForm)