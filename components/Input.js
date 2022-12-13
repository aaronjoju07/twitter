import { FaceSmileIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import {addDoc , collection} from 'firebase/firestore'
import { db } from '../firebase'

export default function Input() {
 
  const {data:session} = useSession()
  const [input , setInput] = useState("");
  const sendPost = async () => {
    const docRef = await addDoc(collection(db, "posts"), {
      id: session.user.name,
      text: input,
    })
    setInput("");
  }
  return (
   
    <>
    {session &&(
      <div className="flex border-b  border-gray-200 p-3 space-x-3">
      <img 
      onClick={signOut}
      src={ session?.user.image } 
      className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95" 
      alt="user-img" ></img>
      <div className="w-full divide-y divide-gray-200">
        <div className="">
            <textarea 
             className="w-full border-none focus:ring-0 text-lx placeholder-gray-700 tracking-wide  min-h[50px] text-gray-700"  
             rows="2"
              placeholder="Whats happening?"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              >  
              </textarea>
        </div>
        <div className="flex items-center justify-between pt-2.5">
            <div className="flex ">
                <PhotoIcon className="w-10 h-10  hoverEffect p-2 text-sky-500 hover:bg-sky-100 " /><FaceSmileIcon className="w-10 h-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100 " />
            </div>
            <button 
           onClick={sendPost}
            className="bg-blue-400  text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95  disabled:opacity-50"  
            disabled={!input.trim()}
            >Tweet
            </button>
        </div>
      </div>
    </div>
    )}
 
    </>
   
  )
}

