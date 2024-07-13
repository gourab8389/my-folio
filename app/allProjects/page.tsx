import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      All projects
      <Link href={'/'}>
      <Button>Back to Home</Button>
      </Link>
    </div>
  )
}

export default page
