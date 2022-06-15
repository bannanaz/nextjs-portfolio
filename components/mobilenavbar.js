import Link from "next/link";
import { useRouter } from "next/router";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import styles from "../styles/Home.module.css";

export default function MobileNavbar() {
  const router = useRouter();

  return (
    <StyledDiv>
      <StyledDiv2>
        <Button className={router.pathname == "/" ? styles.active : ""}>
          <Link href="/">Work</Link>
        </Button>
        <Button className={router.pathname == "/about" ? styles.active : ""}>
          <Link href="/about">About</Link>
        </Button>
        <Button className={router.pathname == "/contact" ? styles.active : ""}>
          <Link href="/contact">Contact</Link>
        </Button>
      </StyledDiv2>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 100%;
  background: #f8f0f0;
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  height: 60px;
`;

const StyledDiv2 = styled.div`
  width: 85%;
  padding-top: 10px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;
