'use client'

import type { EventFilter } from '@/domain/entities/classes/event-filter.class'
import type { EventContent } from '@/domain/entities/event-content.class'
import type { Pageable } from '@/domain/entities/pageable.interface'
import type { EventTypeEnum } from '@/domain/enums/type-event.enum'
import { useRouter, useSearchParams } from 'next/navigation'
import type { ComponentProps } from 'react'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
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
  events: EventContent[]
  pageable?: Pageable
  eventFilters?: EventFilter
}

interface FilterProps {
  eventType: EventTypeEnum[]
  sortBy: string
  page?: number
}

export default function Events({
  events = [],
  pageable,
  eventFilters,
  ...props
}: EventCardProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const page = Number(searchParams.get('page')) || 1
  const initPage = 0

  const [filters, setFilters] = useState<FilterProps>({
    eventType: (searchParams.getAll('eventType') as EventTypeEnum[]) || [],
    sortBy: searchParams.get('sort') || 'startDate',
    page: searchParams.get('page') ? Number(searchParams.get('page')) : 0,
  })

  useEffect(() => {
    handlePageChange(filters.page || 0, filters, 'eventsFilter')
  }, [filters])

  // Função para mudar de página
  const handlePageChange = (
    fromToPage: number,
    filters?: FilterProps,
    pageId?: string
  ) => {
    if (fromToPage > 0 && fromToPage <= (pageable?.totalPages ?? 0)) {
      const params = new URLSearchParams(searchParams.toString())
      params.set('page', String(fromToPage))
      params.set('size', '4')

      // Atualiza os eventTypes corretamente
      params.delete('eventType')
      for (const type of filters?.eventType ?? []) {
        params.append('eventType', type)
      }

      params.set('sort', filters?.sortBy || 'startDate')
      router.push(`?${params.toString()}${pageId ? `#${pageId}` : ''}`, {
        scroll: true,
      })
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
            onClick={() =>
              handlePageChange(currentPreviousPage + 1, filters, 'eventsFilter')
            }
          >
            {currentPreviousPage}
          </PaginationButton>
        </PaginationItem>
      )
      currentPreviousPage--
      previousButtons++
    }

    if (page < (pageable?.totalPages ?? 0)) {
      buttons.push(
        <PaginationItem key={page}>
          <PaginationButton isActive>{page}</PaginationButton>
        </PaginationItem>
      )
    }

    let nextButtons = 0
    for (let x = page; ++x < (pageable?.totalPages ?? 0) && nextButtons < 2; ) {
      buttons.push(
        <PaginationItem key={x}>
          <PaginationButton
            onClick={() => handlePageChange(x, filters, 'eventsFilter')}
          >
            {x}
          </PaginationButton>
        </PaginationItem>
      )
      nextButtons++
    }

    if (page + 3 < (pageable?.totalPages ?? 0)) {
      buttons.push(
        <PaginationItem key={page + 3}>
          <PaginationEllipsis>...</PaginationEllipsis>
        </PaginationItem>
      )
    }

    if (pageable?.totalPages ?? 0) {
      buttons.push(
        <PaginationItem key={pageable?.totalPages ?? 0}>
          <PaginationButton
            onClick={() =>
              handlePageChange(
                pageable?.totalPages ?? 0,
                filters,
                'eventsFilter'
              )
            }
            isActive={page === (pageable?.totalPages ?? 0)}
          >
            {pageable?.totalPages ?? 0}
          </PaginationButton>
        </PaginationItem>
      )
    }

    if (page >= 4) {
      buttons.unshift(
        <PaginationItem key={page + 999}>
          <PaginationEllipsis>...</PaginationEllipsis>
        </PaginationItem>
      )
      buttons.unshift(
        <PaginationItem key={1}>
          <PaginationButton
            onClick={() => handlePageChange(1, filters, 'eventsFilter')}
          >
            1
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

      <div className="relative bg-gray-700/75 p-2 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-2 w-full">
          {events?.length > 0 ? (
            events.map(event => (
              <EventCard key={event.prettyName} event={event} />
            ))
          ) : (
            <></>
          )}
        </div>

        <div className="absolute bottom-[-4rem] left-0 w-full flex justify-center items-center gap-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  className={
                    page === 1 ? 'pointer-events-none' : 'cursor-pointer'
                  }
                  onClick={() =>
                    handlePageChange(page - 1, filters, 'eventsFilter')
                  }
                />
              </PaginationItem>
              {generatePageButtons()}
              <PaginationItem>
                <PaginationNext
                  className={
                    page >= (pageable?.totalPages ?? 0)
                      ? 'pointer-events-none'
                      : 'cursor-pointer'
                  }
                  onClick={() =>
                    handlePageChange(page + 1, filters, 'eventsFilter')
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  )
}
