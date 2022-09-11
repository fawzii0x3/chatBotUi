import React, { useRef, useState } from "react";
import "./App.css";
import BackGround from "./components/BackGround";
import Canvas from "./components/Canvas";
import ItemList from "./components/ItemList";
import NavBar from "./components/NavBar";
import { ItemsProps } from "./gloabal";
import Items from "./items";
import ItemCrad from "./components/ItmsCard";
import Functions from "./components/Functions";

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
  return (
    <>
      <BackGround>
        <NavBar Name={"MyBot"} CompanyName={"BotFlow"}></NavBar>
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
        <Canvas content={content} border={border}>
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
        </Canvas>
      </BackGround>
    </>
  );
}

export default App;
