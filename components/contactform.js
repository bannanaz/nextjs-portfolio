import Header from "../components/header";
import styled from "@emotion/styled";
import { useState } from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";

export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <>
      <Header title="Say hello!" />
      <StyledWrapper>
        <Grid container wrap="wrap-reverse">
          <Grid item xs={12} md={8} sx={{ background: "#eeeeee" }}>
            <StyledForm>
              <Typography variant="h3" mb={2}>
                Get in touch
              </Typography>
              <Grid container columnSpacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Name"
                    name="name"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    sx={{ background: "white" }}
                    value={values.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Email"
                    name="email"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    sx={{ background: "white" }}
                    value={values.email}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <TextField
                label="Subject"
                name="subject"
                variant="outlined"
                margin="normal"
                fullWidth
                sx={{ background: "white" }}
                value={values.subject}
                onChange={handleChange}
              />
              <TextField
                label="Message"
                name="message"
                variant="outlined"
                margin="normal"
                fullWidth
                multiline
                minRows={4}
                sx={{ background: "white" }}
                value={values.message}
                onChange={handleChange}
              />
              <Button
                variant="contained"
                type="submit"
                disableElevation
                color="secondary"
                sx={{ mt: 3 }}
                onClick={handleSubmit}
              >
                Send Message
              </Button>
            </StyledForm>
          </Grid>
          <Grid item xs={12} md={4} sx={{ background: "#b2dfdb" }}>
            <StyledForm>
              <Typography variant="h3" mb={2}>
                Details
              </Typography>
              <StyledWrapperRight>
                <StyledDiv2>
                  <EmailIcon sx={{ mb: "-6px", mr: "15px" }} />
                  <StyledDiv3>
                    <Typography variant="h4" mb={1} sx={{ mr: "10px" }}>
                      Email:
                    </Typography>
                    <StyledLink>anlepet@gmail.com</StyledLink>
                  </StyledDiv3>
                </StyledDiv2>
                <StyledDiv2>
                  <PhoneIcon sx={{ mb: "-6px", mr: "15px" }} />
                  <StyledDiv3>
                    <Typography variant="h4" mb={1} sx={{ mr: "10px" }}>
                      Phone:
                    </Typography>
                    <Typography variant="body1">+46 709301245</Typography>
                  </StyledDiv3>
                </StyledDiv2>
                <StyledDiv2>
                  <PlaceIcon sx={{ mb: "-6px", mr: "15px" }} />
                  <StyledDiv3>
                    <Typography variant="h4" mb={1} sx={{ mr: "10px" }}>
                      City:
                    </Typography>
                    <Typography variant="body1">Stockholm, Sweden</Typography>
                  </StyledDiv3>
                </StyledDiv2>
                <div>
                  <Typography variant="h4" mb={2}>
                    <LinkedInIcon sx={{ mb: "-6px", mr: "15px" }} />
                    Linkedin
                  </Typography>
                </div>
              </StyledWrapperRight>
            </StyledForm>
          </Grid>
        </Grid>
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 1100px) {
    width: 90%;
  }
  @media screen and (max-width: 600px) {
    width: 85%;
    padding-top: 0px;
    padding-bottom: 25px;
  }
`;

const StyledForm = styled.form`
  padding: 35px 50px 30px 50px;
  @media screen and (max-width: 900px) {
    padding: 35px 25px 40px 25px;
  }
`;

const StyledWrapperRight = styled.div`
  margin-top: 50px;
`;

const StyledDiv2 = styled.div`
  display: flex;
  justify-content: left;
  padding: 0px 0px 10px 0px;
`;

const StyledDiv3 = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
`;

const StyledLink = styled.a`
  font-size: 16px;
  font-weight: 400;

  &:hover {
    cursor: pointer;
    color: #bdbdbd;
  }
`;

const StyledSpan = styled.span`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 400;
  display: inline;
`;
