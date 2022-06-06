import * as React from 'react'

import { ICard } from '../types'

type Props = {
  card: ICard
}

const Card = ({ card }: Props) => {
  return (
    <a
      href={card.link}
      className="mt-6 w-96 rounded-xl border border-slate-500 p-6 text-left my-2 hover:text-blue-600 hover:border-blue-600 hover:shadow-lg focus:text-blue-600"
    >
      <h3 className="text-xl font-bold text-slate-900">
        {card.title}{' '}
        <svg
          className="inline pl-2"
          width="14"
          height="23"
          viewBox="0 0 14 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 2L11 11.5L2 21" stroke="black" stroke-width="4"></path>
        </svg>
      </h3>
      <p className="mt-4 text-lg">{card.desc}</p>
      <p className="mt-4 italic text-md">{card.tags}</p>
    </a>
  )
}

export default Card
