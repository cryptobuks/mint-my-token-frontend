import Head from "next/head"
import Router from "next/router"
import NProgress from "nprogress"

Router.onRouteChangeStart = () => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => {
  NProgress.done()
}

Router.onRouteChangeError = () => {
  NProgress.done()
}

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/static/favicon.png" />

    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css" />
    <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />

    <title>Mint My Token</title>
  </Head>
)

export default Meta
