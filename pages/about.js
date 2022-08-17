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
          <Grid item xs={12} lg={6}>
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
            <br></br>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Typography variant="h3" mb={2}>
              Skills
            </Typography>
            <Typography
              variant="body1"
              sx={{ wordSpacing: "10px", maxWidth: "520px" }}
            >
              Javascript HTML5 CSS3 React.js Next.js Vue.js Vuex Node Emotion
              Material-UI Vuetify Figma Git/Github Scrum Photoshop Indesign
            </Typography>
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
  @media screen and (max-width: 600px) {
    width: 90%;
    padding-top: 0px;
    padding-bottom: 25px;
  }
`;
const StyledSpan = styled.span`
  font-weight: 600;
`;
