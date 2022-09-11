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
      InPort: 0,
      Message: "Hello there 👋",
      OutputPort: ["next"],
      position: [10, 10],
      id:0
    },
  ]);
  console.log(border);
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
            return <Functions key={idx} {...itm} setcards={setcontent} border={border}/>;
          })}
        </Canvas>
      </BackGround>
    </>
  );
}

export default App;
