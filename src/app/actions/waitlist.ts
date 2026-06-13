'use server'

import { supabase } from '@/src/lib/supabase'
import { isValidEmail } from '@/src/lib/validations'

export async function joinWaitlist(formData: FormData) {
  const email = formData.get('email')?.toString()

  if (!email || !isValidEmail(email)) {
    return { error: 'Email invalide' }
  }

  // Vérification doublon
  const { data: existing } = await supabase
    .from('waitlist')
    .select('email')
    .eq('email', email)
    .maybeSingle()

  if (existing) {
    return { error: 'Tu es déjà inscrit !' }
  }

  // Insertion
  const { error } = await supabase
    .from('waitlist')
    .insert([{ email }])

  if (error) {
    return { error: "Erreur serveur" }
  }

  return { success: true }
}