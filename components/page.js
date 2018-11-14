import React, { Component } from "react"
import PropTypes from "prop-types"
import Meta from "./page/meta"
import Header from "./page/header"
import Footer from "./page/footer"

class Page extends Component {
  render() {
    return (
      <div className="box">
        <Meta />
        <div className="header">
          <Header />
        </div>
        <div className="content">{this.props.children}</div>
        <div className="footer">
          <Footer />
        </div>
        <style jsx>{`
          div.box {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100vh;
          }

          div.header {
          }

          div.content {
            height: 100%;
          }

          div.footer {
          }
        `}</style>
      </div>
    )
  }
}

Page.propTypes = {
  children: PropTypes.element
}
export default Page
