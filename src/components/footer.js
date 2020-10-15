import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import InstaLogo from '../images/insta-logo.svg'
import LinkedinLogo from '../images/linkedin-logo.svg'
import MailLogo from '../images/mail-logo.svg'
import PhoneLogo from '../images/phone-logo.svg'
import Logo from '../images/logo-black-text.svg'
import MlLogo from '../images/ml-logo.svg'

const Footer = () => (
  <StyledFooter>




    <div className="icon-wrapper">
      <div>
        <a href="mailto:frida@brandwineestates.com">
          <div className="icon-wrapper">
            <img src={MailLogo} className="contact-img" alt="mail icon"></img>
            <p>frida@brandwineestates.com</p>
          </div>
        </a>
        <div className="icon-wrapper">
          <img src={PhoneLogo} className="contact-img" alt="phone icon"></img>
          <p>+46 700 43 3010</p>
        </div>
      </div>
    </div>

    <div className="icon-wrapper">
      <div>
        <a href="https://www.instagram.com/brandwineestates/?hl=sv">
          <div className="icon-wrapper">
            <img src={InstaLogo} className="contact-img" alt="instagram logo"></img>
            <p>Instagram</p>
          </div>
        </a>
        <a href="https://www.linkedin.com/company/bwe-brand-wine-estates/">
          <div className="icon-wrapper">
            <img src={LinkedinLogo} className="contact-img" alt="linkedin logo"></img>
            <p>LinkedIn</p>
          </div>
        </a>
      </div>
    </div>

    <div className="icon-wrapper">
      <div>
        <a href="/">
          <div className="icon-wrapper">
            <img src={Logo} className="logo" alt="brand wine estates logo"></img>
            <p className="credits">Brand Wine Estates Sweden</p>
          </div>
        </a>
        <a href="https://www.martinlinden.com/">
          <div className="icon-wrapper">
            <img src={MlLogo} className="ml-img" alt="martin linden logo"></img>
            <p className="credits">Website Designed & Built By Martin Lindén</p>
          </div>
        </a>

      </div>

    </div>

  </StyledFooter>
)

export default Footer;

const StyledFooter = styled.div`
  ${tw` flex items-center justify-around flex-row `}
/*   border-top-style: solid;
  border-top-width: 1px; */
 /*  border-top-color: #efefef; */
 background: #fff;
 padding: 10px;
/*  margin-top: 20px;
 margin-bottom: 20px; */
 @media (max-width: 1070px) {
  ${tw` flex items-center flex-col `}
    }
 
p{
  ${tw`mt-0 mb-0`}
}
.contact-img {
width: 30px;
margin: 0px;
margin-right: 10px;
}
.icon-wrapper{
  display: flex;
  padding: 15px;
  align-items: center;
  min-width: 300px;
}
.logo{
  width: 80px;
  margin-bottom: 0px;
  margin-right: 10px;
}
.credits{
  font-size: 80%;
}
.ml-img{
  width: 20px;
  margin-bottom: 0px;
  margin-right: 10px;
}
`