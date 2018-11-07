import Link from "next/link"
import { Segment, Icon, Grid, Message } from "semantic-ui-react"
import { grey } from "ansi-colors"

const Footer = () => (
  <footer>
    <div className="social">
      <Link href="https://medium.com/@broadhaven.tech">
        <a>
          <Icon name="help" size="big" />
        </a>
      </Link>
      <Link href="https://twitter.com">
        <a>
          <Icon name="twitter" size="big" />
        </a>
      </Link>
      <Link href="https://medium.com/@broadhaven.tech">
        <a>
          <Icon name="medium" size="big" />
        </a>
      </Link>
    </div>
    <Segment inverted size="tiny" textAlign="center">
      <Message color="black">&copy; 2018 mintmytoken.com is brought to you by broadhaven</Message>
    </Segment>
    <style jsx>{`
      footer {
        width: 100%;
      }
      div.social {
        padding-top: 1rem;
        text-align: center;
      }
      a {
        padding-left: 1rem;
        text-decoration: none;
        color: purple;
      }
      a:hover {
        color: violet;
      }
    `}</style>
  </footer>
)

export default Footer
