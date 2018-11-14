import Link from "next/link"
import { Icon, Grid, Message } from "semantic-ui-react"

const Header = () => {
  return (
    <nav>
      <Grid stackable columns={2}>
        <Grid.Column columns={4} textAlign="center">
          <h1>
            <Link href="/">
              <a>Mint My Token</a>
            </Link>
          </h1>
        </Grid.Column>
        <Grid.Column columns={4} textAlign="center">
          <h1>
            ⛏️ 💰
            <Icon name="bitcoin" />
            <Icon name="ethereum" />
          </h1>
        </Grid.Column>
      </Grid>
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
        @media (max-width: 1200px) {
          h1 {
            font-size: 4.5rem;
          }
        }
        @media (max-width: 600px) {
          h1 {
            font-size: 3.25rem;
          }
        }
      `}</style>
    </nav>
  )
}

export default Header
