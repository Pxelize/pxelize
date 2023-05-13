import { Lexend_Mega } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

import clsx from "clsx"
import { ArrowRightIcon, HeartIcon } from '@heroicons/react/24/solid'
import { InstagramIcon } from "./components/icons/Instagram"
import { TwitterIcon } from "./components/icons/Twitter"
import { GithubIcon } from "./components/icons/Github"

const lexendMega = Lexend_Mega({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className="py-12 lg:p-20 max-w-6xl mx-auto space-y-16 lg:space-y-24 selection:bg-violet-600 selection:text-white tracking-tighter">
      <header className="px-12 lg:px-0">
        <Link href="#">
          <div className="relative w-40 lg:w-52 h-11 lg:h-14">
            <Image
              src="/pxelize.svg"
              alt="Pxelize Logo"
              fill
              priority
            />
          </div>
        </Link>
      </header>

      <section className="space-y-16 lg:space-y-20">
        <div className="space-y-8 lg:space-y-12 px-12 lg:px-0">
          <h1 className={clsx(["text-4xl lg:text-6xl font-semibold bg-gradient-to-r from-rose-500 to-violet-600 bg-clip-text text-transparent tracking-[-0.16em] -mx-2", lexendMega.className])}>
            <span>Designing software with </span>

            <br className="hidden lg:block" />

            <span>purpose</span>
          </h1>

          <p className="textl-lg lg:text-xl text-zinc-300">
            We are a design-driven software development studio.
          </p>
        </div>

        <div className="space-y-7">
          <span className="text-base lg:text-lg text-zinc-300 px-12 lg:px-0">Trusted by</span>

          <div className="flex items-center gap-10 lg:gap-16 opacity-80 overflow-x-auto px-12 lg:px-0 scrollbar-none">
            <div className="relative aspect-video min-w-[7rem] lg:min-w-[9rem]">
              <Image
                className="object-contain"
                src="/trusted/nanotech.png"
                alt="Nanotech Logo"
                fill
              />
            </div>
            
            <div className="relative aspect-[16/5] min-w-[10rem] lg:min-w-[13rem]">
              <Image
                className="object-contain"
                src="/trusted/volvo.svg"
                alt="Volvo Logo"
                fill
              />
            </div>
            
            <div className="relative aspect-square min-w-[3rem] lg:min-w-[4rem]">
              <Image
                className="object-contain"
                src="/trusted/bmw.svg"
                alt="BMW Logo"
                fill
              />
            </div>
            
            <div className="relative aspect-[16/5] min-w-[8rem] lg:min-w-[10rem]">
              <Image
                className="object-contain"
                src="/trusted/honda.svg"
                alt="Honda Logo"
                fill
              />
            </div>
          </div>
        </div>

        <nav className="flex justify-between items-center px-12 lg:px-0">
          <div className="flex gap-8"> 
            <Link
              className="text-2xl lg:text-4xl relative pb-3 lg:pb-5 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-2/5 after:bg-gradient-to-r after:from-rose-500 after:to-violet-600 after:ease-in-out hover:after:scale-x-100"
              href="mailto:contact@pxelize.com"
            >
              Contact us
            </Link>
          </div>
        </nav>
      </section>

      <footer className="border-t border-white/20 pt-10 lg:pt-20 flex flex-col lg:flex-row gap-6 lg:justify-between px-12 lg:px-0">
        <div className="flex gap-4">
          <p className="font-light flex gap-2">
            <span>Made with</span>

            <HeartIcon className="w-6 h-6 text-red-500" />

            <span>in Belo Horizonte</span>
          </p>

          <svg width="0" height="0" aria-hidden="true" focusable="false">
            <linearGradient id="arrow_gradient" x2="1" y2="1">
              <stop stopColor="#F43F5E"/>
              <stop offset="0.880208" stopColor="#7C3AED"/>
            </linearGradient>
          </svg>

          <ArrowRightIcon className="hidden lg:block w-6 h-6 fill-[url(#arrow_gradient)]" />
        </div>

        <div className="flex gap-6">
          <Link href="#">
            <InstagramIcon className="w-6 h-6" />
          </Link>
          
          <Link href="#">
            <TwitterIcon className="w-6 h-6" />
          </Link>
          
          <Link href="#">
            <GithubIcon className="w-6 h-6" />
          </Link>
        </div>
      </footer>
    </main>
  )
}
