import {getProviders,signIn } from 'next-auth/react'
export default function signin({providers}) {
  return (
    <div className='flex flex-col mx-auto my-auto'>
    <img className='h-25 w-36 mx-auto' src='https://help.twitter.com/content/dam/help-twitter/brand/logo.png' alt='twitter-logo' />
      {Object.values(providers).map((provider) => (
        <div className='mx-auto my-auto'> 
            <p className='p-4'>Login Demo</p>
            <button onClick={() => signIn(provider.id,{callbackUrl:"/"})} className='p-1 bg-slate-600 text-white rounded-md  hover:text-blue-400'>Sign In With {provider.name}</button>
        </div>
      ))}
    </div>
  )
}


export async function getServerSideProps(){
    const providers = await getProviders();
    return {
        props:{
            providers,
        },
    }
}