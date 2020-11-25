import React from 'react';
import axios from 'axios';
import { browserHistory} from 'react-router';

class ForgotPassword extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email : '',

        }

        this.onChange =this.onChange.bind(this);
        this.handleClick =this.handleClick.bind(this);
    }

    onChange(e){
        this.setState({ [e.target.name] : e.target.value });
    }

    handleClick(e){

        e.preventDefault();

        /* validation for empty email field */
        if(this.state.email == '')
            alert('enter email');

        /* validation for checking email id format */
        else if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)))
            alert('enter valid email');

        else {

            /* post request for calling forgot passoword method */
            axios.post('http://localhost:3000/api/forgotpassword', {
                email : this.state.email
            }).then(response => {

                alert('Reset Password mail has been sent!')
                browserHistory.push('/login');

            }).catch(err => {

                alert('Error in adding data. Please try again later');

            });

        }

    }

    render(){

        return(

            <form>

                <div className= "form-group">

                    <label className= "control-label">Email</label>
                    <input value={this.state.email} onChange={this.onChange }
                           type="text"
                           name= "email"
                           className = "form-control"/>

                </div>

                <div className= "form-group">
                    <button className= "btn btn-primary btn-lg" onClick={this.handleClick}>Reset Password</button>
                </div>

            </form>

        );

    }

}

export default ForgotPassword;