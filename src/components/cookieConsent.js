import React from 'react'
import CookieConsent from "react-cookie-consent";
/* import CookieConsent, { Cookies } from "react-cookie-consent"; */
import { navigate } from "gatsby"
import styled from 'styled-components';


const CookieConsentPage = () => {


    return (
        <Wrapper>
            <CookieConsent
                disableStyles={false}
                cookieName="IsAgeVerified"
                location="bottom"
                buttonText="Jag är 20 år eller äldre"
                buttonStyle={{
                    background: "#3b773b",
                    color: "white"
                }}
                declineButtonText="Jag är under 20 år"


                enableDeclineButton
                onDecline={() => {
                    navigate("/under-20")
                }}
                declineButtonStyle={{
                    background: "#d84a4a"
                }}
                setDeclineCookie={false}
                overlay={true}
                cookieValue={true}
                expires={999}
                hideOnAccept={true}
                sameSite="strict"
                debug={false}
                overlayStyle={{
                    background: "rgba(0, 0, 0, 0.9)"
                }}
                containerClasses="test"
                contentClasses="test2"
                buttonWrapperClasses="test3"

            >Denna webbsida innehåller information om alkoholdrycker. För inköp och besök på denna webbplats måste du vara 20 år eller äldre. När jag bekräftar att jag är 20 år eller äldre godkänner jag också att brandwineestates.com använder cookies.</CookieConsent>
        </Wrapper>
    )
}

export default CookieConsentPage



const Wrapper = styled.div`
.test{
   
    
 
    

 /*    .test2{
        max-width: 1000px;
        align-self: center;
        flex-grow: 0;
        font-size: 120%;
        
    }

    .test3{
       
        align-self: center;
    }  */

   
}

`