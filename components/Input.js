import { FaceSmileIcon, PhotoIcon } from "@heroicons/react/24/outline";

export default function Input() {
  return (
    <div className="flex border-b  border-gray-200 p-3 space-x-3">
      <img className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95" alt="user-img" src="https://media-exp1.licdn.com/dms/image/C5603AQGEzKmXfbrOQw/profile-displayphoto-shrink_800_800/0/1649244786554?e=1675900800&v=beta&t=pSM1E6PL17yCCee3T-pK3F00B_Pg3-zGI_FgJCqq3X4"></img>
      <div className="w-full divide-y divide-gray-200">
        <div className="">
            <textarea className="w-full border-none focus:ring-0 text-lx placeholder-gray-700 tracking-wide  min-h[50px] text-gray-700"  rows="2" placeholder="Whats happening?"></textarea>
        </div>
        <div className="flex items-center justify-between pt-2.5">
            <div className="flex ">
                <PhotoIcon className="w-10 h-10  hoverEffect p-2 text-sky-500 hover:bg-sky-100 " /><FaceSmileIcon className="w-10 h-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100 " />
            </div>
            <button className="bg-blue-400  text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95  disabled:opacity-50"  >Tweet</button>
        </div>
      </div>
    </div>
  )
}
