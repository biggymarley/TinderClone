import { Stack, Box, Typography, Fade } from "@mui/material";
import React from "react";

export default function Matches() {
  return <NoMatches />;
}

const NoMatches = () => {
  return (
    <Fade in={true}>
    <Stack
      direction="column"
      spacing={6}
      alignItems="center"
      sx={{ pt: "2rem" }}
    >
      <Box sx={classes.Box} className="animate-it"></Box>
      <div>
      <Typography sx={classes.title} paragraph>Start Matching</Typography>
      <Typography sx={classes.desc}>
        Matches will start appear here once you start to Like people you can
        message them directly from here when your ready to spark up the
        conversation
      </Typography>
      </div>
    </Stack>
    </Fade>
  );
};

const classes = {
  Box: {
    width: "8rem",
    height: "10rem",
    background: "linear-gradient(225deg,#ff6036,#fd267a)",
    borderRadius: "10px",
    boxShadow:
      "rgba(216, 216, 216, 0.4) 5px 5px, rgba(216, 216, 216, 0.3) 10px 10px, rgba(216, 216, 216, 0.2) 15px 15px, rgba(216, 216, 216, 0.1) 20px 20px, rgba(216, 216, 216, 0.05) 25px 25px",
  },
  desc: {
    fontFamily: "Roboto",
    fontSize: "1rem",
    fontWeight: 300,
    textAlign:"center",
    opacity:.6
  },
  title: {
    fontFamily: "Roboto",
    fontSize: "1.7rem",
    fontWeight: 500,
    textAlign:"center",
  },
};
