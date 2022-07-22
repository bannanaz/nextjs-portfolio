import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Header from "../components/header";
import CV_LIST from "../data/data.js";

export default function About() {
  return (
    <>
      <Header title="Curricilum Vitae" />
      <StyledWrapper>
        <Grid container>
          <Grid item xs={12} md={7} lg={6}>
            <Typography variant="h3" mb={2}>
              Experience
            </Typography>
            {CV_LIST.experience.map((item) => (
              <div key={item.id}>
                <Typography variant="body1">
                  <StyledSpan>{item.role}</StyledSpan> / {item.employer} ·{" "}
                  {item.city}
                </Typography>
                <Typography variant="body1">{item.period}</Typography>
                <br></br>
              </div>
            ))}
            <Typography variant="h3" mt={2} mb={2}>
              Education
            </Typography>
            {CV_LIST.education.map((item) => (
              <div key={item.id}>
                <Typography variant="body1">
                  <StyledSpan>{item.program}</StyledSpan> / {item.school} ·{" "}
                  {item.city}
                </Typography>
                <Typography variant="body1">{item.period}</Typography>
                <br></br>
              </div>
            ))}
            <Typography variant="h3" mt={2} mb={2}>
              Skills
            </Typography>
            <Typography
              variant="body1"
              sx={{ wordSpacing: "10px", maxWidth: "520px" }}
            >
              React.js Next.js Vue.js Vuex Node Javascript HTML5 CSS3 Emotion
              Material-UI Vuetify Figma Git/Github Scrum Photoshop Indesign
            </Typography>
          </Grid>

          <Grid item xs={12} md={5} lg={6}></Grid>
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
const StyledSpan = styled.span`
  font-weight: 600;
`;
