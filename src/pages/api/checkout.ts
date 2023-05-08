import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

// interface CartEntry {
//     cartItem:{

//         id: string;
//         name: string;
//         image: string;
//         price: string;
//         description: string;
//         defaultPriceId: string;
//         sku: string;
//         currency: string;
//         quantity: number;
//         value: number | null;
//         price_data: any;
//         product_data: any;
//         formattedValue: string;
//         formattedPrice: string;
//     }
//   }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const { cartItems } = req.body
    console.log("🚀 ~ file: checkout.ts:7 ~ handler ~ cartItems:", cartItems)

    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' })
    if (!cartItems) return res.status(400).json({ error: 'Price not found.' })

    const successUrl = `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`
    const cancelUrl = `${process.env.NEXT_PUBLIC_URL}/`

    const cartItemsFormatted: any[] = []
    cartItems.map((product: any) => {
        const productFormatted = {
            cartItem:{

                price: product.cartItem.defaultPriceId,
                quantity: 1
            }
        }
        cartItemsFormatted.push(productFormatted)
    })

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancelUrl,
        mode: 'payment',
        line_items: cartItemsFormatted,
    })

    return res.status(201).json({
        checkoutUrl: checkoutSession.url
    })
}
