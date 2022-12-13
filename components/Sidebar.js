import Image from "next/image";
import { useSession, signIn } from "next-auth/react";
import Sidemenuitem from "./Sidemenuitem";
import { HomeIcon} from "@heroicons/react/24/solid";
import {BellIcon, BookmarkIcon, ClipboardIcon, EllipsisHorizontalCircleIcon, EllipsisHorizontalIcon, HashtagIcon, InboxIcon, UserIcon} from '@heroicons/react/24/outline'
export default function Sidebar() {
  const {data:session} = useSession()
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
      
      {
        session &&(
          <>
          <Sidemenuitem text="Notifications" Icon={BellIcon} />
      <Sidemenuitem text="Messages" Icon={InboxIcon} />
      <Sidemenuitem text="Bookmarck" Icon={BookmarkIcon} />
      <Sidemenuitem text="Lists" Icon={ClipboardIcon} />
      <Sidemenuitem text="Profile" Icon={UserIcon} />
      <Sidemenuitem text="More" Icon={EllipsisHorizontalCircleIcon} /> 
      </>
        )
      }
      </div>
      
      {/* Button */}
{session ?(
  <>
  <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Twitter</button>

{/* mini Profiile */}

<div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
<img className="h-10 w-10 rounded-full xl:mr-2"   alt="user-img" src={session.user.image}></img>
<div className="leading-5 hidden xl:inline">
 <h4 className="font-bold">{session.user.name}</h4>
 <p className="text-gray-500">@{session.user.username}</p>
</div>
<EllipsisHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
</div>
</>
):( 
  
  <button onClick={signIn} className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
Sign In
</button>
)}
    </div>
  );
}
