import { createClient } from '@supabase/supabase-js'

const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? 'oaiunkpzpqjqskzpntdf'
const publicAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9haXVua3B6cHFqcXNrenBudGRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1NDk3NDUsImV4cCI6MjA5NDEyNTc0NX0.RAWlojkzIDRRNvR8JC5yG8XAVnRP4YjTmPeCf6HXvLw'

export const supabase = createClient(
  `https://${projectId}.supabase.co`,
  publicAnonKey,
)
