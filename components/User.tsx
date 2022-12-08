import React from "react"
import { useSession, signIn, signOut } from "next-auth/react"

export default function User() {
  const { data: session, status } = useSession()
  if (status === "authenticated") {
    return (
      <>
        <p>{session.user?.name}</p>
        <img
          onClick={() => signOut()}
          src={session.user?.image}
          alt=""
          className="cursor-pointer h-10 w-10 rounded-full"
        />
      </>
    )
  }
  return (
    <>
      <button
        onClick={() => signIn()}
        className="bg-blue-500 rounded-lg hover:drop-shadow-md text-white cursor-pointer px-7 py-3"
      >
        SignIn
      </button>
    </>
  )
}
