import Image from 'next/image'

import { EventTypeEnum } from '@/domain/enums/type-event.enum'
import { getEventByPrettyName } from '@/infrastructure/http/api'
import { Radio, User, Video } from 'lucide-react'
import logo from '../../../assets/logo.svg'
import { SubscriptionForm } from './subscription-form'

interface EventPageProps {
  params: Promise<{
    eventPrettyName: string
  }>
}

export default async function HomeEvent(props: EventPageProps) {
  const { eventPrettyName } = await props.params

  const event = await getEventByPrettyName(eventPrettyName)
  const eventNameBlue = event.title?.split(' ')[0]
  const eventName = event.title?.split(' ').slice(1).join(' ')
  const eventType = EventTypeEnum[event.eventType as keyof typeof EventTypeEnum]

  return (
    <div className="min-h-dvh flex flex-col justify-center gap-16">
      <div className="flex flex-col gap-8 items-center md:items-start">
        <Image
          src={logo}
          alt="devstage"
          className="max-w-[108.5px] max-h-[30px]"
        />

        <h1 className="text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left">
          <span className="text-blue">{eventNameBlue || ''}</span> {eventName}
        </h1>
      </div>

      <div className="flex gap-5 items-stretch flex-col md:flex-row">
        <div className="flex-1 bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-heading font-semibold text-gray-200 text-xl">
              Sobre o evento
            </h2>
            <span className="text-purple font-semibold text-xs flex items-center gap-2">
              {(() => {
                switch (true) {
                  case event.eventType === 'ONLINE_AO_VIVO':
                    return <Radio className="size-5" />
                  case event.eventType === 'ONLINE_GRAVADO':
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
                case event.eventType === 'ONLINE_AO_VIVO':
                case event.eventType === 'ONLINE_GRAVADO':
                  return 'Online'
                default:
                  return 'Presencial'
              }
            })()} |{' '}
            {event?.price && event?.price <= 0
              ? 'Gratuito'
              : `R$ ${event?.price?.toFixed(2)}`}
          </p>
        </div>

        <SubscriptionForm eventPrettyName={eventPrettyName} />
      </div>
    </div>
  )
}
