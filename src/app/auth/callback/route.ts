import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/dashboard';

  if (code) {
    const cookieStore = await cookies();
    
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookiesToSet) {
            try {
              cookiesToSet.forEach(({ name, value, options }) =>
                cookieStore.set(name, value, options)
              );
            } catch {
              // Peut être ignoré si géré par le middleware
            }
          },
        },
      }
    );

    // Échange du code unique contre une session
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
    
    // 🛡️ SÉCURITÉ ANTI-PREFETCH : 
    // Si le code a déjà été consommé par un pré-chargement invisible du navigateur,
    // l'échange échoue mais la session est QUAND MÊME active. On vérifie cela :
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      return NextResponse.redirect(`${origin}${next}`);
    }
    
    console.error("Erreur d'échange de jeton Supabase :", error.message);
    // En cas de vraie erreur, on la passe dans l'URL pour débugger facilement
    return NextResponse.redirect(`${origin}/connexion?error=${encodeURIComponent(error.message)}`);
  }

  return NextResponse.redirect(`${origin}/connexion?error=no-code-found`);
}