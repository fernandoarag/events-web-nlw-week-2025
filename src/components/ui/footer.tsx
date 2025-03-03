import { Copyright } from 'lucide-react'
import Link from 'next/link'
import type { ComponentProps } from 'react'

interface FooterProps extends ComponentProps<'footer'> {}

export default function Footer({ ...props }: FooterProps) {
  function newDate() {
    return new Date()
  }
  return (
    <footer className="bg-gray-800 text-gray-200 text-center py-4" {...props}>
      <div className="flex flex-row items-center justify-center">
        Copyright <Copyright className="size-4 mx-1" />{' '}
        {newDate().getFullYear()} | All rights reserved to
        <Link
          href="https://fernandoarag.vercel.app/"
          about="Portifólio"
          className="text-blue underline transition-all transition-duration-300 ml-1 hover:text-blue-400"
        >
          Fernando Aragão
        </Link>
      </div>
    </footer>
  )
}
