import { Box, Button, Card, Typography } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import React from "react";

const Message = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        position: "absolute",
        top: "-68vh",
        left: -401,
        height: "65vh",
        backgroundColor: "#fff",
        width: 400,
        borderRadius: 3,
      }}
    >
      <Box
        color="#fff"
        sx={{
          padding: "30px 20px 10px",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#121212",
        }}
      >
        <Typography variant="h6">Bot FLow</Typography>
        <Button sx={{ color: "#fff" }}>
          <CachedIcon />
        </Button>
      </Box>
      <Box></Box>
    </Card>
  );
};

export default Message;
