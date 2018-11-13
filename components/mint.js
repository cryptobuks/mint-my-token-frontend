import { useState } from "react"
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

const {
  publicRuntimeConfig: { TOKEN_PRICE, STRIPE_KEY }
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

const Mint = () => {
  function state() {
    const [values, setValue] = useState({
      email: "",
      name: "",
      symbol: "",
      supply: "",
      decimals: "",
      walletAddress: "",
      terms: false
    })

    function onChange({ target }) {
      if (target.nodeName === "LABEL") {
        setValue({ ...values, terms: !values.terms })
      } else {
        const { name, type, value } = target
        let val = type === "number" ? parseFloat(value) : value
        setValue({ ...values, [name]: val })
      }
    }

    return [values, onChange]
  }

  const [token, onTokenValueChange] = state()
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
              <Message error header="Error" content="There was an error processing your request." />
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
              <Segment attached color="violet">
                <Form.Field>
                  <label>Where should we send your receipt?</label>
                  <Form.Input
                    autoFocus
                    required
                    error={email !== "" && !validEmail(email)}
                    type="email"
                    name="email"
                    onChange={onTokenValueChange}
                    value={email}
                    placeholder="super-cool-handle@hotmail.com"
                  />
                </Form.Field>
                <Form.Field>
                  <label>What do you want to name your token?</label>
                  <Input
                    required
                    error={name !== "" && !validName(name)}
                    type="text"
                    name="name"
                    onChange={onTokenValueChange}
                    value={name}
                    placeholder="Tasteless Token"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Give your token a symbol</label>
                  <Input
                    required
                    error={symbol !== "" && !validSymbol(symbol)}
                    type="text"
                    name="symbol"
                    onChange={onTokenValueChange}
                    value={symbol}
                    placeholder="TT"
                  />
                </Form.Field>
                <Form.Field>
                  <label>How many tokens should we mint?</label>
                  <Input
                    required
                    error={supply !== "" && !validSupply(supply)}
                    type="number"
                    name="supply"
                    onChange={onTokenValueChange}
                    value={supply}
                    placeholder="1000000"
                  />
                </Form.Field>
                <Form.Field>
                  <label>How many decimal spots should be set for each token?</label>
                  <Input
                    required
                    error={decimals !== "" && !validDecimals(decimals)}
                    type="number"
                    name="decimals"
                    onChange={onTokenValueChange}
                    value={decimals}
                    placeholder="2"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Where should we send the tokens when they are minted?</label>
                  <Input
                    required
                    error={walletAddress !== "" && !validEthereumAddress(walletAddress)}
                    type="text"
                    name="walletAddress"
                    onChange={onTokenValueChange}
                    value={walletAddress}
                    placeholder="0x4Ab65e00943B9035b85712DA01C63c4D069B65F5"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Terms and Conditions</label>
                  <Message color={terms ? "green" : "grey"}>
                    <List bulleted>
                      <List.Item>
                        Tokens are for entertainment purposes only and have no monetary value.
                      </List.Item>
                      <List.Item>Tokens have no warranty and are provided as-is.</List.Item>
                      <List.Item>
                        We accept no responsibility for any defects with the Token.
                      </List.Item>
                      <List.Item>No refunds are accepted.</List.Item>
                    </List>
                  </Message>
                  <Checkbox
                    required
                    name="terms"
                    label="I have read and agree to Mint My Token's Terms and Conditions"
                    checked={terms}
                    onClick={onTokenValueChange}
                  />
                </Form.Field>
              </Segment>
              <Segment color="violet">
                {disableSubmit ? (
                  <Button color="violet" disabled>
                    Check Form Input
                  </Button>
                ) : (
                  <StripeCheckout
                    name="Mint My Token"
                    description="1 x bespoke ERC-20 token"
                    currency="GBP"
                    locale="auto"
                    allowRememberMe={false}
                    amount={TOKEN_PRICE}
                    stripeKey={STRIPE_KEY}
                    email={email}
                    token={response => onToken(response, token, payForToken)}
                  >
                    <Button color="violet">Proceed to Checkout</Button>
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

export default Mint
