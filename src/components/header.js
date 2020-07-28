import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Container } from "./layoutComponents"
import tw from 'twin.macro'
import Logo from '../images/bwe-logo.png';


const Header = () => (

  <StyledHeader>
    <img id="logo" alt="Brand Wine Estates Logo" src={Logo} />
    <NavWrapper>
      <ul>
        <li>
          Sortiment
      </li>
        <li>
          Producenter
      </li>
        <li>
          Restaurang
      </li>
        <li>
          Om oss
      </li>
        <li>
          Kontakta oss
      </li>
      </ul>
    </NavWrapper>
  </StyledHeader>

)

const StyledHeader = styled.div`
  ${ tw` text-secondary flex items-center h-20`}
  img{
    ${ tw`w-32 m-0 ml-8`}
  }
  ul{
    ${ tw`flex mb-0 `}
    list-style: none;
    li{
      ${ tw`m-0 mt-1`}
    }
  }
`
const NavWrapper = styled.div`
 ${ tw``}
`;


export default Header;
