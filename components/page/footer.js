import Link from "next/link"
import { Segment, Icon, Grid, Message } from "semantic-ui-react"
import { grey } from "ansi-colors"

const Footer = () => (
  <footer>
    <Segment raised inverted>
      <Grid stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={4}>
            <Message attached size="small" color="black" style={{ color: "grey" }}>
              &copy; mintmytoken.com 2018
            </Message>
          </Grid.Column>
          <Grid.Column floated="right" width={4} textAlign="right">
            <Link href="/help" prefetch>
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
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <style jsx>{`
      footer {
        width: 100%;
      }
      a {
        padding-left: 1rem;
        text-decoration: none;
        color: white;
      }
      a:hover {
        color: violet;
      }
    `}</style>
  </footer>
)

export default Footer
