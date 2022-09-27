import React, { useState } from "react";
import { ItemsProps } from "../gloabal";
import Functions from "./Functions";
import { dragEnd, dragStart, dragOn } from "../hooks/dragingFc";
import { Box, Card } from "@mui/material";

const ItemCrad: React.FC<ItemsProps | any> = ({
  Name,
  Description,
  Logo,
  border,
  schema = { exist: false },
  setcards,
}) => {
  const [auxCard, setauxCard] = useState(schema);
  return (
    <Card
      draggable="true"
      onDragStart={(e) => {
        dragStart(e, setauxCard, border);
      }}
      onDrag={(e) => {
        dragOn(e, setauxCard, border);
      }}
      onDragEnd={(e) => {
        dragEnd(e, setauxCard, border, setcards, auxCard);
      }}
      sx={{ display: "flex", height: 100, width: 200 }}
    >
      <Box
        sx={{
          backgroundColor: "green",
          margin: "auto 10px",
          borderRadius: 0.5,
          padding: 1,
          color:'#eceff1'
        }}
      >
        {<Logo></Logo>}
      </Box>
      <Box>
        <h4>{Name}</h4>
        <h6>{Description}</h6>
      </Box>
      {auxCard.exist ? <Functions {...auxCard} pose="fixed" /> : ""}
    </Card>
  );
};

export default ItemCrad;
