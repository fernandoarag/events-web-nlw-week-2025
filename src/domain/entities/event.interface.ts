import type { LocalTime } from '@/infrastructure/http/api'
import type { ApiResponse } from './api-response.interface'

export interface Event extends ApiResponse {
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
