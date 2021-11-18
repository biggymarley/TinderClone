import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
// xs={content.grid.xs} sm={content.grid.sm}
export default function Footer() {
  return (
    <footer style={classes.Footer}>
      <Container maxWidth="lg">
        <Grid container>
          {contents.map((content, index) => (
            <Grid item key={index} sx={{ flexGrow: 1 }} md={content.grid.md}>
              <Typography sx={classes.headTitle} paragraph>
                {content.head}
              </Typography>
              {content.isIcon ? (
                <SocialIcons content={content} />
              ) : (
                <Links content={content} />
              )}
            </Grid>
          ))}
        </Grid>
      </Container>
    </footer>
  );
}

const SocialIcons = ({ content }) => {
  return (
    <Grid container spacing={2}>
      {content?.items?.map((item, index) => (
        <Grid item sx={classes.links} key={index} >
          <a href={item.link} style={classes.icon}>
            {item.label}
          </a>
        </Grid>
      ))}
    </Grid>
  );
};

const Links = ({ content }) => {
  return (
    <Stack
      direction="column"
      spacing={1}
      sx={{ paddingBottom: { xs: "2rem", sm: 0 } }}
    >
      {content?.items?.map((item, index) => (
        <Typography sx={classes.links} key={index}>
          {item.label}
        </Typography>
      ))}
    </Stack>
  );
};

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
    grid: {
      xs: 12,
      sm: 6,
      md: 3,
    },
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
    grid: {
      xs: 12,
      sm: 6,
      md: 3,
    },
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
    grid: {
      xs: 12,
      sm: 6,
      md: 3,
    },
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
        link: "https://github.com/biggymarley/TinderClonePreview",
      },
      {
        label: <TwitterIcon sx={classes.icon} />,
        link: "",
      },
    ],
  },
  {
    head: "",
    grid: {
      xs: 12,
      sm: 6,
      md: 3,
    },
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
