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

    const itemsInCart: any = []
    for (let product in cartDetails) {
        itemsInCart.push({ cartItem: cartDetails[product] })
    }

    const totalPrice = itemsInCart.reduce(function (soma, objeto) {
        const price = parseFloat(String(objeto.cartItem.price).replace(/[^\d.,]/g, '').replace(',', '.'));
        return Number(soma + price);
    }, 0);

    const totalFormattedPrice = (totalPrice).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    console.log("🚀 ~ file: cartpreview.tsx:95 ~ CartPreview ~ itemsInCart:", itemsInCart)
    async function handleBuyItems() {
        setIsCreatingCheckoutSession(true)

        try {
            const response = await axios.post('/api/checkout', {
                itemsInCart
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
                {itemsInCart.map((item: any) => {
                    const cartItem = item.cartItem
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
                    <label>{itemsInCart.length} itens</label>
                </QuantityLabel>
                <TotalValue>
                    <span>Valor total</span>
                    <label> {totalFormattedPrice}</label>
                </TotalValue>
                <CheckoutButton
                    disabled={isCreatingCheckoutSession}
                    onClick={handleBuyItems}
                >Finalizar compra</CheckoutButton>
            </ContainerTotalAndCheckout>
        </ContainerCartPreview>
    )
}
