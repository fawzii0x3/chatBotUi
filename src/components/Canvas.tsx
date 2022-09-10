import React  from "react";
import Functions from "./Functions";

const Canvas:React.FC<any> = ({content,border}) => {
  
  return (
    <div
    ref={border}
      style={{
        position:'fixed',
        top:'12vh',
        left:'320px',
        overflowY: "auto",
        border: "1px solid black",
        width: "200000px",
        height: "200000px",
      }}
    >
      {content.map((itm:any,idx:number)=>{
        return <Functions key={idx}  {...itm}/>
      })}
    </div>
  );
};

export default Canvas;
