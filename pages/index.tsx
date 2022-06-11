import type { InferGetStaticPropsType } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Canvas from '../components/Canvas'
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

export default function Home({
  cards,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [cardList, setCardList] = useState(cards)
  return (
    <div className="flex w-full min-h-screen flex-col items-center justify-center ">
      <Head>
        <title>Nadia Konieczny - Web Developer Portfolio</title>
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
      <Nav />

      <h1 className="font-serif italic font-b text-gray-100 text-4xl w-full px-8 p-5 bg-gradient-to-r from-fuchsia-500 to-blue-500 border-b-2">
        <a href="/">Nadia Konieczny</a>
      </h1>

      <Hero />
      <main className="max-w-5xl mx-auto font-sans text-slate-700 z-40 flex w-full flex-1 flex-col items-center justify-center px-2 pb-8 md:px-20">
        <section className="text-lg" id="about">
          <h1 className="text-2xl text-slate-900 mt-6 mb-12 text-center">
            About
          </h1>

          <p className="mx-8 mb-8 leading-relaxed">
            Hello! I'm a computer science student at the University of
            Minnesota. I've worked on a number of independent projects, mostly
            in Javascript and Typescript using the React framework. I'm
            passionate about learning new skills and technologies and eager to
            work on projects with others.
          </p>
        </section>
        <section className="text-lg" id="portfolio">
          <h1 className="text-2xl text-slate-900 my-6 text-center">
            Portfolio
          </h1>
          <div className="flex max-w-4xl flex-wrap items-center justify-around max-w-full">
            {cardList.map((card) => (
              <Card card={card} />
            ))}
          </div>
        </section>
        <section className="min-w-full" id="contact">
          <h1
            className="text-2xl text-slate-900 my-6 text-center"
            id="portfolio"
          >
            Contact
          </h1>
          <div className="flex flex-col space-y-2 px-4 md:px-0 md:flex-row justify-between mb-8">
            <div className="flex flex-col text-left space-y-2">
              <p>Nadia Konieczny</p>
              <a href="mailto:nadiakonieczny@outlook.com">
                nadiakonieczny@outlook.com
              </a>
            </div>
            <div className="flex flex-col md:text-right space-y-2">
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
        </section>
      </main>

      <Footer />
    </div>
  )
}
