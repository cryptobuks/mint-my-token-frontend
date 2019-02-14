import React, { Component } from "react"
import PropTypes from "prop-types"
import Meta from "./page/meta"
import Header from "./page/header"
import Footer from "./page/footer"
import Disclaimer from "./disclaimer"

class Page extends Component {
  render() {
    return (
      <div className="root">
        <Meta />
        <Disclaimer />
        <Header />
        <div>{this.props.children}</div>
        <div className="footer">
          <Footer />
        </div>
        <style jsx>{`
          div.root {
            height: 100vh;
          }
          div.footer {
            margin-top: 2rem;
          }
        `}</style>
      </div>
    )
  }
}

Page.propTypes = {
  children: PropTypes.element,
}
export default Page
