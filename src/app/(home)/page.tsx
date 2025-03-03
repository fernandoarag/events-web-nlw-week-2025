import EventFilter from '@/components/ui/event-filter'
import type { Event } from '@/domain/entities/event.interface'
import { getAllEvents } from '@/infrastructure/http/api'

interface HomeProps {
  searchParams: { page?: string }
}

export default async function Home({ searchParams = {} }: HomeProps) {
  const page = Number(searchParams?.page) || 1
  const pageSize = 4

  const events: Event = await getAllEvents(page, pageSize)
  console.log('events: ', events)

  return (
    <div className="min-h-dvh flex flex-col justify-center gap-16 my-20">
      <div className="flex flex-col gap-8 items-center md:items-start">
        <h1 className="text-4xl text-center leading-none font-heading font-semibold flex flex-col md:text-7xl md:text-left">
          <span className="text-blue font-bold">Events</span> Management
        </h1>
      </div>

      <EventFilter events={events.content} totalPages={events.totalPages} />
    </div>
  )
}
