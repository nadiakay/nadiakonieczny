import Image from 'next/image'

const Footer = ({}) => {
  return (
    <footer className="flex flex-col border-t border-slate-300 h-24 mb-8 w-full items-center justify-center">
      <ul className="flex flex-col space-x-6 my-6 md:flex-row">
        <li>
          <Image src="/assets/GitHub-Mark-32px.png" width={32} height={32} />
        </li>
        <li className="ml-0">
          <Image src="/assets/icons8-email-64.png" width={32} height={32} />
        </li>
        <li>
          <Image src="/assets/icons8-linkedin-64.png" width={32} height={32} />
        </li>
      </ul>
      <a
        className="text-slate-500 items-center justify-center gap-2"
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Site by Nadia
      </a>
    </footer>
  )
}
export default Footer
