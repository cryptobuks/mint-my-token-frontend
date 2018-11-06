import React from "react"
import PropTypes from "prop-types"
import { Query } from "react-apollo"
import { SINGLE_ORDER_QUERY } from "../helpers/graphql-operations"

const OrderDetails = ({ id }) => (
  <Query query={SINGLE_ORDER_QUERY} variables={{ id }}>
    {({ data, loading, error }) => {
      if (error) return <p>Error {error.message}</p>
      if (loading) return <p>Loading ...</p>
      if (!data.order) return <p>Oops ... we could not find that order id 👎</p>

      const { id, terms, stripeId, token } = data.order
      const {
        name,
        symbol,
        supply,
        decimals,
        walletAddress,
        transactionId,
        contractAddress
      } = token
      return (
        <div>
          <ul>
            <li>Order Id: {id}</li>
            <li>Terms Agreed: {terms}</li>
            <li>Stripe Order Id: {stripeId}</li>
            <li>Token:</li>
            <ul>
              <li>Name: {name}</li>
              <li>Symbol: {symbol}</li>
              <li>Supply: {supply}</li>
              <li>Decimals: {decimals}</li>
              <li>
                Wallet Address:&nbsp;
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://etherscan.io/address/${walletAddress}`}
                >
                  {walletAddress}
                </a>
              </li>
              <li>
                Transaction Id:&nbsp;
                {transactionId === "Pending" ? (
                  transactionId
                ) : (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://etherscan.io/tx/${transactionId}`}
                  >
                    {transactionId}
                  </a>
                )}
              </li>
              <li>
                Token Contract Address:&nbsp;
                {contractAddress === "Pending" ? (
                  contractAddress
                ) : (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://etherscan.io/address/${contractAddress}`}
                  >
                    {contractAddress}
                  </a>
                )}
              </li>
            </ul>
          </ul>
        </div>
      )
    }}
  </Query>
)

OrderDetails.propTypes = {
  id: PropTypes.string.isRequired
}
export default OrderDetails
