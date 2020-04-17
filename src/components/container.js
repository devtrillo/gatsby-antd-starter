import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { Layout, Menu } from "antd"
const { Header, Footer, Content } = Layout

const Container = ({ defKey, children }) => {
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
    <div>
      <Layout>
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            backgroundColor: `rebeccapurple`,
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h1
              css={css`
                line-height: 1.666;
                margin: margin 0;
                float: left;
              `}
            >
              <Link to="/" style={{ color: "white" }}>
                {data.site.siteMetadata.title}
              </Link>
            </h1>
            <Menu
              style={{ backgroundColor: `rebeccapurple`, float: "right" }}
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={defKey}
            >
              <Menu.Item key="1">
                <Link to="/page-2/">Page 2</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/404/">404</Link>
              </Menu.Item>
            </Menu>
          </div>
        </Header>
        <Content
          style={{
            padding: "24px 50px",
            marginTop: 64,
            background: `#fff`,
            minHeight: "86vh",
          }}
        >
          <div style={{ maxWidth: "900px", margin: "0 auto"}}>{children}</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          © {new Date().getFullYear()} made by alienCY ^__^
        </Footer>
      </Layout>
    </div>
  )
}
Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
