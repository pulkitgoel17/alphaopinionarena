import { createClient } from '@/lib/supabase/server'

export default async function Home() {
  const supabase = await createClient()
  const { error } = await supabase.from('questions').select('count')
  
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">AlphaOpinionArena</h1>
      <p>DB connected: {error ? 'NO — ' + error.message : 'YES'}</p>
    </main>
  )
}