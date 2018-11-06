import React, { Component } from "react"
import PropTypes from "prop-types"
import { Grid } from "semantic-ui-react"
import Meta from "./page/meta"
import Header from "./page/header"
import Footer from "./page/footer"

class Page extends Component {
  render() {
    return (
      <>
        <Meta />
        <Header />
        <div>
          {this.props.children}
          <style jsx>{`
            div {
              height: calc(100vh - 155px - 77px);
              overflow: auto;
            }
          `}</style>
        </div>
        <Footer />
      </>
    )
  }
}

Page.propTypes = {
  children: PropTypes.element
}
export default Page
