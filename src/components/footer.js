import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import InstaLogo from '../images/insta-logo.svg'
import LinkedinLogo from '../images/linkedin-logo.svg'
import MailLogo from '../images/mail-logo.svg'
import PhoneLogo from '../images/phone-logo.svg'
import Logo from '../images/bwe-logo.png'
import MlLogo from '../images/ml-logo.svg'

const Footer = () => (
  <StyledFooter>

    <div className="container">

      <div className="icon-wrapper">
        <div className="icon-text-wrapper">
          <a href="https://www.instagram.com/brandwineestates/?hl=sv">
            <div className="icon-wrapper">
              <img src={InstaLogo} className="contact-img"></img>
              <p>Instagram</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/company/bwe-brand-wine-estates/">
            <div className="icon-wrapper">
              <img src={LinkedinLogo} className="contact-img"></img>
              <p>LinkedIn</p>
            </div>
          </a>
        </div>
      </div>

      <div className="icon-wrapper">
        <div className="icon-text-wrapper">
          <a href="mailto:frida@brandwineestates.com">
            <div className="icon-wrapper">
              <img src={MailLogo} className="contact-img"></img>
              <p>frida@brandwineestates.com</p>
            </div>
          </a>
          <div className="icon-wrapper">
            <img src={PhoneLogo} className="contact-img"></img>
            <p>+46 700 43 3010</p>
          </div>
        </div>
      </div>

      <div className="icon-wrapper">
        <div className="icon-text-wrapper">
          <a href="/">
            <div className="icon-wrapper">
              <img src={Logo} className="logo"></img>
              <p className="credits">Brand Wine Estates Sweden</p>
            </div>
          </a>
          <a href="https://www.martinlinden.com/">
            <div className="icon-wrapper">
              <img src={MlLogo} className="ml-img"></img>
              <p className="credits">Website Designed & Built By Martin Lindén</p>
            </div>
          </a>

        </div>

      </div>

    </div>

  </StyledFooter>
)

export default Footer;

const StyledFooter = styled.div`
/* ${tw` flex items-start justify-center`} */
/*  background: ; */
 padding: 10px;


  @media (max-width: 1068px) {
  font-size: 85%;
    }
 @media (max-width: 975px) {

    } 
 
p{
  ${tw`mt-0 mb-0`}
}

.container{
  ${tw` grid grid-cols-3 gap-1 `}
  @media (max-width: 975px) {
    ${tw` grid grid-cols-1 gap-0 `}
   
  } 
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
  justify-content: center;
  
}

.icon-text-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 975px) {
    align-items: center;
   
  } 
 
}


.logo{
  width: 100px;
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



