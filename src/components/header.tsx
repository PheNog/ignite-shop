import { ButtonX, Header, LabelCartLength } from "@/styles/pages/app"
import Image from "next/image"
import logoImg from '../assets/logo.svg'
import cartGray from '../assets/cartGray.svg'
import { useShoppingCart } from "use-shopping-cart"
import { useState } from "react"
import { CartPreview } from "./cartPreview"

export const HeaderWithCart = () => {
    const { cartDetails } = useShoppingCart()
    const [isOpen, setIsOpen] = useState(false)
    var cartLength = 0;

    console.log("🚀 ~ file: header.tsx:9 ~ HeaderWithCart ~ cartDetails:", cartDetails)
    for (let itemCart in cartDetails) {
        if (cartDetails.hasOwnProperty(itemCart)) {
            cartLength++;
        }
    }

    function openAndCloseCartPreview() {
        setIsOpen(!isOpen)
    }
    return (
        <Header>
            <Image alt='' src={logoImg} />
            <ButtonX onClick={openAndCloseCartPreview}>
                <LabelCartLength>{cartLength}</LabelCartLength>
            </ButtonX>
            {isOpen &&
                <CartPreview
                    onClose={openAndCloseCartPreview}
                />
            }
        </Header>
    )
}