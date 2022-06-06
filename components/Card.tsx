import * as React from 'react'

import { ICard } from '../types'

type Props = {
  card: ICard
}

const Card = ({ card }: Props) => {
  return (
    <a
      href={card.link}
      className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
    >
      <h3 className="text-xl font-bold text-slate-900">{card.title} &rarr;</h3>
      <p className="mt-4 text-lg">{card.desc}</p>
      <p className="mt-4 italic text-md">{card.tags}</p>
    </a>
  )
}

export default Card
