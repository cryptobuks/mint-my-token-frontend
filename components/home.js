import { useState } from "react"
import Link from "next/link"
import { Button, Grid, Segment } from "semantic-ui-react"

const Home = () => {
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
          <Link href="/mint">
            <Button color="green">Lets Mint a Token!</Button>
          </Link>
        </Segment>
      </Grid.Column>
      <Grid.Column />
    </Grid>
  )
}

export default Home
