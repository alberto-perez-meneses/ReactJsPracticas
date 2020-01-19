import React from 'react';
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";
const WeatherData = ()=>(
    <div>
    <WeatherTemperature/>
    <WeatherExtraInfo humididty={80} wind={"10 ms/s"}/>
    </div>
);

export default WeatherData;