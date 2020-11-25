import React from 'react';
import { Link } from 'react-router';

export default () => {

    return(

    <nav className= "navbar navbar-default">

        <div className= "container-fluid">

                <div className= "navbar-header">
                <Link to= "/home" className ="navbar-brand">Home</Link>

            </div>

            <div className= "collapse navbar-collapse">

                <ul className= "nav navbar-nav navbar-right">

                    <li><Link to = "/profile">Profile</Link> </li>
                    <li><Link to = "/charts">Charts</Link> </li>
                    <li><Link to = "/login">Logout</Link> </li>

                </ul>

            </div>

        </div>

    </nav>
);
}