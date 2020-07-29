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

    <div className="test2">
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
    </div>
    <div className="test3">
      <h5>SE/NO</h5>
    </div>


  </StyledHeader>

)

const StyledHeader = styled.div`
  ${ tw`  text-secondary  items-center h-24`}
  display: grid;
  grid-template-columns: 300px 1fr 100px;
  box-shadow: 0 1px 4px #a8a5a3;
 
  
  .test{
    ${ tw`flex justify-center `}
    
  }
  .test2{
    
    justify-self: start;

  }

  .test3{
    justify-self: start;
    
  }

  h5{
    
    ${ tw`m-0 font-thin`}
    font-family: Assistant;
  }
  img{
    ${ tw`w-32 m-0`}
  }
  ul{
    ${ tw`mb-0 text-sm flex uppercase `}
    list-style: none;
    
    
    li{
      ${ tw`m-0 mt-1 pl-5 pr-5 hover:text-primary`}
      font-family: Assistant;
      
      
    }
  }
`



export default Header;
