import { Stack, Box, Typography } from "@mui/material";
import React from "react";
import {
  MessageIconLeft,
  MessageIconRight,
} from "../../Home/ContentFactory/IconFactory";
export default function Messages() {
  return <NoMessages />;
}

const NoMessages = () => {
  return (
    <Stack direction="column" spacing={2} alignItems="center">
      <Box display="flex" pt="2rem" position="relative">
        <MessageIconLeft sx={classes.msgIconLeft} />
        <MessageIconRight sx={classes.msgIconRight} className="tilte-up" />
      </Box>

      <Typography sx={classes.title} paragraph>
        Say Hello
      </Typography>
      <Typography sx={classes.desc}>
        Looking to strike up a conversation? When you match with others, you can
        send them a message under “Matches”
      </Typography>
    </Stack>
  );
};

const classes = {
  msgIconLeft: {
    fontSize: "10rem",
    transform: "rotateY(180deg) translateX(20px)",
  },
  msgIconRight: {
    position: "absolute",
    fontSize: "5rem",
    right: "-15px",
    bottom: "0",
    borderRadius: "50% 0 0 50%",
    paddingLeft: ".6rem",
    paddingTop: ".3rem",
    overflow: "visible",
    background: "#FFFFFF",
  },
  desc: {
    fontFamily: "Roboto",
    fontSize: "1rem",
    fontWeight: 300,
    textAlign: "center",
    opacity: 0.6,
  },
  title: {
    fontFamily: "Roboto",
    fontSize: "1.7rem",
    fontWeight: 500,
    textAlign: "center",
  },
};
