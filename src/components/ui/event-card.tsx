import type { EventContent } from '@/domain/entities/event-content.interface'
import { EventTypeEnum } from '@/domain/enums/type-event.enum'
import { Radio, User, Video } from 'lucide-react'
import Link from 'next/link'
import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface EventCardProps extends ComponentProps<'a'> {
  event?: EventContent
}

export function EventCard({ event, className, ...props }: EventCardProps) {
  const eventNameBlue = event?.title?.split(' ')[0]
  const eventName = event?.title?.split(' ').slice(1).join(' ')
  const eventType =
    EventTypeEnum[event?.eventType as keyof typeof EventTypeEnum]

  return (
    <Link
      href={`/${event?.prettyName}`}
      className={twMerge(
        'w-full bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6  transition-all duration-300 shadow-blue/25 hover:shadow-lg hover:scale-101 max-h-[100%] min-h-[370px]',
        className
      )}
      {...props}
    >
      <div className="relative flex flex-row items-center justify-between">
        <h1 className="text-4xl text-center leading-none font-heading font-semibold flex flex-col md:text-left">
          <span className="text-blue font-bold">{eventNameBlue || ''}</span>{' '}
          {eventName}
        </h1>

        <span className="absolute top-0 right-0 text-purple font-semibold text-xs flex items-center gap-2">
          {(() => {
            switch (true) {
              case event?.eventType === 'ONLINE_AO_VIVO':
                return <Radio className="size-5" />
              case event?.eventType === 'ONLINE_GRAVADO':
                return <Video className="size-5" />
              default:
                return <User className="size-5" />
            }
          })()}
          {eventType}
        </span>
      </div>
      <p className="relative text-gray-300 leading-relaxed text-sm md:text-base max-h-[calc(100%-102px)] h-full">
        {event?.about && event?.about?.length > 325
          ? `${event?.about?.slice(0, 325)}...`
          : event?.about}
        <br />
        <br />
        <span className="absolute bottom-0 left-0">
          Dias {event?.startDate?.split('-')[2] || ''} a{' '}
          {event?.endDate?.split('-')[2] || ''} de março | Das{' '}
          {event?.startTime?.toString().split(':')[0] || ''}h às{' '}
          {event?.endTime?.toString().split(':')[0] || ''}h | {(() => {
            switch (true) {
              case event?.eventType === 'ONLINE_AO_VIVO':
              case event?.eventType === 'ONLINE_GRAVADO':
                return 'Online'
              default:
                return 'Presencial'
            }
          })()} |{' '}
          {event?.price === 0 ? 'Gratuito' : `R$ ${event?.price?.toFixed(2)}`}
        </span>
      </p>
    </Link>
  )
}
