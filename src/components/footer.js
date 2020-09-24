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


    <div className="icon-wrapper">
      <div>
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
      <div>
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
      <div>
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

 @media (max-width: 822px) {
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



