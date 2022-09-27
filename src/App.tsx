import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import BackGround from "./components/BackGround";
import ItemList from "./components/ItemList";
import NavBar from "./components/NavBar";
import { ItemsProps } from "./gloabal";
import Items from "./items";
import ItemCrad from "./components/ItmsCard";
import Functions from "./components/Functions";
import { httpGetContent } from "./hooks/requests";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import ChatBox from "./components/ChatBox";
function App() {
  const border = useRef();

  const [content, setcontent] = useState([
    {
      InPort: false,
      Message: "Hello there 👋",
      OutputPort: ["next"],
      position: [10, 10],
      connection: [1],
      id: 0,
    },
    {
      Inport: true,
      Message: "hi",
      Name: "Message",
      OutputPort: ["next"],
      connection: [],
      exist: true,
      id: 1,
      opacity: 1,
      pose: "absolute",
      position: [529, 172],
    },
  ]);
  useEffect(() => {
    httpGetContent("items")
      .then((e) => {
        const wrd = JSON.parse(e ? e : "");
        if (wrd) {
          setcontent(wrd);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const [test, setTest] = useState(false);
  const [chat, setChat] = useState(false);
  return (
    <BackGround>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid xs={12}>
            <NavBar
              Name={"MyBot"}
              CompanyName={"BotFlow"}
              content={content}
            ></NavBar>
          </Grid>
          <Grid xs={2.2}>
            <ItemList border={border}>
              {Items.map((itm: ItemsProps, idx) => {
                return (
                  <ItemCrad
                    key={idx}
                    {...itm}
                    border={border}
                    setcards={setcontent}
                  />
                );
              })}
            </ItemList>
          </Grid>
          <Grid
            onClick={() => {
              setTest(false);
            }}
            xs={test ? 7.8 : 9.8}
          >
            <Box
              sx={{ width: "100%", height: "85vh", overflow: "auto" }}
              className="MuiTabs-scroller"
            >
              <Box
                ref={border}
                sx={{
                  width: 2000,
                  height: 2000,
                  margin: 0,
                  position: "relative",
                }}
              >
                {content.map((itm: any, idx: number) => {
                  return (
                    <Functions
                      key={idx}
                      {...itm}
                      setcards={setcontent}
                      border={border}
                    />
                  );
                })}
              </Box>
            </Box>
          </Grid>
          <Grid xs sx={{ display: test ? "block" : "none" }}>
            <h2>xs=2</h2>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ position: "fixed", right: 74, bottom: 74, zIndex: 99 }}>
        {chat ? <ChatBox /> : ""}
        <Box
          onClick={() => {
            setChat((prev) => {
              return !prev;
            });
          }}
          sx={{
            width: "24px",
            height: "24px",
            padding: 2,
            backgroundColor: "#2196f3",
            borderRadius: "50%",
            color: "#eee",
            "&:hover": {
              filter: "brightness(105%);",
            },
          }}
        >
          <InsertCommentIcon />
        </Box>
      </Box>
    </BackGround>
  );
}

export default App;
