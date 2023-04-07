import { ContainerImage, ContainerMiniItems, PriceLabel, RemoveButton, TitlePriceAndRemoveContainer, TitleProduct } from "@/styles/components/cartPreview";
import Image from "next/image";
import camisetaTeste from "../assets/camisetas/1.png"

interface ItemMiniCartProps {
    productImageURL: string | undefined 
    productName: string
    productPrice: number

}

export function ItemMiniCart({ productImageURL, productName, productPrice }: ItemMiniCartProps) {
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
                <RemoveButton>Remover</RemoveButton>
            </TitlePriceAndRemoveContainer>
        </ContainerMiniItems>
    )
} 