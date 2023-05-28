import React from "react";
import Image from "next/image";
import SideBarMenuItem from "./SideBarMenuItem";
import { HiHome } from "react-icons/hi";
//import HomeIcon from "@heroicons/react/20/solid";
import { HiHashtag } from "react-icons/hi";
import {
  HiOutlineBell,
  HiOutlineBookmark,
  HiOutlineClipboardCheck,
  HiOutlineDotsHorizontal,
  HiOutlineInbox,
  HiOutlineUser,
} from "react-icons/hi";
export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
      {/* Twitter Logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image
          width="50"
          height="50"
          src={
            "https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
          }
        ></Image>
      </div>
      {/* Menu */}

      <div className="mt-4 mb-2.5 xl:items-start">
        <SideBarMenuItem text="Home" Icon={HiHome} active />
        <SideBarMenuItem text="Explore" Icon={HiHashtag} />
        <SideBarMenuItem text="Notifications" Icon={HiOutlineBell} />
        <SideBarMenuItem text="Messages" Icon={HiOutlineInbox} />
        <SideBarMenuItem text="BookMarks" Icon={HiOutlineBookmark} />
        <SideBarMenuItem text="Lists" Icon={HiOutlineClipboardCheck} />
        <SideBarMenuItem text="Profile" Icon={HiOutlineUser} />
        <SideBarMenuItem text="More" Icon={HiOutlineDotsHorizontal} />
      </div>

      {/* Button */}
      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
        Tweet
      </button>

      {/* Mini Profile */}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <img
          src="https://avatars.githubusercontent.com/u/133734987?v=4"
          alt="user-img"
          className="h-10 w-10 rounded-full xl:mr-2"
        ></img>
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold">Jay Campbell</h4>
          <p className="text-gray-500">@jay-cam</p>
        </div>
        <HiOutlineDotsHorizontal className="h-5 xl:ml-8 hidden xl:inline" />
      </div>
    </div>
  );
}
