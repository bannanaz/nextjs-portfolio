import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Weather from "./weather";

export default function Footer() {
  return (
    <>
      <StyledWrapper>
        <Typography variant="body1">
          Powered by{" "}
          <StyledSpan>
            <StyledLink
              href="https://github.com/bannanaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bannanaz
            </StyledLink>
          </StyledSpan>
        </Typography>
      </StyledWrapper>
      <StyledWrapper2>
        <StyledDiv>
          <StyledColumn>
            <p>Contact:</p>
            <StyledLink2
              href="mailto:anlepet@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              anlepet@gmail.com
            </StyledLink2>
            <br></br>
            <StyledLink2
              href="https://www.linkedin.com/in/anlepet/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </StyledLink2>
            <StyledLink2
              href="https://github.com/bannanaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </StyledLink2>
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
  padding: 50px 0px 50px 0px;
`;

const StyledSpan = styled.span`
  font-weight: 600;
`;

const StyledWrapper2 = styled.div`
  width: 100%;
  height: 270px;
  background: #212121;
  position: static;
  bottom: 0;
  padding-top: 35px;
  @media screen and (max-width: 600px) {
    height: 280px;
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
  padding-top: 10px;
  @media screen and (max-width: 600px) {
    justify-content: center;
    padding-top: 0px;
  }
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 7px;
  color: white;
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

const StyledLink = styled.a`
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 10px;

  &:hover {
    cursor: pointer;
    color: #bdbdbd;
  }
`;

const StyledLink2 = styled.a`
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 10px;

  &:hover {
    cursor: pointer;
    color: #e0e0e0;
  }
`;
