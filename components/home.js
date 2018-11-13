import React, { Component, useState } from "react"
import Link from "next/link"
import { Button, Grid, Container, Header, Icon, List, Divider, Accordion } from "semantic-ui-react"
import RecentOrders from "./recent-orders"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { index: 0 }
  }

  handleClick = index => {
    if (index === this.state.index) {
      this.setState({ index: -1 })
    } else {
      this.setState({ index })
    }
  }

  render = () => {
    const activeIndex = this.state.index
    return (
      <Grid centered stackable columns={2}>
        <Grid.Row>
          <Grid.Column>
            <Container>
              <Header size="medium">Mint your own crypto-currency in 2 clicks!</Header>
              <div className="call-to-action">
                <Link href="/mint" prefetch>
                  <Button color="violet" size="big">
                    Mint My Token!
                  </Button>
                </Link>
                <span className="finger">👈</span>
              </div>
              <Accordion>
                <Accordion.Title
                  active={activeIndex === 0}
                  index={0}
                  onClick={() => this.handleClick(0)}
                >
                  <Header size="medium">
                    <Icon name="dropdown" />
                    How does it work?
                  </Header>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                  <div className="list">
                    <List ordered>
                      <List.Item>Design your token.</List.Item>
                      <List.Item>Pay a small fee.</List.Item>
                      <List.Item>Drink 🍺 or ☕ or 🍵!</List.Item>
                      <List.Item>Send a friend your custom token!</List.Item>
                    </List>
                  </div>
                </Accordion.Content>

                <Accordion.Title
                  active={activeIndex === 1}
                  index={1}
                  onClick={() => this.handleClick(1)}
                >
                  <Header size="medium">
                    <Icon name="dropdown" />
                    Why create your own token?
                  </Header>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                  <div className="list">
                    <List ordered>
                      <List.Item>For fun!</List.Item>
                      <List.Item>To experiment and learn!</List.Item>
                      <List.Item>To own your own sh*t coin!</List.Item>
                      <List.Item>
                        A <span className="secret">SECRET</span> project
                      </List.Item>
                      <List.Item>
                        Or maybe … to launch the next crypto-currency hype-storm allowing you to
                        move to the Crypto Valley in Zug, Switzerland!
                      </List.Item>
                    </List>
                  </div>
                </Accordion.Content>

                <Accordion.Title
                  active={activeIndex === 3}
                  index={3}
                  onClick={() => this.handleClick(3)}
                >
                  <Header size="medium">
                    <Icon name="dropdown" />
                    Who is Mint My Token?
                  </Header>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 3}>
                  <div className="list">
                    <List ordered>
                      <List.Item>
                        We are blockchain and crypto-currency enthusiasts who want to open-up the
                        ERC-20 token standard to the widest possible audience. In our day jobs, we
                        work for Broadhaven.tech helping businesses understand and benefit from
                        blockchain.
                      </List.Item>
                      <List.Item>
                        If you would like to know more, &nbsp;
                        <a href="mailto:hi@mintmytoken.com">email us</a>.
                      </List.Item>
                    </List>
                  </div>
                </Accordion.Content>
              </Accordion>
              <style jsx>{`
                div.call-to-action {
                  display: flex;
                  height: 60px;
                  margin-bottom: 1rem;
                }
                div.list {
                  margin-left: 3rem;
                }
                span.secret {
                  color: red;
                }
                span.finger {
                  font-size: 3.5rem;
                }
              `}</style>
            </Container>
          </Grid.Column>
          <Grid.Column width={4}>
            <RecentOrders />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Home
