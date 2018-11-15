const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")

const ENV = process.env.NODE_ENV || "development"

const shared = {
  ENV,
  TOKEN_PRICE: 500,
  TERMS_AND_CONDITIONS:
    "https://docs.google.com/document/d/e/2PACX-1vQD9yv_a8XflEZ0gliXx5Nl_71zxgCaU7KTiQQ-Zevfh-gLgIfncx456QlWxNGJPJtZ4QZ0yiGhWEur/pub",
  DISCLAIMER:
    "https://docs.google.com/document/d/e/2PACX-1vQ3Juqh7H2-HLEDuWC6Biw59Nmx_6dQcGSjP2GnPxVc_bFl_M26gdpFA_CmIdB9yHsOJWFDmApEi89m/pub",
  PRIVACY_POLICY:
    "https://docs.google.com/document/d/e/2PACX-1vTlbFFBc8tt2xxwVdQ_WKHq2z8HadaSrlKZoV4JGzH35ASz55NfnAXZR-VkLUsK3YRiRo5EGma_OSpM/pub"
}

const configs = {
  test: {
    APOLLO_ENDPOINT: "http://localhost:8080/graphql",
    STRIPE_KEY: "pk_test_B1APk7za38DQGlpd9o5kyzqX",
    BLOCK_EXPLORER_URL: "https://ropsten.etherscan.io",
    ...shared
  },
  development: {
    APOLLO_ENDPOINT: "http://localhost:8080/graphql",
    STRIPE_KEY: "pk_test_B1APk7za38DQGlpd9o5kyzqX",
    BLOCK_EXPLORER_URL: "https://ropsten.etherscan.io",
    ...shared
  },
  staging: {
    APOLLO_ENDPOINT: "https://staging.mintmytoken.com/graphql",
    STRIPE_KEY: "pk_test_B1APk7za38DQGlpd9o5kyzqX",
    BLOCK_EXPLORER_URL: "https://ropsten.etherscan.io",
    ...shared
  },
  production: {
    APOLLO_ENDPOINT: "https://mintmytoken.com/graphql",
    STRIPE_KEY: "pk_live_mZOuQKf7N5nbEFCI7bsDFWcZ",
    BLOCK_EXPLORER_URL: "https://etherscan.io",
    ...shared
  }
}

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...defaultConfig,
      publicRuntimeConfig: {
        ...configs[ENV]
      }
    }
  }

  return {
    ...defaultConfig,
    publicRuntimeConfig: {
      ...configs[ENV]
    }
  }
}
