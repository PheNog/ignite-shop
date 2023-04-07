import { globalStyles } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import { CartProvider, useShoppingCart } from 'use-shopping-cart'
import logoImg from '../assets/logo.svg'
import cartGray from '../assets/cartGray.svg'
import { HeaderWithCart } from '@/components/header'


globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  const stripeToken = String(process.env.STRIPE_SECRET_KEY)
  console.log('SUCESSURL', `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`)

  // console.log("🚀 ~ file: _app.tsx:17 ~ App ~ cartDetails:", cartDetails)
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={stripeToken}
      successUrl={`http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`}
      cancelUrl={`http://localhost:3000/`}
      currency="BRL"
      allowedCountries={['US', 'GB', 'CA', 'BR']}
      billingAddressCollection={true}
      shouldPersist={true}
    >
      <Container>
        <HeaderWithCart />
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
