import { useState } from "react"
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
import Payment from "./payment"
import { isEthereumAddress } from "../helpers/ethereum"

function handleSubmit(event) {
  event.preventDefault()
  console.log("submit!")
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
                {remainder.name[0].toUpperCase() + remainder.name.slice(1)}
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
      name: "",
      symbol: "",
      supply: "",
      decimals: "",
      address: "",
      terms: false
    })

    function onChange(event) {
      const {
        target: { name, type, value }
      } = event
      let val = type === "number" ? parseFloat(value) : value
      setValue({ ...values, [name]: val })
    }

    return [values, onChange]
  }

  const [token, onTokenValueChange] = state()
  const { name, symbol, supply, decimals, address, terms } = token

  return (
    <Grid columns="equal" padded="vertically">
      <Grid.Column />
      <Grid.Column width={8}>
        <Segment>
          <Form size="large" onSubmit={handleSubmit}>
            <Message attached header="Token Minting" content="Explain whats going to happen" />
            <Segment attached>
              <EnhancedInput
                autoFocus
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
                name="address"
                onChange={onTokenValueChange}
                value={address}
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
            <Segment color="teal" attached>
              <Payment token={token}>
                <Button type="submit" color="green">
                  Proceed to Checkout
                </Button>
              </Payment>
            </Segment>
          </Form>
        </Segment>
      </Grid.Column>
      <Grid.Column />
    </Grid>
  )
}

export default Mint
