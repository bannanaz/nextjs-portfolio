import Header from "../components/header";
import styled from "@emotion/styled";
import { useState } from "react";

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

  const [errorName, setErrorName] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorSubject, setErrorSubject] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

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

  const isFormValid = () => {
    if (
      errors.name === false &&
      errors.email === false &&
      errors.message === false &&
      errors.subject === false &&
      values.name != "" &&
      values.email != "" &&
      values.message != "" &&
      values.subject != ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      values,
    };
    if (isFormValid()) {
      fetch("/api/hello", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.status === 200) {
          console.log("Response succeeded!");
          setSubmitted(true);
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
      setSubmitted(false);
      console.log("Submit failed!");
    }
  };

  /*const validateName = (e) => {
    const name = e.target.value;
    const nameRegex =
      /^[a-zA-ZÆÐƎƏƐƔĲŊŒẞÞǷȜæðǝəɛɣĳŋœĸſßþƿȝĄƁÇĐƊĘĦĮƘŁØƠŞȘŢȚŦŲƯY̨Ƴąɓçđɗęħįƙłøơşșţțŧųưy̨ƴÁÀÂÄǍĂĀÃÅǺĄÆǼǢƁĆĊĈČÇĎḌĐƊÐÉÈĖÊËĚĔĒĘẸƎƏƐĠĜǦĞĢƔáàâäǎăāãåǻąæǽǣɓćċĉčçďḍđɗðéèėêëěĕēęẹǝəɛġĝǧğģɣĤḤĦIÍÌİÎÏǏĬĪĨĮỊĲĴĶƘĹĻŁĽĿʼNŃN̈ŇÑŅŊÓÒÔÖǑŎŌÕŐỌØǾƠŒĥḥħıíìiîïǐĭīĩįịĳĵķƙĸĺļłľŀŉńn̈ňñņŋóòôöǒŏōõőọøǿơœŔŘŖŚŜŠŞȘṢẞŤŢṬŦÞÚÙÛÜǓŬŪŨŰŮŲỤƯẂẀŴẄǷÝỲŶŸȲỸƳŹŻŽẒŕřŗſśŝšşșṣßťţṭŧþúùûüǔŭūũűůųụưẃẁŵẅƿýỳŷÿȳỹƴźżžẓ\s-,.\']+$/;
    const multipleCharRegex = /(?!^\s-,.+$)^.*$/m;
    if (name.length === 0) {
      setErrorName("Name is required");
    } else if (!name.match(nameRegex)) {
      setErrorName("Please enter a valid name");
    } else {
      setErrorName("");
    }
  };

  const validateEmail = (e) => {
    const email = e.target.value;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.length === 0) {
      setErrorEmail("Email is required");
    } else if (!email.match(emailRegex)) {
      setErrorEmail("Please enter a valid email");
    } else {
      setErrorEmail("");
    }
  };

  const validateSubject = (e) => {
    const subject = e.target.value;
    if (subject.length === 0) {
      setErrorSubject("Subject is required");
    } else {
      setErrorSubject("");
    }
  };

  const validateMessage = (e) => {
    const subject = e.target.value;
    if (subject.length === 0) {
      setErrorMessage("Message is required");
    } else {
      setErrorMessage("");
    }
  };*/

  return (
    <>
      <Header title="Say Hello" />
      <StyledWrapper>
        <Grid container wrap="wrap-reverse">
          <Grid item xs={12} md={8} sx={{ background: "#eeeeee" }}>
            <StyledForm>
              <Typography variant="h3" mb={2}>
                Get in touch
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
                sx={{ background: "white", mb: "40px" }}
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
                sx={{ mt: 3 }}
                onClick={handleSubmit}
              >
                Send Message
              </Button>
            </StyledForm>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            color="white"
            sx={{ background: "#213d69" }}
          >
            <StyledForm>
              <Typography variant="h3" color="white" mb={2}>
                Details
              </Typography>
              <StyledWrapperRight>
                <StyledDiv2>
                  <EmailIcon sx={{ mb: "-6px", mr: "15px" }} />
                  <StyledDiv3>
                    <Typography
                      variant="h4"
                      color="white"
                      mb={1}
                      sx={{ mr: "10px" }}
                    >
                      Email:
                    </Typography>
                    <StyledLink
                      href="mailto:anlepet@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      anlepet@gmail.com
                    </StyledLink>
                  </StyledDiv3>
                </StyledDiv2>
                <StyledDiv2>
                  <PhoneIcon sx={{ mb: "-6px", mr: "15px" }} />
                  <StyledDiv3>
                    <Typography
                      variant="h4"
                      color="white"
                      mb={1}
                      sx={{ mr: "10px" }}
                    >
                      Phone:
                    </Typography>
                    <Typography variant="body1">+46 709301245</Typography>
                  </StyledDiv3>
                </StyledDiv2>
                <StyledDiv2>
                  <PlaceIcon sx={{ mb: "-6px", mr: "15px" }} />
                  <StyledDiv3>
                    <Typography
                      variant="h4"
                      color="white"
                      mb={1}
                      sx={{ mr: "10px" }}
                    >
                      City:
                    </Typography>
                    <Typography variant="body1">Stockholm, Sweden</Typography>
                  </StyledDiv3>
                </StyledDiv2>
                <br></br>
                <div>
                  <Typography variant="h4" color="white" mb={2}>
                    <LinkedInIcon sx={{ mb: "-6px", mr: "15px" }} />
                    <StyledLink
                      href="https://www.linkedin.com/in/anlepet/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </StyledLink>
                  </Typography>
                </div>
                <div>
                  <Typography variant="h4" color="white" mb={2}>
                    <GitHubIcon sx={{ mb: "-6px", mr: "15px" }} />
                    <StyledLink
                      href="https://github.com/bannanaz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </StyledLink>
                  </Typography>
                </div>
              </StyledWrapperRight>
            </StyledForm>
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
  margin-top: 50px;
`;

const StyledDiv2 = styled.div`
  display: flex;
  justify-content: left;
  padding: 0px 0px 10px 0px;
`;

const StyledDiv3 = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
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
