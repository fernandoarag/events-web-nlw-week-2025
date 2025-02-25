import type { SubscriptionRankingItem } from '@/infrastructure/http/api'
import { generateRankingByEvent } from '@/infrastructure/http/api'
import Image from 'next/image'
import cooper from '../../../../assets/medal-cooper.svg'
import gold from '../../../../assets/medal-gold.svg'
import silver from '../../../../assets/medal-silver.svg'

interface RankingProps {
  eventPrettyName: string
}

export async function Ranking({ eventPrettyName }: RankingProps) {
  let ranking: SubscriptionRankingItem[] =
    await generateRankingByEvent(eventPrettyName)

  switch (true) {
    case ranking?.length <= 0:
      ranking = [
        { userId: undefined, name: undefined, subscribers: undefined },
        { userId: undefined, name: undefined, subscribers: undefined },
        { userId: undefined, name: undefined, subscribers: undefined },
      ]
      break
    case ranking?.length <= 1:
      ranking.push({
        userId: undefined,
        name: undefined,
        subscribers: undefined,
      })
      ranking.push({
        userId: undefined,
        name: undefined,
        subscribers: undefined,
      })
      break
    case ranking?.length <= 2:
      ranking.push({
        userId: undefined,
        name: undefined,
        subscribers: undefined,
      })
      break
    default:
      break
  }

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking?.length > 0 &&
          ranking?.map(({ userId, name, subscribers }, index) => (
            <div
              key={`${index}_${userId}_${name}_${subscribers}`}
              className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
            >
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{index + 1}°</span> |{' '}
                {name || 'Sem ranking no momento'}
              </span>

              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {subscribers || '0'}
              </span>

              <Image
                src={index + 1 === 1 ? gold : index + 1 === 2 ? silver : cooper}
                alt="devstage"
                className="absolute top-0 right-8"
              />
            </div>
          ))}
      </div>
    </div>
  )
}
