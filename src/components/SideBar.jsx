import {
  AudioLines,
  Bell,
  BookUser,
  Calendar,
  ChevronDown,
  ChevronUp,
  CircleUser,
  ClipboardMinus,
  Clock,
  Component,
  Copyright,
  Image,
  LayoutDashboard,
  ListTree,
  MessageSquareDiff,
  Monitor,
  MonitorSpeaker,
  Plus,
  Printer,
  Settings,
  Settings2,
  SquareKanban,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import React, { useState } from "react";
import Counter_logo from "../assets/images/counter.png";

function SideBar() {
  const [openMenus, setOpenMenus] = useState({});

  // Function to handle menu click
  const handleMenuClick = (menuId) => {
    // Toggle the open state of the clicked menu, while preserving the state of others
    setOpenMenus((prevOpenMenus) => ({
      ...prevOpenMenus,
      [menuId]: !prevOpenMenus[menuId], // Toggle current menu
    }));
  };
  return (
    <div className="h-full w-64  rounded-e-3xl shadow-lg  ">
      {/* .......... dashbaord starts........... */}
      <a
        href="/"
        class="flex items-center px-5 py-2.5 text-gray-500 hover:text-orange-600 group gap-2 "
      >
        <LayoutDashboard size={16} />
        <p className="text-sm">Dashboard</p>
      </a>
      {/*  ........dashbaord ends.......... */}

      {/*  ............Kiosk starts.......... */}
      <div className="w-full flex flex-col ">
        <div
          className={`w-full flex justify-between items-center px-5  hover:text-orange-600 group cursor-pointer  ${
            openMenus["Kiosk Management"] ? "text-blue-400" : "text-gray-500"
          }`}
          onClick={() => handleMenuClick("Kiosk Management")}
        >
          <div class="flex items-center py-2.5  gap-2 ">
            <SquareKanban size={16} />
            <p className="text-sm">Kiosk Management</p>
          </div>
          {openMenus["Kiosk Management"] ? (
            <ChevronUp size={16} className="cursor-pointer text-gray-500" />
          ) : (
            <ChevronDown size={16} className="cursor-pointer text-gray-500" />
          )}
        </div>
        {/*  ..........sub menu starts ....... */}
        {openMenus["Kiosk Management"] ? (
          <div className="ml-10 flex flex-col gap-2 bg-[#FAFAFA] py-2">
            <a
              href="/"
              class="flex items-center  text-gray-500 hover:text-orange-600 group gap-2 "
            >
              <Image size={16} />
              <p className="text-sm">Client Logo</p>
            </a>
            <a
              href="/"
              class="flex items-center  text-gray-500 hover:text-orange-600 group gap-2 "
            >
              <Copyright size={16} />
              <p className="text-sm">Client Name</p>
            </a>
            <a
              href="/"
              class="flex items-center  text-gray-500 hover:text-orange-600 group gap-2 "
            >
              <Calendar size={16} />
              <p className="text-sm">Time and Date</p>
            </a>
            <a
              href="/"
              class="flex items-center  text-gray-500 hover:text-orange-600 group gap-2 "
            >
              <Bell size={16} />
              <p className="text-sm">Import Notice</p>
            </a>
          </div>
        ) : null}
        {/*  ........sub menu ends.......... */}
      </div>
      {/*........ kiosk ends........... */}

      {/*  ............User management starts.......... */}
      <div className="w-full flex flex-col ">
        <div
          className={`w-full flex justify-between items-center px-5  hover:text-orange-600 group cursor-pointer  ${
            openMenus["User Management"] ? "text-blue-400" : "text-gray-500"
          }`}
          onClick={() => handleMenuClick("User Management")}
        >
          <div class="flex items-center py-2.5  gap-2 ">
            <User size={16} />
            <p className="text-sm">User Management</p>
          </div>
          {openMenus["User Management"] ? (
            <ChevronUp size={16} className="cursor-pointer text-gray-500" />
          ) : (
            <ChevronDown size={16} className="cursor-pointer text-gray-500" />
          )}
        </div>
        {/*  ..........sub menu starts ....... */}
        {openMenus["User Management"] ? (
          <div className="ml-10 flex flex-col gap-2 bg-[#FAFAFA] py-2">
            <a
              href="/"
              class="flex items-center  text-gray-500 hover:text-orange-600 group gap-2 "
            >
              <Users size={16} />
              <p className="text-sm">User List</p>
            </a>
            <a
              href="/"
              class="flex items-center  text-gray-500 hover:text-orange-600 group gap-2 "
            >
              <UserPlus size={16} />
              <p className="text-sm">Create User</p>
            </a>
            <a
              href="/"
              class="flex items-center  text-gray-500 hover:text-orange-600 group gap-2 "
            >
              <BookUser size={16} />
              <p className="text-sm">Create Role</p>
            </a>
          </div>
        ) : null}
        {/*  ........sub menu ends.......... */}
      </div>
      {/*........ User management ends........... */}

      {/*  ............Device Configuration starts.......... */}
      <div className="w-full flex flex-col ">
        <div
          className={`w-full flex justify-between items-center px-5 hover:text-orange-600 group cursor-pointer  ${
            openMenus["Device Configuration"]
              ? "text-blue-400"
              : "text-gray-500"
          }`}
          onClick={() => handleMenuClick("Device Configuration")}
        >
          <div class="flex items-center py-2.5  gap-2 ">
            <MonitorSpeaker size={16} />
            <p className="text-sm">Device Configuration</p>
          </div>
          {openMenus["Device Configuration"] ? (
            <ChevronUp size={16} className="cursor-pointer text-gray-500" />
          ) : (
            <ChevronDown size={16} className="cursor-pointer text-gray-500" />
          )}
        </div>
        {/*  ..........sub menu starts ....... */}
        {openMenus["Device Configuration"] ? (
          <div className="ml-10 flex flex-col gap-2 bg-[#FAFAFA] py-2">
            <a
              href="/"
              class="flex items-center  text-gray-500 hover:text-orange-600 group gap-2 "
            >
              <Monitor size={16} />
              <p className="text-sm">Counter Display Manage</p>
            </a>
            <a
              href="/"
              class="flex items-center  text-gray-500 hover:text-orange-600 group gap-2 "
            >
              <AudioLines size={16} />
              <p className="text-sm">Sound System</p>
            </a>
            <a
              href="/"
              class="flex items-center  text-gray-500 hover:text-orange-600 group gap-2 "
            >
              <Printer size={16} />
              <p className="text-sm">Printer</p>
            </a>
          </div>
        ) : null}
        {/*  ........sub menu ends.......... */}
      </div>
      {/*........Device Configuration ends........... */}

      {/*  ............Servce Module starts.......... */}
      <div className="w-full flex flex-col ">
        <div
          className={`w-full flex justify-between items-center px-5  hover:text-orange-600 group cursor-pointer  ${
            openMenus["Service Module"] ? "text-blue-400" : "text-gray-500"
          }`}
          onClick={() => handleMenuClick("Service Module")}
        >
          <div class="flex items-center py-2.5  gap-2 ">
            <Settings2 size={16} />
            <p className="text-sm">Service Module</p>
          </div>
          {openMenus["Service Module"] ? (
            <ChevronUp size={16} className="cursor-pointer text-gray-500" />
          ) : (
            <ChevronDown size={16} className="cursor-pointer text-gray-500" />
          )}
        </div>
        {/*  ..........sub menu starts ....... */}
        {openMenus["Service Module"] ? (
          <div className="ml-10 flex flex-col gap-2 bg-[#FAFAFA] py-2">
            <a
              href="/"
              class="flex items-center  text-gray-500 hover:text-orange-600 group gap-2 "
            >
              <Plus size={16} />
              <p className="text-sm">Create Service</p>
            </a>
            <a
              href="/"
              class="flex items-center  text-gray-500 hover:text-orange-600 group gap-2 "
            >
              <ListTree size={16} />
              <p className="text-sm">Service List</p>
            </a>
            <a
              href="/"
              class="flex items-center  text-gray-500 hover:text-orange-600 group gap-2 "
            >
              <Settings size={16} />
              <p className="text-sm">Configure Service</p>
            </a>
            <a
              href="/"
              class="flex items-center  text-gray-500 hover:text-orange-600 group gap-2 "
            >
              <Component size={16} />
              <p className="text-sm">Service Group</p>
            </a>
          </div>
        ) : null}
        {/*  ........sub menu ends.......... */}
      </div>
      {/*........Service Module ends........... */}

      {/*  ............Counter Module starts.......... */}
      <div className="w-full flex flex-col ">
        <div
          className={`w-full flex justify-between items-center px-5  hover:text-orange-600 group cursor-pointer  ${
            openMenus["Counter Module"] ? "text-blue-400" : "text-gray-500"
          }`}
          onClick={() => handleMenuClick("Counter Module")}
        >
          <div class="flex items-center py-2.5  gap-2 ">
            <img src={Counter_logo} alt="counter" className="h-4" />
            <p className="text-sm">Counter Module</p>
          </div>
          {openMenus["Counter Module"] ? (
            <ChevronUp size={16} className="cursor-pointer text-gray-500" />
          ) : (
            <ChevronDown size={16} className="cursor-pointer text-gray-500" />
          )}
        </div>
        {/*  ..........sub menu starts ....... */}
        {openMenus["Counter Module"] ? (
          <div className="ml-10 flex flex-col gap-2 bg-[#FAFAFA] py-2">
            <a
              href="/"
              class="flex items-center  text-gray-500 hover:text-orange-600 group gap-2 "
            >
              <Plus size={16} />
              <p className="text-sm">Create Counter</p>
            </a>
            <a
              href="/"
              class="flex items-center  text-gray-500 hover:text-orange-600 group gap-2 "
            >
              <ListTree size={16} />
              <p className="text-sm">Counter List</p>
            </a>
          </div>
        ) : null}
        {/*  ........sub menu ends.......... */}
      </div>
      {/*........Counter Module ends........... */}

      {/* .......... Report Module starts........... */}
      <a
        href="/"
        class="flex items-center px-5 py-2.5 text-gray-500 hover:text-orange-600 group gap-2 "
      >
        <ClipboardMinus size={16} />
        <p className="text-sm">Report Module</p>
      </a>
      {/*  ........Report Module ends.......... */}

      {/* .......... Feedback Module starts........... */}
      <a
        href="/"
        class="flex items-center px-5 py-2.5 text-gray-500 hover:text-orange-600 group gap-2 "
      >
        <MessageSquareDiff size={16} />
        <p className="text-sm">Feedback Module</p>
      </a>
      {/*  ........Feedback Module ends.......... */}

      {/* .......... Notice Module starts........... */}
      <a
        href="/"
        class="flex items-center px-5 py-2.5 text-gray-500 hover:text-orange-600 group gap-2 "
      >
        <Bell size={16} />
        <p className="text-sm">Notice Module</p>
      </a>
      {/*  ........Notice Module ends.......... */}

      {/*  ............Settings Module starts.......... */}
      <div className="w-full flex flex-col ">
        <div
          className={`w-full flex justify-between items-center px-5  hover:text-orange-600 group cursor-pointer  ${
            openMenus["Settings Module"] ? "text-blue-400" : "text-gray-500"
          }`}
          onClick={() => handleMenuClick("Settings Module")}
        >
          <div class="flex items-center py-2.5  gap-2 ">
            <Settings size={16} />
            <p className="text-sm">Settings Module</p>
          </div>
          {openMenus["Settings Module"] ? (
            <ChevronUp size={16} className="cursor-pointer text-gray-500" />
          ) : (
            <ChevronDown size={16} className="cursor-pointer text-gray-500" />
          )}
        </div>
        {/*  ..........sub menu starts ....... */}
        {openMenus["Settings Module"] ? (
          <div className="ml-10 flex flex-col gap-2 bg-[#FAFAFA] py-2">
            <a
              href="/"
              class="flex items-center  text-gray-500 hover:text-orange-600 group gap-2 "
            >
              <CircleUser size={16} />
              <p className="text-sm">User Log</p>
            </a>
            <a
              href="/"
              class="flex items-center  text-gray-500 hover:text-orange-600 group gap-2 "
            >
              <Clock size={16} />
              <p className="text-sm">Waiting Time</p>
            </a>
          </div>
        ) : null}
        {/*  ........sub menu ends.......... */}
      </div>
      {/*........Settings Module ends........... */}
    </div>
  );
}

export default SideBar;
