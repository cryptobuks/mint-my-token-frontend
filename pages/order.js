import PropTypes from "prop-types"
import OrderDetails from "../components/order-details"

const Order = ({ query }) => <OrderDetails id={query.id} />

Order.propTypes = {
  query: PropTypes.object.isRequired
}
export default Order
