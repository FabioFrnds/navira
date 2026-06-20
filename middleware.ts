import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // On initialise une réponse de base
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          // 1. On met à jour les cookies de la requête
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          
          // 2. On recrée la réponse avec les nouveaux headers
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          
          // 3. On applique les cookies sur la réponse finale
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Vérification sécurisée de l'utilisateur
  const { data: { user } } = await supabase.auth.getUser();

  const isDashboard = request.nextUrl.pathname.startsWith('/dashboard');

  // 🔒 Protection des routes privées
  if (isDashboard && !user) {
    return NextResponse.redirect(new URL('/connexion', request.url));
  }

  return response;
}

export const config = {
  matcher: ['/dashboard/:path*'],
};