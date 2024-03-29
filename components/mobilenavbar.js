import Link from "next/link";
import { useRouter } from "next/router";
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
  background: #ffffff;
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  z-index: 1000;
  bottom: 0;
  height: 60px;
`;

const StyledDiv2 = styled.div`
  background: #ffffff;
  width: 85%;
  padding-top: 10px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;
