import type { Event } from '@/domain/entities/event.interface'
import { EventTypeEnum } from '@/domain/enums/type-event.enum'
import { Radio, User, Video } from 'lucide-react'
import Link from 'next/link'
import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface EventCardProps extends ComponentProps<'a'> {
  event?: Event
}

export async function EventCard({
  event,
  className,
  ...props
}: EventCardProps) {
  const eventNameBlue = event?.title?.split(' ')[0]
  const eventName = event?.title?.split(' ').slice(1).join(' ')
  const eventType =
    EventTypeEnum[event?.eventType as keyof typeof EventTypeEnum]
  console.log(props)

  if (!event) return null

  return (
    <Link
      href={`/${event.prettyName}`}
      className={twMerge(
        'lg:w-[calc(50%-0.75rem)] bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6  transition-all duration-300 shadow-blue/25 hover:shadow-lg hover:scale-101',
        className
      )}
      {...props}
    >
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-4xl text-center leading-none font-heading font-semibold flex flex-col md:text-left">
          <span className="text-blue font-bold">{eventNameBlue || ''}</span>{' '}
          {eventName}
        </h1>

        <span className="text-purple font-semibold text-xs flex items-center gap-2">
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
      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
        {event?.about && event?.about?.length > 325
          ? `${event?.about?.slice(0, 325)}...`
          : event?.about}
        <br />
        <br />
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
        {event?.price && event?.price <= 0
          ? 'Gratuito'
          : `R$ ${event?.price?.toFixed(2)}`}
      </p>
    </Link>
  )
}
