import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import axios from "axios";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function Weather() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showCityButton, setShowCityButton] = useState(true);
  const [showSelect, setShowSelect] = useState(false);

  const WeatherURL =
    "https://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=4a7f93ba709b9f6af319b9065bd8f12e&units=metric";
  const IconURL = "https://openweathermap.org/img/wn/";

  const getData = async () => {
    setLoading(true);
    try {
      const { data: response } = await axios.get(WeatherURL);
      setData(response);
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = () => {
    setShowCityButton(!showCityButton);
    setShowSelect(!showSelect);
  };
  const handleClickSelect = () => {
    setShowSelect(!showSelect);
    setShowCityButton(!showCityButton);
    console.log("Select city clicked");
  };

  const handleChange = () => {
    console.log("change!");
  };

  const city = ["Malmö", "Göteborg"];

  return (
    <>
      <StyledWrapper>
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
          <Typography variant="h4" color="contrast">
            {data ? data.main.temp.toFixed(1) + "°C in Stockholm" : ""}
          </Typography>
        </StyledDiv>
        {showCityButton && (
          <Button
            size="small"
            color="contrast"
            sx={{
              fontWeight: 500,
              mt: "-5px",
              mr: "-5px",
              fontSize: "14px",
            }}
            onClick={handleClick}
          >
            EDIT CITY
          </Button>
        )}
        {showSelect && (
          <>
            <TextField
              variant="outlined"
              margin="none"
              size="small"
              inputProps={{
                maxLength: 50,
              }}
              fullWidth
              sx={{
                width: "223px",
                mt: "6px",
                mb: "12px",
                background: "#FFFFFF",
              }}
            ></TextField>
            <Button
              size="small"
              color="contrast"
              sx={{
                fontWeight: 500,
                mr: "-5px",
                fontSize: "14px",
              }}
              onClick={handleClickSelect}
            >
              SELECT NEW CITY
            </Button>
          </>
        )}
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;

  p {
    margin: 0px;
    color: white;
  }
`;

export default Weather;
