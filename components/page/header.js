import Link from "next/link"
import { Icon, Grid, Message } from "semantic-ui-react"

const Header = () => {
  return (
    <nav>
      <h1>
        ⛏️ 💰
        <Link href="/">
          <a>Mint My Token</a>
        </Link>
        <Icon name="bitcoin" />
        <Icon name="ethereum" />
      </h1>
      <style jsx>{`
        nav {
          padding: 1rem;
          margin-bottom: 2rem;
          text-align: center;
          font-weight: 400;
          background: rgba(255, 109, 255, 0.4);
        }
        a {
          color: black;
        }
        a:hover {
          text-decoration: underline;
        }
        h1 {
          font-size: 5rem;
        }
        @media (max-width: 900px) {
          h1 {
            font-size: 4rem;
          }
        }
        @media (max-width: 600px) {
          h1 {
            font-size: 2rem;
          }
        }
        @media (max-width: 400px) {
          h1 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </nav>
  )
}

export default Header
