import classNames from "classnames";
import React from "react";
import { Props } from "../gloabal";

interface BgProps extends Props {}

const BackGround:React.FC<BgProps> = ({ children }) => {
  const BgCls = classNames({'bg-repeat':true},'bg-[length:40px]' ,'h-screen','w-screen');
  return <div className={BgCls} style={{backgroundImage : `url("./dotBg.png")` ,boxSizing:"border-box"}}>{children}</div>;
};

export default BackGround;
