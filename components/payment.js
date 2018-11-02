import PropTypes from "prop-types"
import StripeCheckout from "react-stripe-checkout"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import NProgress from "nprogress"
import config from "../helpers/config"
import { PAY_FOR_TOKEN_MUTATION } from "../helpers/graphql-operations"

const onToken = async (response, createOrder) => {
  NProgress.start()
  createOrder({ variables: { token: response.id } }).catch(err => alert(err.message))
}

const Payment = props => {
  console.log(props.token)
  return (
    <Mutation mutation={PAY_FOR_TOKEN_MUTATION} variables={props.token}>
      {(payForToken, { loading, error }) => (
        <StripeCheckout
          name="Mint My Token"
          description="1 x custom ERC-20 token"
          currency="GBP"
          allowRememberMe={false}
          amount={config.TOKEN_PRICE}
          stripeKey={config.STRIPE_KEY}
          email={config.CUSTOMER_SERVICE_EMAIL}
          token={response => onToken(response, null)}
        >
          {props.children}
        </StripeCheckout>
      )}
    </Mutation>
  )
}

Payment.propTypes = {
  children: PropTypes.element.isRequired,
  token: PropTypes.shape({
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    supply: PropTypes.number.isRequired,
    decimals: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    terms: PropTypes.bool.isRequired
  })
}

export default Payment
