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

const injectGoogleAnalytics = () => {
  if (typeof window === "undefined") {
    return
  }
  window.dataLayer = window.dataLayer || []
  function gtag() {
    dataLayer.push(arguments)
  }
  gtag("js", new Date())
  gtag("config", "UA-126885958-2")
}

const Meta = () => (
  <Head>
    {/* Global site tag (gtag.js) - Google Analytics */}
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-126885958-2" />
    <script>{injectGoogleAnalytics()}</script>

    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/static/favicon.png" />

    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css" />
    <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />

    <title>Mint My Token</title>
  </Head>
)

export default Meta
