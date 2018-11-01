import App from "next/app"
import Page from "../components/page"

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    // this exposes the query to the user
    pageProps.query = ctx.query
    return { pageProps }
  }

  render() {
    // const { Component, apollo, pageProps } = this.props
    const { Component, pageProps } = this.props

    return (
      <Page>
        <Component {...pageProps} />
      </Page>
    )
  }
}

export default MyApp
