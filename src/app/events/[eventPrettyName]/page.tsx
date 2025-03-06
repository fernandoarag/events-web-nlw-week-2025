import Image from 'next/image'

import { EventContent } from '@/domain/entities/event-content.class'
import { getEventByPrettyName } from '@/infrastructure/http/api'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'
import logo from '../../../assets/logo.svg'
import { SubscriptionForm } from './subscription-form'

interface EventPageProps {
  params: Promise<{
    eventPrettyName: string
  }>
}

export default async function HomeEvent(props: EventPageProps) {
  const { eventPrettyName } = await props.params

  const event: EventContent = new EventContent()
  event.constructorByEvent(await getEventByPrettyName(eventPrettyName))

  return (
    <div className="container flex flex-col justify-center gap-8 py-30">
      <div className="flex flex-col gap-8 items-center md:items-start">
        <Image
          src={logo}
          alt="devstage"
          className="max-w-[108.5px] max-h-[30px]"
        />

        <h1 className="text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left">
          <span className="text-blue">{event.getNameBlue()}</span>{' '}
          {event.getName()}
        </h1>
      </div>

      <div className="flex gap-5 items-stretch flex-col md:flex-row">
        <div className="bg-gray-700 border border-gray-600 rounded-2xl p-8 flex flex-col items-start justify-between gap-4 w-full">
          <div className="flex items-center justify-between w-full">
            <h2 className="font-heading font-semibold text-gray-200 text-xl">
              Sobre o evento
            </h2>
            <span className="text-purple font-semibold text-xs flex items-center gap-2">
              <DynamicIcon
                className="size-5"
                name={event.getIconEventType() as IconName}
              />
              {event.getEventTypeEnum()}
            </span>
          </div>

          <div>
            <p className=" text-gray-300 leading-relaxed text-sm md:text-base ">
              {event.getAbout()}
            </p>
          </div>

          <div className="relative max-h-[calc(100%-102px)] flex flex-col justify-between items-start gap-6 w-full">
            <div className="flex flex-row justify-between flex-wrap gap-4 w-full">
              <div className="p-2 flex flex-row items-center justify-between flex-1/3 border-gray-200/10 border rounded-md bg-gray-500">
                <h4 className="font-semibold text-sm">Data:</h4>
                <span className="text-sm">
                  {event.getStartDay()}/{event.getMonthStartDate()} a{' '}
                  {event.getEndDay()}/{event.getMonthEndDate()}
                </span>
              </div>
              <div className="p-2 flex flex-row items-center justify-between flex-1/3 border-gray-200/10 border rounded-md bg-gray-500">
                <h4 className="font-semibold text-sm">Horário:</h4>
                <span className="text-sm">
                  {event.getStartHour()} às {event.getEndHour()}hrs
                </span>
              </div>
              <div className="p-2 flex flex-row items-center justify-between flex-1/3 border-gray-200/10 border rounded-md bg-gray-500 ">
                <h4 className="font-semibold text-sm">Modalidade:</h4>
                <span className="text-sm">{event.getModalidade()}</span>
              </div>
              <div className="p-2 flex flex-row items-center justify-between flex-1/3 border-gray-200/10 border rounded-md bg-gray-500">
                <h4 className="font-semibold text-sm">Preço:</h4>
                <span className="text-sm">{event.getPrice()}</span>
              </div>
            </div>
          </div>
        </div>

        <SubscriptionForm
          eventPrettyName={eventPrettyName}
          className="flex flex-col justify-center w-full"
        />
      </div>
    </div>
  )
}
