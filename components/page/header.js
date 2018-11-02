import Link from "next/link"
import { Header as SemanticHeader } from "semantic-ui-react"

const Header = () => {
  return (
    <nav>
      <SemanticHeader as="h1">
        <Link href="/">
          <a>Mint My Token ⛏️</a>
        </Link>
      </SemanticHeader>
      <style jsx>{`
        nav {
          padding: 0.5rem;
          background: #a9a9a9;
          text-align: center;
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
