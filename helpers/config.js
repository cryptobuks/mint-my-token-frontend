import getConfig from "next/config"

const { publicRuntimeConfig } = getConfig()
console.log(getConfig())
const { ENV } = publicRuntimeConfig

const configs = {
  development: {
    ENV,
    APOLLO_ENDPOINT: "http://localhost:4000",
    STRIPE_KEY: "pk_test_B1APk7za38DQGlpd9o5kyzqX",
    TOKEN_PRICE: 2000
  },
  test: {
    ENV,
    APOLLO_ENDPOINT: "http://localhost:4000",
    STRIPE_KEY: "pk_test_B1APk7za38DQGlpd9o5kyzqX",
    TOKEN_PRICE: 2000
  },
  production: {
    ENV,
    APOLLO_ENDPOINT: "http://localhost:8080",
    STRIPE_KEY: "pk_test_B1APk7za38DQGlpd9o5kyzqX",
    TOKEN_PRICE: 2000
  }
}
const activeConfig = configs[ENV]
console.log(`Using config: \n${JSON.stringify(activeConfig, null, " ")}`)
export default activeConfig
