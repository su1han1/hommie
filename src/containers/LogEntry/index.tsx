import React from 'react'
import { RouteComponentProps } from "react-router-dom";
import Banner from './Banner'
import LogLayout from './LogLayout'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import { connect } from 'react-redux';

interface Props extends RouteComponentProps {
}

const LogEntry = (props: Props) => {
    const { path } = props.match

    return (
        <div>
            <Banner path={path} />
            <LogLayout>
                {path === '/sign-in' && <SignInForm/>}
                {path === '/sign-up' && <SignUpForm/>}
            </LogLayout>
        </div>
    )
}

export default connect(
    null,
    {  }
)(LogEntry)