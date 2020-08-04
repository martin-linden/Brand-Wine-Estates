import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'


const singleWinePAge = (props) => {
    const wine = props.pageContext.content

    console.log(wine);
    return (


        <CardWrapper>
            <div className="wine-bottle">
                <img src={wine.img} id="wine-img" />
            </div>
            <div className="info-section">
                <h6>{wine.grape}</h6>
                <h4>{wine.name}</h4>
                <h5>{wine.producer} - {wine.country}</h5>
                {/* <h5>{wine.number}</h5> */}
                <div className="goes-with">
                    <img src={wine.taste[0]} id="icon-img" />
                    <img src={wine.taste[1]} id="icon-img" />
                    <img src={wine.taste[2]} id="icon-img" />
                    <img src={wine.taste[3]} id="icon-img" />
                </div>
                <div className="year-type">
                    <h5>{`${wine.year}`} </h5>  <img src={wine.type} id="type-img" />
                </div>
            </div>
        </CardWrapper >
    )
};

export default singleWinePAge;


const CardWrapper = styled.div`
${ tw`shadow flex flex-col justify-start hover:shadow-lg cursor-pointer`}
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

.year-type{
    ${ tw`flex items-center`}
}

#wine-img{
    ${ tw` m-0 `}
    width: 70px;
    max-height: 210px;
    min-height: 210px;
}
#icon-img{
    ${ tw` mr-2 mt-0 mb-1`}
    width: 20px;
    max-height: 20px;
}

#type-img{
    ${ tw` mb-1 mt-0 ml-1`}
    width: 25px;
    max-height: 23px;
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