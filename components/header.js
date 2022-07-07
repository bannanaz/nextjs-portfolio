import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Header(props) {
  return (
    <StyledWrapper>
      <Grid container>
        <Grid item xs={12} sm={10} md={7}>
          <Typography variant="h1" mb={5} mt={3}>
            {props.title}
          </Typography>
        </Grid>
      </Grid>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding: 25px 0px;
  @media screen and (max-width: 600px) {
    width: 85%;
    padding-top: 0px;
    padding-bottom: 25px;
  }
`;
