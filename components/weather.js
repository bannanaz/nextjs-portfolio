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
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import CloseIcon from "@mui/icons-material/Close";

function Weather() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("Stockholm");
  const [unit, setUnit] = useState("metric");
  const [displayUnit, setdisplayUnit] = useState("°C");
  const [helperText, setHelpertext] = useState("Enter a city name");
  const [loading, setLoading] = useState(false);
  const [showCityButton, setShowCityButton] = useState(true);
  const [showSelect, setShowSelect] = useState(false);

  const WeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=4a7f93ba709b9f6af319b9065bd8f12e&units=${unit}`;
  const IconURL = "https://openweathermap.org/img/wn/";

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleClick = () => {
    setShowCityButton(!showCityButton);
    setShowSelect(!showSelect);
  };

  const getNewWeather = (e) => {
    e.preventDefault();
    getData();
    convertUnit();
  };

  const getData = async () => {
    setLoading(true);
    try {
      const { data: response } = await axios.get(WeatherURL);
      setData(response);
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  };

  const convertUnit = () => {
    if (unit === "metric") {
      setdisplayUnit("°C");
    } else setdisplayUnit("°F");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <StyledWrapper>
        <StyledDiv>
          {data ? (
            <Image
              src={IconURL + data.weather[0].icon + "@2x.png"}
              alt="Current weather in selected city"
              width={50}
              height={50}
            />
          ) : (
            ""
          )}
          <Typography variant="h4" color="contrast">
            {data
              ? data.main.temp.toFixed(1) +
                "" +
                displayUnit +
                " in " +
                data.name
              : ""}
          </Typography>
        </StyledDiv>
        {showCityButton && (
          <Button
            size="small"
            color="contrast"
            sx={{
              fontWeight: 500,
              mt: "-5px",
              mr: "-4px",
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
              placeholder="Enter city name"
              defaultValue={city}
              helperText={helperText}
              onChange={handleChange}
              inputProps={{
                maxLength: 50,
              }}
              fullWidth
              sx={{
                width: "223px",
                mt: "6px",
                mb: "35px",
                background: "#FFFFFF",
                "& .MuiFormHelperText-root": {
                  backgroundColor: "#212121",
                  color: "#FFFFFF",
                  width: "100%",
                  textAlign: "right",
                },
              }}
            ></TextField>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-form-control-label-placement"
                name="metrics"
                defaultValue="start"
              >
                <FormControlLabel
                  value="Celsius"
                  control={
                    <Radio
                      type="radio"
                      name="metric"
                      value="metric"
                      size="small"
                      checked={unit === "metric"}
                      onChange={(e) => setUnit(e.target.value)}
                      sx={{
                        color: "#FFFFFF",
                        "&.Mui-checked": {
                          color: "#FFFFFF",
                        },
                      }}
                    />
                  }
                  label="Celsius"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="start"
                  control={
                    <Radio
                      type="radio"
                      name="imperial"
                      value="imperial"
                      size="small"
                      checked={unit === "imperial"}
                      onChange={(e) => setUnit(e.target.value)}
                      sx={{
                        color: "#FFFFFF",
                        "&.Mui-checked": {
                          color: "#FFFFFF",
                        },
                      }}
                    />
                  }
                  label="Farhenheit"
                  labelPlacement="start"
                />
              </RadioGroup>
            </FormControl>
            <Button
              size="small"
              type="submit"
              color="orange"
              variant="outlined"
              sx={{
                fontWeight: 500,
                mt: "17px",
                mr: "0px",
                px: "20px",
                fontSize: "14px",
              }}
              onClick={getNewWeather}
            >
              GET WEATHER
            </Button>
            <Button
              size="small"
              color="contrast"
              sx={{
                fontWeight: 500,
                mt: "12px",
                mr: "-5px",
                fontSize: "14px",
              }}
              onClick={handleClick}
              endIcon={<CloseIcon />}
            >
              CLOSE
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
