import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js'; 

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  // @ts-ignore
  apiVersion: '2026-05-27.dahlia',
});

export async function POST(req: Request) {
  // 👈 1. ON INITIALISE LE CLIENT ICI (À l'intérieur de la fonction)
  // On utilise un fallback (|| '') pour éviter les crashs de build
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  );

  const body = await req.text();
  const reqHeaders = await headers(); 
  const signature = reqHeaders.get('Stripe-Signature') as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET! 
    );
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  if (event.type === 'checkout.session.completed') {
    const userId = session?.metadata?.userId;
    
    console.log("👉 [WEBHOOK] Paiement réussi ! User ID reçu :", userId);

    if (userId) {
      const { data, error } = await supabaseAdmin
        .from('profiles')
        .update({
          is_premium: true,
          stripe_customer_id: session.customer as string,
        })
        .eq('id', userId)
        .select();

      if (error) {
        console.error("❌ [SUPABASE ERROR] Impossible de mettre à jour :", error);
      } else if (data.length === 0) {
         console.warn("⚠️ [SUPABASE WARNING] Aucun profil trouvé avec cet ID :", userId);
      } else {
        console.log("✅ [SUPABASE SUCCESS] Profil mis à jour :", data);
      }
    } else {
      console.error("❌ [STRIPE ERROR] Aucun userId trouvé dans les metadata !");
    }
  }

  return new NextResponse(null, { status: 200 });
}