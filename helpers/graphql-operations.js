import gql from "graphql-tag"

export const PAY_FOR_TOKEN_MUTATION = gql`
  mutation PAY_FOR_TOKEN_MUTATION($id: String!, $token: TokenParametersInput!) {
    payForToken(id: $id, token: $token) {
      success
      message
    }
  }
`

export const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: String!) {
    order(id: $id) {
      id
      terms
      stripeId
      token {
        name
        symbol
        supply
        decimals
        walletAddress
        transactionId
        contractAddress
      }
    }
  }
`

export const RECENT_ORDERS_MUTATION = gql`
  query RECENT_ORDERS_MUTATION {
    recentOrders {
      name
      symbol
      createdAt
      contractAddress
    }
  }
`
