'use client'

import { createNewSubscription1 } from '@/infrastructure/http/api'
import {
  InputField,
  InputIcon,
  InputRoot,
} from '@/presentation/components/Input'
import { Button } from '@/presentation/components/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Mail, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import type { ComponentProps } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const subscriptionSchema = z.object({
  name: z
    .string()
    .min(2, 'Digite seu nome completo')
    .trim()
    .regex(/^[A-Za-zÀ-ÿ\s]+$/, 'O nome deve conter apenas letras'),
  email: z.string().email('Digite um e-mail válido'),
  prettyName: z.string().default('code-craft-summit-2025'),
})

type SubscriptionSchema = z.infer<typeof subscriptionSchema>

interface FormProps extends ComponentProps<'form'> {
  eventPrettyName?: string
}

export function SubscriptionForm({ eventPrettyName }: FormProps) {
  const router = useRouter()
  // const searchParams = useSearchParams()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }, // Aqui pegamos os erros do Zod
  } = useForm<SubscriptionSchema>({
    resolver: zodResolver(subscriptionSchema),
    mode: 'onChange', // Garante que os erros sejam atualizados em tempo real
  })

  async function onSubscribe({ email, prettyName, name }: SubscriptionSchema) {
    try {
      console.log('Pretty Name: ', prettyName)
      const res = await createNewSubscription1(prettyName, {
        name: name.trim(),
        email: email.trim(),
      })

      if (res?.subscriptionNumber) {
        router.push(`/subscribed/${prettyName}/${res.subscriptionNumber}`)
      } else {
        setError('root', { message: res?.detail || 'Erro ao se inscrever.' })
      }
    } catch (error) {
      setError('root', { message: 'Erro inesperado. Tente novamente.' })
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>

      <div className="space-y-3">
        <input
          type="hidden"
          {...register('prettyName')}
          value={eventPrettyName}
        />
        <div className="space-y-2">
          <InputRoot error={!!errors.name}>
            <InputIcon>
              <User />
            </InputIcon>
            <InputField
              type="text"
              placeholder="Nome completo"
              {...register('name')}
            />
          </InputRoot>

          {errors.name && (
            <p className="text-danger text-xs font-semibold">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <InputRoot error={!!errors.email}>
            <InputIcon>
              <Mail />
            </InputIcon>
            <InputField
              type="email"
              placeholder="E-mail"
              {...register('email')}
            />
          </InputRoot>

          {errors.email && (
            <p className="text-danger text-xs font-semibold">
              {errors.email.message}
            </p>
          )}
        </div>

        {errors.root && (
          <p className="text-danger text-xs font-semibold">
            {errors.root.message}
          </p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Confirmar'}
        <ArrowRight />
      </Button>
    </form>
  )
}
