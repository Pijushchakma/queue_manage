import { LogOut } from "lucide-react";
import React from "react";
import Qbot_logo from "../assets/images/Qbot_logo.png";
function Header() {
  return (
    <div className=" shadow-md  h-[80px] border border-b-slate-300">
      <div className="container mx-auto flex  h-full items-center justify-between content-center">
        <img
          src={Qbot_logo}
          alt="qbot_logo"
          className=" h-3/4 cursor-pointer"
        />
        <div className="flex gap-2 items-end">
          <p className=" text-[#999]"> User Name </p>
          <LogOut
            strokeWidth={2.5}
            size={20}
            className=" cursor-pointer"
            color="#b30000"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
