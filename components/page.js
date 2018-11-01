import React, { Component } from "react"
import PropTypes from "prop-types"
import Meta from "./page/meta"
import Header from "./page/header"

class Page extends Component {
  render() {
    return (
      <>
        <Meta />
        <Header />
        <div>{this.props.children}</div>
      </>
    )
  }
}

Page.propTypes = {
  children: PropTypes.element
}
export default Page
