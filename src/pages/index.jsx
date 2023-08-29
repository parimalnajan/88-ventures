import React from 'react'

const index = () => {
  console.log(process.env.NEXT_PUBLIC_SUPABASE_URL)
  return (
    <div>index page</div>
  )
}

export default index