import { Container, Divider, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Feedbacks() {
  return (
    <Container maxWidth="xl" sx={classes.root}>
      <Grid container spacing={3}>
        {feedbacks.map((feedback, index) => (
          <Grid key={index} item xs={12} md={4}>
            <Feedback feedback={feedback} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
const Feedback = ({ feedback }) => {
  return (
    <Stack direction="column" spacing={2} sx={classes.feedbackBox}>
      <Typography sx={classes.matchName}>{feedback.matchName}</Typography>
      <Divider />
      <Typography sx={classes.desc}>{feedback.desc}</Typography>
    </Stack>
  );
};

const classes = {
  root: {
    py: "2rem",
    background: "#FFFFFF",
    boxShadow: "inset 0px 10px 7px -5px rgb(124 133 145 / 77%)",
  },
  feedbackBox: {
    border: "1px solid #d4d8de",
    borderRadius: "8px",
    p: "1rem",
    boxShadow: "0 2px 6px 0 rgb(101 110 123 / 14%)",
    overflow: "auto",
  },
  matchName: {
    fontFamily: "Roboto",
    fontWeight: "900",
    fontSize: "1.2rem",
  },
  desc: {
    fontFamily: "Roboto",
    color: "#505965",
    whiteSpace: "pre-wrap",
    fontWeight: "300",
  },
};

const feedbacks = [
  {
    matchName: "Biggy & Roberta",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ab suscipit quos impedit repellat sed iure explicabo at assumenda aspernatur, nemo rem aperiam quia reprehenderit ipsam quo. Accusantium, magni asperiores.",
  },
  {
    matchName: "Biggy & Roberta",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ab suscipit quos impedit repellat sed iure explicabo at assumenda aspernatur, nemo rem aperiam quia reprehenderit ipsam quo. Accusantium, magni asperiores.",
  },
  {
    matchName: "Biggy & Roberta",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ab suscipit quos impedit repellat sed iure explicabo at assumenda aspernatur, nemo rem aperiam quia reprehenderit ipsam quo. Accusantium, magni asperiores.",
  },
];
