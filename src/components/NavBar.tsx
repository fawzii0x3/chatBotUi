import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { companieName } from "../DefaultData";
import SaveIcon from "@mui/icons-material/Save";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import React from "react";

const NavBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        height: "10vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Box>
        <Typography variant="h6" sx={{ color: "#fff" }}>
          {companieName}
        </Typography>
      </Box>
      <Box>
        <ButtonGroup>
          <Button
            startIcon={<SaveIcon />}
            size="medium"
            variant="contained"
            color="primary"
          >
            Save
          </Button>
          <Button
            startIcon={<RocketLaunchIcon />}
            size="medium"
            variant="contained"
            color="success"
          >
            Publish
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default NavBar;
