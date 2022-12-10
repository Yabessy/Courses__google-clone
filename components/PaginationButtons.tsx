import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

export default function PaginationButtons() {
  const router = useRouter()
  const startIndex = Number(router.query.start) || 1
  return (
    <div className="flex space-x-5 px-9 pb-4 justify-between sm:justify-start sm:space-x-44">
      {startIndex >= 10 && (
        <Link
          href={`/search?term=${router.query.term}&searchType=${router.query.searchType}&start=${
            startIndex - 10
          }`}
        >
          <div className="flex flex-col items-center hover:underline decoration-blue-700">
            <ChevronLeftIcon className="h-5 w-5 text-blue-800" />
            <p className="text-blue-800">previous</p>
          </div>
        </Link>
      )}
      {startIndex <= 90 && (
        <Link
          href={`/search?term=${router.query.term}&searchType=${router.query.searchType}&start=${
            startIndex + 10
          }`}
        >
          <div className="flex flex-col items-center hover:underline decoration-blue-700">
            <ChevronRightIcon className="h-5 w-5 text-blue-800" />
            <p className="text-blue-800">next</p>
          </div>
        </Link>
      )}
    </div>
  )
}
