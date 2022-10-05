import { Box, Card, Typography } from "@mui/material";

import React, { useState } from "react";
import { dragEnd, dragOn, dragStart } from "../hooks/dragingFc";
import Items from "../items";
import { Functions } from "./Functions";

const ItemsCard: React.FC<{
  itemsTab: boolean;
  border: any;
  setCards: any;
  cards: any;
}> = ({ itemsTab, border, setCards, cards }) => {
  const [auxCard, setauxCard] = useState<any>({ exist: false });
  return (
    <>
      {Items.map(({ Logo, Name, bgColor, Description, schema }, idx) => {
        return itemsTab ? (
          <Card
            onDragStart={(e) => {
              dragStart(e, setauxCard, schema, cards, Name);
            }}
            onDrag={(e) => {
              dragOn(e, setauxCard, border);
            }}
            onDragEnd={(e) => {
              dragEnd(e, setauxCard, border, setCards, auxCard);
            }}
            draggable={true}
            sx={{
              color: "#fff",
              backgroundColor: "#fff",
              mb: 2,
              display: "flex",
              height: 80,
            }}
            key={idx}
          >
            <Box
              sx={{
                width: "30%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{ backgroundColor: bgColor, padding: 0.5, borderRadius: 2 }}
              >
                <Logo />
              </Box>
            </Box>
            <Box sx={{ width: "70%", pt: 0.5, pl: 0.5 }}>
              <Typography variant="body2" color={"MenuText"}>
                {Name}
              </Typography>
              <Typography variant="caption" color={"InfoText"}>
                {Description}
              </Typography>
            </Box>
          </Card>
        ) : (
          <Box
            key={idx}
            draggable={true}
            sx={{
              color: bgColor,
              my: 1.4,
              textAlign: "center",
            }}
            onDragStart={(e) => {
              dragStart(e, setauxCard, schema, cards, Name);
            }}
            onDrag={(e) => {
              dragOn(e, setauxCard, border);
            }}
            onDragEnd={(e) => {
              dragEnd(e, setauxCard, border, setCards, auxCard);
            }}
          >
            {<Logo titleAccess={Name} />}
          </Box>
        );
      })}
      {auxCard.exist ? (
        <Functions
          Name={auxCard.Name}
          arr={auxCard.OutputPort}
          id={auxCard.id}
          position={auxCard.position}
          auxMode={{ modeOn: true, opacity: auxCard.opacity }}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default ItemsCard;
