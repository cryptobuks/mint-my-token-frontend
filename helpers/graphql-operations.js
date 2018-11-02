import gql from "graphql-tag"

export const PAY_FOR_TOKEN_MUTATION = gql`
  mutation PAY_FOR_TOKEN_MUTATION {
    payForToken(token: $token) {
      id
      transactionId
      tokenContractAddress
    }
  }
`
