import Header from "../components/header";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function ContactForm() {
  return (
    <>
      <Header title="Say hello!" />
      <StyledWrapper>
        <Grid container>
          <Grid item xs={12} md={7} lg={8} sx={{ background: "#eeeeee" }}>
            <StyledForm>
              <Typography variant="h3" mb={2}>
                Get in touch
              </Typography>
              <Grid container columnSpacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="name"
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    sx={{ background: "white" }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    sx={{ background: "white" }}
                  />
                </Grid>
              </Grid>
              <TextField
                id="subject"
                label="Subject"
                variant="outlined"
                margin="normal"
                fullWidth
                sx={{ background: "white" }}
              />
              <TextField
                id="Message"
                label="Message"
                variant="outlined"
                margin="normal"
                fullWidth
                multiline
                minRows={4}
                sx={{ background: "white" }}
              />
              <Button
                variant="contained"
                disableElevation
                color="secondary"
                sx={{ mt: 3 }}
              >
                Send Message
              </Button>
            </StyledForm>
          </Grid>
          <Grid item xs={12} md={5} lg={4} sx={{ background: "#262a5c" }}>
            <StyledDiv>
              <Typography variant="h4" mb={2} color="white">
                Email:
              </Typography>
              <Typography variant="h4" mb={2} color="white">
                Linkedin:
              </Typography>
              <Typography variant="h4" mb={2} color="white">
                Phone:
              </Typography>
              <Typography variant="h4" mb={2} color="white">
                City: Stockholm, Sweden
              </Typography>
            </StyledDiv>
          </Grid>
        </Grid>
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 600px) {
    width: 85%;
    padding-top: 0px;
    padding-bottom: 25px;
  }
`;

const StyledForm = styled.form`
  padding: 35px 50px 30px 50px;
  @media screen and (max-width: 1100px) {
    padding: 15px 20px 30px 20px;
  }
`;

const StyledDiv = styled.div`
  width: 70%;
  margin: auto;
`;
