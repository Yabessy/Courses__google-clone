import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { Footer, Header } from "../components"
import { useRouter } from "next/router"
import { useRef } from "react"
import { MagnifyingGlassIcon, MicrophoneIcon } from "@heroicons/react/24/outline"

const Home: NextPage = () => {
  const router = useRouter()
  const searchInputRef = useRef(null)
  function search(event) {
    event.preventDefault()
    const term = searchInputRef.current.value
    if (!term.trim()) return
    router.push(`/search?term=${term.trim()}&searchType=`)
  }
  async function randomSearch(event) {
    event.preventDefault()
    const randomTerm = await fetch("https://random-word-api.herokuapp.com/word?number=1").then((res) => res.json())
    if (!randomTerm) return
    router.push(`/search?term=${randomTerm}&searchType=`)
  }
  return (
    <div>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*  Header */}
      <Header />

      {/* Body */}
      <form className="flex flex-col justify-center items-center mt-40">
        <Image
          alt="google logo"
          width={300}
          height={300}
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          }
        />
        <div className="flex justify-center items-center mt-4 mx-auto w-full max-w-[90%] border border-gray-400 hover:shadow focus-within:shadow px-4 py-3 rounded-full sm:max-w-xl">
          <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 mr-3"/>
          <input ref={searchInputRef} type="text" className="flex-grow focus:outline-none" />
          <MicrophoneIcon className="w-6 h-6 text-gray-400 ml-2"/>
        </div>
        <div className="flex flex-col justify-center sm:flex-row w-1/2 space-y-2 mt-8 sm:space-y-0 sm:space-x-4">
          <button onClick={search} className="btn">Google Search</button>
          <button onClick={randomSearch} className="btn">I&apos;m fell lucky</button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
