import React from 'react'

export default function SearchResults({results}) {
  return (
    <div className='w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
      <p className='text-gray-600 text-sm mt-3 mb-5'>About {results.searchInformation.formattedTotalResults} results ({results.searchInformation.formattedSearchTime}s)</p>
    </div>
  )
}
