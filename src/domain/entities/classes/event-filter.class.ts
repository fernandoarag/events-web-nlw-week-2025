import type { SortTypeEnum } from '@/domain/enums/sort-type.enum'
import type { EventTypeEnum } from '@/domain/enums/type-event.enum'

export class EventFilter {
  title?: string = ''
  eventType?: EventTypeEnum[]
  prettyName?: string = ''
  location?: string = ''
  startDate?: Date = undefined
  page?: number = undefined
  size?: number = undefined
  sort?: string = ''
  sortType?: SortTypeEnum = undefined
}
