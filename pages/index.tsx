import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { InferGetStaticPropsType } from 'next'
import Card from '../components/Card'
import { ICard } from '../types'
import { data } from '../data'

export async function getStaticProps() {
  const cards: ICard[] = data

  return {
    props: {
      cards,
    },
  }
}

type Props = {
  cards: ICard[]
}

export default function Home({ cards }: Props) {
  const [cardList, setCardList] = useState(cards)
  return (
    <div className="flex min-h-screen flex-col items-center justify-center ">
      <Head>
        <title>Index - Nadia Konieczny</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Nadia Konieczny's homepage - web development and computing"
        />
      </Head>
      <div></div>
      <header className="z-40 backdrop-blur-xl flex flex-row w-full  justify-between px-4 items-center">
        <span>
          <Image src="/favicon/favicon-32x32.png" width={32} height={32} />
        </span>
        <ul className="font-bold uppercase flex flex-row items-center justify-center py-4 space-x-5">
          <Link href="./portfolio">
            <a>Portfolio</a>
          </Link>
          <Link href="./contact">
            <a>Contact</a>
          </Link>
        </ul>
      </header>

      <h1 className="font-serif italic font-b text-white text-3xl w-full px-8 p-5 mb-16 bg-gradient-to-r from-fuchsia-500 to-blue-500">
        <a href="./index.html">Nadia Konieczny</a>
      </h1>
      <main className="max-w-5xl mx-auto font-sans text-slate-700 z-40 flex w-full flex-1 flex-col items-center justify-center px-2 pb-8 md:px-20">
        <section className="text-center mb-16 text-slate-800">
          <h2 className="text-3xl mb-4">Frontend Developer</h2>
          <h3 className="text-xl">
            React.js&nbsp;&nbsp;&middot;&nbsp;&nbsp;Next.js&nbsp;&nbsp;&middot;&nbsp;&nbsp;Redux.js
            &nbsp;&nbsp;&middot;&nbsp;&nbsp;Bootstrap&nbsp;&nbsp;&middot;&nbsp;&nbsp;Tailwind
            CSS
          </h3>
        </section>
        <section className="">
          <div className="flex flex-row justify-between mb-8">
            <div className="flex flex-col text-left space-y-2">
              <p>Nadia Konieczny</p>
              <p>nadiakonieczny@outlook.com</p>
            </div>
            <div className="flex flex-col text-right space-y-2">
              <p>
                <a href="https://github.com/nadiakay">Github</a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/nadia-konieczny-0a8367217">
                  Linkedin
                </a>
              </p>
            </div>
          </div>

          <p className="mx-8 mb-8 leading-relaxed">
            Hello! I'm a computer science student at the University of
            Minnesota. My experience is mostly in Javascript, specifically
            React. I'm also familiar with Python, Java, and C. I'm passionate
            about the projects I work on and learning new technologies, and I'm
            eager to work on a team.
          </p>

          <h1 className="text-2xl text-slate-900 mx-4">Portfolio</h1>
          <div className="flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
            {cardList.map((card) => (
              <Card card={card} />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-300 flex h-24 mb-8 w-full items-center justify-center">
        <a
          className="text-slate-500 flex items-center justify-center gap-2"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site by Nadia
        </a>
      </footer>
    </div>
  )
}
