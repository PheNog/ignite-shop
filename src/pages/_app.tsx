import { globalStyles } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import { CartProvider } from 'use-shopping-cart'
import logoImg from '../assets/logo.svg'
import cartGray from '../assets/cartGray.svg'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  const stripeToken = String(process.env.STRIPE_SECRET_KEY)
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={stripeToken}
      successUrl={`${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`}
      cancelUrl={`${process.env.NEXT_URL}/`}
      currency="BRL"
      allowedCountries={['US', 'GB', 'CA', 'BR']}
      billingAddressCollection={true}
      shouldPersist={true}
    >
      <Container>
        <Header>
          <Image alt='' src={logoImg} />
          <button>
            <Image alt='' src={cartGray} />
          </button>
        </Header>
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
