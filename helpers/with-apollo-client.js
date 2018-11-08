import getConfig from "next/config"
import withApollo from "next-with-apollo"
import ApolloClient from "apollo-boost"

const {
  publicRuntimeConfig: { APOLLO_ENDPOINT }
} = getConfig()

const createClient = ({ headers }) =>
  new ApolloClient({
    uri: APOLLO_ENDPOINT,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: "include"
        },
        headers
      })
    },
    clientState: {
      resolvers: {},
      defaults: {}
    }
  })

export default withApollo(createClient)
