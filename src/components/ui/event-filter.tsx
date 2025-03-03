'use client'

import type { EventContent } from '@/domain/entities/event-content.interface'
import { useRouter, useSearchParams } from 'next/navigation'
import type { ComponentProps } from 'react'
import { useEffect, useState } from 'react'
import { EventCard } from './event-card'
import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from './pagination'
import SidebarDefault from './sidebar-default'

interface EventCardProps extends ComponentProps<'div'> {
  events?: EventContent[]
  totalPages: number
}

export default function EventFilter({
  events = [],
  totalPages = 0,
  ...props
}: EventCardProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const page = Number(searchParams.get('page')) || 1

  const [filters, setFilters] = useState<{
    types: string[]
    mode: string
    sortBy: string
  }>({
    types: [],
    mode: 'all',
    sortBy: 'date',
  })

  const [filteredEvents, setFilteredEvents] = useState<EventContent[]>([])

  useEffect(() => {
    // Filtra e ordena os eventos conforme os filtros aplicados
    const filtered = events
      .filter(event =>
        filters.types.length
          ? filters.types.includes(event.eventType ?? '')
          : true
      )
      .filter(event =>
        filters.mode !== 'all'
          ? filters.mode === 'Online'
            ? (event.eventType ?? '').includes('ONLINE')
            : (event.eventType ?? '') === 'PRESENCIAL'
          : true
      )
      .sort((a, b) =>
        filters.sortBy === 'price'
          ? (a.price || 0) - (b.price || 0)
          : new Date(a.startDate ?? '').getTime() -
            new Date(b.startDate ?? '').getTime()
      )

    setFilteredEvents(filtered)
  }, [events, filters])

  // Função para mudar de página
  const handlePageChange = (fromToPage: number) => {
    if (fromToPage > 0 && fromToPage <= totalPages) {
      const params = new URLSearchParams(searchParams.toString())
      params.set('page', String(fromToPage))
      params.set('size', '4')
      router.push(`?${params.toString()}/#eventsFilter`, { scroll: true })
    }
  }

  const generatePageButtons = () => {
    const buttons = []
    let previousButtons = 0

    for (
      let currentPreviousPage = page - 1;
      currentPreviousPage < page &&
      currentPreviousPage > 0 &&
      previousButtons < 2;
    ) {
      buttons.unshift(
        <PaginationItem key={currentPreviousPage}>
          <PaginationButton
            onClick={() => handlePageChange(currentPreviousPage + 1)}
          >
            {currentPreviousPage}
          </PaginationButton>
        </PaginationItem>
      )
      currentPreviousPage--
      previousButtons++
    }

    if (page < totalPages) {
      buttons.push(
        <PaginationItem key={page}>
          <PaginationButton isActive>{page}</PaginationButton>
        </PaginationItem>
      )
    }

    let nextButtons = 0
    for (let x = page; ++x < totalPages && nextButtons < 2; ) {
      buttons.push(
        <PaginationItem key={x}>
          <PaginationButton onClick={() => handlePageChange(x)}>
            {x}
          </PaginationButton>
        </PaginationItem>
      )
      nextButtons++
    }

    if (page + 3 < totalPages) {
      buttons.push(
        <PaginationItem key={page + 3}>
          <PaginationEllipsis>...</PaginationEllipsis>
        </PaginationItem>
      )
    }

    if (totalPages) {
      buttons.push(
        <PaginationItem key={totalPages}>
          <PaginationButton
            onClick={() => handlePageChange(totalPages)}
            isActive={page === totalPages}
          >
            {totalPages}
          </PaginationButton>
        </PaginationItem>
      )
    }
    return buttons
  }

  return (
    <div
      id="eventsFilter"
      className="grid grid-cols-[325px_1fr] gap-6 min-h-[764px] pb-24"
      {...props}
    >
      <SidebarDefault
        filters={filters}
        setFilters={setFilters}
        className="min-h-[764px]"
      />

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-6 w-full">
          {filteredEvents.map(event => (
            <EventCard key={event.prettyName} event={event} />
          ))}
        </div>

        <div className="absolute bottom-[-4rem] left-0 w-full flex justify-center items-center gap-4">
          <Pagination>
            <PaginationContent>
              {page > 1 && (
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => handlePageChange(page - 1)}
                  />
                </PaginationItem>
              )}
              {generatePageButtons()}
              {page < totalPages && (
                <PaginationItem>
                  <PaginationNext onClick={() => handlePageChange(page + 1)} />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  )
}
