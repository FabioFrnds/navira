import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js'; // On utilise un client admin pour bypasser les RLS

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2026-05-27.dahlia',
});

// Client Supabase avec l'accès admin (SERVICE_ROLE_KEY)
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  const body = await req.text();
  
  // 👈 On attend la résolution de la promesse avec 'await'
  const reqHeaders = await headers(); 
  const signature = reqHeaders.get('Stripe-Signature') as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET! // Secret du webhook à récupérer sur Stripe
    );
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  // Si le paiement est un succès
  // Si le paiement est un succès
  if (event.type === 'checkout.session.completed') {
    const userId = session?.metadata?.userId;
    
    console.log("👉 [WEBHOOK] Paiement réussi ! User ID reçu :", userId);

    if (userId) {
      // On ajoute .select() à la fin pour forcer Supabase à nous renvoyer le résultat
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