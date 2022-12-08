import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { Header } from "../components"

const Home: NextPage = () => {
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-400 mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input type="text" className="flex-grow focus:outline-none" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-400 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
            />
          </svg>
        </div>
        <div className="flex flex-col justify-center sm:flex-row w-1/2 space-y-2 mt-8 sm:space-y-0 sm:space-x-4">
          <button className="btn">Google Search</button>
          <button className="btn">I fell lucky</button>
        </div>
      </form>

      {/* Footer */}
    </div>
  )
}

export default Home
