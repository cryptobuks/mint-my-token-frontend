import StripeCheckout from "react-stripe-checkout"
import NProgress from "nprogress"

const onToken = async (response, createOrder) => {
  NProgress.start()
  console.log(response)
  // const order = await createOrder({ variables: { token: response.id } }).catch(err =>
  //   alert(err.message)
  // )
}

const Payment = props => {
  return (
    <StripeCheckout
      amount={500}
      name="Mint My Tolen"
      description={`1 x Ethereum Token`}
      image={""}
      stripeKey="pk_test_B1APk7za38DQGlpd9o5kyzqX"
      currency="GBP"
      email={"info@mintmytoken.com"}
      token={response => this.onToken(response, null)}
    >
      {props.children}
    </StripeCheckout>
  )
}

export default Payment
