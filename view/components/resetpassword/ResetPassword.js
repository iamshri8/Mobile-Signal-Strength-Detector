import React from 'react';
import { browserHistory} from 'react-router';
import axios from 'axios';


class ResetPassword extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            newpassword : '',
            confirmpassword: ''

        }

        this.onChange =this.onChange.bind(this);
        this.handleClick =this.handleClick.bind(this);
    }

    onChange(e){

        this.setState({ [e.target.name] : e.target.value });
    }

    handleClick(e){
        e.preventDefault();

       /*  validate password  */
    if (this.state.newpassword == '' || this.state.confirmpassword == '')
            alert('enter valid password');

            /* check if passwords match */
        else if (this.state.newpassword != this.state.confirmpassword)
            alert('password mismatch');

        else {

            /*  post request for calling resetpassword method  */
            axios.post('http://localhost:3000/api/resetpassword', {
                resetPasswordToken : window.location.search.split('=')[1],
                newpassword : this.state.newpassword
            }).then( response => {

                alert('Password has been changed successfully');
                browserHistory.push('/login');
                }).catch(function (err) {
                    alert('OOPS! Retry again');
            });

       }

    }

    render(){
        return(

            <form>


                <div className= "form-group">

                    <label className= "control-label">New Password</label>
                    <input value={this.state.newpassword} onChange={this.onChange }
                           type="password"
                           name= "newpassword"
                           className = "form-control"/>

                </div>

                <div className= "form-group">

                    <label className= "control-label">Confirm Password</label>
                    <input value={this.state.confirmpassword} onChange={this.onChange }
                           type="password"
                           name= "confirmpassword"
                           className = "form-control"/>

                </div>


                <div className= "form-group">
                    <button className= "btn btn-primary btn-lg" onClick={this.handleClick}>Update Password</button>
                </div>

            </form>

        );

    }

}

export default ResetPassword;