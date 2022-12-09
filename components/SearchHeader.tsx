import React, { useRef } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import User from "./User"
import SearchHeaderOptions from "./SearchHeaderOptions"
import { MagnifyingGlassIcon, XMarkIcon, MicrophoneIcon } from "@heroicons/react/24/solid"

export default function SearchHeader() {
  const router = useRouter()
  const searchInputRef = useRef(null)
  function search(e) {
    e.preventDefault()
    const term = searchInputRef.current.value
    if (!term.trim()) return
    router.push(`/search?term=${term.trim()}&searchType=`)
  }
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          onClick={() => router.push("/")}
          alt="google logo"
          width={120}
          height={40}
          className="cursor-pointer"
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          }
        />
        <form className="flex border border-gray-300 rounded-full shadow px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center">
          <input
            type="text"
            name=""
            id=""
            defaultValue={router.query.term}
            ref={searchInputRef}
            className="w-full focus:outline-none sm:mr-3"
          />
          <XMarkIcon className="w-6 h-6 text-gray-400 mr-2 cursor-pointer" />
          <div className="border border-gray-300 h-6 w-[1px] mr-2"></div>
          <MagnifyingGlassIcon className="w-6 h-6 hidden sm:inline-flex text-blue-500 mr-0.5" />
          <MicrophoneIcon className="w-6 h-6 hidden sm:inline-flex text-blue-500" />
          <button onClick={search} type="submit" hidden></button>
        </form>
        <User style="ml-auto whitespace-nowrap" />
      </div>
      <SearchHeaderOptions />
    </header>
  )
}
