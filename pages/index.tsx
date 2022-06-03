import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen max-w-5xl mx-auto flex-col items-center justify-center ">
      <Head>
        <title>Index - Nadia Konieczny</title>
        <link rel="icon" href="/favicon.ico" />
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
      <header className="p-2 z-40 backdrop-blur-xl flex flex-row w-full  justify-between items-center mb-8">
        <span></span>
        <ul className="flex flex-row items-center space-x-5">
          <Link href="./portfolio">
            <a>Portfolio</a>
          </Link>
          <Link href="./contact">
            <a>Contact</a>
          </Link>
        </ul>
      </header>

      <h1 className="font-serif italic font-b text-white text-3xl w-full px-8 p-5 mb-12 bg-gradient-to-r from-fuchsia-400 to-blue-400">
        <a href="./index.html">Nadia Konieczny</a>
      </h1>
      <main className="font-sans z-40 flex w-full flex-1 flex-col items-center justify-center px-2 md:px-20">
        <section className="relative top-0 bottom-0 left-0 right-0 w-full h-full">
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

          <p className="mx-8 mb-8">
            Hello! I'm a computer science student at the University of
            Minnesota. This site is my professional homepage and portfolio. My
            development experience is mostly in Javascript and Python. I'm also
            familiar with Java and C. I'm passionate about my work and projects
            and I'm eager to work on a team.
          </p>

          <h1 className="text-xl mx-4">Portfolio</h1>
          <div className="flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
            <a
              href="https://github.com/nadiakay/free-book-archive"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-xl font-bold">Free Book Archive &rarr;</h3>
              <p className="mt-4 text-lg">
                Free, public domain ebook collection hosted in mobile-friendly,
                web-readable html.
              </p>
              <p className="mt-4 italic text-md">
                Javascript, React.js, Next.js
              </p>
            </a>
            <a
              href="https://github.com/nadiakay/free-book-archive"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-xl font-bold">
                Mediawiki Book Scripts &rarr;
              </h3>
              <p className="mt-4 text-lg">
                A collection of scripts to process Wikisource books for use in
                Next.js applications.
              </p>
              <p className="mt-4 italic text-md">Python, BeautifulSoup</p>
            </a>

            <a
              href="https://github.com/nadiakay/huffman-code"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-xl font-bold">Huffman Code &rarr;</h3>
              <p className="mt-4 text-lg">
                Visualization of the Huffman code algorithm implemented by a
                binary tree.
              </p>
              <p className="mt-4 italic text-md">Javascript</p>
            </a>

            <a
              href="https://github.com/nadiakay/gallerize"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-xl font-bold">Gallerize &rarr;</h3>
              <p className="mt-4 text-lg">
                Public domain photo gallery. Search from millions of public
                domain images available through Openverse API.
              </p>
              <p className="mt-4 italic text-md">
                Javascript, React.js, Redux.js
              </p>
            </a>

            <a
              href="https://github.com/nadiakay/stream-stats"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-xl font-bold">Stream Stats &rarr;</h3>
              <p className="mt-4 italic text-md">
                Javascript, React.js, Redux.js
              </p>
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-b from-white to-blue-200 flex h-24 mt-8 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site by Nadia
        </a>
      </footer>
    </div>
  )
}

export default Home
