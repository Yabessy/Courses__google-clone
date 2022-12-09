import React from "react"
import SearchHeaderOption from "./SearchHeaderOption"
import { MagnifyingGlassIcon, PhotoIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/router"
export default function SearchHeaderOptions() {
const router = useRouter()
  return (
    <div className="flex space-x-8 select-none w-full justify-center text-gray-600 text-sm lg:pl-52 lg:justify-start border-b-2">
      <SearchHeaderOption title={`All`} Icon={MagnifyingGlassIcon} selected={router.query.searchType === "" || !router.query.searchType}/>
      <SearchHeaderOption title={`Images`} Icon={PhotoIcon} selected={router.query.searchType === "image"}/>
    </div>
  )
}
