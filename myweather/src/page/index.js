import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Container, Content, Result } from './styles';
import { WiThunderstorm, WiSleet, WiStormShowers, WiSnow, WiFog, WiDaySunny, WiDayFog } from 'react-icons/wi';

const Key = "fd6117bea6d6a4c122b2000f425f8db5";

export default function Main() {
  const [all, setAll] = useState([]);
  const [weather, setWeather] = useState([]);
  const [temp, setTemp] = useState([]);
  const [sys, setSys] = useState([]);
  const [icon, setIcon] = useState([]);

  async function handleSubmit(data) {
    const city = data.city;
    const country = data.country;
 
    const call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Key}`);

    const response = await call.json();

    const id = response.weather[0].id;
    console.log(response);

    console.log(id);

    setAll(response);
    setWeather(response.weather[0]);
    setTemp(response.main);
    setSys(response.sys);
    
    switch (true) {
      case id >=200 && id < 232:
        setIcon(<WiThunderstorm size="120px" color="#fff"/>);
      break;
      case id >= 300 && id <= 321:
        setIcon(<WiSleet size="120px" color="#fff"/>);
      break;
      case id >= 500 && id <= 521:
        setIcon(<WiStormShowers size="120px" color="#fff"/>);
      break;
      case id >= 600 && id <= 622:
        setIcon(<WiSnow size="120px" color="#fff"/>);
      break;
      case id >= 701 && id <= 781:
        setIcon(<WiFog size="120px" color="#fff"/>);
      break;
      case id === 800:
        setIcon(<WiDaySunny size="120px" color="#fff"/>);
      break;
      case id >= 801 && id <= 804:
        setIcon(<WiDayFog size="120px" color="#fff"/>);
      break;
      default:
        setIcon(<WiDayFog size="120px" color="#fff"/>);
    }
  }
  


  return (
    <>
      <Container>
        <h1>
          Weather
        </h1>
        <Content>
          <Form onSubmit={handleSubmit}>
            <Input name="city" type="text" placeholder="Enter your city" />
            <Input name="country" type="text" placeholder="Enter your country" />
            <button type="submit">Weather</button>
          </Form>
        </Content>
      </Container>

      <Result>
        { all.name ? (<h1>{all.name} - {sys.country}</h1>) : null }

        {icon}

        { temp.temp ? (<h1>{(Math.floor(temp.temp - 273.15))}&deg;</h1>) : null }
       
        { temp.temp_max && temp.temp_min ? (<h1>{(Math.floor(temp.temp_max - 273.15))}&deg; - {(Math.floor(temp.temp_min - 273.15))}&deg;</h1>) : null }
        
        { weather.main ? (<h1>{weather.main}</h1>) : null }
      </Result>

    </>
  );
}