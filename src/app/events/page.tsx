'use server'

import line_bg_short from '@/assets/line_bg_short.png'
import Events from '@/components/ui/events'
import type { Event } from '@/domain/entities/event.interface'
import type { EventTypeEnum } from '@/domain/enums/type-event.enum'
import { getAllEvents } from '@/infrastructure/http/api'
import { Presentation, Text, Ticket } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface HomeProps {
  searchParams: {
    page?: string
    size?: string
    eventType?: EventTypeEnum[]
    sort?: string
  }
}

export default async function Home({ searchParams = {} }: HomeProps) {
  const { eventType, page, size, sort } = await searchParams

  const eventFilters = {
    page: Number(page) || 1,
    size: Number(size) || 4,
    sort: sort || 'startDate',
    eventType: Array.isArray(eventType)
      ? (eventType as EventTypeEnum[])
      : eventType
        ? [eventType as EventTypeEnum]
        : [],
  }

  const events: Event = await getAllEvents(eventFilters)

  return (
    <div className="min-h-dvh flex flex-col justify-center">
      <section className="section-md">
        <div className="container grid grid-cols-2 gap-[15rem] h-[450px] ">
          <div className="flex flex-col justify-center gap-6 w-full h-full z-10">
            <h1 className="text-4xl md:text-6xl leading-none font-heading-variant">
              <span className="text-blue font-semibold">Find The Event </span>{' '}
              <br />
              <span>That Interests You</span>
            </h1>

            <p className="text-base">
              Find the event that interests you, and click on it to be directed
              to the corresponding page and register!
            </p>

            <Link
              href="/events"
              className="max-w-[300px] text-center text-white uppercase font-semibold text-base bg-blue-600/50 border-1 border-blue-600/20 py-4 px-10 rounded-full transition-all duration-300 hover:bg-blue-600"
            >
              Go to Home
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 z-2">
            <div className="group flex flex-row items-center justify-center rounded-full bg-gray-950/80 h-[100px] w-2/3 transition-all duration-200 hover:bg-gray-950/100 hover:shadow-xl shadow-blue-600/10 border border-white hover:border-blue-600">
              <span className="uppercase font-semibold text-xl font-heading group-hover:text-blue-600 transition-all duration-200">
                Search with filtering
              </span>
            </div>
            <div className="flex flex-row items-center justify-start gap-10 w-full">
              <div className="group flex flex-row items-center justify-center rounded-full bg-gray-950/80 h-[100px] w-full transition-all duration-200 hover:bg-gray-950/100 hover:shadow-xl shadow-blue-600/10 border border-white hover:border-blue-600">
                <span className="uppercase font-semibold text-xl font-heading group-hover:text-blue-600 transition-all duration-200">
                  Easy and agile registration
                </span>
              </div>

              <div className="group relative bg-blue-600/40 hover:shadow-xl hover:border-blue-600 hover:bg-blue-300/100 border-1 shadow-blue-600/10 rounded-full transition-all duration-200 p-6">
                <Ticket
                  size={70}
                  className="transition-all duration-200 group-hover:scale-105 group-hover:text-blue-600"
                />
              </div>
            </div>
            <div className="group flex flex-row items-center justify-center rounded-full bg-gray-950/80 h-[100px] w-2/3 transition-all duration-200 hover:bg-gray-950/100 hover:shadow-xl shadow-blue-600/10 border border-white hover:border-blue-600">
              <span className="uppercase font-semibold text-xl font-heading group-hover:text-blue-600 transition-all duration-200">
                Quick and easy registration
              </span>
            </div>
          </div>
        </div>

        <Image
          src={line_bg_short}
          alt="Background top right image"
          className="absolute top-[-88px] right-0 z-[-1] max-h-[730px]"
        />
      </section>

      <section className="section-md">
        <div className="container">
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
      </section>
    </div>
  )
}
