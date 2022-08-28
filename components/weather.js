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
  const [helperText, setHelperText] = useState("Enter a city name");
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showCityButton, setShowCityButton] = useState(true);
  const [showSelect, setShowSelect] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.NEXT_PUBLIC_API_KEY}&units=${unit}`;
  const IconURL = "https://openweathermap.org/img/wn/";

  useEffect(() => {
    getWeatherData();
  }, []);

  const toggleComponent = () => {
    setShowCityButton(!showCityButton);
    setShowSelect(!showSelect);
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const validateInput = (e) => {
    const cityRegex =
      /^[a-zA-ZÆÐƎƏƐƔĲŊŒẞÞǷȜæðǝəɛɣĳŋœĸſßþƿȝĄƁÇĐƊĘĦĮƘŁØƠŞȘŢȚŦŲƯY̨Ƴąɓçđɗęħįƙłøơşșţțŧųưy̨ƴÁÀÂÄǍĂĀÃÅǺĄÆǼǢƁĆĊĈČÇĎḌĐƊÐÉÈĖÊËĚĔĒĘẸƎƏƐĠĜǦĞĢƔáàâäǎăāãåǻąæǽǣɓćċĉčçďḍđɗðéèėêëěĕēęẹǝəɛġĝǧğģɣĤḤĦIÍÌİÎÏǏĬĪĨĮỊĲĴĶƘĹĻŁĽĿʼNŃN̈ŇÑŅŊÓÒÔÖǑŎŌÕŐỌØǾƠŒĥḥħıíìiîïǐĭīĩįịĳĵķƙĸĺļłľŀŉńn̈ňñņŋóòôöǒŏōõőọøǿơœŔŘŖŚŜŠŞȘṢẞŤŢṬŦÞÚÙÛÜǓŬŪŨŰŮŲỤƯẂẀŴẄǷÝỲŶŸȲỸƳŹŻŽẒŕřŗſśŝšşșṣßťţṭŧþúùûüǔŭūũűůųụưẃẁŵẅƿýỳŷÿȳỹƴźżžẓ\s-,.\']+$/;
    if (e.target.name === "city") {
      if (e.target.value.length < 1) {
        setHelperText("City name is required");
        setErrors(true);
      } else if (!e.target.value.match(cityRegex)) {
        setHelperText("Please enter a valid city name");
        setErrors(true);
      } else {
        setHelperText("Enter a city name");
        setErrors(false);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeatherData();
    convertUnit();
  };

  const getWeatherData = () => {
    if (isFormValid()) {
      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Something went wrong");
        })
        .then((responseJson) => {
          setData(responseJson);
        })
        .catch((error) => {
          setErrors(true);
          setHelperText("Failed to fetch weather data");
        });
    }
  };

  const convertUnit = () => {
    if (unit === "metric") {
      setdisplayUnit("°C");
    } else setdisplayUnit("°F");
  };

  const isFormValid = () => {
    if (errors) {
      return false;
    } else {
      return true;
    }
  };

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
            onClick={toggleComponent}
          >
            EDIT CITY
          </Button>
        )}
        {showSelect && (
          <>
            <TextField
              name="city"
              variant="outlined"
              margin="none"
              size="small"
              placeholder="Enter city name"
              defaultValue={city}
              helperText={helperText}
              error={errors}
              onChange={handleChange}
              onInput={validateInput}
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
                mt: "12px",
                mr: "0px",
                px: "20px",
                fontSize: "14px",
              }}
              onClick={handleSubmit}
            >
              GET WEATHER
            </Button>
            <Button
              size="small"
              color="contrast"
              sx={{
                fontWeight: 500,
                mt: "7px",
                mr: "-5px",
                fontSize: "14px",
              }}
              onClick={toggleComponent}
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
  margin-bottom: 30px;
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

// `getStaticProps`, and similar Next.js methods like `getStaticPaths` and `getServerSideProps`
// only run in Node.js. Check the terminal to see the environment variables
export async function getStaticProps() {
  // Using the variables below in the browser will return `undefined`. Next.js doesn't
  // expose environment variables unless they start with `NEXT_PUBLIC_`
  console.log("[Node.js only] ENV_VARIABLE:", process.env.API_KEY);
  console.log("[Node.js only] ENV_LOCAL_VARIABLE:", process.env.API_KEY);

  return { props: {} };
}
