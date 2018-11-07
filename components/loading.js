import { Card, Feed, Dimmer, Loader as SemanticLoading } from "semantic-ui-react"

const Loading = () => (
  <Dimmer active inverted>
    <SemanticLoading indeterminate content="Loading" />
  </Dimmer>
)

export default Loading