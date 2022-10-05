import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { Functions } from "./Functions";
import MessageIcon from "@mui/icons-material/Message";
import Message from "./Message";
interface cards {
  InPort?: boolean;
  Name: string;
  Message: string;
  functionality: string;
  OutputPort: string[];
  position: number[];
  connection: number[];
  id: string;
}

const Canvas: React.FC<{
  borderWidth: number;
  borderheight: number;
  Cards: cards[];
  setEditTab: any;
  editTab: any;
  setCards: any;
  borderPosition: number[];
  border?: any;
}> = ({
  borderWidth,
  borderheight,
  Cards,
  setEditTab,
  editTab,
  setCards,
  borderPosition,
  border,
}) => {
  const [openMessage, setopenMessage] = useState(false);
  return (
    <Box
      onClickCapture={(e) => {
        setEditTab((prv: any) => {
          return { ...prv, elemId: "-1", open: false };
        });
      }}
      sx={{
        width: 20000,
        height: 20000,
        position: "relative",
        backgroundImage: "url(./dotBg.png);",
        backgroundRepeat: "repeat",
        backgroundSize: "40px",
      }}
    >
      <Box
        sx={{
          width: "fit-content",
          height: "fit-content",
          position: "sticky",
          left: borderWidth - 100,
          top: borderheight - 80,
          transformOrigin: "bottom left",
          zIndex:8
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Button
            onClick={() => setopenMessage((prev) => !prev)}
            color="primary"
            variant="contained"
            sx={{ height: 60, width: 60, borderRadius: "50%" }}
          >
            <MessageIcon />
          </Button>
          {openMessage ? <Message /> : ""}
        </Box>
      </Box>
      <Box>
        {Cards.map(({ position, Name, OutputPort, InPort, id }, idx) => {
          return (
            <Functions
              key={idx}
              position={position}
              Name={Name}
              arr={OutputPort}
              InPort={InPort}
              id={id}
              setEditTab={setEditTab}
              editTab={editTab}
              setCards={setCards}
              borderPosition={borderPosition}
              border={border}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Canvas;
