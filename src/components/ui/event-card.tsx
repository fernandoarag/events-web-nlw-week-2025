import { EventContent } from '@/domain/entities/event-content.class'
import { EventTypeLabelEnum } from '@/domain/enums/type-event-label.enum'
import type { IconName } from 'lucide-react/dynamic'
import { DynamicIcon } from 'lucide-react/dynamic'
import Link from 'next/link'
import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface EventCardProps extends ComponentProps<'a'> {
  event?: EventContent
}

export function EventCard({ event, className, ...props }: EventCardProps) {
  const currentEvent: EventContent = new EventContent()
  currentEvent.constructorByEvent(event as EventContent)

  const eventNameBlue = event?.title?.split(' ')[0]
  const eventName = event?.title?.split(' ').slice(1).join(' ')
  const eventType =
    EventTypeLabelEnum[event?.eventType as keyof typeof EventTypeLabelEnum]

  return (
    <Link
      href={`/events/${event?.prettyName}`}
      className={twMerge(
        'w-full bg-gray-800/80 border border-gray-600 rounded-2xl p-8 space-y-6  transition-all duration-300 shadow-blue/25 hover:shadow-lg hover:scale-101 max-h-[100%] min-h-[370px] z-50',
        className
      )}
      {...props}
    >
      <div className="relative flex flex-row items-center justify-between">
        <h1 className="text-4xl text-center leading-none font-heading font-semibold flex flex-col md:text-left">
          <span className="text-blue">{currentEvent.getNameBlue()}</span>{' '}
          {currentEvent.getName()}
        </h1>

        <span className="absolute top-0 right-0 text-purple font-semibold text-xs flex items-center gap-2">
          <DynamicIcon
            className="size-5"
            name={currentEvent.getIconEventType() as IconName}
          />
          {currentEvent.getEventTypeEnum()}
        </span>
      </div>
      <div className="relative max-h-[calc(100%-102px)] h-full flex flex-col justify-between items-start">
        <p className=" text-gray-300 leading-relaxed text-sm md:text-base ">
          {currentEvent.getAbout()}
        </p>

        <div className="flex flex-row justify-between flex-wrap gap-4">
          <div className="p-2 flex flex-row items-center justify-between flex-1/3 border-gray-200/25 border rounded-md bg-muted/5">
            <h4 className="font-semibold text-sm">Data:</h4>
            <span className="text-sm">
              {currentEvent.getStartDay()}/{currentEvent.getMonthStartDate()} a{' '}
              {currentEvent.getEndDay()}/{currentEvent.getMonthEndDate()}
            </span>
          </div>
          <div className="p-2 flex flex-row items-center justify-between flex-1/3 border-gray-200/25 border rounded-md bg-muted/5">
            <h4 className="font-semibold text-sm">Horário:</h4>
            <span className="text-sm">
              {currentEvent.getStartHour()} às {currentEvent.getEndHour()}hrs
            </span>
          </div>
          <div className="p-2 flex flex-row items-center justify-between flex-1/3 border-gray-200/25 border rounded-md bg-muted/5">
            <h4 className="font-semibold text-sm">Modalidade:</h4>
            <span className="text-sm">{currentEvent.getModalidade()}</span>
          </div>
          <div className="p-2 flex flex-row items-center justify-between flex-1/3 border-gray-200/25 border rounded-md bg-muted/5">
            <h4 className="font-semibold text-sm">Preço:</h4>
            <span className="text-sm">{currentEvent.getPrice()}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
