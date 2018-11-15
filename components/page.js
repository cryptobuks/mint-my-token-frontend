import React, { Component } from "react"
import PropTypes from "prop-types"
import { isMobile } from "react-device-detect"
import Meta from "./page/meta"
import Header from "./page/header"
import Footer from "./page/footer"
import Disclaimer from "./disclaimer"

class Page extends Component {
  render() {
    return (
      <div className="box">
        <Meta />
        <Disclaimer />
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
            padding: 1rem;
            height: ${isMobile ? "100%" : "100vh"};
          }
          div.header {
            margin-bottom: 1rem;
          }
          div.content {
            height: 100%;
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
