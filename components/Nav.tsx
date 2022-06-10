import Link from 'next/link'
import Image from 'next/image'

const Nav = ({}) => {
  return (
    <header className="z-40 backdrop-blur-xl flex flex-row w-full  justify-between px-4 items-center">
      <span>
        <Link href="/">
          <a>
            <Image src="/favicon/favicon-32x32.png" width={32} height={32} />
          </a>
        </Link>
      </span>
      <ul className="font-bold uppercase flex flex-row items-center justify-center py-4 space-x-5">
        <Link href="#portfolio">
          <a>Portfolio</a>
        </Link>
        <Link href="#contact">
          <a>Contact</a>
        </Link>
      </ul>
    </header>
  )
}

export default Nav
