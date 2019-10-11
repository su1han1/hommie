import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { InputAdornment, IconButton, TextField, Button, Link } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { connect } from 'react-redux'
import { signIn } from '../../reducers/user/actions'

interface Props {
    signIn: typeof signIn
}

interface State {
    email: string,
    password: string,
    showPassword: boolean,
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '70%',
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
            fontSize: 14,
        }
    })
)

const SignInForm = (props: Props) => {
    const classes = useStyles()
    const [values, setValues] = React.useState<State>({
        email: '',
        password: '',
        showPassword: false,
    });
    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        props.signIn(values.email, values.password)
    }
    
    return(
        <form className={classes.root} onSubmit={handleSubmit}>
            <TextField
                className={classes.inputArea}
                id="email"
                label='Email Address'
                type='email'
                value={values.email}
                onChange={handleChange('email')}
                required
            />
            <TextField
                className={classes.inputArea}
                id="password"
                label='Password'
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                InputProps={{
                    endAdornment: 
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                }}
                required
            />
            <Button
                variant='contained' 
                color='primary' 
                type='submit' 
                style={{ color: '#fff', marginTop: 20, }}
            >
                Sign In
            </Button>
            <span className={classes.signUp}>Don't have an account? <Link component={RouterLink} to='/sign-up'>Sign up</Link> now.</span>
        </form>
    )
}

export default connect(
    null,
    { signIn }
)(SignInForm)