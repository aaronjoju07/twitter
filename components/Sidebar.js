import Image from "next/image";
import Sidemenuitem from "./Sidemenuitem";
import { HomeIcon} from "@heroicons/react/24/solid";
import {BellIcon, BookmarkIcon, ClipboardIcon, EllipsisHorizontalCircleIcon, EllipsisHorizontalIcon, HashtagIcon, InboxIcon, UserIcon} from '@heroicons/react/24/outline'
export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
      {/* Twitter Logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image width="50" height="50" src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"></Image>
      </div>       
      {/* Menu */}

      <div className="mt-4 mb-2.5 xl:items-start">
       <Sidemenuitem text="Home" active Icon={HomeIcon} />
      <Sidemenuitem text="Explore" Icon={HashtagIcon} />
      <Sidemenuitem text="Notifications" Icon={BellIcon} />
      <Sidemenuitem text="Messages" Icon={InboxIcon} />
      <Sidemenuitem text="Bookmarck" Icon={BookmarkIcon} />
      <Sidemenuitem text="Lists" Icon={ClipboardIcon} />
      <Sidemenuitem text="Profile" Icon={UserIcon} />
      <Sidemenuitem text="More" Icon={EllipsisHorizontalCircleIcon} /> 
      </div>
      
      {/* Button */}

    <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Twitter</button>

      {/* mini Profiile */}

      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
      <img className="h-10 w-10 rounded-full xl:mr-2"   alt="user-img" src="https://media-exp1.licdn.com/dms/image/C5603AQGEzKmXfbrOQw/profile-displayphoto-shrink_800_800/0/1649244786554?e=1675900800&v=beta&t=pSM1E6PL17yCCee3T-pK3F00B_Pg3-zGI_FgJCqq3X4"></img>
      <div className="leading-5 hidden xl:inline">
       <h4 className="font-bold">Aaron Joju</h4>
       <p className="text-gray-500">@aaronjoju07</p>
      </div>
      <EllipsisHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
      </div>

    </div>
  )
}
