import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaGithub, FaInstagram } from 'react-icons/fa6'
import { CiLinkedin } from "react-icons/ci";

function Footer() {
  return (
    <div className='flex flex-row justify-between mt-40 w-full gap-2 px-5 py-5' id='contact'>
      <div className="flex flex-col items-center justify-center">
        <h1 className='text-black dark:text-white font-medium'>Portfolio by Gourab Dey</h1>
        <h2 className='text-black dark:text-white font-extralight'>deyg6988@gmail.com</h2>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className='text-black dark:text-white font-medium'>Contact with Me</h1>
        <div className="flex flex-row gap-2 items-center justify-center">
        <Link href={'https://github.com/gourab8389'}><FaGithub className='rounded-lg' /></Link>
        <Link href={'https://www.instagram.com/gourab486/?hl=en'}><FaInstagram /></Link>
        <Link href={'https://www.facebook.com/profile.php?id=100050166159043'}><FaFacebookF /></Link>
        <Link href={'https://www.linkedin.com/in/gourab-dey-1b2b8928a/'}><CiLinkedin className='w-6 h-6'/></Link>
        </div>
      </div>

    </div>
  )
}

export default Footer
