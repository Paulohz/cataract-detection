import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './Login';
import ForgotPassword from './ForgotPassword';
import SignUp from './SignUp';
import Terms from './Terms';
import UploadImg from './UploadImg';

import About from './About';
import HowToUse from './HowToUse';
import TermsOfUse from './TermsOfUse';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/forgotpassword" component={ForgotPassword} />
            <Route path="/terms" component={Terms} />
            <Route path="/uploadimg" component={UploadImg} />

            <Route path="/about" component={About} />
            <Route path="/howtouse" component={HowToUse} />
            <Route path="/termsofuse" component={TermsOfUse} />
        </BrowserRouter>
    )
}

export default Routes;