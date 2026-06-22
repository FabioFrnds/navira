import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  // @ts-ignore - On conserve ta version spécifique de Stripe
  apiVersion: '2026-05-27.dahlia', 
});

export async function POST(req: Request) {
  try {
    const { userId } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // 1. Sécurité URL : Évite que l'URL devienne "undefined/dashboard" en local
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment', 
      line_items: [
        {
          // 2. Flexibilité : Utilise la variable d'env Vercel, ou ton ID actuel par défaut
          price: process.env.STRIPE_PRICE_ID || 'price_1Tl6om4bkXatSMf66xIpeLq3',
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/dashboard/billing?success=true`,
cancel_url: `${baseUrl}/dashboard/billing?canceled=true`,
      metadata: {
        userId: userId,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('[STRIPE_CHECKOUT]', error);
    return NextResponse.json({ error: "Internal Error" }, { status: 500 });
  }
}