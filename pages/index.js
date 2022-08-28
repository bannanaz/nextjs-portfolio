import Header from "../components/header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import styles from "../styles/Home.module.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anna Pettersson</title>
        <meta
          name="Anna Pettersson Portfolio"
          content="Portfolio created with Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Front-end Developer" />
      <StyledWrapper>
        <Grid container>
          <Grid
            item
            xs={12}
            md={8}
            sx={{ position: "relative", display: "block" }}
          >
            <Image
              src={
                "https://raw.githubusercontent.com/bannanaz/images/main/img/comment_box.jpg"
              }
              alt="Say hi, vanilla JS commentbox"
              layout={"responsive"}
              width={"1400px"}
              height={"850px"}
            />
            <StyledOverlay>
              <StyledOverlayWrapper>
                <StyledTextOverlay>Comment Box</StyledTextOverlay>
                <StyledDiv>
                  <Link
                    href="http://sayhi.surge.sh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    passHref
                  >
                    <Button
                      color="contrast"
                      variant="outlined"
                      sx={{
                        width: "120px",
                        m: "10px",
                        border: "2px solid #ffffff",
                        "&:hover": {
                          border: "2px solid #ffffff",
                          background: "#fa555a",
                        },
                      }}
                    >
                      Demo
                    </Button>
                  </Link>
                  <Link
                    href="https://github.com/bannanaz/vanillajs-comment-box"
                    target="_blank"
                    rel="noopener noreferrer"
                    passHref
                  >
                    <Button
                      color="contrast"
                      variant="outlined"
                      sx={{
                        width: "120px",
                        m: "10px",
                        border: "2px solid #ffffff",
                        "&:hover": {
                          border: "2px solid #ffffff",
                        },
                      }}
                    >
                      Code
                    </Button>
                  </Link>
                </StyledDiv>
              </StyledOverlayWrapper>
            </StyledOverlay>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              position: "relative",
              display: "block",
            }}
          >
            <Image
              src={
                "https://raw.githubusercontent.com/bannanaz/images/main/img/calculator_vanillajs_vertical.jpg"
              }
              alt="Vanilla JS calculator"
              layout={"responsive"}
              width={"700px"}
              height={"850px"}
            />
            <StyledOverlayBlack>
              <StyledDiv>
                <StyledOverlayWrapper>
                  <StyledTextOverlay>Calculator</StyledTextOverlay>
                  <Link
                    href="https://calculatings.surge.sh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    passHref
                  >
                    <Button
                      color="contrast"
                      variant="outlined"
                      sx={{
                        width: "120px",
                        m: "10px",
                        border: "2px solid #ffffff",
                        "&:hover": {
                          border: "2px solid #ffffff",
                          background: "#212121",
                        },
                      }}
                    >
                      Demo
                    </Button>
                  </Link>
                  <Link
                    href="https://github.com/bannanaz/CalcApp"
                    target="_blank"
                    rel="noopener noreferrer"
                    passHref
                  >
                    <Button
                      color="contrast"
                      variant="outlined"
                      sx={{
                        width: "120px",
                        m: "10px",
                        border: "2px solid #ffffff",
                        "&:hover": {
                          border: "2px solid #ffffff",
                          background: "#212121",
                        },
                      }}
                    >
                      Code
                    </Button>
                  </Link>
                </StyledOverlayWrapper>
              </StyledDiv>
            </StyledOverlayBlack>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              position: "relative",
              display: "block",
            }}
          >
            <Image
              src={
                "https://raw.githubusercontent.com/bannanaz/images/main/img/covid_mobile.jpg"
              }
              alt="React Covid Tracker"
              layout={"responsive"}
              width={"700px"}
              height={"850px"}
            />
            <StyledOverlayBlack>
              <StyledOverlayWrapper>
                <StyledTextOverlay>Covid Tracker</StyledTextOverlay>
                <Link
                  href="https://github.com/negin1/fe20tp2_bev_10/tree/main#readme"
                  target="_blank"
                  rel="noopener noreferrer"
                  passHref
                >
                  <Button
                    color="contrast"
                    variant="outlined"
                    sx={{
                      width: "120px",
                      m: "10px",
                      border: "2px solid #ffffff",
                      "&:hover": {
                        border: "2px solid #ffffff",
                        background: "#212121",
                      },
                    }}
                  >
                    Code
                  </Button>
                </Link>
              </StyledOverlayWrapper>
            </StyledOverlayBlack>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            sx={{ position: "relative", display: "block" }}
          >
            <Image
              src={
                "https://raw.githubusercontent.com/bannanaz/images/main/img/splendid.jpg"
              }
              alt="React Splendid – Rent stuff online"
              layout={"responsive"}
              width={"1400px"}
              height={"850px"}
            />
            <StyledOverlay>
              <StyledOverlayWrapper>
                <StyledTextOverlay>Splendid</StyledTextOverlay>
                <Link
                  href="https://github.com/bannanaz/splendid#readme"
                  rel="noopener noreferrer"
                  passHref
                >
                  <Button
                    color="contrast"
                    variant="outlined"
                    sx={{
                      width: "120px",
                      m: "10px",
                      border: "2px solid #ffffff",
                      "&:hover": {
                        border: "2px solid #ffffff",
                        background: "#fa555a",
                      },
                    }}
                  >
                    Code
                  </Button>
                </Link>
              </StyledOverlayWrapper>
            </StyledOverlay>
          </Grid>
        </Grid>
      </StyledWrapper>
    </div>
  );
}

const StyledWrapper = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 0px;
  @media screen and (max-width: 600px) {
    width: 90%;
    padding-top: 0px;
    padding-bottom: 25px;
  }
`;

const StyledOverlay = styled.div`
  opacity: 0;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  transition: 0.7s ease;
  background-color: #fc4046;
  z-index: 5;

  :hover {
    opacity: 0.96;
    cursor: pointer;
  }
`;

const StyledOverlayWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
`;

const StyledTextOverlay = styled.div`
  color: white;
  font-size: 30px;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 20px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledOverlayBlack = styled.div`
  opacity: 0;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  transition: 0.7s ease;
  background-color: black;
  z-index: 5;

  :hover {
    opacity: 0.85;
    cursor: pointer;
  }
`;

const StyledTextWrapper = styled.div`
  width: 80%;
  height: 70%;
`;
