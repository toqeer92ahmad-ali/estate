import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className= "p-3 max-w-md mx-auto">
    <h1 className= "text-3xl text-center font-semibold my-7">Sign Up</h1>
    <form className= "flex flex-col gap-4">
      <input type= "text" placeholder="Username" className="border-2 border-gray-300 p-2 rounded-lg w-full mb-4"/>
      <input type= "email" placeholder="Email" className="border-2 border-gray-300 p-2 rounded-lg w-full mb-4"/>
      <input type= "password" placeholder="Password" className="border-2 border-gray-300 p-2 rounded-lg w-full mb-4"/>
      <button type="submit" className="bg-slate-700 text-white p-3 hover: opacity-95 rounded-lg w-full">Sign Up</button>
    </form>
      <div className= "flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/signin"} className="text-blue-500 hover:underline">
          <span className= "text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  )
}
