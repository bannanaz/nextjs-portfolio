import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Weather from "./weather";

export default function Footer() {
  return (
    <StyledWrapper>
      <StyledDiv>
        <StyledColumn>
          <p>Contact:</p>
          <p>anlepet@gmail.com</p>
          <br></br>
          <p>Linkedin</p>
          <p>Github</p>
        </StyledColumn>
        <Weather />
      </StyledDiv>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100%;
  height: 300px;
  background: #212121;
  position: static;
  bottom: 0;
  padding-top: 60px;
`;

const StyledDiv = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: start;
  color: white;
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-weight: 500;
    padding: 0px;
    margin: 9px 0px;
    margin-right: 60px;
  }
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledLink = styled.a`
  font-size: 16px;
  color: white;
  font-weight: 600;
`;
