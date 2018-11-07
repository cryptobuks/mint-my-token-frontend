import { useState } from "react"
import Link from "next/link"
import { Button, Grid, Segment } from "semantic-ui-react"
import RecentOrders from "./recent-orders"

const Home = () => {
  return (
    <Grid centered stackable columns={2}>
      <Grid.Row>
        <Grid.Column>
          <h2>Welcome weary traveller,</h2>
          <p>A short introductory latin blurb!</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit soluta commodi
            impedit esse quasi, optio distinctio provident cumque voluptates. Assumenda, distinctio
            laboriosam! Earum explicabo cumque sed nam ut minima.
          </p>
          <Link href="/mint" prefetch>
            <Button color="violet" basic size="huge">
              Mint My Token!
            </Button>
          </Link>
          <p className="point-up">☝️</p>
          <style jsx>{`
            p.point-up {
              font-size: 4rem;
              vertical-align: center;
            }
          `}</style>
        </Grid.Column>
        <Grid.Column width={4}>
          <RecentOrders />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Home
