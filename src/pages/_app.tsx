import { globalStyles } from '@/styles/global'
import { Container } from '@/styles/pages/app'
import type { AppProps } from 'next/app'
import { CartProvider } from 'use-shopping-cart'
import { HeaderWithCart } from '@/components/header'


globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  const stripeToken = String(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={stripeToken}
      successUrl={`${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`}
      cancelUrl={`${process.env.NEXT_PUBLIC_URL}`}
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
