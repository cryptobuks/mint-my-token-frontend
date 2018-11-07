import React from "react"
import PropTypes from "prop-types"
import { Query } from "react-apollo"
import { Segment, List, Header, Divider } from "semantic-ui-react"
import { SINGLE_ORDER_QUERY } from "../helpers/graphql-operations"
import ErrorMessage from "./error-message"
import Loading from "./loading"

const StyledListItem = ({ header, content, icon }) => (
  <List.Item>
    <List.Icon name={icon} />
    <List.Content>
      <List.Header>{header}</List.Header>
      <List.Description>{content}</List.Description>
    </List.Content>
  </List.Item>
)

const OrderDetails = ({ id }) => (
  <div>
    <Segment padded>
      <Header as="h1">Order Summary</Header>
      <Divider />
      <Query query={SINGLE_ORDER_QUERY} variables={{ id }}>
        {({ data, loading, error }) => {
          if (loading) return <Loading />
          if (error || !data.order) return <ErrorMessage error={{}} />

          const { id, terms, stripeId, token } = data.order
          const {
            name,
            symbol,
            supply,
            decimals,
            walletAddress,
            transactionId,
            contractAddress
          } = token
          return (
            <>
              <List size="big">
                <StyledListItem header="Order Id" content={id} icon="hashtag" />
                <StyledListItem header="Terms Agreed" content={terms} icon="clock" />
                <StyledListItem header="Stripe Id" content={stripeId} icon="stripe card" />
              </List>
              <Divider />
              <List size="big">
                <Header as="h3">Token Details</Header>
                <StyledListItem header="Name" content={name} icon="tag" />
                <StyledListItem header="Symbol" content={symbol} icon="tag" />
                <StyledListItem header="Supply" content={supply} icon="hashtag" />
                <StyledListItem header="Decimals" content={decimals} icon="hashtag" />
                <StyledListItem
                  header="Ethereum Transaction Id"
                  content={transactionId}
                  icon="ethereum"
                />
                <StyledListItem header="Wallet Address" content={walletAddress} icon="ethereum" />
                <StyledListItem
                  header="Contract Address"
                  content={contractAddress}
                  icon="ethereum"
                />
              </List>
            </>
          )
        }}
      </Query>
    </Segment>
    <style jsx>
      {`
        div {
          max-width: 600px;
          margin: auto;
        }
      `}
    </style>
  </div>
)

OrderDetails.propTypes = {
  id: PropTypes.string.isRequired
}
export default OrderDetails
