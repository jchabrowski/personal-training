/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SiteNavbar from './Navbar/navbar'
import "./layout.css"
import { Col } from 'react-bootstrap';
import '../styles/all.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container wrapper col-12">
      <Col md={12} lg={12} className="align-self-center px-0">
        <SiteNavbar siteTitle={data.site.siteMetadata?.title || `Jakub Chabrowski - Trener Personalny Gdynia`} />
          <div className="container content-wrapper col-sm-12 px-0">{children}</div>
      </Col>
    </div>
      
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
