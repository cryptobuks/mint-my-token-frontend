import React, { Component } from "react"
import { Mutation } from "react-apollo"
import getConfig from "next/config"
import Router from "next/router"
import Link from "next/link"
import StripeCheckout from "react-stripe-checkout"
import NProgress from "nprogress"
import { Button, Form, Checkbox, List, Segment, Message, Input } from "semantic-ui-react"
import { PAY_FOR_TOKEN_MUTATION, RECENT_ORDERS_MUTATION } from "../helpers/graphql-operations"
import {
  validTokenParameters,
  validEmail,
  validName,
  validSymbol,
  validSupply,
  validDecimals,
  validEthereumAddress,
  validTerms
} from "../helpers/ethereum"
import NewTabLink from "./new-tab-link"

const {
  publicRuntimeConfig: { TOKEN_PRICE, STRIPE_KEY, TERMS_AND_CONDITIONS }
} = getConfig()

async function onToken(response, token, payForToken) {
  NProgress.start()
  const { id: stripeId } = response
  token.meta = "this is some meta info!" // TODO: add meta field
  payForToken({ variables: { stripeId, token } })
    .then(res => {
      Router.push({
        pathname: "/order",
        query: { id: res.data.payForToken.message }
      })
    })
    .catch(err => alert(err.message))
    .finally(() => {
      NProgress.done()
    })
}

class Mint extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      name: "",
      symbol: "",
      supply: "",
      decimals: "",
      walletAddress: "",
      terms: false
    }
    // this.state = {
    //   email: "tim.holmes.mitra@gmail.com  ",
    //   name: "Tim",
    //   symbol: "TOK",
    //   supply: "77",
    //   decimals: "2",
    //   walletAddress: "0x4Ab65e00943B9035b85712DA01C63c4D069B65F5",
    //   terms: true
    // }
  }

  onTokenChange = ({ target }) => {
    if (target.nodeName === "LABEL") {
      this.setState({ ...this.state, terms: !this.state.terms })
    } else {
      const { name, type, value } = target
      let val = type === "number" ? parseFloat(value) : value
      this.setState({ ...this.state, [name]: val })
    }
  }

  render() {
    const token = { ...this.state }
    const { email, name, symbol, supply, decimals, walletAddress, terms } = token
    const disableSubmit = !validTokenParameters(token)

    return (
      <div>
        <Mutation
          mutation={PAY_FOR_TOKEN_MUTATION}
          refetchQueries={[{ query: RECENT_ORDERS_MUTATION }]}
        >
          {(payForToken, { loading, error }) => {
            return (
              <Form
                size="large"
                onSubmit={event => event.preventDefault()}
                loading={loading}
                error={Boolean(error)}
              >
                <Message
                  error
                  header="Error"
                  content="There was an error processing your request."
                />
                <Message attached>
                  <Message.Header>Token Minting</Message.Header>
                  <Message.Content>
                    Fill out the form below to create your token. If you need help then{" "}
                    <Link href="https://medium.com/@broadhaven.tech">
                      <a>read our guide on Medium</a>
                    </Link>
                    .
                  </Message.Content>
                </Message>
                <Segment attached color="green">
                  <Form.Input
                    label="Where should we send your receipt and order details?"
                    autoFocus
                    required
                    error={email !== "" && !validEmail(email)}
                    type="email"
                    name="email"
                    onChange={this.onTokenChange}
                    value={email}
                    placeholder="super-cool-handle@hotmail.com"
                  />
                  <Form.Input
                    label="What do you want to name your token?"
                    required
                    error={name !== "" && !validName(name)}
                    type="text"
                    name="name"
                    onChange={this.onTokenChange}
                    value={name}
                    placeholder="Tasteless Token"
                  />
                  <Form.Input
                    label="Give your token a symbol"
                    required
                    error={symbol !== "" && !validSymbol(symbol)}
                    type="text"
                    name="symbol"
                    onChange={this.onTokenChange}
                    value={symbol}
                    placeholder="TT"
                  />
                  <Form.Input
                    label="How many tokens should we mint?"
                    required
                    error={supply !== "" && !validSupply(supply)}
                    type="number"
                    name="supply"
                    onChange={this.onTokenChange}
                    value={supply}
                    placeholder="1000000"
                  />
                  <Form.Input
                    label="How many decimal spots should be set for each token?"
                    required
                    error={decimals !== "" && !validDecimals(decimals)}
                    type="number"
                    name="decimals"
                    onChange={this.onTokenChange}
                    value={decimals}
                    placeholder="From 0 to 18 (default 2)"
                  />
                  <Form.Input
                    label="Where should we send the tokens when they are minted?"
                    required
                    error={walletAddress !== "" && !validEthereumAddress(walletAddress)}
                    type="text"
                    name="walletAddress"
                    onChange={this.onTokenChange}
                    value={walletAddress}
                    placeholder="0x4Ab65e00943B9035b85712DA01C63c4D069B65F5"
                  />
                  <Form.Field>
                    <Message>
                      <NewTabLink
                        href={TERMS_AND_CONDITIONS}
                        text="Mint My Token's Terms and Conditions of Use"
                      />
                    </Message>
                    <Checkbox
                      required
                      name="terms"
                      label="I have read and agree to the Terms and Conditions of Use"
                      checked={terms}
                      onClick={this.onTokenChange}
                    />
                  </Form.Field>
                </Segment>
                <Segment color="green">
                  {disableSubmit ? (
                    <Button color="green" disabled>
                      Form Incomplete
                    </Button>
                  ) : (
                    <StripeCheckout
                      name="Mint My Token"
                      description={`${supply} x ${symbol} tokens`}
                      currency="GBP"
                      locale="auto"
                      allowRememberMe={false}
                      amount={TOKEN_PRICE}
                      stripeKey={STRIPE_KEY}
                      email={email}
                      token={response => onToken(response, token, payForToken)}
                    >
                      <Button color="green">Proceed to Checkout</Button>
                    </StripeCheckout>
                  )}
                </Segment>
              </Form>
            )
          }}
        </Mutation>
        <style jsx>{`
          div {
            max-width: 800px;
            margin: auto;
          }
        `}</style>
      </div>
    )
  }
}

export default Mint
