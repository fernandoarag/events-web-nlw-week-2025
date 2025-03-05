import type { LocalTime } from '@/infrastructure/http/api'
import { EventTypeEnum } from '../enums/type-event.enum'

export class EventContent {
  eventId?: number
  title?: string
  prettyName?: string
  location?: string
  price?: number
  startDate?: string
  endDate?: string
  startTime?: LocalTime
  endTime?: LocalTime
  about?: string
  eventType?: string

  constructor(
    eventId?: number,
    title?: string,
    prettyName?: string,
    location?: string,
    price?: number,
    startDate?: string,
    endDate?: string,
    startTime?: LocalTime,
    endTime?: LocalTime,
    about?: string,
    eventType?: string
  ) {
    this.eventId = eventId
    this.title = title
    this.prettyName = prettyName
    this.location = location
    this.price = price
    this.startDate = startDate
    this.endDate = endDate
    this.startTime = startTime
    this.endTime = endTime
    this.about = about
    this.eventType = eventType
  }

  constructorByEvent(event: EventContent) {
    this.eventId = event.eventId
    this.title = event.title
    this.prettyName = event.prettyName
    this.location = event.location
    this.price = event.price
    this.startDate = event.startDate
    this.endDate = event.endDate
    this.startTime = event.startTime
    this.endTime = event.endTime
    this.about = event.about
    this.eventType = event.eventType
  }

  getEventId(): number | undefined {
    return this.eventId
  }

  getTitle(): string | undefined {
    return this?.title || ''
  }

  getNameBlue(): string | undefined {
    return this?.getTitle()?.split(' ')[0] || ''
  }

  getName(): string | undefined {
    return this?.getTitle()?.split(' ').slice(1).join(' ') || ''
  }

  getPrettyName(): string | undefined {
    return this.prettyName
  }

  getEventType(): string | undefined {
    return this.eventType
  }

  getEventTypeEnum(): string | undefined {
    return (
      EventTypeEnum[this.getEventType() as keyof typeof EventTypeEnum] || ''
    )
  }

  getLocation(): string | undefined {
    return this.location
  }

  getPrice(): string | undefined {
    return `R$ ${this?.price?.toFixed(2)}` || 'Gratuito'
  }

  getStartDate(): string | undefined {
    return this.startDate
  }

  getStartDay(): string | undefined {
    return this?.getStartDate()?.split('-')[2] || ''
  }

  getEndDate(): string | undefined {
    return this.endDate
  }

  getEndDay(): string | undefined {
    return this?.getEndDate()?.split('-')[2] || ''
  }

  getMonth(): string | undefined {
    return (
      new Date(this?.getStartDate() || '')
        .toLocaleString('pt-BR', {
          month: 'short',
        })
        .toUpperCase() || ''
    )
  }

  getStartTime(): LocalTime | undefined {
    return this.startTime
  }

  getStartHour(): string | undefined {
    return this?.getStartTime()?.toString().split(':')[0] || ''
  }

  getEndTime(): LocalTime | undefined {
    return this.endTime
  }

  getEndHour(): string | undefined {
    return this?.getEndTime()?.toString().split(':')[0] || ''
  }

  getAbout(): string | undefined {
    return this.about || ''
  }

  getIconEventType(): string {
    switch (true) {
      case this.getEventTypeEnum() === EventTypeEnum.ONLINE_AO_VIVO:
        return 'radio'
      case this.getEventTypeEnum() === EventTypeEnum.ONLINE_GRAVADO:
        return 'video'
      default:
        return 'user'
    }
  }

  getModalidade(): string {
    switch (true) {
      case this.getEventTypeEnum() === EventTypeEnum.ONLINE_AO_VIVO:
      case this.getEventTypeEnum() === EventTypeEnum.ONLINE_GRAVADO:
        return 'Online'
      default:
        return 'Presencial'
    }
  }
}
