import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import { FormikContext, FormikProvider, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Logo } from "../../Home/ContentFactory/IconFactory";
import PassionsDialog, { ChipFactory } from "./PassionsDialog";
export default function CreationStepper() {
  useEffect(() => {
   window.onbeforeunload = () => {
    return window.confirm("Confirm refresh");
   }
  }, [])
  return (
    <>
      <SimpleHeader />
      <Stepper />
    </>
  );
}

const SimpleHeader = () => {
  return (
    <Box sx={classes.HeaderRoot}>
      <Stack direction="row" spacing={0} alignItems="center">
        <Logo sx={classes.Logo} />
        <Typography sx={classes.LogoName}>matcha</Typography>
      </Stack>
    </Box>
  );
};

export const Stepper = () => {
  const formik = useFormik({
    initialValues: {
      Gender: "",
      SexualPreferences: "",
      Biografy: "",
      pic1: null,
      pic2: null,
      pic3: null,
      pic4: null,
      pic5: null,
      profilePic: "",
      hoobies: [],
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Container maxWidth="lg" sx={classes.StepperRppt}>
      <Typography variant="h3" sx={classes.TitleHead}>
        Create Account
      </Typography>
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2} rowSpacing={5} sx={classes.Gridroot}>
            <Grid item xs={12} sm={6}>
              <Gender />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SexualPreferences />
            </Grid>
            <Grid item xs={12}>
              <Biografy />
            </Grid>
            <Grid item xs={12}>
              <UploadImages />
            </Grid>
            <Grid item xs={12}>
              <Hobbies />
            </Grid>
            <Grid item xs={12}>
              <div style={classes.continueRoot}>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  sx={classes.continueButton}
                >
                  Continue
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </FormikProvider>
    </Container>
  );
};
export const UploadImages = () => {
  const formik = React.useContext(FormikContext);
  const handlUpload = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      formik.setFieldValue(e.target.name, reader.result);
    };
    reader.onerror = (error) => {
      formik.setFieldValue(e.target.name, null);
    };
  };
  return (
    <Box sx={classes.UploadRoot}>
      <Typography sx={classes.desc} paragraph>
        Upload a minimum of 1 picture and choose you profile image
      </Typography>
      <Grid
        container
        spacing={5}
        justifyContent={{ xs: "center", sm: "space-evenly" }}
        alignItems="center"
      >
        {["pic1", "pic2", "pic3", "pic4", "pic5"].map((elem, index) => (
          <Grid item key={index}>
            <Box
              sx={classes.ImgBox}
              className="ImgBox"
              style={
                formik?.values && formik.values.profilePic === elem
                  ? classes.Choosen
                  : {}
              }
            >
              <input
                type="file"
                id={elem}
                name={elem}
                style={{ display: "none" }}
                onChange={handlUpload}
              />
              <label htmlFor={elem}>
                <AddCircleRoundedIcon sx={classes.addButton} />
              </label>
              {formik?.values && formik.values[elem] ? (
                <>
                  <img
                    src={formik.values[elem]}
                    style={classes.innerImg}
                    alt="pic"
                  />
                  <ChooseBox elem={elem} />
                </>
              ) : (
                false
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const ChooseBox = ({ elem }) => {
  const formik = React.useContext(FormikContext);
  return (
    <Box
      sx={classes.ChooseBox}
      className="ChooseBox"
      style={formik.values.profilePic === elem ? { opacity: 1 } : {}}
      onClick={() => formik.setFieldValue("profilePic", elem)}
    >
      <Typography sx={classes.ChooseLabel}>
        {formik.values.profilePic === elem ? "Profile Picture" : "Choose"}
      </Typography>
    </Box>
  );
};

export const Biografy = () => {
  const formik = React.useContext(FormikContext);
  return (
    <Stack direction="column" spacing={3} sx={{ width: "100%" }}>
      <Typography sx={classes.label}>Biografy</Typography>
      <TextField
        sx={classes.TextField}
        rows={4}
        multiline
        name="Biografy"
        value={formik.values.Biografy}
        onChange={formik.handleChange}
        fullWidth
        required
      />
    </Stack>
  );
};
export const Gender = () => {
  const formik = React.useContext(FormikContext);
  return (
    <Stack direction="column" spacing={3} sx={{ flexGrow: 1 }}>
      <Typography sx={classes.label}>Gender</Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <div>
          <input
            type="radio"
            id="Man"
            className="hiddenChebox"
            value={"Man"}
            name="Gender"
            onChange={formik.handleChange}
            checked={formik?.values?.Gender === "Man" ? true : false}
          />
          <Box className="VisibleChebox">
            <label htmlFor="Man">Man</label>
          </Box>
        </div>
        <div>
          <input
            type="radio"
            id="Woman"
            className="hiddenChebox"
            value={"Woman"}
            name="Gender"
            onChange={formik.handleChange}
            checked={formik?.values?.Gender === "Woman" ? true : false}
          />
          <Box className="VisibleChebox">
            <label htmlFor="Woman">Woman</label>
          </Box>
        </div>
      </Stack>
    </Stack>
  );
};

export const SexualPreferences = () => {
  const formik = React.useContext(FormikContext);
  return (
    <Stack direction="column" spacing={3} sx={{ flexGrow: 1 }}>
      <Typography sx={classes.label}>Sexual preferences</Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <div>
          <input
            type="radio"
            id="Heterosexual"
            className="hiddenChebox"
            value={"Heterosexual"}
            name="SexualPreferences"
            onChange={formik.handleChange}
            checked={
              formik?.values?.SexualPreferences === "Heterosexual"
                ? true
                : false
            }
          />
          <Box className="VisibleChebox">
            <label htmlFor="Heterosexual">Heterosexual</label>
          </Box>
        </div>
        <div>
          <input
            type="radio"
            id="Bi-sexual"
            className="hiddenChebox"
            value={"Bisexual"}
            name="SexualPreferences"
            onChange={formik.handleChange}
            checked={
              formik?.values?.SexualPreferences === "Bisexual" ? true : false
            }
          />
          <Box className="VisibleChebox">
            <label htmlFor="Bi-sexual">Bisexual</label>
          </Box>
        </div>
      </Stack>
    </Stack>
  );
};

export const Hobbies = () => {
  const [openDialog, setopenDialog] = useState(false);
  const formik = React.useContext(FormikContext);

  const ToggleDialog = () => {
    setopenDialog(!openDialog);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Stack direction="column" spacing={3}>
        <Typography sx={classes.label}>Passions</Typography>
        <Grid container spacing={1} sx={classes.PassionsRoot}>
          {formik.values.hoobies.length > 0 && (
            <ChipFactory
              hoobies={formik.values.hoobies}
              formik={formik}
              HandlHoobies={false}
            />
          )}
        </Grid>
        <Button
          startIcon={<AddRoundedIcon />}
          sx={classes.AddPassionButton}
          onClick={ToggleDialog}
        >
          Add Passions
        </Button>
      </Stack>
      <PassionsDialog CloseDialog={ToggleDialog} open={openDialog} />
    </Box>
  );
};

const classes = {
  HeaderRoot: {
    p: { xs: ".5rem", sm: "1rem" },
    borderBottom: "1px solid #0000001a",
  },
  AddPassionButton: {
    border: "2px solid #505965",
    fontFamily: '"Roboto"',
    borderRadius: "10px",
    maxWidth: { xs: "100%", sm: "12rem" },
    minHeight: "45px",
    color: "#505965",
    cursor: "pointer",
    "&:hover": {
      color: "secondary.main",
      borderColor: "secondary.main",
      backgroundColor: "transparent",
    },
  },
  UploadRoot: {
    width: "calc(100%)",
    backgroundColor: "#f0f2f430",
    borderRadius: "10px",
    p: ".5rem",
  },
  PassionsRoot: {
    width: "fit-content",
    backgroundColor: "#f0f2f430",
    borderRadius: "10px",
    p: ".5rem",
    paddingBottom: "calc(.5rem + 8px)",
    paddingRight: "calc(.5rem + 8px)",
  },
  continueRoot: {
    display: "grid",
    placeItems: "center",
    width: "100%",
    paddingBottom: "1rem",
  },
  continueButton: {
    width: "10rem",
    minHeight: "2.5rem",
    borderRadius: "12em",
    background: "linear-gradient(225deg,#ff6036,#fd267a)",
  },
  ImgBox: {
    minHeight: "12rem",
    minWidth: "9rem",
    border: "1px solid #505965",
    borderRadius: "10px",
    position: "relative",
    display: "flex",
    placeItems: "center",
    transition: "box-shadow .2s ease",
  },
  Choosen: {
    boxShadow: "0 0 0pt 2pt #fe3f61",
  },
  ChooseBox: {
    position: "absolute",
    minHeight: "12rem",
    minWidth: "9rem",
    display: "grid",
    placeItems: "center",
    backgroundColor: "#00000047",
    borderRadius: "10px",
    zIndex: 1,
  },
  ChooseLabel: {
    fontFamily: "Roboto",
    fontWeight: 500,
    color: "#FFFFFF",
    opacity: 0.5,
  },
  innerImg: {
    minHeight: "12rem",
    maxWidth: "9rem",
    objectFit: "cover",
    borderRadius: "10px",
  },
  addButton: {
    position: "absolute",
    zIndex: 2,
    fontSize: "2rem",
    backgroundColor: "#FFFFFF",
    borderRadius: "50%",
    color: "secondary.main",
    top: "-.5rem",
    right: "-1rem",
    transition: "all .2s ease",
    cursor: "pointer",
    "&:hover": {
      color: "secondary.light",
      boxShadow: "0 0 5pt 1pt #e0e0e0",
    },
  },
  desc: {
    fontFamily: "Roboto",
    fontSize: ".9rem",
    fontWeight: 300,
    textAlign: "center",
    paddingBottom: "2rem",
    opacity: 0.5,
  },
  StepperRppt: {
    display: "flex",
    flexDirection: "column",
    paddingTop: { xs: "2rem", sm: "4rem" },
    // alignItems: "center",
  },
  Logo: {
    fontSize: { xs: "2rem", sm: "3rem" },
    color: "#FE3F61",
  },
  LogoName: {
    fontFamily: "Gotham",
    fontSize: { xs: "1.5rem", sm: "2.4rem" },
    color: "#000000",
    letterSpacing: "-3px",
  },
  TitleHead: {
    fontFamily: "Roboto",
    fontStyle: "italic",
    fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
    textTransform: "uppercase",
    textAlign: "center",
    width: "100%",
    paddingBottom: { xs: "2rem", sm: "5rem" },
  },
  label: {
    fontFamily: "Roboto",
    fontSize: "1rem",
    textTransform: "capitalize",
    fontWeight: 500,
  },
  Gridroot: {
    "& > .MuiGrid-item": {
      display: "flex",
      justifyContent: { xs: "flex-start", sm: "flex-start" },
      // alignItems: { xs: "center", sm: "flex-start" },
    },
  },
  TextField: {
    borderRadius: "10px",
    paddingBottom: { xs: "1rem", sm: "0" },
    "& textarea": {
      borderRadius: "10px !important",
    },
    "& textarea:valid ~ fieldset": {
      borderColor: "#fe3f61 !important",
      borderWidth: 2,
    },
    "& label.Mui-focused": {
      color: "secondary.main",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#505965",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "secondary.main",
      },
    },
    "& fieldset": {
      borderRadius: "10px",
    },
  },
};
