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
import { EventTypeEnum } from '@/domain/enums/type-event.enum'
import { twMerge } from 'tailwind-merge'

interface SidebarProps {
  filters: { types: string[]; mode: string; sortBy: string }
  setFilters: React.Dispatch<
    React.SetStateAction<{ types: string[]; mode: string; sortBy: string }>
  >
  className?: string
}

const SidebarDefault = ({
  filters,
  setFilters,
  className,
  ...props
}: SidebarProps) => {
  const handleCheckboxChange = (type: string) => {
    setFilters(prev => ({
      ...prev,
      types: prev.types.includes(type)
        ? prev.types.filter(t => t !== type)
        : [...prev.types, type],
    }))
    console.log(filters)
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
        <Label className="sidebar-filter-title text-base">Tipo de Evento</Label>

        {Object.values(EventTypeEnum).map(type => (
          <div key={type} className="flex items-center gap-2 mb-1">
            <Checkbox
              id={type}
              checked={filters.types.includes(type)}
              onCheckedChange={() => handleCheckboxChange(type)}
            />
            <Label htmlFor={type} className="text-base">
              {type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()}
            </Label>
          </div>
        ))}
      </div>

      <Separator className="my-5" />

      <div className="flex flex-col">
        <Label className="sidebar-filter-title text-base">Modalidade</Label>
        <Select
          onValueChange={value =>
            setFilters(prev => ({ ...prev, mode: value }))
          }
          defaultValue="all"
        >
          <SelectTrigger className="w-full p-3 rounded-lg border-gray-300 border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-base">
            <SelectValue placeholder="Selecione a Modalidade" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="Online">Online</SelectItem>
            <SelectItem value="Presencial">Presencial</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Separator className="my-5" />

      <div className="flex flex-col">
        <Label className="sidebar-filter-title text-base">Ordenar por</Label>
        <Select
          onValueChange={value =>
            setFilters(prev => ({ ...prev, sortBy: value }))
          }
          defaultValue="date"
        >
          <SelectTrigger className="w-full p-3 rounded-lg border-gray-300 border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-base">
            <SelectValue
              placeholder={filters.sortBy === 'price' ? 'Preço' : 'Data'}
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date">Data</SelectItem>
            <SelectItem value="price">Preço</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export default SidebarDefault
