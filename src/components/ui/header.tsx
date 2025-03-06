'use client'

import { Icons } from '@/components/icons'
import { ListItem } from '@/components/ui/list-item'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@radix-ui/react-navigation-menu'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/favicon_fa_white_blue_border_v2.svg'
import { ButtonDefault } from './button-default'

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]

export default function Header() {
  return (
    <header className="container grid grid-cols-[84px_1fr_auto] justify-center items-center gap-15 py-5 w-full">
      <Image src={logo} alt="FA Developer" className="max-h-[150px]" />

      <NavigationMenu className="relative w-full flex flex-row items-center justify-center gap-8">
        <NavigationMenuList
          data-orientation="vertical"
          className="relative flex flex-1 items-center justify-center gap-8 max-w-max h-12 z-20"
        >
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={''}>Home</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/events" legacyBehavior passHref>
              <NavigationMenuLink className={''}>Events</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="navigation-menu-item">
            <NavigationMenuTrigger className="flex flex-row items-center gap-2 cursor-pointer group">
              Getting started{' '}
              <ChevronDown className="size-4 group-data-[state=open]:rotate-180 transition-all duration-300" />
            </NavigationMenuTrigger>

            <NavigationMenuContent className="navigation-menu-content ">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-[.75fr_1.25fr] lg:w-[600px] ">
                {/* <ul className="grid gap-3 p-4 md:w-[600px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] "> */}
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Icons.favicon className="h-6 w-6" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        shadcn/ui
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components built with Radix UI and
                        Tailwind CSS.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="navigation-menu-item">
            <NavigationMenuTrigger className="flex flex-row items-center gap-2 cursor-pointer group">
              Components{' '}
              <ChevronDown className="size-4 group-data-[state=open]:rotate-180 transition-all duration-300" />
            </NavigationMenuTrigger>
            <NavigationMenuContent className="navigation-menu-content">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map(component => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={''}>About</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <ButtonDefault className="w-48 justify-center">Sing in</ButtonDefault>
    </header>
  )
}
