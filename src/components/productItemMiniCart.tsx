import { ContainerImage, ContainerMiniItems, PriceLabel, RemoveButton, TitlePriceAndRemoveContainer, TitleProduct } from "@/styles/components/cartPreview";
import Image from "next/image";
import camisetaTeste from "../assets/camisetas/1.png"
import { useShoppingCart } from "use-shopping-cart";

interface ItemMiniCartProps {
    id: string
    productImageURL: string | undefined 
    productName: string
    productPrice: number

}

export function ItemMiniCart({ productImageURL, productName, productPrice, id }: ItemMiniCartProps) {
    const { removeItem } = useShoppingCart()

    return (
        <ContainerMiniItems>
            <ContainerImage>
                <Image src={String(productImageURL)} width={101} height={93} alt='' />
            </ContainerImage>

            <TitlePriceAndRemoveContainer>
                <TitleProduct>
                    {productName}
                </TitleProduct>
                <PriceLabel>{productPrice}</PriceLabel>
                <RemoveButton
                onClick={() => removeItem(id)}
                >Remover</RemoveButton>
            </TitlePriceAndRemoveContainer>
        </ContainerMiniItems>
    )
} 