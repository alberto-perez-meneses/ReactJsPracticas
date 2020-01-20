import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from "prop-types";
const WeatherTemperature = ({temperameture,name}) => {
    return(
        <div><span> {`${temperameture} ºC`} </span>
        <WeatherIcons name={name} size="2x" />  
        </div>          
    );
}
    
WeatherTemperature.protoTypes={
    temperameture:PropTypes.number.isRequired,
    name:PropTypes.string.isRequired
};



export default WeatherTemperature;