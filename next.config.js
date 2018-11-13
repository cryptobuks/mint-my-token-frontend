const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")

const ENV = process.env.NODE_ENV || "development"

const configs = {
  test: {
    ENV,
    APOLLO_ENDPOINT: "http://localhost:8080/graphql",
    STRIPE_KEY: "pk_test_B1APk7za38DQGlpd9o5kyzqX",
    TOKEN_PRICE: 520,
    BLOCK_EXPLORER_URL: "https://ropsten.etherscan.io/address/"
  },
  development: {
    ENV,
    APOLLO_ENDPOINT: "http://localhost:8080/graphql",
    STRIPE_KEY: "pk_test_B1APk7za38DQGlpd9o5kyzqX",
    TOKEN_PRICE: 520,
    BLOCK_EXPLORER_URL: "https://ropsten.etherscan.io/address/"
  },
  staging: {
    ENV,
    APOLLO_ENDPOINT: "https://staging.mintmytoken.com/graphql",
    STRIPE_KEY: "pk_test_B1APk7za38DQGlpd9o5kyzqX",
    TOKEN_PRICE: 520,
    BLOCK_EXPLORER_URL: "https://ropsten.etherscan.io/address/"
  },
  production: {
    ENV,
    APOLLO_ENDPOINT: "https://mintmytoken.com/graphql",
    STRIPE_KEY: "pk_live_mZOuQKf7N5nbEFCI7bsDFWcZ",
    TOKEN_PRICE: 520,
    BLOCK_EXPLORER_URL: "https://etherscan.io/address/"
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
