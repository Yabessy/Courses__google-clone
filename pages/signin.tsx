import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { Header } from "../components"
import { auth } from "../firebase"
import { useRouter } from "next/router"

export default function signin() {
  const router = useRouter()
  async function googleSignIn() {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
      .then((result) => {
        // @ts-ignore
        router.push("/")
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <>
      <Header />
      <div>
        <div className="flex flex-col items-center mt-40">
          <img
            className="w-52 object-cover "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
            alt="google"
          />
          <p className="text-sm italic mb-4 mt-10 text-center">
            Google is mine hehe :)
          </p>
          <button
            onClick={() => googleSignIn()}
            className="bg-blue-500 rounded-lg hover:drop-shadow-md text-white cursor-pointer px-7 py-3">
            SignIn with Google
          </button>
        </div>
      </div>
    </>
  )
}
