import Link from "next/link";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

export default function MobileNavbar() {
  return (
    <StyledDiv>
      <StyledDiv2>
        <Button>
          <Link href="/">Work</Link>
        </Button>
        <Button>
          <Link href="/about">About</Link>
        </Button>
        <Button>
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
