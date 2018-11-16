import { Grid, Button, Header, Segment, Divider } from "semantic-ui-react"

const Stepper = ({ children, steps, titles, activeStep, onNext, onBack }) => (
  <Segment>
    <Grid container>
      <Grid.Row>
        <Header>Title</Header>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>{children}</Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Divider inverted />
      </Grid.Row>
      <Grid.Row columns={12}>
        <Grid.Column width={2}>
          <Button>Prev</Button>
        </Grid.Column>
        <Grid.Column width={8}>Dots</Grid.Column>
        <Grid.Column width={2}>
          <Button>Next</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)

export default Stepper
