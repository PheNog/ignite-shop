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
        cartDetails,
        clearCart, } = useShoppingCart()
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

    const cartItems = Object.values(cartDetails ?? {}).map(item => ({ cartItem: item }))

    const totalPrice = cartItems.reduce((sum, item) => {
        const price = parseFloat(String(item.cartItem.price).replace(/[^\d.,]/g, '').replace(',', '.'));
        return sum + price;
    }, 0)

    const totalFormattedPrice = (totalPrice).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    async function handleBuyItems() {
        setIsCreatingCheckoutSession(true)

        try {
            const response = await axios.post('/api/checkout', {
                cartItems
            })

            const { checkoutUrl } = response.data

            window.location.href = checkoutUrl
        } catch (err) {
            setIsCreatingCheckoutSession(false)
            alert('falha ao redirecionar ao checkout!')
        }
        setIsCreatingCheckoutSession(false)
        clearCart()
    }

    return (
        <ContainerCartPreview>
            <ContainerProductsAndTitle>
                <RowClosePreview><button onClick={onClose}>X</button></RowClosePreview>
                <TitlePreviewCart>Sacola de compras</TitlePreviewCart>
                {cartItems.map((value) => {
                    const cartItem = value.cartItem
                    return (
                        <ItemMiniCart
                            id={cartItem.id}
                            productImageURL={cartItem.image}
                            productName={cartItem.name}
                            productPrice={cartItem.price}
                        />
                    )
                })}
            </ContainerProductsAndTitle>
            <ContainerTotalAndCheckout>
                <QuantityLabel>
                    <span>Quantidade</span>
                    <label>{cartItems.length} itens</label>
                </QuantityLabel>
                <TotalValue>
                    <span>Valor total</span>
                    <label> {totalFormattedPrice}</label>
                </TotalValue>
                <CheckoutButton
                    disabled={isCreatingCheckoutSession}
                    onClick={handleBuyItems}
                >
                    Finalizar compra
                </CheckoutButton>
            </ContainerTotalAndCheckout>
        </ContainerCartPreview>
    )
}
