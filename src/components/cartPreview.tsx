import { CheckoutButton, ContainerCartPreview, ContainerProductsAndTitle, ContainerTotalAndCheckout, QuantityLabel, RowClosePreview, TitlePreviewCart, TotalValue } from "@/styles/components/cartPreview"
import { ItemMiniCart } from "./productItemMiniCart"
import { useShoppingCart } from "use-shopping-cart"
import { useState } from "react"
import axios from 'axios'


interface CartPreviewProps {
    onClose: () => void
}


export const CartPreview = ({ onClose }: CartPreviewProps) => {
    const {
        // cartCount,
        cartDetails,
        redirectToCheckout,
        clearCart, } = useShoppingCart()
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

    async function handleBuyItems() {
        setIsCreatingCheckoutSession(true)
        const result = await redirectToCheckout()
        if (result.error) {
            setIsCreatingCheckoutSession(false)
            alert('falha ao redirecionar ao checkout!')
        }
        setIsCreatingCheckoutSession(false)
    };

    const itemsInCart = []
    for (let product in cartDetails) {
        itemsInCart.push({ cartItem: cartDetails[product] })
    }

    const totalPrice = itemsInCart.reduce(function (soma, objeto) {
        const price = parseFloat(String(objeto.cartItem.price).replace(/[^\d.,]/g, '').replace(',', '.'));
        return Number(soma + price);
    }, 0);

    const totalFormattedPrice = (totalPrice).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    


return (
    <ContainerCartPreview>
        <ContainerProductsAndTitle>
            <RowClosePreview><button onClick={onClose}>X</button></RowClosePreview>
            <TitlePreviewCart>Sacola de compras</TitlePreviewCart>
            {itemsInCart.map(item => {
                const cartItems = item.cartItem
                return (
                    <ItemMiniCart
                        productImageURL={cartItems.image}
                        productName={cartItems.name}
                        productPrice={cartItems.price}
                    />
                )
            })}
        </ContainerProductsAndTitle>
        <ContainerTotalAndCheckout>
            <QuantityLabel>
                <span>Quantidade</span>
                <label>{itemsInCart.length} itens</label>
            </QuantityLabel>
            <TotalValue>
                <span>Valor total</span>
                <label> {totalFormattedPrice}</label>
            </TotalValue>
            <CheckoutButton
                onClick={handleBuyItems}
            >Finalizar compra</CheckoutButton>
        </ContainerTotalAndCheckout>
    </ContainerCartPreview>
)
}