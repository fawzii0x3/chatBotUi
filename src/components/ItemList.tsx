import classNames from "classnames";
import React, { useState } from "react";

const ItemList: React.FC<any> = ({ border, children }) => {
  const [Open, setOpen] = useState<boolean>(false);
  const ItemListCls = classNames(
    "overflow-auto",
    "md:w-[300px]",
    "md:h-[90vh]",
    "bg-slate-200",
    "fixed",
    "w-full",
    "h-[12vh]",
    { "translate-x-[-90%]": Open },'duration-300'
  );

  const CloseButton = classNames(
    "fixed",
    "top-[12vh]",
    "left-[310px]",
    "h-[20px]",
    "bg-slate-50"
  );
  const itemsCls = classNames("flex", "flex-row", "gap-20", "md:flex-col");

  return (
    <div className={ItemListCls} style={{ top: "10vh" }}>
      <div className={CloseButton}>
        <button
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          {Open ? "<<" : ">>"}
        </button>
      </div>
      <h1 className="md:block	hidden">Blocks</h1>
      <span className="md:block	hidden">Drag a Block to the right:</span>
      <div className={itemsCls}>{children}</div>
    </div>
  );
};

export default ItemList;
