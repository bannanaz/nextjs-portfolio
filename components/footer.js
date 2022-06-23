import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Weather from "./weather";

export default function Footer() {
  return (
    <>
      <StyledWrapper>
        <Divider width="100%" />
        <Typography variant="body1" mt={3}>
          Powered by <StyledSpan>Bannanaz</StyledSpan>
        </Typography>
      </StyledWrapper>
      <StyledWrapper2>
        <StyledDiv>
          <StyledColumn>
            <p>Contact:</p>
            <StyledLink
              href="mailto:anlepet@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              anlepet@gmail.com
            </StyledLink>
            <br></br>
            <StyledLink
              href="https://www.linkedin.com/in/anlepet/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </StyledLink>
            <StyledLink
              href="https://github.com/bannanaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </StyledLink>
          </StyledColumn>
          <Weather />
        </StyledDiv>
      </StyledWrapper2>
    </>
  );
}

const StyledWrapper = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0px;
`;

const StyledSpan = styled.span`
  font-weight: 600;
`;

const StyledWrapper2 = styled.div`
  width: 100%;
  height: 280px;
  background: #212121;
  position: static;
  bottom: 0;
  padding-top: 40px;
  @media screen and (max-width: 600px) {
    padding-top: 35px;
  }
`;

const StyledDiv = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: start;
  color: white;
  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 7px;
  @media screen and (max-width: 600px) {
    padding-top: 5px;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
  }
  p {
    font-weight: 500;
    margin-right: 60px;
    margin-top: 7px;
    margin-bottom: 10px;

    @media screen and (max-width: 600px) {
      margin-right: 0px;
    }
  }
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledLink = styled.a`
  font-size: 16px;
  color: white;
  font-weight: 500;
  padding-bottom: 10px;

  &:hover {
    cursor: pointer;
    color: lightgray;
  }
`;
