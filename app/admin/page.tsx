import React from 'react'
import { Form } from '../components/admin/Form'

const page = () => {
    return (
        <main className="relative flex flex-col overflow-clip h-auto w-full dark:bg-gray-700 bg-gray-50 dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-gray-700 bg-gray-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className='flex h-auto items-center justify-center my-10'>
                <Form />
            </div>
        </main>
    )
}

export default page
