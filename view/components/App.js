import React from 'react';
import common from '../../common.css';

export default class App extends React.Component  {

    render(){

        return (

            <div>

                <h1 align="center" > Welcome to the application Signal Strength!</h1>

            <div className = "container ">

                {this.props.children}

            </div>

            </div>

        );

    }

}

