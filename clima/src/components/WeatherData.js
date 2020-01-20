import React from 'react';
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";
import { SUNNY ,HOT,RAINY} from '../constants/weather';
const WeatherData = ()=>(
    <div>
    <WeatherTemperature name={HOT} temperameture={30}/>
    <WeatherExtraInfo humididty={80} wind={"10 ms/s"}/>
    </div>
);

export default WeatherData;