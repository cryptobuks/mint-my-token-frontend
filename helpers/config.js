const env = process.env.NODE_ENV || "development"

const configs = {
  development: {
    ENV: env,
    APOLLO_ENDPOINT: "http://localhost:4000",
    STRIPE_KEY: "pk_test_B1APk7za38DQGlpd9o5kyzqX",
    TOKEN_PRICE: 20000,
    CUSTOMER_SERVICE_EMAIL: "billing@mintmytoken.com"
  },
  test: {
    ENV: env,
    APOLLO_ENDPOINT: "http://localhost:4000",
    STRIPE_KEY: "pk_test_B1APk7za38DQGlpd9o5kyzqX",
    TOKEN_PRICE: 2000,
    CUSTOMER_SERVICE_EMAIL: "billing@mintmytoken.com"
  }
}

const activeConfig = configs[env]
console.log("Using config: \n", activeConfig)
export default activeConfig
