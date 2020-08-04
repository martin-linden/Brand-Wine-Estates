import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'


const ProducerCard = (props) => {


    /* console.log(props); */
    return (

        <CardWrapper>
            <div className="">
                <img src={props.img} id="producer-img" />
            </div>
            <div className="info-section">
                <h6>{props.country}</h6>
                <h4>{props.name}</h4>
                <h5>Läs mer:{props.link}</h5>
            </div>
        </CardWrapper>
    )
};

export default ProducerCard;


const CardWrapper = styled.div`
${ tw`shadow flex flex-col justify-start hover:shadow-lg cursor-pointer`}
height: auto;
width: 400px;
background: #fff;
border-radius: 5px;

/* overflow: hidden;  //round img corner */

h4{
    font-family: Assistant;
}

h5{
    font-family: Assistant;
}

h6{
    font-family: Assistant;
}



.info-section{
    ${ tw` pl-3 pr-3 pt-3 `}
    font-family: Assistant;
}

#producer-img{
    ${ tw` m-0 `}
    width: fit-content;
}
 

`