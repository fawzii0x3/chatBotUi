import React  from "react";

const Canvas:React.FC<any> = ({border,children}) => {
  
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
      {children}
    </div>
  );
};

export default Canvas;
