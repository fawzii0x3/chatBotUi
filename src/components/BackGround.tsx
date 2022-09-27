import { Box } from "@mui/material";
import React from "react";
import { Props } from "../gloabal";

interface BgProps extends Props {}

const BackGround: React.FC<BgProps> = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url("./dotBg.png");`,
        width: "100%",
        height: "98vh",
        backgroundSize: "40px",
        backgroundRepeat: 'repeat',
      }}
    >
      {children}
    </Box>
  );
};

export default BackGround;
