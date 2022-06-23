import Link from "next/link";
import { useRouter } from "next/router";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import styles from "../styles/Home.module.css";

export default function Navbar() {
  const router = useRouter();

  return (
    <StyledDiv>
      <Grid container>
        <Grid item xs={9} sm={6} md={9}>
          <Typography variant="h1">Anna Pettersson</Typography>
        </Grid>
        <Grid item sm={2} md={1}>
          <Button className={router.pathname == "/" ? styles.active : ""}>
            <Link href="/">Work</Link>
          </Button>
        </Grid>
        <Grid item sm={2} md={1}>
          <Button className={router.pathname == "/about" ? styles.active : ""}>
            <Link href="/about">About</Link>
          </Button>
        </Grid>
        <Grid item sm={2} md={1}>
          <Button
            className={router.pathname == "/contact" ? styles.active : ""}
          >
            <Link href="/contact">Contact</Link>
          </Button>
        </Grid>
      </Grid>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 90%;
  height: 70px;
  margin: auto;
  padding-top: 20px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: white;
`;
