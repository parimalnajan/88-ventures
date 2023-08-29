import { createClient } from '@supabase/supabase-js'
console.log(process.env.PUBLIC_NEXT_SUPABASE_KEY)
export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY)