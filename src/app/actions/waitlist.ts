'use server'

import { supabase } from '@/src/lib/supabase'
import { isValidEmail } from '@/src/lib/validations'

export async function joinWaitlist(formData: FormData) {
  const email = formData.get('email')?.toString()?.trim()

  if (!email || !isValidEmail(email)) {
    return { error: 'Email invalide' }
  }

  // INSERT DIRECT (on laisse Supabase gérer le unique)
  const { error } = await supabase
    .from('leads')
    .insert([{ email }])

  if (error) {
    // 🔥 email déjà existant (unique constraint)
    if (error.code === '23505') {
      return { error: 'Tu es déjà inscrit à la waitlist.' }
    }

    console.error('Supabase error:', error)

    return { error: 'Erreur serveur. Réessaie plus tard.' }
  }

  return { success: true }
}