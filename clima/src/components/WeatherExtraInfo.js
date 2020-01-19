import React, { Component } from 'react';

const WeatherExtraInfo = ({humididty,wind}) =>{

    // template script example
    return (<div>
    <span>{`${humididty} %`}</span>
    <br/>
    <span>{`${wind} %`}</span>
    </div>);
}




export default WeatherExtraInfo;
