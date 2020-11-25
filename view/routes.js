import React from 'react';
import { Route , IndexRoute } from 'react-router';
import App from './components/App';
import Greetings from "./components/Greetings";
import SignupPage from "./components/signup/SignupPage";
import LoginPage from "./components/login/LoginPage";
import ChartPage from "./components/charts/ChartPage";
import HomePage from "./components/home/HomePage";
import ProfilePage from "./components/profile/ProfilePage";
import ForgotPassword from "./components/forgotpassword/ForgotPassword";
import ResetPassword from "./components/resetpassword/ResetPassword";
import ForgotPage from "./components/forgotpassword/ForgotPage";
import ResetPage from "./components/resetpassword/ResetPage";


export default (

    <Route path ='/' component= {App}>

           /* routes each directory to corresponding component */
        <IndexRoute component = {Greetings} />
        <Route path= 'signup' component={SignupPage}/>
        <Route path = 'login' component={LoginPage}/>
        <Route path = 'charts' component = {ChartPage}/>
        <Route path = 'home' component = {HomePage}/>
        <Route path = 'profile' component = {ProfilePage}/>
        <Route path = 'forgotpassword' component = {ForgotPage}/>
        <Route path = 'resetpassword' component = {ResetPage}/>

    </Route>

)