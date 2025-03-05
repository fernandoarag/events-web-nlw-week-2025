import Events from '@/components/ui/events'
import type { Event } from '@/domain/entities/event.interface'
import type { EventTypeEnum } from '@/domain/enums/type-event.enum'
import { getAllEvents } from '@/infrastructure/http/api'

interface HomeProps {
  searchParams: {
    page?: string
    size?: string
    eventType?: EventTypeEnum[]
    sort?: string
  }
}

export default async function Home({ searchParams = {} }: HomeProps) {
  const eventFilters = {
    page: Number(searchParams?.page) || 1,
    size: Number(searchParams?.size) || 4,
    sort: searchParams.sort || 'startDate',
    eventType: Array.isArray(searchParams.eventType)
      ? (searchParams.eventType as EventTypeEnum[])
      : searchParams.eventType
        ? [searchParams.eventType as EventTypeEnum]
        : [],
  }

  const events: Event = await getAllEvents(eventFilters)

  return (
    <div className="min-h-dvh flex flex-col justify-center gap-16 my-20">
      <div className="flex flex-col gap-8 items-center md:items-start">
        <h1 className="text-4xl text-center leading-none font-heading font-semibold flex flex-col md:text-7xl md:text-left">
          <span className="text-blue font-bold">Events</span> Management
        </h1>
      </div>

      <Events
        events={events.content}
        pageable={{
          totalPages: events.totalPages,
          totalElements: events.totalElements,
          pageSize: events.pageSize,
          pageNumber: events.pageNumber,
        }}
      />
    </div>
  )
}
