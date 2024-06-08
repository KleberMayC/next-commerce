import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-400">
      <Link href="/" className="uppercase font-bold text-md h-12 flex items-center">
        Next store
      </Link>
      <div className='flex items-center gap-8'>
        <div className='flex items-center cursor-pointer relative'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
          <span className='
          bg-teal-600  
          text-sm font-bold 
          rounded-full 
          h-5 w-5 
          flex items-center justify-center 
          absolute
          left-3
          bottom-3 
          '>2</span>

        </div>
        <div>
          <SignedIn >
            <UserButton/>
          </SignedIn>
          <SignedOut>
            <SignInButton mode='modal'>
              <button className='border rounded-md border-gray-400 px-3 py-2'>
                Fazer Login
              </button>
            </SignInButton>
          </SignedOut>
        </div>

      </div>
  </nav>
  )
}
