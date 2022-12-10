import { ChartBarIcon, ChatBubbleOvalLeftEllipsisIcon, EllipsisHorizontalIcon, HeartIcon, ShareIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function Post({post}) {
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
      {/* UserImage */}
      <img className="h-11 w-11 rounded-full mr-4 " src={post.userImg} alt="user image"></img>

      {/* Right Side */}
    <div>
    {/* Header */}
        <div className="flex item-center justify-between">
          {/* Post User Info */}
          <div className="flex space-x-1 whitespace-nowrap items-center">
          <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">  {post.name}</h4><span className="text-sm sm:text-[15px]">@{post.username}</span><span className="text-sm sm:text-[15px] hover:underline"> - {post.timestamps}</span>
  
          </div>
                {/* Dot Icon */}
        <EllipsisHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2 " />
        </div>
{/* Post text */}
<p className="text-gray-800 text-[15px] sm:text-[16px] mb-2">{post.text}</p>
{/* Post Image */}
<img className="rounded-2xl mr-2" src={post.img}></img>
{/* Icon */}
        

<div className="flex justify-between text-gray-500 p-2">
  <ChatBubbleOvalLeftEllipsisIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
<HeartIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />
<TrashIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />
<ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
<ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />  
</div>
 

 </div>



    </div>
  )
}
