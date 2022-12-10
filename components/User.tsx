import React from "react"
import { useSession, signIn, signOut } from "next-auth/react"

export default function User({style}:any) {
  const { data: session, status } = useSession()
  if (status === "authenticated") {
    return (
      <>
        <img
          onClick={() => signOut()}
          // @ts-ignore
          src={session.user?.image}
          alt=""
          className={`${style} cursor-pointer h-10 w-10 rounded-full`}
        />
      </>
    )
  }
  return (
    <>
      <button
        onClick={() => signIn()}
        className={`${style} bg-blue-500 rounded-lg hover:drop-shadow-md text-white cursor-pointer px-7 py-3`}
      >
        SignIn
      </button>
    </>
  )
}
