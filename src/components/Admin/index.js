import React, { useState } from "react";

import Dashboard from "../Dashboard";

import UserTab from "../UserTab";

import TicketTab from "../TicketsTab";

// import {RiUserSearchFill} from './rea'

const Admin = () => {
  const [tab, setTab] = useState(1);
  const getTabsOfAdmin = () => {
    switch (tab) {
      case 0:
        console.log(0);
        return <Dashboard />;
      case 1:
        console.log(1);
        return <UserTab />;
      case 2:
        console.log(2);
        return <TicketTab />;
      default:
        return null;
    }
  };

  return (
    <div className="flex  flex-row">
      <div className="bg-blue-400 text-white h-screen md:w-1/6 w-2/6 pt-12 md:pt-24 ">
        <ul className="font-sans text-xs text-base  sm:font-normal md:font-bold md:text-xl">
          <li
            className="mb-4 p-3 text-zinc-700 hover:text-white mt-3 cursor-pointer"
            onClick={() => setTab(0)}
          >
            Dashboard
          </li>
          <div className="border-b border-white-300 m-2 m-2 md:mx-8"></div>
          <li
            className="mb-4 p-3 text-zinc-700 hover:text-white mt-3 cursor-pointer"
            onClick={() => setTab(1)}
          >
            Users
          </li>
          <div className="border-b border-white-300 m-2 md:mx-8"></div>
          <li
            className="mb-4 p-3 text-zinc-700 hover:text-white mt-3 cursor-pointer"
            onClick={() => setTab(2)}
          >
            Tickets
          </li>
        </ul>
      </div>
      <div className="flex flex-col p-4 md:p-12  w-full h-screen">
        {/* <h1 className="text-center text-blue-500 font-bold text-xl md:text-3xl "></h1> */}
        {getTabsOfAdmin()}
      </div>
    </div>
  );
};

export default Admin;
