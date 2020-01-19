import React, { Component } from 'react';
import WeatherIcons from 'react-weathericons';
const WeatherExtraInfo = ({humididty,wind}) =>{

    // template script example
    return (<div>
    <span>{`${humididty} %`}</span>
    <WeatherIcons name="cloud" size="2x" />
    <br/>
    <span>{`${wind} %`}</span>
    </div>);
}




export default WeatherExtraInfo;
