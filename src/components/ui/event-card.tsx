import type { EventContent } from '@/domain/entities/event-content.class'
import { EventTypeLabelEnum } from '@/domain/enums/type-event-label.enum'
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
    EventTypeLabelEnum[event?.eventType as keyof typeof EventTypeLabelEnum]

  return (
    <Link
      href={`/${event?.prettyName}`}
      className={twMerge(
        'w-full bg-gray-800/80 border border-gray-600 rounded-2xl p-8 space-y-6  transition-all duration-300 shadow-blue/25 hover:shadow-lg hover:scale-101 max-h-[100%] min-h-[370px] z-50',
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
      <div className="relative max-h-[calc(100%-102px)] h-full flex flex-col justify-between items-start">
        <p className=" text-gray-300 leading-relaxed text-sm md:text-base ">
          {event?.about && event?.about?.length > 325
            ? `${event?.about?.slice(0, 170)}...`
            : event?.about}
        </p>

        <div className="flex flex-row justify-between flex-wrap gap-4">
          <div className="p-2 flex flex-row items-center justify-between flex-1/3 border-gray-200/25 border rounded-md bg-muted/5">
            <h4 className="font-semibold text-sm">Data:</h4>
            <span className="text-sm">
              {event?.startDate?.split('-')[2] || ''} a{' '}
              {event?.endDate?.split('-')[2] || ''} de{' '}
              {new Date(event?.startDate || '').toLocaleString('pt-BR', {
                month: 'long',
              })}
            </span>
          </div>
          <div className="p-2 flex flex-row items-center justify-between flex-1/3 border-gray-200/25 border rounded-md bg-muted/5">
            <h4 className="font-semibold text-sm">Horário:</h4>
            <span className="text-sm">
              {event?.startTime?.toString().split(':')[0] || ''}h às{' '}
              {event?.endTime?.toString().split(':')[0] || ''}hrs
            </span>
          </div>
          <div className="p-2 flex flex-row items-center justify-between flex-1/3 border-gray-200/25 border rounded-md bg-muted/5">
            <h4 className="font-semibold text-sm">Modalidade:</h4>
            <span className="text-sm">
              {(() => {
                switch (true) {
                  case event?.eventType === 'ONLINE_AO_VIVO':
                  case event?.eventType === 'ONLINE_GRAVADO':
                    return 'Online'
                  default:
                    return 'Presencial'
                }
              })()}
            </span>
          </div>
          <div className="p-2 flex flex-row items-center justify-between flex-1/3 border-gray-200/25 border rounded-md bg-muted/5">
            <h4 className="font-semibold text-sm">Preço:</h4>
            <span className="text-sm">
              {event?.price === 0
                ? 'Gratuito'
                : `R$ ${event?.price?.toFixed(2)}`}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
