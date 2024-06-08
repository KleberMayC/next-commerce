import { create } from "zustand";
import { ProductType } from "@/types/ProductType";
import { persist } from "zustand/middleware";

type CartState = {
    cart: ProductType[]
    addProduct: (product: ProductType) => void
    // removePorduct: (productId: string) => void
    isOpen: boolean
    toggleCart: () => void
}

export const useCartStore = create<CartState>()(
    persist((set) =>({
        cart:[],
        addProduct: (item) =>
            set((state) =>{
                const product = state.cart.find((p) => p.id === item.id)
                if(product){
                    const updateCart = state.cart.map((p) =>{
                        if(p.id === item.id){
                            return {...p, quantity: p.quantity ? p.quantity + 1 : 1}
                        }
                        return p
                    })
                    return {cart: updateCart}
                } else{
                    return { cart: [...state.cart, {...item, quantity: 1 }] }
                }
            }),
        isOpen: false,
        toggleCart: () => set((state) => ({isOpen: !state.isOpen}))
    }),{name: 'cart-storage'})
)