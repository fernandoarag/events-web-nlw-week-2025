import { getAllEvents } from '@/infrastructure/http/api'
import { EventCard } from '@/presentation/components/event-card'
import Image from 'next/image'
import logo from '../../../public/favicon_fa_white_blue_border_v2.svg'

export default async function Home() {
  const events = await getAllEvents()
  const event = events[0]

  return (
    <div className="min-h-dvh flex flex-col justify-center gap-16 my-20">
      <div className="flex flex-col gap-8 items-center md:items-start">
        <Image src={logo} alt="devstage" className="max-h-[150px]" />

        <h1 className="text-4xl text-center leading-none font-heading font-semibold flex flex-col md:text-7xl md:text-left">
          <span className="text-blue font-bold">Events</span> Management
        </h1>
      </div>

      <div className="flex gap-5 items-stretch flex-col md:flex-row w-full md:flex-wrap">
        {events?.map(event => (
          <EventCard event={event} key={`${event.title}`} />
        ))}
      </div>
    </div>
  )
}
