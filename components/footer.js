import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Weather from "./weather";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <>
      <StyledWrapper>
        <Typography variant="body1">
          Created by{" "}
          <StyledSpan>
            <StyledLink
              href="https://github.com/bannanaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anna{" "}
            </StyledLink>
          </StyledSpan>
          with{" "}
          <StyledSpan>
            <StyledLink
              href="https://github.com/bannanaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              NEXT.js
            </StyledLink>
          </StyledSpan>
        </Typography>
      </StyledWrapper>
      <StyledWrapper2>
        <StyledDiv>
          <StyledColumn>
            <Typography variant="h4" sx={{ pt: "16px" }}>
              Contact:
            </Typography>
            <StyledLink2
              href="mailto:anlepet@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              anlepet@gmail.com
            </StyledLink2>
            <Typography variant="body1" sx={{ pb: "15px", fontSize: "17px" }}>
              +46 709301245
            </Typography>
            <Typography variant="body1" sx={{ pb: "15px", fontSize: "17px" }}>
              Stockholm, Sweden
            </Typography>
            <br></br>
            <StyledLink3
              href="https://www.linkedin.com/in/anlepet/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon size="large" sx={{ mb: "-6px", mr: "15px" }} />
              Linkedin
            </StyledLink3>
            <StyledLink3
              href="https://github.com/bannanaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon size="large" sx={{ mb: "-6px", mr: "15px" }} />
              Github
            </StyledLink3>
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
  font-weight: 400;
`;

const StyledWrapper2 = styled.div`
  width: 100%;
  height: "auto";
  background: #212121;
  position: static;
  bottom: 0;
  padding-top: 35px;
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
    padding-top: 0px;
  }
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin-bottom: 40px;

  @media screen and (max-width: 600px) {
    padding-top: 5px;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
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
  font-size: 17px;
  font-weight: 400;
  padding: 15px 0px;

  &:hover {
    cursor: pointer;
    color: #e0e0e0;
  }
`;

const StyledLink3 = styled.a`
  font-size: 17px;
  font-weight: 400;
  padding: 0px 0px 15px 0px;

  &:hover {
    cursor: pointer;
    color: #e0e0e0;
  }
`;
