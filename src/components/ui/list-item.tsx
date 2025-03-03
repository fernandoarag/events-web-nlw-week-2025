import { cn } from '@/lib/utils'
import { NavigationMenuLink } from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
import type { ComponentProps } from 'react'

interface ListItemProps extends ComponentProps<'a'> {
  key?: string
  className?: string
  title?: string
  children?: React.ReactNode
  href?: string
}

export function ListItem({
  className,
  title,
  children,
  href,
  ...props
}: ListItemProps) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href || ''}
          passHref
          className={cn(
            `block select-none space-y-1 
            rounded-md p-3 leading-none no-underline outline-none transition-colors 
            hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`,
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
