import classNames from "classnames";
import React from "react";
import '../App.css'

type NavProps={
    Name:string
    CompanyName : string
}


const NavBar:React.FC<NavProps> = ({Name,CompanyName}) => {
  const navCLs = classNames('h-[10vh]','bg-slate-50','border-b','border-gray-800','border-solid','flex','items-center','px-20','justify-between','w-screen','fixed','top-0');
  const Left = classNames();
  const Right = classNames();
  return (
    <nav className={navCLs}>
      <div className={Left}>
        <h1>{Name}</h1>
        <span>By {CompanyName}</span>
      </div>
      <div className={Right}>
            <button>☀️</button>
            <button>Save 💾</button>
            <button>Publish 🚀</button>
      </div>
    </nav>
  );
};

export default NavBar;
