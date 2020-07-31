import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import Wine from '../images/wines/7352801.jpg'
import Cow from '../images/Taste/cow.png'




class Card extends React.Component {


    render() {

        return (
            <CardWrapper>
                <div className="wine-bottle">
                    <img
                        alt="Wine"
                        src={Wine}
                        id="wine-img" />
                </div>
                <div className="info-section">
                    <h4>Blancs</h4>
                    <h3>Simpsons</h3>
                    <h5>England</h5>
                    <h5>309434</h5>
                    <div className="goes-with">
                        <h5>Passar till:</h5>
                        <img
                            alt="Cow"
                            src={Cow}
                            id="cow-img" />

                    </div>
                    <h5>2015 | 299 kr</h5>

                </div>
            </CardWrapper>

        )
    }
}
export default Card;


const CardWrapper = styled.div`
${ tw`shadow flex flex-col justify-start `}
height: 430px;
width: 220px;
padding: 20px;
background: #fff;
border-radius: 5px;
font-family: Assistant;

.wine-bottle{
    ${ tw`flex justify-center `}
}

.info-section{
    ${ tw`mt-5 `}
}

#wine-img{
    ${ tw` m-0 `}
    width: 70px;
}
#cow-img{
    ${ tw` ml-1 mt-0 mb-1 `}
    width: 30px;
}

h4{
    font-family: Assistant;
    ${ tw` mb-1 `}
}

h3{
    font-family: Assistant;
    ${ tw` mb-1 `}
}
h5{
    font-family: Assistant;
    ${ tw` mb-1 `}
}
h6{
    font-family: Assistant;
    ${ tw` mb-1 `}
}
.goes-with{
    ${ tw` mb-5 mt-5 flex items-center `}
}


`