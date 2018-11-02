import withApollo from "next-with-apollo"
import ApolloClient from "apollo-boost"
import config from "./config"

const { APOLLO_ENDPOINT } = config

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
