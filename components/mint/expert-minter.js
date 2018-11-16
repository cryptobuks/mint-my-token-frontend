import PropTypes from "prop-types"
import getConfig from "next/config"
import { Form, Message, Segment, Checkbox, Header } from "semantic-ui-react"
import NewTabLink from "../new-tab-link"
import {
  validEmail,
  validName,
  validSymbol,
  validSupply,
  validDecimals,
  validEthereumAddress
} from "../../helpers/ethereum"

const {
  publicRuntimeConfig: { TERMS_AND_CONDITIONS }
} = getConfig()

export const ExpertMinter = ({ loading, error, onChange, token }) => {
  const { email, name, symbol, supply, decimals, walletAddress, terms } = token

  return (
    <Segment attached color="green">
      <Header as="h3">Expert Minting Form</Header>
      <Form.Input
        label="Where should we send your receipt and order details?"
        autoFocus
        required
        error={email !== "" && !validEmail(email)}
        type="email"
        name="email"
        onChange={onChange}
        value={email}
        placeholder="super-cool-handle@hotmail.com"
      />
      <Form.Input
        label="What do you want to name your token?"
        required
        error={name !== "" && !validName(name)}
        type="text"
        name="name"
        onChange={onChange}
        value={name}
        placeholder="Tasteless Token"
      />
      <Form.Input
        label="Give your token a symbol"
        required
        error={symbol !== "" && !validSymbol(symbol)}
        type="text"
        name="symbol"
        onChange={onChange}
        value={symbol}
        placeholder="TT"
      />
      <Form.Input
        label="How many tokens should we mint?"
        required
        error={supply !== "" && !validSupply(supply)}
        type="number"
        name="supply"
        onChange={onChange}
        value={supply}
        placeholder="1000000"
      />
      <Form.Input
        label="How many decimal spots should be set for each token?"
        required
        error={decimals !== "" && !validDecimals(decimals)}
        type="number"
        name="decimals"
        onChange={onChange}
        value={decimals}
        placeholder="From 0 to 18 (default 2)"
      />
      <Form.Input
        label="Where should we send the tokens when they are minted?"
        required
        error={walletAddress !== "" && !validEthereumAddress(walletAddress)}
        type="text"
        name="walletAddress"
        onChange={onChange}
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
          onClick={onChange}
        />
      </Form.Field>
    </Segment>
  )
}

ExpertMinter.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  token: PropTypes.object.isRequired
}

export default ExpertMinter
