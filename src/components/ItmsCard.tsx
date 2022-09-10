import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useState } from "react";
import { ItemsProps } from "../gloabal";
import Functions from "./Functions";
import {dragEnd,dragStart,dragOn} from '../hooks/dragingFc'

const ItemCrad: React.FC<ItemsProps | any> = ({
  Name,
  Description,
  Logo,
  border,
  schema = { exist: false },
  setcards,
}) => {
  const CradCls = classNames(
    "grid",
    "grid-cols-5",
    "gap-1.5",
    "bg-white",
    "rounded",
    "h-[96px]"
  );
  const logoCls = classNames("flex", "items-center", "justify-center");
  const describeCls = classNames("col-span-4");
  const [auxCard, setauxCard] = useState(schema);

  return (
    <div
      draggable="true"
      onDragStart={(e) => {
        dragStart(e,setauxCard,border);
      }}
      onDrag={(e) => {
        dragOn(e,setauxCard,border);
      }}
      onDragEnd={(e) => {
        dragEnd(e,setauxCard,border,setcards,auxCard);
      }}
      className={CradCls}
    >
      <div className={logoCls}>
        <FontAwesomeIcon icon={Logo} />
      </div>
      <div className={describeCls}>
        <h1>{Name}</h1>
        <span>{Description}</span>
      </div>
      {auxCard.exist ? <Functions {...auxCard} pose="fixed" /> : ""}
    </div>
  );
};

export default ItemCrad;
