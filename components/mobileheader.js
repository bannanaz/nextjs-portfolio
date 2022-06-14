import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

export default function Navbar() {
  return (
    <StyledDiv>
      <Grid container>
        <Grid item sm={12}>
          <Typography variant="h1">Anna Pettersson</Typography>
        </Grid>
      </Grid>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 85%;
  height: 80px;
  margin: auto;
  padding-top: 20px;
  background: white;
`;
