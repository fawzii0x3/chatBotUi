import { Box } from "@mui/material";
import React from "react";
import "../App.css";
import { httpSubmitContent } from "../hooks/requests";

type NavProps = {
  Name: string;
  CompanyName: string;
  content?: any;
};

const NavBar: React.FC<NavProps> = ({ Name, CompanyName, content }) => {
  return (
    <Box sx={{display:"flex",backgroundColor:'#fff'}}>
      <div>
        <h1>{Name}</h1>
        <span>By {CompanyName}</span>
      </div>
      <div>
        <button>☀️</button>
        <button onClick={() => httpSubmitContent(content)}>Save 💾</button>
        <button>Publish 🚀</button>
      </div>
    </Box>
  );
};

export default NavBar;
