import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/layout'
import { RichText } from 'prismic-reactjs'
import { GlobalStyle } from '../components/globalStyle'
import RedWine from '../images/type/red.svg'
import Rose from '../images/type/rose.svg'
import Sparkling from '../images/type/sparkling2.svg'
import WhiteWine from '../images/type/white.svg'
import Fish from '../images/taste/fish.svg'
import SeaFood from '../images/taste/seafood.svg'
import Apertiff from '../images/taste/drink.svg'
import Company from '../images/taste/company.svg'
import Pork from '../images/taste/pork.svg'
import Vegetable from '../images/taste/vegetable.svg'
import Elk from '../images/taste/elk.svg'
import Rabbit from '../images/taste/rabbit.svg'
import Lamb from '../images/taste/lamb.svg'
import Desert from '../images/taste/desert.svg'
import Bird from '../images/taste/bird.svg'
import Asia from '../images/taste/asia.svg'
import Beef from '../images/taste/beef.svg'
import Cheese from '../images/taste/cheese.svg'
import Chilli from '../images/taste/chilli.svg'
import Mushroom from '../images/taste/mushroom.svg'
import Carrot from '../images/taste/carrot.svg'







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
          grape
          extern_link {
            ... on PRISMIC__ExternalLink {
              _linkType
              url
            }
          }
          acidity
          alcohol
          country
          number
          producer
          product_sheet {
            ... on PRISMIC__FileLink {
              _linkType
              url
            }
          }
          region
          sweetness
          temp
          text
          info
          launch_date
          type
          volume
          year
          wine_image
          wine_imageSharp {
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed
              }
            }
          }
          body {
            ... on PRISMIC_Single_wine_pageBodyCategory_list {
              type
              label
              fields {
                category
              }
            }
          }
        }
      }
    }
  }
}
`;



const singleWinePage = (props) => {



  console.log(props);

  const content = props.data.prismic.allSingle_wine_pages.edges[0].node;
  const iconSlice = props.data.prismic.allSingle_wine_pages.edges[0].node.body[0].fields;



  return (
    <Layout>
      <GlobalStyle />
      <CardWrapper>
        <div>
          <Image
            fixed={content.wine_imageSharp.childImageSharp.fixed}
            imgStyle={{ objectFit: 'contain' }}
            className="wine-wrapper"
          />
        </div>
        <div className="content-wrapper">
          <h4>{content.producer}</h4>
          <h3>{content.name} - {content.year}</h3>
          <div className="type">
            {content.type === "Rött" ? <><h4 id="type-text">Rött</h4> <img src={RedWine} id="type-img" /> </> : null}
            {content.type === "Vitt" ? <><h4 id="type-text">Vitt</h4> <img src={WhiteWine} id="type-img" /> </> : null}
            {content.type === "Rosé" ? <><h4 id="type-text">Rosé</h4> <img src={Rose} id="type-img" /> </> : null}
            {content.type === "Mousserande" ? <><h4 id="type-text">Mousserande</h4> <img src={Sparkling} id="type-img" /> </> : null}
          </div>
          <div className="taste-text">
            <RichText render={content.text} />
          </div>
          <div className="goes-with">

            {iconSlice.map((icon, i) =>
              <React.Fragment key={i}>
                {icon.category === "Apertiff" ? <div className="category-wrapper"><img src={Apertiff} id="icon-img" /> <h4>Apertiff</h4></div> : null}
                {icon.category === "Skaldjur" ? <div className="category-wrapper"><img src={SeaFood} id="icon-img" /> <h4>Skaldjur</h4></div> : null}
                {icon.category === "Fisk" ? <div className="category-wrapper"><img src={Fish} id="icon-img" /> <h4>Fisk</h4></div> : null}
                {icon.category === "Sällskap" ? <div className="category-wrapper"><img src={Company} id="icon-img" /> <h4>Sällskap</h4></div> : null}
                {icon.category === "Fläsk" ? <div className="category-wrapper"><img src={Pork} id="icon-img" /> <h4>Fläsk</h4></div> : null}
                {icon.category === "Grönsaker" ? <div className="category-wrapper"><img src={Vegetable} id="icon-img" /> <h4>Grönsaker</h4></div> : null}
                {icon.category === "Lamm" ? <div className="category-wrapper"><img src={Lamb} id="icon-img" /> <h4>Lamm</h4></div> : null}
                {icon.category === "Dessert" ? <div className="category-wrapper"><img src={Desert} id="icon-img" /> <h4>Dessert</h4></div> : null}
                {icon.category === "Fågel" ? <div className="category-wrapper"><img src={Bird} id="icon-img" /> <h4>Fågel</h4></div> : null}
                {icon.category === "Asiatisk" ? <div className="category-wrapper"><img src={Asia} id="icon-img" /> <h4>Asiatisk</h4></div> : null}
                {icon.category === "Nötkött" ? <div className="category-wrapper"><img src={Beef} id="icon-img" /> <h4>Nötkött</h4></div> : null}
                {icon.category === "Ost" ? <div className="category-wrapper"><img src={Cheese} id="icon-img" /> <h4>Ost</h4></div> : null}
                {icon.category === "Chilli" ? <div className="category-wrapper"><img src={Chilli} id="icon-img" /> <h4>Chilli</h4></div> : null}
                {icon.category === "Svamp" ? <div className="category-wrapper"><img src={Mushroom} id="icon-img" /> <h4>Svamp</h4></div> : null}
                {icon.category === "Morot" ? <div className="category-wrapper"><img src={Carrot} id="icon-img" /> <h4>Morot</h4></div> : null}
                {icon.category === "Vilt (stor)" ? <div className="category-wrapper"><img src={Elk} id="icon-img" /> <h4>Vilt (stor)</h4></div> : null}
                {icon.category === "Vilt (små)" ? <div className="category-wrapper"><img src={Rabbit} id="icon-img" /> <h4>Vilt (små)</h4></div> : null}
              </React.Fragment>

            )}
          </div>
          <div className="extern-link">
            {content.extern_link ? <a href={content.extern_link.url} target="_blank" id="link">Visa på systembolaget</a> : <h4>Endast Horeca</h4>}

            {content.number ? <h5 id="art-number">ART:NR: {content.number}</h5> : null}
          </div>
          {content.launch_date ? <h4>Lanseras: {content.launch_date.split('T')[0]}</h4> : null}
          <div>
            {content.product_sheet ? <a href={content.product_sheet.url} target="_blank" id="link">Ladda ner produkblad</a> : null}
          </div>


        </div>
      </CardWrapper >

      <TextInfoWrapper>
        <RichText render={content.info} />
      </TextInfoWrapper>

      <MoreFactsWrapper>
        <h4>Mer fakta:</h4>
        <MoreFacts>
          <div className="test">
            <p>Land: {content.country}</p>
            <p>Region: {content.region}</p>
            <p>Producent: {content.producer}</p>
          </div>
          <div className="test">
            <p>Druva: {content.grape}</p>
            <p>Alkoholhalt: {content.alcohol} %</p>
            <p>Flaska: {content.volume} cl</p>
          </div>
          <div className="test">
            <p>Syra: {content.acidity} g/l</p>
            <p>Sötma: {content.sweetness} g/l</p>
            <p>Temperatur: {content.temp} (°C)</p>
          </div>
        </MoreFacts>
      </MoreFactsWrapper>
    </Layout>
  )
};


export default singleWinePage;


const CardWrapper = styled.div`
${ tw` flex justify-center items-start  mt-10 mb-10`}
padding: 25px;
background: #fff;
border-radius: 5px;
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
  ${ tw` flex flex-col`}
  margin-left: 150px;
  max-width: 430px;
  @media (max-width: 1060px) {
      margin-left: 0px;
     
    }
  
    @media (max-width: 740px) {
      
      
      margin-left: 0px;
    }
  
}

.category-wrapper{
  ${ tw` flex items-center`}
  margin-right: 30px;
  padding: 10px;
  h4{
    margin-left: 10px;
    margin-bottom: 0px;
  }

}

#category-text{
  margin-bottom: 0px;
  margin-left: 10px;
  margin-right: 20px;

}

.type{
  display: flex;
  align-items: center;
  margin-bottom: 26px;
}

#type-text{
  margin-bottom: 0;
  margin-right: 10px;
}

#type-img{
  width: 15px;
  max-height: 30px;
  margin-bottom: 0px;
}

.extern-link{
  ${ tw` flex items-center`}
}

#icon-img{
    ${ tw` `}
   max-width: 25px;
   min-width: 25px;
  max-height: 20px;
    margin-bottom: 0px;
}

#taste-img{
    ${ tw` mb-0 mr-3`}
    max-height: 28px;
    max-width: 30px;
}

.taste-text{
  max-height: 400px;
  overflow: scroll;
  overflow-x: hidden;

}
/* :-webkit-scrollbar{
    background-color: red;
  } */

.goes-with{
  ${ tw` mt-6 mb-6 flex flex-wrap`}
}

#art-number{
  margin-bottom:0px;
  margin-top: 0px;
  margin-left: 10px;
}

a{
  color: #2c2929;
    text-decoration: none;
}

#link{
  text-decoration: underline;
  font-size: 90%;
}

img{
  ${ tw`mb-2`}
}

`

const TextInfoWrapper = styled.div`
padding: 25px;
max-width: 1200px;
display: flex;
justify-content: center;
margin-left: auto;
margin-right: auto;


`

const MoreFactsWrapper = styled.div`
${ tw` flex justify-center items-center flex-col `}
height: auto;
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

`