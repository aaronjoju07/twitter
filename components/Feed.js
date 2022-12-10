import { SparklesIcon } from "@heroicons/react/24/outline";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
  const posts = [
    {
      id:"1",
      name:"Aaron Joju",
      username:"codewithaaron",
      userImg:"https://media-exp1.licdn.com/dms/image/C5603AQGEzKmXfbrOQw/profile-displayphoto-shrink_800_800/0/1649244786554?e=1675900800&v=beta&t=pSM1E6PL17yCCee3T-pK3F00B_Pg3-zGI_FgJCqq3X4",
      img:"https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
      text:"Nice View",
      timestamps:"2 hours ago"
    },
    {
      id:"2",
      name:"Joseph",
      username:"jocode",
      userImg:"https://m.media-amazon.com/images/M/MV5BODVmYzNmYzYtNTljZC00ODg3LWEzOTQtZjA5NmVhMTczOGE1XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_QL75_UY281_CR1,0,190,281_.jpg",
      img:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
      text:"Nature",
      timestamps:"3 hours ago"
    }
  ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200 ">
       <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
      <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
        <SparklesIcon className="h-5 " />
      </div> 
      </div>
      <Input />
       {posts.map((post)=>(
        <Post key={post.id} post={post} />
       ))}
    </div>
  )
}
