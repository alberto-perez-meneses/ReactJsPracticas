import React, { Component } from 'react';
import PropTypes from "prop-types";
const WeatherExtraInfo = ({humididty,wind}) =>{    
    // template script example
    return (<div>
    <span>{`${humididty} %`}</span>
    
    <br/>
    <span>{`${wind} %`}</span>
    </div>);
}

WeatherExtraInfo.prototypes={
    humididty:PropTypes.number.isRequired,
    wind:PropTypes.string.isRequired
}

export default WeatherExtraInfo;
