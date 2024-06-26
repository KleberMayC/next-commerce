import { create } from "zustand";
import { ProductType } from "@/types/ProductType";
import { persist } from "zustand/middleware";

type CartState = {
    cart: ProductType[]
    addProduct: (product: ProductType) => void
    removePorduct: (product: ProductType) => void
    isOpen: boolean
    toggleCart: () => void
    onCheckout: string
    setCheckout: (checkout: string) => void
    paymentIntent: string
    setPaymentIntent: (paymentIntent: string) => void
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

            removePorduct: (item) =>
                set((state) =>{
                    const existingProduct = state.cart.find((p) => p.id === item.id)

                    if(existingProduct && existingProduct.quantity! >1){
                        const updatedCart = state.cart.map((p) =>{
                            if(p.id === item.id){
                                return {...p, quantity: p.quantity! - 1}
                            }
                            return p
                        })
                        return {cart: updatedCart}
                    } else{
                        const filterCard = state.cart.filter((p) => p.id!== item.id)
                        return {cart: filterCard}
                    }

                }),
        isOpen: false,
        toggleCart: () => set((state) => ({isOpen: !state.isOpen})),
        onCheckout: 'cart',
        setCheckout: (checkout) => set(() => ({onCheckout: checkout})),
        paymentIntent: '',
        setPaymentIntent: (paymentIntent) => set(() => ({paymentIntent}))
    }),{name: 'cart-storage'})
)