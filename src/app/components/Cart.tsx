'use client'

import { useCartStore } from '@/store'
import React from 'react'

export default function Cart() {
    const useStore = useCartStore()
  return (
    <>
        <div 
        onClick={() => useStore.toggleCart()}
        className='flex items-center cursor-pointer relative'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
            <span className='
                bg-teal-600  
                text-sm font-bold 
                rounded-full 
                h-5 w-5 
                flex items-center justify-center 
                absolute
                left-3
                bottom-3'> 2 </span>
    </div>
    {useStore.isOpen && (
        <div 
            onClick={() =>useStore.toggleCart()}
            className='fixed w-full h-screen bg-black/25 left-0 top-0 z-50'>
            <div 
                onClick={(e) => e.stopPropagation()}
                className='absolute bg-slate-600 right-0 top-0 w-1/3 h-screen p-12 overflow-scroll'>

                 <h1>Meu carrinho</h1>
                 {
                    useStore.cart.map((item) =>(
                        <div key={item.id}>{item.name}</div>
                    ))
                 }
            </div>
        </div>  

    )}

    </>
  )
}
