import Head from "next/head"
import React from "react"
import { SearchHeader } from "../components"
import { useRouter } from "next/router"
import SearchResults from "../components/SearchResults"
import Response from "../Response"
import ImageResults from "../components/ImageResults"

export default function search({ results }) {
  console.log(results)
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>{router.query.term} - Search</title>
      </Head>
      <SearchHeader />
      {router.query.searchType === "image" ? <ImageResults results={results}/> : <SearchResults results={results}/>}
    </div>
  )
}

export async function getServerSideProps(context) {
  const startIndex = context.query.start || "1"
  const mockdata = true
  const data = mockdata
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${
          process.env.CONTEXT_KEY
        }&q=${context.query.term}${context.query.searchType === "image" ? "&searchType=image" : ""}&start=${startIndex}`
      ).then((res) => res.json())
  return {
    props: {
      results: data
    }
  }
}
