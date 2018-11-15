import Link from "next/link"
import { Icon, Popup } from "semantic-ui-react"
import NewTabLink from "../new-tab-link"

const Footer = () => (
  <footer>
    <div className="social">
      <Link href="https://twitter.com/mintmytoken">
        <a>
          <Popup trigger={<Icon name="twitter" size="big" />} content="Tweet tweet" />
        </a>
      </Link>
      <Link href="https://medium.com/@broadhaven.tech">
        <a>
          <Icon name="medium" size="big" />
        </a>
      </Link>
    </div>
    <div className="copy">
      <p>
        &copy; 2018 mintmytoken.com is brought to you by{" "}
        <NewTabLink href="https://broadhaven.tech" text="broadhaven" />
      </p>
    </div>
    <style jsx>{`
      footer {
        width: 100%;
        text-align: center;
        margin-bottom: 0.5rem;
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
