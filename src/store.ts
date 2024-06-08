import { create } from "zustand";
import { ProductType } from "@/types/ProductType";
import { persist } from "zustand/middleware";

type CartState = {
    cart: ProductType[]
    // addToCart: (product: ProductType) => void
    // removeFromCart: (productId: string) => void
    isOpen: boolean
    toggleCart: () => void
}

export const useCartStore = create<CartState>()(
    persist((set) =>({
        cart:[],
        isOpen: false,
        toggleCart: () => set((state) => ({isOpen: !state.isOpen}))
    }),{name: 'cart-storage'})
)