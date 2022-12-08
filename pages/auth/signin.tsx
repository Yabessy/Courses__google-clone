import React from "react"
import { Header } from "../../components"
import { getProviders, signIn } from "next-auth/react"

export default function signin({ providers }) {
  return (
    <>
      <Header />
      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="flex flex-col items-center mt-40">
            <img
            className="w-52 object-cover "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
              alt="google"
            />
            <p className="text-sm italic mb-4 mt-10 text-center">Google is mine</p>
            <button onClick={()=>signIn(provider.id,{callbackUrl:"/"})} className="bg-blue-500 rounded-lg hover:drop-shadow-md text-white cursor-pointer px-7 py-3">SignIn with {provider.name}</button>
          </div>
        ))}
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers }
  }
}
