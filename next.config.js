const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")

const ENV = process.env.NODE_ENV || "development"

const configs = {
  development: {
    ENV,
    APOLLO_ENDPOINT: "http://localhost:8080/graphql",
    STRIPE_KEY: "pk_test_B1APk7za38DQGlpd9o5kyzqX",
    TOKEN_PRICE: 2000
  },
  test: {
    ENV,
    APOLLO_ENDPOINT: "http://localhost:8080/graphql",
    STRIPE_KEY: "pk_test_B1APk7za38DQGlpd9o5kyzqX",
    TOKEN_PRICE: 2000
  },
  production: {
    ENV,
    APOLLO_ENDPOINT: "https://mintmytoken.com/graphql",
    STRIPE_KEY: "pk_test_B1APk7za38DQGlpd9o5kyzqX",
    TOKEN_PRICE: 2000
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
