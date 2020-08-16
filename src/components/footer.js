import React from "react"
import styled from "styled-components"
import { Container } from "./layoutComponents"
import tw from 'twin.macro'
import Logo from '../images/bwe-logo.png'

const Footer = () => (
  <StyledFooter>
    <p>Brand Wine Estates 2020</p>
    <div>
      <p>frida@brandwineestates.com</p>
      <p>+46 700 43 3010</p>
    </div>

  </StyledFooter>
)

export default Footer;

const StyledFooter = styled.div`
  ${ tw` flex items-center justify-around h-24  `}
  font-family: Assistant;
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: #efefef;
 
p{
  ${ tw`mt-0 mb-0`}
}


`

