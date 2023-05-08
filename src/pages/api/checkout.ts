import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const { itemsInCart } = req.body

    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' })
    if (!itemsInCart) return res.status(400).json({ error: 'Price not found.' })

    const successUrl = `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`
    const cancelUrl = `${process.env.NEXT_PUBLIC_URL}/`

    const itemsInCartFormatted: any = []
    itemsInCart.map((product: any) => {
        const productFormatted = {
            price: product.cartItem.defaultPriceId,
            quantity: 1
        }
        itemsInCartFormatted.push(productFormatted)
    })

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancelUrl,
        mode: 'payment',
        line_items: itemsInCartFormatted,
    })

    return res.status(201).json({
        checkoutUrl: checkoutSession.url
    })
}
