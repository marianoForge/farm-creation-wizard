import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import "../styles/Layout.css";
import ProgressBar from "./ProgressBar";

const Footer = () => {
  return (
    <>
      <ProgressBar />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className="app-footer__toolbar">
            <Typography variant="body2">
              2022 - Farm Modules - All Rights Reserved
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Footer;
