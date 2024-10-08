import React from 'react'
import { Form } from '../components/admin/Form'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const page = () => {
    return (
        <main className="relative flex flex-col overflow-clip h-auto lg:h-auto w-full dark:bg-gray-700 bg-gray-50 dark:bg-grid-white/[0.1] bg-grid-black/[0.1]">
            <div className="absolute flex items-center justify-center dark:bg-gray-700 bg-gray-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="flex mt-10 ml-20">
                <Link href={'/'}>
                <Button className='bg-black text-white font-semibold'>Back</Button>
                </Link>
            </div>
            <div className='flex h-auto items-center justify-center my-10 lg:mb-10 mx-auto'>
                <Form />
            </div>
        </main>
    )
}

export default page
