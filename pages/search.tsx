import Head from "next/head"
import React from "react"
import { SearchHeader } from "../components"
import { useRouter } from "next/router"
import SearchResults from "../components/SearchResults"
import Response from "../Response"

export default function search({ results }) {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>{router.query.term} - Search</title>
      </Head>

      <SearchHeader />
      <SearchResults results={results}/>
    </div>
  )
}

export async function getServerSideProps(context) {
  const mockdata = true
  const data = mockdata
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${
          process.env.CONTEXT_KEY
        }&q=${context.query.term}${context.query.searchType === "image" ? "&searchType=image" : ""}`
      ).then((res) => res.json())
  return {
    props: {
      results: data
    }
  }
}
