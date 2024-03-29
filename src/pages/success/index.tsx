import { stripe } from "@/lib/stripe";
import { ImageContainer, ImagesContainer, SuccessContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

interface SuccessProps {
    customerName: string,
    products: Product[]
}

interface Product {
    name: string
    images: string[]
}

export default function Success({ customerName, products }: SuccessProps) {
    return (
        <>
            <Head>
                <title>Compra efetuada | Ignite Shop</title>
                <meta name='robots' content='noindex' />
            </Head>
            <SuccessContainer>
                <h1>Compra efetuada!</h1>
                <ImagesContainer>
                    {
                        products.map((product) => {
                            return (
                                <ImageContainer>
                                    <Image src={product.images[0]} width={120} height={110} alt='' />
                                </ImageContainer>
                            )
                        })
                    }
                </ImagesContainer>
                <p>
                    Uhuul <strong>{customerName}</strong>,
                    seu pedido de {products.length} {products.length === 1 ? 'item' : 'items'}:
                    <strong> {products.map(product => {
                        return (
                            <>
                                {product.name}, {' '}
                            </>
                        )
                    })}</strong> {' '}
                    já está a caminho da sua casa.
                </p>
                <Link href="/">
                    Voltar ao catalogo
                </Link>
            </SuccessContainer>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

    if (!query.session_id) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    const sessionId = String(query.session_id)

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })

    const customerName = session ? session.customer_details!.name : ''
    const products = session.line_items!.data.map(item => {
        return item.price!.product
    })

    return {
        props: {
            customerName,
            products
        }
    }
}