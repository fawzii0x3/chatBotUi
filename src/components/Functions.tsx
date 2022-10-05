import { Box, Card, Typography } from "@mui/material";
import React, { useLayoutEffect, useRef, useState } from "react";
import { dragingExisting, TouchingExisting } from "../hooks/dragingFc";

const OutPut: React.FC<{ children: string }> = ({ children }) => {
  return (
    <Box
      sx={{
        textAlign: "end",
        position: "relative",
        userSelect: "none",
      }}
    >
      {children.split(" ").map((itm: string, key: number) => {
        return (
          <Typography variant="body2" key={key} sx={{ userSelect: "none" }}>
            {itm}
          </Typography>
        );
      })}
      <Box
        onClickCapture={(e)=>{
          console.log(e)
         
        }}
        sx={{
          position: "absolute",
          top: 3.5,
          right: -8,
          display: "inline-block",
          borderTop: "7px solid transparent",
          borderBottom: "7px solid transparent",
          borderLeft: "7px solid blue",
          "&:hover":{
            filter:"contrast(175%) brightness(3%)"
          }
        }}
      ></Box>
    </Box>
  );
};
const Functions: React.FC<{
  position: number[];
  arr: string[];
  Name: string;
  id: string;
  InPort?: boolean;
  setEditTab?: any;
  editTab?: any;
  setCards?: any;
  borderPosition?: number[];
  border?: any;
  auxMode?: { modeOn: boolean; opacity: number };
}> = ({
  position,
  arr = ["next"],
  Name,
  InPort = true,
  setEditTab,
  id,
  editTab,
  setCards,
  borderPosition = [0, 0],
  border,
  auxMode = { modeOn: false, opacity: 0.7 },
}) => {
  const [elmentWidth, setelmentWidth] = useState(0);
  const [elmentHeight, setelmentHeight] = useState(0);
  const element = useRef<any>(null);
  useLayoutEffect(() => {
    setelmentHeight(element.current.offsetHeight);
    setelmentWidth(element.current.offsetWidth);
  }, []);
  return (
    <>
      <Card
        ref={element}
        variant="outlined"
        sx={{
          position: auxMode.modeOn ? "fixed" : "absolute",
          top: position[1],
          left: position[0],
          width: 150,
          height: "auto",
          overflow: "visible",
          border: auxMode.modeOn
            ? "1px solid rgba(0, 0, 0, 0.12)"
            : editTab.elemId === id
            ? "#000 dashed 1px"
            : "1px solid rgba(0, 0, 0, 0.12)",
          opacity: auxMode.modeOn ? auxMode.opacity : 1,
          zIndex: auxMode.modeOn ? 4 : editTab.elemId === id ? 3 : 2,
        }}
      >
        <Box
          onTouchMove={(e) => {
            if (!auxMode.modeOn) {
              TouchingExisting(
                e,
                id,
                setCards,
                borderPosition[1],
                borderPosition[0],
                elmentWidth,
                elmentHeight,
                border
              );
            }
          }}
          onDragStart={(e) => {
            if (!auxMode.modeOn) {
              e.dataTransfer.setDragImage(new Image(), e.screenX, e.screenY);
            }
          }}
          onDragCapture={(e) => {
            if (!auxMode.modeOn) {
              dragingExisting(
                e,
                id,
                setCards,
                borderPosition[1],
                borderPosition[0],
                elmentWidth,
                elmentHeight,
                border
              );
            }
          }}
          draggable="true"
          onClickCapture={() => {
            if (!auxMode.modeOn) {
              setEditTab({ open: true, elemId: id });
            }
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: -8.5,
              display: InPort ? "block" : "none",
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: "blue",
            }}
          ></Box>
          <Box sx={{ padding: 1, overflow: "hidden" }}>
            <Typography variant="body1">{Name}</Typography>
          </Box>
          <Box sx={{ py: 1.5, backgroundColor: "#f5f5f5", width: "100%" }}>
            {arr.map((itm, idx) => {
              return <OutPut key={idx}>{itm}</OutPut>;
            })}
          </Box>
        </Box>
      </Card>
    </>
  );
};

export { Functions, OutPut };
