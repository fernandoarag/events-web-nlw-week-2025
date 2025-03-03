import type { LocalTime } from '@/infrastructure/http/api'

export interface EventContent {
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
}
