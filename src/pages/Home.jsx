import React from "react";
import DashBoard from "../components/DashBoard";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import SnackBar from "../components/SnackBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* .......... Body starts...... */}
      <div className="flex-grow flex">
        <div className="flex">
          <SideBar />
        </div>
        <div className="flex-grow bg-[#F7F7F7]">
          <DashBoard />
        </div>
      </div>
      {/* .......... Body ends...... */}
      {/* <div className="bg-yellow-50 h-[50px]">footer</div> */}
      <SnackBar message={"Hello from Home"} type={"Sucess"} />
    </div>
  );
}
