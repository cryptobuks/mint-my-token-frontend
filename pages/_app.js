import App from "next/app"
import Page from "../components/page"
import { ApolloProvider } from "react-apollo"
import withApolloClient from "../helpers/with-apollo-client"

class MintMyToken extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    pageProps.query = ctx.query
    return { pageProps }
  }

  render() {
    // const { Component, apollo, pageProps } = this.props
    const { Component, apollo, pageProps } = this.props

    return (
      <ApolloProvider client={apollo}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ApolloProvider>
    )
  }
}

export default withApolloClient(MintMyToken)
