import { Box, List} from "@mui/material";
import React from "react";

const ItemList: React.FC<any> = ({ border, children }) => {
  return (
    <>
      <List
        sx={{
          width: "100%",
          overflowY:'auto',
          overflowX:'hidden',
          bgcolor: "primary",
          maxHeight: "85vh",
          
        }}
        component="nav"
      >
        <h1>Blocks</h1>
        <span>Drag a Block to the right:</span>
        <Box sx={{display:"flex",flexDirection:'column',gap:2,margin:'15px'}}>{children}</Box>
      </List>
    </>
  );
};

export default ItemList;
