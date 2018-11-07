import { useState } from "react"
import { Mutation } from "react-apollo"
import Router from "next/router"
import StripeCheckout from "react-stripe-checkout"
import config from "../helpers/config"
import NProgress from "nprogress"
import {
  Button,
  Form,
  Checkbox,
  Label,
  Input,
  Grid,
  Popup,
  Segment,
  Message
} from "semantic-ui-react"
import { PAY_FOR_TOKEN_MUTATION } from "../helpers/graphql-operations"

async function onToken(response, token, payForToken) {
  NProgress.start()
  const { id } = response
  payForToken({ variables: { id, token } })
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

const EnhancedInput = ({ popupContent, ...remainder }) => (
  <Form.Field>
    <Input {...remainder}>
      <Popup
        content={popupContent}
        trigger={
          <Label
            size="big"
            content={
              <div className="labelInner">
                {remainder.name === "walletAddress"
                  ? "Wallet Address"
                  : remainder.name[0].toUpperCase() + remainder.name.slice(1)}
              </div>
            }
          />
        }
      />
      <input />
      <style jsx>{`
        div.labelInner {
          width: 80px;
          text-align: center;
        }
      `}</style>
    </Input>
  </Form.Field>
)

const Mint = () => {
  function state() {
    const [values, setValue] = useState({
      email: "tim.holmes.mitra@gmail.com",
      name: "The Holmes-Mitra Family Token",
      symbol: "HMFT",
      supply: 3,
      decimals: 0,
      walletAddress: "0x35C",
      terms: true
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

  return (
    <div>
      <Mutation mutation={PAY_FOR_TOKEN_MUTATION}>
        {(payForToken, { loading, error }) => {
          return (
            <Form
              size="large"
              onSubmit={event => event.preventDefault()}
              loading={loading}
              error={Boolean(error)}
            >
              <Message error header="Error" content="There was an error processing your request." />
              <Message attached header="Token Minting" content="Explain whats going to happen" />
              <Segment attached>
                <EnhancedInput
                  autoFocus
                  required
                  type="email"
                  name="email"
                  onChange={onTokenValueChange}
                  value={email}
                  placeholder="Where should we sent your receipt?"
                  popupContent="Your email address is where your receipt is sent and only used by us if there is an issue with your order."
                />
                <EnhancedInput
                  required
                  type="text"
                  name="name"
                  onChange={onTokenValueChange}
                  value={name}
                  placeholder="Tell us your embarrassing ... err cool token name"
                  popupContent="explanation about naming your tokens"
                />
                <EnhancedInput
                  required
                  type="text"
                  name="symbol"
                  onChange={onTokenValueChange}
                  value={symbol}
                  placeholder="Give your token a symbol like ETH or BTC... well maybe not them"
                  popupContent="Symbols are short abbreviations which represent your token. Some examples include ETH for Ethereum and BTC for Bitcoin"
                />
                <EnhancedInput
                  required
                  type="number"
                  name="supply"
                  onChange={onTokenValueChange}
                  value={supply}
                  placeholder="How many should we create (this can't be changed so choose wisely)"
                  popupContent="supply!"
                />
                <EnhancedInput
                  required
                  type="number"
                  name="decimals"
                  onChange={onTokenValueChange}
                  value={decimals}
                  placeholder="How many decimal spots do you want your token to have?"
                  popupContent="decimals!"
                />
                <EnhancedInput
                  required
                  type="text"
                  name="walletAddress"
                  onChange={onTokenValueChange}
                  value={walletAddress}
                  placeholder="The total supply will be sent here"
                  popupContent="address!"
                />
                <Form.Field>
                  <label>Terms and Conditions</label>
                  <Message color={terms ? "green" : "grey"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sint autem
                    corporis harum aperiam quis maxime eius perferendis dolorem voluptates, culpa
                    consequuntur dignissimos velit facilis eveniet saepe ratione nemo dolor?
                  </Message>
                  <Checkbox
                    required
                    name="terms"
                    label="I agree to the above Terms and Conditions"
                    checked={terms}
                    onClick={onTokenValueChange}
                  />
                </Form.Field>
              </Segment>
              <Segment color="violet">
                <StripeCheckout
                  name="Mint My Token"
                  description="1 x custom ERC-20 token"
                  currency="GBP"
                  locale="auto"
                  // opened={}
                  allowRememberMe={false}
                  amount={config.TOKEN_PRICE}
                  stripeKey={config.STRIPE_KEY}
                  email={email}
                  token={response => onToken(response, token, payForToken)}
                >
                  <Button type="submit" color="violet">
                    Proceed to Checkout
                  </Button>
                </StripeCheckout>
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
