import { Copyright } from 'lucide-react'
import Link from 'next/link'
import type { ComponentProps } from 'react'
import { Button } from './button'

interface FooterProps extends ComponentProps<'footer'> {}

export default function Footer({ ...props }: FooterProps) {
  function newDate() {
    return new Date()
  }
  return (
    <footer
      className="relative text-gray-200 text-center py-10 overflow-hidden flex flex-col items-center justify-center gap-6"
      {...props}
    >
      <div className="container p-2.5 mb-20 border-1 border-blue-600/50 rounded-2xl">
        <div className="flex flex-col items-center justify-center gap-6 bg-gray-800 py-20 m-5 border-1 border-blue-600/10 rounded-2xl">
          <span className="flex flex-row items-center justify-start gap-2">
            <div className="block w-5 bg-blue-600 h-2 rounded-full"> </div>{' '}
            Available For New Project{' '}
            <div className="block w-5 bg-blue-600 h-2 rounded-full"> </div>
          </span>

          <h2 className="font-heading-variant text-7xl leading-20 font-semibold text-linear-layout max-w-[850px]">
            Interested in Working Together?
          </h2>

          <p className="text-gray-200 w-[750px] mx-auto mb-6">
            Orci at id enim eu pellentesque habitant. Ut at diam suscipit amet
            id cursus id blandit. Consectetur maecenas id vivamus integer
            integer aliquam.
          </p>

          <Button className="bg-blue-600 rounded-full px-15 py-7.5 text-white font-semibold transition-all duration-300 hover:bg-blue-500 text-md uppercase cursor-pointer">
            Schedule a Call
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-6 mb-20">
        <h2 className="font-heading-variant text-8xl leading-25 font-semibold text-linear-layout">
          PAGEVENTS
        </h2>

        <p className="text-gray-200 w-[750px] mx-auto mb-6">
          Orci at id enim eu pellentesque habitant. Ut at diam suscipit amet id
          cursus id blandit. Consectetur maecenas id vivamus integer integer
          aliquam.
        </p>

        <div className="flex flex-row items-center justify-center gap-4">
          <Link
            href="!#"
            about="Facebbok"
            className="text-white border-1 rounded-full py-2 px-5 transition-all duration-300 hover:bg-blue-600"
          >
            Facebook
          </Link>
          <Link
            href="!#"
            about="Instagram"
            className="text-white border-1 rounded-full py-2 px-5 transition-all duration-300 hover:bg-blue-600"
          >
            Instagram
          </Link>
          <Link
            href="!#"
            about="Linkedin"
            className="text-white border-1 rounded-full py-2 px-5 transition-all duration-300 hover:bg-blue-600"
          >
            Linkedin
          </Link>
          <Link
            href="!#"
            about="GitHub"
            className="text-white border-1 rounded-full py-2 px-5 transition-all duration-300 hover:bg-blue-600"
          >
            GitHub
          </Link>
        </div>
      </div>

      <hr className="border-white/5 z-50 w-full" />

      <div className="container py-15">
        <div className="flex flex-col items-center justify-center gap-4">
          <span className="flex flex-row items-center justfy-center ">
            Copyright <Copyright className="size-4 mx-1" />{' '}
            {newDate().getFullYear()} Lorem Ipsum
          </span>
          <span className="flex flex-row items-center justfy-center">
            All rights reserved to{' '}
            <Link
              href="https://fernandoarag.vercel.app/"
              about="Portifólio"
              className="text-blue underline transition-all transition-duration-300 ml-1 hover:text-blue-400"
            >
              Fernando Malveira Aragão
            </Link>
          </span>
        </div>
      </div>

      <hr className="border-white/5 z-50 w-full" />

      <div className="flex flex-row items-center justify-center relative left-0 right-0 mx-auto h-[500px] mb-[-450px] -z-1">
        <div className="relative w-[500px] h-[500px] rounded-full bg-[#007AFF] blur-[575px]">
          {' '}
        </div>
      </div>
    </footer>
  )
}
