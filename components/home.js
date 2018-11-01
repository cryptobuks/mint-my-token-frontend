import { useState } from "react"
import { Button, Grid, Segment, Message } from "semantic-ui-react"
import Mint from "./mint"

const Home = () => {
  const [showMinting, setMinting] = useState(false)
  return (
    <Grid columns="equal" padded="vertically">
      <Grid.Column />
      <Grid.Column width={8}>
        <Segment>
          <h2>Welcome weary traveller,</h2>
          <p>A short introductory latin blurb!</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit soluta commodi
            impedit esse quasi, optio distinctio provident cumque voluptates. Assumenda, distinctio
            laboriosam! Earum explicabo cumque sed nam ut minima.
          </p>
          <Button color="green" onClick={() => setMinting(true)} disabled={showMinting}>
            Lets Mint a Token!
          </Button>
        </Segment>
        {showMinting && <Mint />}
      </Grid.Column>
      <Grid.Column />
    </Grid>
  )
}

export default Home
