import Link from "next/link"
import { Segment, Icon, Divider, Message } from "semantic-ui-react"
import { grey } from "ansi-colors"

const Footer = () => (
  <footer>
    <div className="social">
      <Divider />
      <Link href="https://twitter.com/mintmytoken">
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
    <div className="copy">
      <p>&copy; 2018 mintmytoken.com is brought to you by broadhaven</p>
    </div>
    <Divider />
    <style jsx>{`
      footer {
        width: 100%;
        text-align: center;
      }
      div.social {
        padding-top: 1rem;
      }
      div.copy {
        margin-top: 0.5rem;
        font-size: 0.75rem;
        color: grey;
      }
      a {
        padding-left: 1rem;
        text-decoration: none;
        color: purple;
      }
      a:hover {
        color: green;
      }
    `}</style>
  </footer>
)

export default Footer
