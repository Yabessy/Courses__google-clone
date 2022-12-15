import { signOut } from "firebase/auth"
import { useRouter } from "next/router"
import { auth } from "../firebase"

export default function User({ style }: any) {
  const router = useRouter()
  if (auth.currentUser) {
    return (
      <>
        <img
          onClick={async () => await signOut(auth)}
          // @ts-ignore
          src={auth.currentUser.photoURL}
          alt="userImage"
          referrerPolicy="no-referrer"
          className={`${style} cursor-pointer h-10 w-10 rounded-full`}
        />
      </>
    )
  }
  return (
    <>
      <button
        onClick={() => router.push("/signin")}
        className={`${style} bg-blue-500 rounded-lg hover:drop-shadow-md text-white cursor-pointer px-7 py-3`}>
        SignIn
      </button>
    </>
  )
}
