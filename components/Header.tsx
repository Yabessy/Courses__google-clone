import React from "react"
import User from "./User"

export default function Header() {
  return (
    <header className="flex justify-between p-5 text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <p className="link">about</p>
        <p className="link">Store</p>
      </div>
      <div className="flex space-x-4 items-center">
        <p className="link">gmail</p>
        <p className="link">images</p>
        <User />
      </div>
    </header>
  )
}
