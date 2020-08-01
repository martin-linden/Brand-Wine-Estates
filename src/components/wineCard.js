import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import Wine from '../images/wines/7352801.jpg'
import Cow from '../images/Taste/cow.png'






const WineCard = (props) => {



    /*  console.log(props); */
    return (


        <CardWrapper>
            <div className="wine-bottle">
                <img src={props.img} alt={props.brand} id="wine-img" />
            </div>
            <div className="info-section">
                <h3>{props.brand}</h3>
                <h5>{props.country}</h5>
                <h5>{props.number}</h5>
                <div className="goes-with">
                    <h5>{props.taste}:</h5>
                    <img src={props.img} alt={props.brand} id="cow-img" />
                </div>
                <h5>{props.year}|{props.price} kr</h5>
            </div>
        </CardWrapper>
    )
};

export default WineCard;


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