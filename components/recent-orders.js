import { Query } from "react-apollo"
import { Card, Feed } from "semantic-ui-react"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import ErrorMessage from "./error-message"
import Loading from "./loading"
import { RECENT_ORDERS_MUTATION } from "../helpers/graphql-operations"
import getConfig from "next/config"

dayjs.extend(relativeTime)
const {
  publicRuntimeConfig: { BLOCK_EXPLORER_URL },
} = getConfig()

const RecentOrders = () => (
  <Card fluid>
    <Card.Content>
      <Card.Header>Recent Activity</Card.Header>
    </Card.Content>

    <Card.Content>
      <Feed>
        <Query query={RECENT_ORDERS_MUTATION}>
          {({ data, loading, error }) => {
            if (error) return <ErrorMessage error={error} />
            if (loading) return <Loading />
            const orders = data.recentOrders
            return (
              <>
                {orders.map(({ name, symbol, contractAddress, createdAt }, index) => (
                  <Feed.Event key={index}>
                    <Feed.Label icon="ethereum" />
                    <Feed.Content>
                      <Feed.Date content={dayjs(Number(createdAt)).from()} />
                      <Feed.Extra text>Someone created a token called: {name}!</Feed.Extra>
                      <Feed.Meta>
                        {contractAddress !== "Pending" && (
                          <span>
                            View on &nbsp;
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={`${BLOCK_EXPLORER_URL}/address/${contractAddress}`}
                            >
                              EtherScan
                            </a>
                          </span>
                        )}
                      </Feed.Meta>
                    </Feed.Content>
                  </Feed.Event>
                ))}
              </>
            )
          }}
        </Query>
      </Feed>
    </Card.Content>
  </Card>
)

export default RecentOrders
