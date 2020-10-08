import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { GlobalStyle } from "./globalStyle"
import { MainWrapper } from "./layoutComponents"
import Header from "./header"
import Footer from "./footer"
import { Transition } from "react-spring/renderprops"
import { useScrollRestoration } from "gatsby"
import Cookies from '../components/cookieConsent'
import { TweenMax, Power3 } from 'gsap'

/* let Path = location.pathname; */


const Layout = ({ children, path, newPath }) => {

  let opacityEase = useRef(null);


  useEffect(() => {
    console.log(opacityEase);
    TweenMax.fromTo(
      opacityEase,
      { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "ease", delay: .2 }
    )
  }, [])


  return (
    <StaticQuery
      query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
      render={data => (
        <>

          {newPath !== "/under-20" && newPath !== "/under-20/" ? <Cookies /> : null}
          <GlobalStyle />
          <MainWrapper>
            {newPath !== "/under-20" && newPath !== "/under-20/" ? <Header
              siteTitle={data.site.siteMetadata.title}

            /> : null}
            <main ref={el => { opacityEase = el }}>{children}</main>
            {path !== "/contact" && path !== "/contact/" && newPath !== "/under-20" && newPath !== "/under-20/" ? <Footer /> : null}
          </MainWrapper>
        </>
      )}
    />
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Layout



/* const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Transition
          config={{ duration: 300, delay: 50 }}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {() => style =>
            <MainWrapper style={style}>
              <main>{children}</main>
            </MainWrapper>
          }
        </Transition>
        <Footer />

      </>
    )}
  />
) */

/* const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <MainWrapper>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <Footer />
        </MainWrapper>
      </>
    )}
  />
) */