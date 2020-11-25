import React from 'react';
import Navigation from '../Navigation';

class HomePage extends React.Component {

    render(){

        return(

            <div className= "container">

                <Navigation />
                <div className= "jumbotron">
                    <h2 align="center">Welcome to the application</h2>
                </div>

            </div>

        );

    }

}

export default HomePage;