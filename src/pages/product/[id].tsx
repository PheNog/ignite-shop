import { stripe } from '@/lib/stripe';
import { ImageContainer, ProductContainer, ProductDetails } from '@/styles/pages/product';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Stripe from 'stripe';
import axios from 'axios'
import { useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart'
import Head from 'next/head';

interface ProductProps {
    product: {
        id: string
        name: string
        image: string
        price: number
        description: string
        defaultPriceId: string
        sku: string
        currency: string
    }
}


export default function Product({ product }: ProductProps) {
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
    const { addItem, cartDetails } = useShoppingCart()

    function handleAddToCart() {
        const producData = {
            sku: product.id
        }
        addItem(product)
    }


    return (
        <>
            <Head>
                <title>{product.name} | Ignite Shop</title>
            </Head>
            <ProductContainer>
                <ImageContainer>
                    <Image src={product.image} width={520} height={480} alt='' />
                </ImageContainer>
                <ProductDetails>
                    <h1>{product.name}</h1>
                    <span> {product.price}</span>
                    <p> {product.description}</p>
                    <button
                        onClick={handleAddToCart}
                    >
                        ADICIONAR AO CARRINHO
                    </button>
                </ProductDetails>
            </ProductContainer>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { id: 'prod_NHnxN5RCwT72jt' } }
        ],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    const productId = params ? params.id : ''

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    })

    const price = product.default_price as Stripe.Price
    const priceFormatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(price.unit_amount! / 100)

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                image: product.images[0],
                price: priceFormatted,
                description: product.description,
                defaultPriceId: price.id,
                sku: product.id,
                currency: 'BRL'
            }
        },
        revalidate: 60 * 60
    }
}