import React from "react";
import { Box, Dialog } from "@mui/material";
import { useContext } from "react";
import { DialogContext } from "./HomeRoot";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function DialogUser() {
  const { DialogStatus, setDialogStatus } = useContext(DialogContext);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Dialog
      sx={classes.dialog}
      onClose={() => setDialogStatus(false)}
      open={DialogStatus}
      fullScreen={matches ? false : true}
    >
      <Box>sss</Box>
    </Dialog>
  );
}
const classes = {

};
