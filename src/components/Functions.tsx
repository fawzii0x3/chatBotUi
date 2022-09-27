import React, { useRef } from "react";
import { Box } from "@mui/material";
import { dragingExisting } from "../hooks/dragingFc";

const OutPort: React.FC<any> = ({ outTxt, id, connection }) => {
  return (
    <Box
      sx={{
        marginY: 1,
        paddingY: 0.5,
        width: "108%",
        textAlign: "end",
      }}
      onClick={()=>{
      }}
    >
      <h4 className="outLine" style={{ display: "inline-block" }}>
        {outTxt}
      </h4>
    </Box>
  );
};

const Functions: React.FC<any> = ({
  Inport,
  OutputPort,
  Message,
  pose = "absolute",
  position,
  opacity = 1,
  id,
  setcards,
  border,
  connection,
}) => {
  const elem = useRef<any>();
  return (
    <>
      <Box
        ref={elem}
        sx={{
          width: 190,
          position: pose,
          '&::before':{
            display:Inport?'block':'none'
          }
        }}
        style={{
          top: position[1],
          left: position[0],
          opacity: opacity,
          zIndex: 3,
        }}
        draggable={true}
        onDragStart={(e) => {
          e.dataTransfer.setDragImage(new Image(), 0, 0);
        }}
        onDrag={(e) => {
          dragingExisting(e, id, setcards, border, elem);
        }}
        onClick={()=>{
          
        }}
        className="function"
      >
        <Box
          sx={{
            paddingY:0.5,
            paddingLeft:0.5,
            width: "100%",
            backgroundColor: "#e3f2fd",
          }}
        >
          <h4>{Message}</h4>
        </Box>
        <Box
          sx={{
            backgroundColor: "#e3ffff",
            paddingY: 0.8,
          }}
        >
          {OutputPort.map((elm: any, idx: number) => {
            return (
              <OutPort
                outTxt={elm}
                key={idx}
                id={id + (idx + 1) * 0.1}
                connection={connection}
              />
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Functions;
