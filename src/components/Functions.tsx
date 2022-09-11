import classNames from "classnames";
import React, { useRef } from "react";
import { dragingExisting } from "../hooks/dragingFc";

const OutPort: React.FC<any> = ({ outTxt, id, connection }) => {
  const outCls = classNames();
  console.log(connection);
  return (
    <div
      className={outCls}
      onClick={(e) => {
        console.log(id);
      }}
    >
      <h1>{outTxt}</h1>
      <div className="outBullet"></div>
    </div>
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
  const outorCls = classNames("border", "border-slate-600", "w-fit", pose);
  const NameCls = classNames("p-4", "bg-white");
  const PortCls = classNames("bg-slate-50");
  const InBullet = classNames("bg-slate-300", "h-[15px]", "w-[15px]");
  const elem = useRef<any>();
  console.log(elem?.current?.children[1]?.children[0].children);
  return (
    <div
      ref={elem}
      className={outorCls}
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
    >
      <div className={NameCls}>
        <h1>{Message}</h1>
      </div>
      <div className={PortCls}>
        {OutputPort.map((itm: any, idx: number) => {
          return (
            <OutPort
              key={idx}
              outTxt={itm}
              id={id + (idx + 1) * 0.1}
              connection={connection}
            />
          );
        })}
        {Inport ? (
          <div
            className={InBullet}
            style={{
              width: "15px",
              borderRadius: "50%",
              position: "absolute",
              left: "-10px",
              top: "75%",
            }}
          ></div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Functions;
