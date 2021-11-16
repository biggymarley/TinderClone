import { Box } from "@mui/system";
import React from "react";
import { StickyHeader } from "../Header/Header";
import InnerHome from "./InnerHome";
import homebg from '../../../assets/imgs/homebg.webp'
export default function HomePage() {
  return (
    <Box sx={classes.HomePage}>
      <Box sx={classes.FrontBgColor}>
        <StickyHeader />
        <InnerHome />
      </Box>
    </Box>
  );
}

const classes = {
  HomePage: {
    height: "100vh",
    backgroundImage: `url(${homebg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment:"fixed",
    backgroundPosition: "50%",
    boxShadow:'0 2px 6px 0 rgb(124 133 145 / 77%)',
  },
  FrontBgColor: {
    backgroundColor: "rgba(0,0,0,.4)",
    width: "100%",
    height: "100%",
    position: "relative",
    WebkitBoxShadow: {xs:"inset 0px -28vh 50vh -16px #000000", lg:'none'},
    boxShadow: {xs:"inset 0px -28vh 50vh -16px #000000", md:'none'},
  },
};
