import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { EventTypeLabelEnum } from '@/domain/enums/type-event-label.enum'
import { EventTypeEnum } from '@/domain/enums/type-event.enum'
import { twMerge } from 'tailwind-merge'

interface FilterProps {
  eventType: EventTypeEnum[]
  sortBy: string
  page?: number
}

interface SidebarProps {
  filters: FilterProps
  setFilters: React.Dispatch<React.SetStateAction<FilterProps>>
  className?: string
}

const SidebarDefault = ({
  filters,
  setFilters,
  className,
  ...props
}: SidebarProps) => {
  const typeLabel = EventTypeLabelEnum
  const handleCheckboxChange = (type: string) => {
    const indice = filters.eventType.findIndex(e => e === type)

    indice >= 0
      ? filters.eventType.splice(indice, 1)
      : filters.eventType.push(type as EventTypeEnum)

    setFilters(prev => ({
      ...prev,
      eventType: prev.eventType,
      page: 1,
    }))
  }

  return (
    <div
      className={twMerge(
        'bg-gray-700 shadow-md rounded-lg w-[325px] py-10 px-8 ',
        className
      )}
      {...props}
    >
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold mb-4">Filtragem</h2>
      </div>
      <div className="flex flex-col">
        <Label className="sidebar-filter-title text-base font-semibold">
          Tipo de Evento
        </Label>

        {Object.values(EventTypeEnum).map(type => (
          <div key={type} className="flex items-center gap-2 mb-1">
            <Checkbox
              id={type}
              checked={filters.eventType.indexOf(type) >= 0}
              onCheckedChange={() => handleCheckboxChange(type)}
            />
            <Label htmlFor={type} className="text-base">
              {typeLabel[type].charAt(0).toUpperCase() +
                typeLabel[type].slice(1).toLowerCase() || ''}
            </Label>
          </div>
        ))}
      </div>

      <Separator className="my-5" />

      <div className="flex flex-col">
        <Label className="sidebar-filter-title text-base font-semibold">
          Ordenar por
        </Label>
        <Select
          onValueChange={value =>
            setFilters(prev => ({ ...prev, sortBy: value }))
          }
          defaultValue={filters.sortBy}
        >
          <SelectTrigger className="w-full p-3 rounded-lg border-gray-300 border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-base">
            <SelectValue
              placeholder={filters.sortBy === 'price' ? 'Preço' : 'Data'}
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="startDate">Data</SelectItem>
            <SelectItem value="price">Preço</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export default SidebarDefault
