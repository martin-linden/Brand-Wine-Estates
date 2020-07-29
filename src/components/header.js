import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Container } from "./layoutComponents"
import tw from 'twin.macro'
import Logo from '../images/bwe-logo.png';


const Header = () => (

  <StyledHeader>
    <div className="test">
      <img id="logo" alt="Brand Wine Estates Logo" src={Logo} />
    </div>
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
        Recensioner
      </li>
      <li>
        Om oss / kontakt
      </li>


    </ul>

  </StyledHeader>

)

const StyledHeader = styled.div`
  ${ tw` border-red-400  text-secondary justify-center items-center h-20 grid lg:grid-cols-9 grid-cols-6`}
  font-family: adobe-heiti-std, sans-serif;
  .test{
    ${ tw`col-start-1 col-end-1 flex justify-center ml-10`}
  }
  img{
    ${ tw`w-32 m-0`}
  }
  ul{
    ${ tw`flex justify-around mb-0 col-start-3 col-end-8 text-sm`}
    list-style: none;
    li{
      ${ tw`m-0 mt-1 `}
    }
  }
`



export default Header;
