import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/layout'


export const query = graphql`
query SingleWineQuery($id: String) {
  prismic {
    allSingle_wine_pages(id: $id) {
      edges {
        node {
          _meta {
            id
          }
          name
        }
      }
    }
  }
}
`;



const singleWinePage = (props) => {

  console.log(props.data.prismic.allSingle_wine_pages.edges[0].node);

  const content = props.data.prismic.allSingle_wine_pages.edges[0].node;

  return (
    <Layout>


      <h1>{content.name}</h1>



    </Layout>
  )
};


export default singleWinePage;


const CardWrapper = styled.div`
${ tw` flex justify-center items-start  mt-10 mb-10`}
padding: 25px;
background: #fff;
border-radius: 5px;
font-family: Assistant;
@media (max-width: 740px) {
  ${ tw` flex-col items-center mb-0`}
    }

.wine-wrapper{
    max-width: 200px;
    max-height: 500px;
    margin-right: 130px;
    @media (max-width: 1060px) {
      margin-right: 130px;
    }
    @media (max-width: 740px) {
      margin-right: 0px;
      max-height: 350px; 
      margin-bottom: 25px;
     
    }
    @media (max-width: 480px) {
     
      max-height: 200px; 
     
    }
    
}

.content-wrapper{
  margin-left: 150px;
  @media (max-width: 1060px) {
      margin-left: 0px;
    }
  
    @media (max-width: 740px) {
      
      
      margin-left: 0px;
    }
  
}

#icon-img{
    ${ tw` mt-2`}
   max-width: 20px;
   min-width: 20px;
    max-height: 20px;
}

#taste-img{
    ${ tw` mr-3`}
   max-width: 25px;
   min-width: 25px;
    max-height: 20px;
}

.taste-text{
  max-width: 430px;
}

.goes-with{
  ${ tw` mt-2 `}
}

h2{
    font-family: Assistant;
    ${ tw` mb-2 `}
}

h4{
    font-family: Assistant;
    ${ tw` mb-2 `}
}

h3{
    font-family: Assistant;
    ${ tw` mb-1 `}
}
h5{
    font-family: Assistant;
    ${ tw` mb-2 `}
}
h6{
    font-family: Assistant;
    ${ tw` mb-1 mt-0 `}
    
}

a{
  color: #2c2929;
    text-decoration: none;
}

#systemet{
  text-decoration: underline;
}

img{
  ${ tw`mb-2`}
}

`

const MoreFactsWrapper = styled.div`
${ tw` flex justify-center items-center flex-col `}
/* margin-top: 30px;
margin-bottom: 50px; */
height: auto;
/* background: #fffbfb;  */
/* background: linear-gradient(to bottom , #fffbfb, white); */


h4{
    font-family: Assistant;
    ${ tw` mb-1  p-2 `}
    border-bottom-style: solid; 
border-bottom-width: 1px; 
border-bottom-color: #ececec; 
}


`

const MoreFacts = styled.div`
${ tw` grid grid-cols-3 gap-2 `}
padding:20px;
margin-top: 50px;
margin-bottom: 50px; 
text-align: start; 
border-top-style: solid; 
border-top-width: 1px; 
border-top-color: #efefef; 
border-bottom-style: solid; 
border-bottom-width: 1px; 
border-bottom-color: #efefef; 
@media (max-width: 1060px) {
  ${ tw`grid-cols-1 gap-5`}
  margin-top: 30px;
margin-bottom: 30px;
    }

.test{
  ${ tw``}
  justify-self: center;
  margin-left: 50px;
  margin-right: 50px;
  

  @media (max-width: 1060px) {
  justify-self: start;
    }
}


.underline{
  text-decoration: underline;
}

p{
  font-family: Assistant;
    ${ tw` mb-2 `}
    font-size: 90%;
}

h2{
    font-family: Assistant;
    ${ tw` mb-2 `}
}

h4{
    font-family: Assistant;
    ${ tw` mb-2 `}
}

h3{
    font-family: Assistant;
    ${ tw` mb-1 `}
}
h5{
    font-family: Assistant;
    ${ tw` mb-2 `}
}
h6{
    font-family: Assistant;
    ${ tw` mb-1 mt-0 `}
    
}

`