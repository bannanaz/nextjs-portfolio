import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import axios from "axios";

const WeatherURL =
  "https://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=4a7f93ba709b9f6af319b9065bd8f12e&units=metric";
const IconURL = "https://openweathermap.org/img/wn/";

const StyledDiv = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;

  p {
    margin: 0px;
    font-size: 1.2em;
    color: white;
  }
`;

function Weather() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const { data: response } = await axios.get(WeatherURL);
      setData(response);
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledDiv>
      {data ? (
        <Image
          src={IconURL + data.weather[0].icon + "@2x.png"}
          alt="Current weather in Stockholm"
          width={50}
          height={50}
        />
      ) : (
        ""
      )}
      <p>{data ? data.main.temp.toFixed(1) + "°C in Stockholm" : ""}</p>
    </StyledDiv>
  );
}

export default Weather;
