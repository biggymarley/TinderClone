import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  Container,
  Grid,
  Stack,
  Typography
} from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <footer style={classes.Footer}>
      <Container maxWidth="lg">
        <Grid container>
          {contents.map((content, index) => (
            <Grid item key={index} sx={{ flexGrow: 1 }}>
              <Typography sx={classes.headTitle} paragraph>
                {content.head}
              </Typography>
              <Stack
                direction={content.isIcon ? {xs: 'column', sm:"row" }: "column"}
                spacing={1}
                sx={{ paddingBottom: { xs: "2rem", sm: 0 } }}
              >
                {content?.items?.map((item, index) =>
                  content.isIcon ? (
                    <a href="/" key={index}>
                      {item.label}
                    </a>
                  ) : (
                    <Typography key={index} sx={classes.links}>
                      {item.label}
                    </Typography>
                  )
                )}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </footer>
  );
}

const classes = {
  Footer: {
    padding: "3rem 0",
    background: "linear-gradient(225deg,#ff6036,#fd267a)",
  },
  headTitle: {
    fontSize: "1.2rem",
    fontFamily: "Roboto",
    fontWeight: "900",
    textTransform: "uppercase",
    color: "#FFFFFF",
  },
  links: {
    color: "#FFFFFF",
    fontFamily: "Montserrat",
    fontSize: ".9rem",
  },
  icon: { color: "#FFFFFF", fontSize: "30px" },
};

const contents = [
  {
    head: "LEGAL",
    items: [
      {
        label: "Privacy",
        link: "",
      },
      {
        label: "Terms",
        link: "",
      },
      {
        label: "Cookie Policy",
        link: "",
      },
      {
        label: "Intellectual Property",
        link: "",
      },
    ],
  },
  {
    head: "Team",
    items: [
      {
        label: "Ayoub FARAGI",
        link: "",
      },
      {
        label: "Omar BOULLAM",
        link: "",
      },
    ],
  },
  {
    head: "SOCIAL",
    isIcon: true,
    items: [
      {
        label: <InstagramIcon sx={classes.icon} />,
        link: "",
      },
      {
        label: <LinkedInIcon sx={classes.icon} />,
        link: "",
      },
      {
        label: <GitHubIcon sx={classes.icon} />,
        link: "",
      },
      {
        label: <TwitterIcon sx={classes.icon} />,
        link: "",
      },
    ],
  },
  {
    head: "",
    items: [
      {
        label: "FAQ",
        link: "",
      },
      {
        label: "Terms",
        link: "",
      },
      {
        label: "Cookie Policy",
        link: "",
      },
      {
        label: "Intellectual Property",
        link: "",
      },
    ],
  },
];
