import Header from "../components/header";
import styled from "@emotion/styled";
import { useState, useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import GitHubIcon from "@mui/icons-material/GitHub";
import Alert from "@mui/material/Alert";
import Dialog from "@mui/material/Dialog";

export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const [helperTexts, setHelperTexts] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);
  const [openFailDialog, setOpenFailDialog] = useState(false);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const validateInput = (e) => {
    const nameRegex =
      /^[a-zA-ZÆÐƎƏƐƔĲŊŒẞÞǷȜæðǝəɛɣĳŋœĸſßþƿȝĄƁÇĐƊĘĦĮƘŁØƠŞȘŢȚŦŲƯY̨Ƴąɓçđɗęħįƙłøơşșţțŧųưy̨ƴÁÀÂÄǍĂĀÃÅǺĄÆǼǢƁĆĊĈČÇĎḌĐƊÐÉÈĖÊËĚĔĒĘẸƎƏƐĠĜǦĞĢƔáàâäǎăāãåǻąæǽǣɓćċĉčçďḍđɗðéèėêëěĕēęẹǝəɛġĝǧğģɣĤḤĦIÍÌİÎÏǏĬĪĨĮỊĲĴĶƘĹĻŁĽĿʼNŃN̈ŇÑŅŊÓÒÔÖǑŎŌÕŐỌØǾƠŒĥḥħıíìiîïǐĭīĩįịĳĵķƙĸĺļłľŀŉńn̈ňñņŋóòôöǒŏōõőọøǿơœŔŘŖŚŜŠŞȘṢẞŤŢṬŦÞÚÙÛÜǓŬŪŨŰŮŲỤƯẂẀŴẄǷÝỲŶŸȲỸƳŹŻŽẒŕřŗſśŝšşșṣßťţṭŧþúùûüǔŭūũűůųụưẃẁŵẅƿýỳŷÿȳỹƴźżžẓ\s-,.\']+$/;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //Name validation
    if (e.target.name === "name") {
      if (e.target.value.length < 1) {
        setHelperTexts({
          ...helperTexts,
          name: "Name is required",
        });
        setErrors({
          ...errors,
          name: true,
        });
      } else if (!e.target.value.match(nameRegex)) {
        setHelperTexts({
          ...helperTexts,
          name: "Please enter a valid name",
        });
        setErrors({
          ...errors,
          name: true,
        });
      } else {
        setHelperTexts({
          ...helperTexts,
          name: "",
        });
        setErrors({
          ...errors,
          name: false,
        });
      }
    }
    //Email validation
    if (e.target.name === "email") {
      if (e.target.value.length < 1) {
        setHelperTexts({
          ...helperTexts,
          email: "Email is required",
        });
        setErrors({
          ...errors,
          email: true,
        });
      } else if (!e.target.value.match(emailRegex)) {
        setHelperTexts({
          ...helperTexts,
          email: "Please enter a valid email",
        });
        setErrors({
          ...errors,
          email: true,
        });
      } else {
        setHelperTexts({
          ...helperTexts,
          email: "",
        });
        setErrors({
          ...errors,
          email: false,
        });
      }
    }
    //Subject validation
    if (e.target.name === "subject") {
      if (e.target.value.length < 1) {
        setHelperTexts({
          ...helperTexts,
          subject: "Subject is required",
        });
        setErrors({
          ...errors,
          subject: true,
        });
      } else {
        setHelperTexts({
          ...helperTexts,
          subject: "",
        });
        setErrors({
          ...errors,
          subject: false,
        });
      }
    }
    //Message validation
    if (e.target.name === "message") {
      if (e.target.value.length < 1) {
        setHelperTexts({
          ...helperTexts,
          message: "Message is required",
        });
        setErrors({
          ...errors,
          message: true,
        });
      } else {
        setHelperTexts({
          ...helperTexts,
          message: "",
        });
        setErrors({
          ...errors,
          message: false,
        });
      }
    }
  };

  const timerRef = useRef(null);
  const handleOpenSuccess = () => {
    setOpenSuccessDialog(true);
    timerRef.current = setTimeout(() => setOpenSuccessDialog(false), 1500);
  };
  const handleOpenFail = () => {
    setOpenFailDialog(true);
    timerRef.current = setTimeout(() => setOpenFailDialog(false), 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      values,
    };
    if (
      !errors.name &&
      !errors.email &&
      !errors.message &&
      !errors.subject &&
      values.name &&
      values.email &&
      values.message &&
      values.subject
    ) {
      fetch("/api/hello", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.status === 200) {
          setSubmitted(true);
          handleOpenSuccess();
          setValues({
            ...values,
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        }
      });
    } else {
      handleOpenFail();
    }
  };

  return (
    <>
      <Header title="Say Hello" />
      <StyledWrapper>
        <Grid container wrap="wrap">
          <Grid item xs={12} md={8} lg={9} sx={{ background: "#eeeeee" }}>
            <StyledForm onSubmit={handleSubmit}>
              <Typography variant="h3" mb={3} mt={1}>
                Get In Touch
              </Typography>
              <Grid container columnSpacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Name *"
                    name="name"
                    variant="outlined"
                    margin="none"
                    fullWidth
                    sx={{ background: "white", mb: "40px" }}
                    value={values.name}
                    onChange={handleChange}
                    onBlur={validateInput}
                    error={errors.name}
                    helperText={helperTexts.name}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Email *"
                    name="email"
                    variant="outlined"
                    margin="none"
                    inputProps={{
                      maxLength: 50,
                    }}
                    fullWidth
                    sx={{ background: "white", mb: "40px" }}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={validateInput}
                    error={errors.email}
                    helperText={helperTexts.email}
                  />
                </Grid>
              </Grid>
              <TextField
                label="Subject *"
                name="subject"
                variant="outlined"
                margin="none"
                inputProps={{
                  maxLength: 50,
                }}
                fullWidth
                sx={{ background: "white", mb: "40px" }}
                value={values.subject}
                onChange={handleChange}
                onBlur={validateInput}
                error={errors.subject}
                helperText={helperTexts.subject}
              />
              <TextField
                label="Message *"
                name="message"
                variant="outlined"
                margin="none"
                fullWidth
                multiline
                minRows={4}
                sx={{ background: "white", mb: "15px" }}
                value={values.message}
                onChange={handleChange}
                onBlur={validateInput}
                error={errors.message}
                helperText={helperTexts.message}
                inputProps={{
                  maxLength: 500,
                }}
              />
              <Button
                variant="contained"
                type="submit"
                disableElevation
                color="secondary"
                sx={{ mt: 3, mb: 2 }}
              >
                Send Message
              </Button>
            </StyledForm>
            <Dialog open={openSuccessDialog}>
              <Alert
                severity="success"
                sx={{
                  margin: "auto",
                }}
              >
                Your message has been sent!
              </Alert>
            </Dialog>
            <Dialog open={openFailDialog}>
              <Alert
                severity="error"
                sx={{
                  margin: "auto",
                }}
              >
                Please fill out all fields correctly!
              </Alert>
            </Dialog>
          </Grid>
          <Grid item xs={12} md={4} lg={3} color="white" className="contact">
            <StyledWrapperRight>
              <Typography variant="h3" color="white" mb={5} mt={1}>
                Contact Info
              </Typography>
              <StyledDiv2>
                <EmailIcon sx={{ mb: "-6px", mr: "15px" }} />
                <StyledLink
                  href="mailto:anlepet@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  anlepet@gmail.com
                </StyledLink>
              </StyledDiv2>
              <StyledDiv2>
                <PhoneIcon sx={{ mb: "-6px", mr: "15px" }} />
                <Typography variant="body1" mt={"-1px"}>
                  +46 709301245
                </Typography>
              </StyledDiv2>
              <StyledDiv2>
                <PlaceIcon sx={{ mb: "-6px", mr: "15px" }} />
                <Typography variant="body1" mt={"-1px"}>
                  Stockholm, Sweden
                </Typography>
              </StyledDiv2>
              <br></br>
              <StyledDiv2>
                <Typography variant="h4" color="white">
                  <LinkedInIcon size="large" sx={{ mb: "-6px", mr: "15px" }} />
                  <StyledLink
                    href="https://www.linkedin.com/in/anlepet/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </StyledLink>
                </Typography>
              </StyledDiv2>
              <StyledDiv2>
                <Typography variant="h4" color="white">
                  <GitHubIcon sx={{ mb: "-6px", mr: "15px" }} />
                  <StyledLink
                    href="https://github.com/bannanaz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </StyledLink>
                </Typography>
              </StyledDiv2>
            </StyledWrapperRight>
          </Grid>
        </Grid>
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 1100px) {
    width: 90%;
  }
  @media screen and (max-width: 600px) {
    width: 85%;
    padding-top: 0px;
    padding-bottom: 25px;
  }
`;

const StyledForm = styled.form`
  padding: 35px 50px 30px 50px;
  @media screen and (max-width: 900px) {
    padding: 35px 25px 40px 25px;
  }
`;

const StyledWrapperRight = styled.div`
  padding: 35px 0px 30px 0px;

  @media screen and (max-width: 900px) {
    padding: 35px 25px 40px 25px;
  }
`;

const StyledDiv2 = styled.div`
  display: flex;
  justify-content: left;
  padding: 0px 0px 18px 0px;
  @media screen and (max-width: 900px) {
    margin-left: 0px;
  }
`;

const StyledLink = styled.a`
  font-size: 16px;
  font-weight: 400;

  &:hover {
    cursor: pointer;
    color: #bdbdbd;
  }
`;

const StyledSpan = styled.span`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 400;
  display: inline;
`;
