import { Message } from "semantic-ui-react"
import PropTypes from "prop-types"

const ErrorMessage = ({ error }) => {
  if (!error) return null
  console.error(error.message)
  return (
    <Message negative>
      <Message.Header>Oh deary me 😧!</Message.Header>
      <p>Something has gone wrong. If the problem persists let us know.</p>
    </Message>
  )
}

ErrorMessage.propTypes = {
  error: PropTypes.object,
}
export default ErrorMessage
