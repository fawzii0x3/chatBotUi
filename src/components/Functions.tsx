import classNames from "classnames";
import React from "react";

const OutPort: React.FC<any> = ({ outTxt }) => {
  const outCls = classNames();
  return (
    <div className={outCls}>
      <h1>{outTxt}</h1>
      <div className="outBullet"></div>
    </div>
  );
};

const Functions: React.FC<any> = ({ InputPort, OutputPort, Message,pose='absolute',position,opacity=1 }) => {
  const outorCls = classNames(
    "border",
    "border-slate-600",
    "w-fit",
    pose
  );
  const NameCls = classNames("p-4", "bg-white");
  const PortCls = classNames("bg-slate-50");
  const InBullet = classNames("bg-slate-300", "h-[15px]", "w-[15px]");

  return (
    <div className={outorCls} style={{top:position[1],left:position[0],opacity:opacity,zIndex:3}}>
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
          return <OutPort key={idx} outTxt={itm} />;
        })}
      </div>
    </div>
  );
};

export default Functions;
