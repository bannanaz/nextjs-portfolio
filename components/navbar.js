import Link from "next/link";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

export default function Navbar() {
  return (
    <StyledDiv>
      <Grid container>
        <Grid item xs={9} sm={6} md={9}>
          <Typography variant="h1">Anna Pettersson</Typography>
        </Grid>
        <Grid item sm={2} md={1}>
          <Button>
            <Link href="/">Work</Link>
          </Button>
        </Grid>
        <Grid item sm={2} md={1}>
          <Button>
            <Link href="/about">About</Link>
          </Button>
        </Grid>
        <Grid item sm={2} md={1}>
          <Button>
            <Link href="/contact">Contact</Link>
          </Button>
        </Grid>
      </Grid>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 90%;
  height: 80px;
  margin: auto;
  padding-top: 30px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: white;
`;

const StyledLink = styled.a`
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin: 16px 0px;
  &:after {
    content: "";
    position: absolute;
    width: 120%;
    transform: scaleX(0);
    height: 1px;
    bottom: -3px;
    left: -5px;
    background-color: #967070;
    transform-origin: bottom right;
    transition: transform 0.5s ease-out;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  &:active {
    color: #967070;
    border-radius: 3px;
  }
`;
