import React from 'react';
const http = require('http');
import { browserHistory} from 'react-router';
import axios from 'axios';

class SignupForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email : '',
            phonenumber : '',
            address: '',
            city:'',
            pincode:'',
            password : '',
            confirmpassword : ''
        }

        this.onChange =this.onChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    onChange(e){
        this.setState({ [e.target.name] : e.target.value });
    }


    handleClick(e) {
        e.preventDefault();

         /* validation */
        if(this.state.username == '')
            alert('Enter valid username');

        else if (this.state.email == '' )
            alert('Enter email');

        else if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)))
            alert('Enter valid email');

        else if (this.state.phonenumber == '' )
            alert('Enter phone number');

       else if (!(/[2-9]{2}\d{8}/.test(this.state.phonenumber)))
           alert ('Enter valid phone number');

        else if (this.state.address == '' )
            alert('Enter address');

        else if (this.state.city == '' )
            alert('Enter city');

        else if (this.state.pincode == '' )
            alert('Enter pincode');

        else if (this.state.password == '' || this.state.confirmpassword == '')
            alert('Enter valid password');

        else if (this.state.password != this.state.confirmpassword)
            alert('Password mismatch');

        else {

            /* post request for calling signup method */
            axios.post('http://localhost:3000/api/signup', {
                username: this.state.username,
                email : this.state.email,
                phonenumber : this.state.phonenumber,
                address : this.state.address,
                city : this.state.city,
                pincode : this.state.pincode,
                password : this.state.password,
                resetPasswordToken : '',
                resetPasswordExpires : ''
            })
                .then(response => {
                    browserHistory.push('/login');
                })

                .catch(err => {
                    alert('Error in adding data. Please try again later');
                });

        }

    }

    render() {

        return (

           <form >

                <h2>Join US!!</h2>

               <div className= "form-group">

                   <label className= "control-label">Username</label>
                   <input value={this.state.username} onChange={this.onChange }
                       type="text"
                       name= "username"
                       className = "form-control" />

               </div>

               <div className= "form-group">
                   <label className= "control-label">Email</label>
                   <input value={this.state.email} onChange={this.onChange }
                          type="text"
                          name= "email"
                          className = "form-control" />
               </div>

               <div className= "form-group">

                   <label className= "control-label">Phone Number</label>
                   <input value={this.state.phonenumber} onChange={this.onChange }
                          type="text"
                          name= "phonenumber"
                          className = "form-control" />

               </div>

               <div className= "form-group">

                   <label className= "control-label">Address</label>
                   <input value={this.state.address} onChange={this.onChange }
                          type="text"
                          name= "address"
                          className = "form-control" />

               </div>

               <div className= "form-group">

                   <label className= "control-label">City</label>
                   <input value={this.state.city} onChange={this.onChange }
                          type="text"
                          name= "city"
                          className = "form-control" />

               </div>

               <div className= "form-group">

                   <label className= "control-label">Pincode</label>
                   <input value={this.state.pincode} onChange={this.onChange }
                          type="text"
                          name= "pincode"
                          className = "form-control" />

               </div>


               <div className= "form-group">

                   <label className= "control-label">Password</label>
                   <input value={this.state.password} onChange={this.onChange }
                          type="password"
                          name= "password"
                          className = "form-control" />

               </div>

               <div className= "form-group">

                   <label className= "control-label">Confirm Password</label>
                   <input value={this.state.confirmpassword} onChange={this.onChange }
                          type="password"
                          name= "confirmpassword"
                          className = "form-control" />

               </div>


               <div className= "form-group">

                   <button className= "btn btn-primary btn-lg" onClick={this.handleClick}>Sign Up</button>

               </div>

           </form>

        );

    }

}

export default SignupForm;