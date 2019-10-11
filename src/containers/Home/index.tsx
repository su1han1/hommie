import React from 'react';
import Banner from './Banner';
import Features from './Features';
import { Box, Divider } from '@material-ui/core';
import Rate from './Rate';
import Instruction from './Instructions';
import Popular from './Popular';
import Footbar from "../components/Footbar"

export default () => {
    return (
        <React.Fragment>
            <Banner />
            <Box pl="50px" pr="50px">
                <Features/>
                <Rate/>
                <Divider style={{marginTop: 50, marginBottom: 50}}/>
                <Instruction/>
                <Divider style={{ marginTop: 50, marginBottom: 50 }}/>
                <Popular/>
            </Box>
            <Footbar />
        </React.Fragment>
    )
}