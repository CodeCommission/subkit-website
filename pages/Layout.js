import React from 'react'
import './Layout.css'
import 'wow.js/css/libs/animate.css'
import {Helmet} from 'react-helmet'
import styled from 'styled-components'
import Scrollspy from 'react-scrollspy'
import appPackage from '../package.json'

const LayoutContainer = styled.div`
  margin: 0;
  padding: 0;
`

const Nav = styled.div`
  z-index: 999;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  justify-content: space-between;
  margin: 0;
  padding: ${props => !props.hasScrolled
      ? '10px 0 10px 0'
      : '0'};
  background: ${props => props.hasScrolled
    ? 'rgba(238, 238, 238, 0.9)'
    : "#337AB9 url('data:image/png;base64,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') repeat"};
  transition: all 0.4s ease-in-out;
  box-shadow: ${props => !props.hasScrolled
    ? 'none'
    : '0 1px 0px rgba(0, 0, 0, 0.15)'};

  & a {
    color: ${props => props.hasScrolled
      ? 'black'
      : 'white'
    };
  }

  & img {
    -moz-filter: ${props => props.hasScrolled
      ? 'invert()'
      : 'none'
    };
    -o-filter: ${props => props.hasScrolled
      ? 'invert()'
      : 'none'
    };
    -webkit-filter: ${props => props.hasScrolled
      ? 'invert()'
      : 'none'
    };
    filter: ${props => props.hasScrolled
      ? 'invert()'
      : 'none'
    };
  }
`

const NavItems = styled(Scrollspy)`
  list-style-type: none;
  display: inline-flex;
  margin: 0;
  margin-top: 12px;
`

const NavItem = styled.li`
  display: inline;
  text-transform: uppercase;

  &.isActive {
    a {
      color: #009cff;
    }
  }

  &.isTabActive {
    a {
      color: #337AA7;
    }
  }
`

const NavLink = styled.a`
  text-decoration: none;
  margin-right: 12px;
  margin-top: 0px;
  text-align: left;
  vertical-align: middle;
  display: inline-block;
  font-size: 14px;
  color: #337AA7;
  :hover {
    color: #009cff;
  }
`

const ScrollToTop = styled.a`
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  text-align: center;
  background: whiteSmoke;
  font-weight: bold;
  color: #fff;
  font-size: 20px;
  text-decoration: none;
  position: fixed;
  bottom: 0px;
  right: 0px;
  z-index: 999999;
  display: none;
  background: #009cff;
  opacity: 0.5;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  display: block;
`

const NavLogoImage = styled.img`
  height: 45px;
  width: 45px;
  margin: 6px;
`

const NavLogoLink = styled.a`
  margin: 0px;
  text-decoration: none;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
`

const NavLogoBrand = styled.div`
  font-weight: 400;
  text-transform: uppercase;
  font-size: 24px;
  margin-top: 12px;
`

const Content = styled.main`
  width: 100%;
  background-color: white;
  padding-bottom: 70px;
`

const Footer = styled.footer`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  padding: 10px 0 10px 0;
  height: 70px;
  color: #eee;
  font-size: 10px;
  background: #337AB9 url('data:image/png;base64,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') repeat;
`

export default class Layout extends React.Component {
  state = {
    hasScrolled: false,
  }

  componentDidMount () {
    const WOW = require('wow.js')
    new WOW().init({offset: 100, mobile: true});
    window.onscroll = () => this.setState({hasScrolled: window.scrollY > 20})
  }

  render() {
    return (
      <LayoutContainer>
        <Helmet
          htmlAttributes={{lang: 'en'}}
        >
          <title>SUBKIT.IO</title>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="GraphQL made easy | subkit.io" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="GraphQL made easy | subkit.io" />
          <meta property="og:description" content="GraphQL made easy | subkit.io" />
          <meta property="og:image" content="https://www.subkit.io/logo.svg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="SUBKIT.IO" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@subkit_io" />
          <meta name="twitter:title" content="GraphQL made easy | subkit.io" />
          <meta name="twitter:description" content="GraphQL made easy | subkit.io" />
          <meta name="twitter:image" content="https://www.subkit.io/logo.svg" />
          <meta name="theme-color" content="#eee" />
          <link rel="shortcut icon" href="data:image/png;base64,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" />
          <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,400italic,600,200,600italic,700,900" rel="stylesheet" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" />
        </Helmet>
        <div className="pace pace-inactive">
          <div className="pace-progress" data-progress-text="100%" data-progress="99" style={{transform: 'translate3d(100%, 0px, 0px)'}}>
            <div className="pace-progress-inner"></div>
          </div>
          <div className="pace-activity"></div>
        </div>
        <Nav hasScrolled={this.state.hasScrolled}>
          <NavLogoLink href="/"><NavLogoImage src="/icon-subkit.svg" alt="icon subkit logo" /><NavLogoBrand>SubKit</NavLogoBrand></NavLogoLink>
          <NavItems items={['features', 'about', 'examples']} currentClassName="isActive">
            <NavItem><NavLink href={'/#features'}>Features</NavLink></NavItem>
            <NavItem><NavLink href={'/#about'}>About</NavLink></NavItem>
            <NavItem><NavLink href={'/#examples'}>Examples</NavLink></NavItem>
            <NavItem><NavLink href={'https://github.com/CodeCommission/subkit/tree/master/docs'}><i className="fa fa-github" aria-hidden="true" />&nbsp;Docs</NavLink></NavItem>
          </NavItems>
        </Nav>
        <Content>
          {this.props.children}
        </Content>
        <Footer>
          <ScrollToTop href="#"><i className="fa fa-angle-up"></i></ScrollToTop>
          <NavItems>
            <NavItem>
              <NavLink href="https://codecommission.com" target="_blank" rel="noopener">©2017 subkit.io · CodeCommission ·</NavLink>
              <br />
              {appPackage.name} {appPackage.version}
            </NavItem>
            <NavItem><NavLink href="https://www.codecommission.com/legal.html" target="_blank" rel="noopener">Imprint</NavLink></NavItem>
            <NavItem><NavLink href="https://www.codecommission.com/legal.html" target="_blank" rel="noopener">Legal</NavLink></NavItem>
            <NavItem><NavLink href={'https://github.com/CodeCommission/subkit'}><i className="fa fa-github" aria-hidden="true" />&nbsp;GitHub</NavLink></NavItem>
          </NavItems>
        </Footer>
      </LayoutContainer>
    )
  }
}