import Link from 'next/link'

const Footer = ({}) => {
  return (
    <footer className="flex flex-col border-t border-slate-300 h-24 mb-8 w-full items-center justify-center">
      <ul className="flex space-x-6 my-6 flex-row">
        <li>
          <Link href="https://github.com/nadiakay">
            <a>
              <img src="/assets/GitHub-Mark-32px.png" width={32} height={32} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="mailto:nadiakonieczny@outlook.com">
            <a>
              <img src="/assets/icons8-email-64.png" width={32} height={32} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/nadia-konieczny-0a8367217">
            <a>
              <img
                src="/assets/icons8-linkedin-64.png"
                width={32}
                height={32}
              />
            </a>
          </Link>
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
