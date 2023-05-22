import { ButtonX, Header, LabelCartLength } from "@/styles/pages/app"
import Image from "next/image"
import logoImg from '../assets/logo.svg'
import { useShoppingCart } from "use-shopping-cart"
import { useState } from "react"
import { CartPreview } from "./cartPreview"
import Link from "next/link"

export const HeaderWithCart = () => {
    const { cartDetails } = useShoppingCart()
    const [isOpen, setIsOpen] = useState(false)
    var cartLength = 0;

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
            <Link
                href={`/`}
                prefetch={false}
            >
                <Image alt='' src={logoImg} />
            </ Link>
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