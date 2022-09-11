import classNames from "classnames";
import React, { useRef } from "react";
import { dragingExisting } from "../hooks/dragingFc";

const OutPort: React.FC<any> = ({ outTxt ,id}) => {
  const outCls = classNames();
  return (
    <div className={outCls} onClick={(e)=>{console.log(id)}}>
      <h1>{outTxt}</h1>
      <div className="outBullet"></div>
    </div>
  );
};

const Functions: React.FC<any> = ({ InputPort, OutputPort, Message,pose='absolute',position,opacity=1 ,id,setcards,border}) => {
  const outorCls = classNames(
    "border",
    "border-slate-600",
    "w-fit",
    pose
  );
  const NameCls = classNames("p-4", "bg-white");
  const PortCls = classNames("bg-slate-50");
  const InBullet = classNames("bg-slate-300", "h-[15px]", "w-[15px]");
    const elem = useRef<any>()
  return (
    <div ref={elem} className={outorCls} style={{top:position[1],left:position[0],opacity:opacity,zIndex:3}} draggable={true}
    onDragEnd={(e)=>{
      dragingExisting(e,id,setcards,border,elem)
    }}>
      <div className={NameCls}>
        <h1>{Message}</h1>
      </div>
      <div className={PortCls}>
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
        {OutputPort.map((itm: any, idx: number) => {
          return <OutPort key={idx} outTxt={itm} id={id+((idx+1)*.1)} />;
        })}
      </div>
    </div>
  );
};

export default Functions;
