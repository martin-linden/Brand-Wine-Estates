import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import Cow from '../images/Taste/cow.png'







const WineCard = (props) => {



    console.log(props);
    return (


        <CardWrapper>
            <div className="wine-bottle">
                <img src={props.img} id="wine-img" />
            </div>
            <div className="info-section">
                <h6>{props.grape}</h6>
                <h4>{props.name}</h4>
                <h5>{props.country}</h5>
                {/* <h5>{props.number}</h5> */}
                <div className="goes-with">
                    <img src={props.taste[0]} id="icon-img" />
                    <img src={props.taste[1]} id="icon-img" />
                    <img src={props.taste[2]} id="icon-img" />
                    <img src={props.taste[3]} id="icon-img" />
                </div>
                <h5>Årgång: {props.year} {/* | {props.price} kr */}</h5>
            </div>
        </CardWrapper >
    )
};

export default WineCard;


const CardWrapper = styled.div`
${ tw`shadow flex flex-col justify-start `}
height: 430px;
width: 235px;
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
    max-height: 200px;
    min-height: 200px;
}
#icon-img{
    ${ tw` mr-2 mt-0 mb-1`}
    width: 20px;
    max-height: 25px;
    
    
    
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
    ${ tw` mb-5 mt-5 flex items-center  `}
}


`