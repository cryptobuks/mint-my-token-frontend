import Link from "next/link"
import { Icon } from "semantic-ui-react"

const Header = () => {
  return (
    <nav>
      <div>
        <p>
          <Link href="/">
            <a>Mint My Token</a>
          </Link>
          <span>
            ⛏️
            <Icon name="bitcoin" />
            <Icon name="ethereum" />
            💰
          </span>
        </p>
      </div>
      <style jsx>{`
        nav {
          padding: 2rem;
          text-align: center;
        }
        h1 {
          font-size: 6rem;
          font-weight: 600;
        }
        p {
          font-size: 5rem;
        }
        a {
          text-decoration: underline;
          color: inherit;
        }
        a:hover {
          text-decoration: none;
        }
        @media (max-width: 600px) {
          p {
            font-size: 3.25rem;
          }
        }
      `}</style>
    </nav>
  )
}

export default Header
