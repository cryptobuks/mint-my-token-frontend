import Link from "next/link"
import { Header as SemanticHeader, Icon } from "semantic-ui-react"

const Header = () => {
  return (
    <nav>
      <div>
        <p>
          <Link href="/">
            <a>Mint My Token</a>
          </Link>
          &nbsp;⛏️
          <Icon name="bitcoin" />
          <Icon name="ethereum" />
          💰
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
          text-decoration: none;
          color: inherit;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </nav>
  )
}

export default Header
