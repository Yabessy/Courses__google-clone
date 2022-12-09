import Head from "next/head"
import React from "react"
import { SearchHeader } from "../components"
import Response from "../Response"

export default function search({ results }) {
  console.log(results)
  return (
    <div>
      <Head>
        <title>Ini Mbak/Mas</title>
      </Head>

      <SearchHeader />
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
