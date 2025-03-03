import type { ApiResponse } from './api-response.interface'
import type { EventContent } from './event-content.interface'
import type { Pageable } from './pageable.interface'

export interface Event extends ApiResponse, Pageable {
  content: EventContent[]
}
