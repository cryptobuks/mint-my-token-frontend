import React, { Component } from "react"
import getConfig from "next/config"
import { Modal, Button, Header } from "semantic-ui-react"
import NewTabLink from "./new-tab-link"
const {
  publicRuntimeConfig: { DISCLAIMER, PRIVACY_POLICY }
} = getConfig()

class Disclaimer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
  }

  componentDidMount = () => {
    if (window.localStorage.disclaimer) {
      this.setState({ show: false })
    }
  }

  onClose = agreed => {
    if (agreed) {
      window.localStorage.setItem("disclaimer", Date.now())
    }
    this.setState({ show: false })
  }

  render() {
    const { show } = this.state
    if (show) {
      return (
        <div>
          <Modal dimmer="inverted" open={true} onClose={() => this.onClose(false)}>
            <Modal.Content>
              <Modal.Description>
                <Header>Hello,</Header>
                <p>
                  Amongst other arcane arts, this site uses magic and cookies and from time to time
                  we may save some data about your visit.
                </p>
                <p>
                  So, please read our <NewTabLink href={PRIVACY_POLICY} text="privacy policy" /> and{" "}
                  <NewTabLink href={DISCLAIMER} text="disclaimer" />.
                </p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button color="black" onClick={() => this.onClose(false)}>
                Nope
              </Button>
              <Button
                positive
                icon="checkmark"
                labelPosition="right"
                content="Agree"
                onClick={() => this.onClose(true)}
              />
            </Modal.Actions>
          </Modal>
        </div>
      )
    }
    return null
  }
}

export default Disclaimer
