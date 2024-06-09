'use client'
import { formatPrice } from '@/lib/utils'
import { useCartStore } from '@/store'
import Image from 'next/image'
import { useStore } from 'zustand'



export default function CartDrawer() {
    const useStore = useCartStore()
  return (
    <div 
        onClick={() =>useStore.toggleCart()}
        className='fixed w-full h-screen bg-black/25 left-0 top-0 z-50'>
        <div 
            onClick={(e) => e.stopPropagation()}
            className='absolute bg-slate-600 right-0 top-0 w-1/3 h-screen p-8 overflow-scroll'>

            <button onClick={() => useStore.toggleCart()} className='font-bold text-sm text-teal-600'>
                Volar para loja
            </button>
            <div className='border-t border-gray-400 my-6'></div>
            {
                useStore.cart.map((item) =>(
                    <div key={item.id} className='flex gap-4 py-4'>
                        <Image
                            src={item.image}
                            alt={item.name}
                            width={100}                            
                            height={100}
                            className='object-cover w-24'
                        />
                        <div>
                            <h2 className='w-42 truncate'>{item.name}</h2>
                            <h2> Quantidade: {item.quantity}</h2>
                            <p className='text-teal-400 text-sm font-bold'>{formatPrice(item.price)}</p>
                            <button 
                                className='py-1 px-2 border rounded-md mt-2 text-sm mr-1' 
                                onClick={() => useStore.addProduct(item)}>
                                Adicionar
                            </button>
                            <button 
                                onClick={() => useStore.removePorduct(item)}
                                className='py-1 px-2 border rounded-md mt-2 text-sm mr-1' >
                                Remover
                            </button>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    </div>  
  )
}
