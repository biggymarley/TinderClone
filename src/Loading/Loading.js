import { Box } from "@mui/system";
import { Logo } from "../content/Home/ContentFactory/IconFactory";
import "./animation.css";

const Loading = () => {
  return (
    <Box sx={classes.Loading}>
      <Logo sx={{ fontSize: "5rem", color:"#FFFFFF" }} className="fadeUp" />
    </Box>
  );
};

export default Loading;

const classes = {
  Loading: {
    height: "100vh",
    width: "100wv",
    background: "linear-gradient(225deg,#ff6036,#fd267a)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
};
