import React from 'react';
import ChartForm from './ChartForm';
import Navigation from '../Navigation';

class ChartPage extends React.Component {

    render(){

        return(

            <div className= "container">
                <Navigation/>
                <ChartForm />
            </div>

        );

    }

}

export default ChartPage;