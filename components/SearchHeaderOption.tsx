import React from "react"
import { useRouter } from "next/router"

export default function SearchHeaderOption({ title, Icon, selected }:any) {
  const router = useRouter()
  function selectab(title:any) {
    router.push(`/search?term=${router.query.term}&searchType=${title === "Images" ? "image" : ""}`)
  }
  return (
    <div
      onClick={() => selectab(title)}
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:border-blue-500 hover:text-blue-500 cursor-pointer pb-3 ${
        selected && "border-blue-500 text-blue-500"
      }`}
    >
      <Icon className="h-5" />
      <p>{title}</p>
    </div>
  )
}
