import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/layout'
import { RichText } from 'prismic-reactjs'
import { GlobalStyle } from '../components/globalStyle'


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
          type_image
          type_imageSharp {
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed
              }
            }
          }
          body {
            ... on PRISMIC_Single_wine_pageBodyCategory_list {
              type
              fields {
                category_text
                category_image
                category_imageSharp {
                  childImageSharp {
                    fixed {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
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

  console.log(props.data.prismic.allSingle_wine_pages.edges[0].node.body[0].fields[0]);
  console.log(props.data.prismic.allSingle_wine_pages.edges[0].node.body[0].fields[0].category_text);
  console.log(props.data.prismic.allSingle_wine_pages.edges[0].node.body[0].fields[0].category_imageSharp.childImageSharp.fixed);
  /* console.log(props.data.prismic.allSingle_wine_pages.edges[0]); */

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

          <h3>{content.name}</h3>
          <div className="type">
            <h4 id="type-text">{content.type}</h4>
            <Image
              fixed={content.type_imageSharp.childImageSharp.fixed}
              imgStyle={{ objectFit: 'contain' }}
              id="icon-img"
              style={{ maxHeight: 18, maxWidth: 18 }}
            />
          </div>


          <div className="taste-text">
            <RichText render={content.text} />
          </div>
          <div className="goes-with">

            {iconSlice.map((icon, i) =>
              <div className="category-wrapper">
                <Image
                  fixed={icon.category_imageSharp.childImageSharp.fixed}
                  imgStyle={{ objectFit: 'contain' }}
                  style={{ maxHeight: 32, maxWidth: 32 }}
                  key={i}
                />
                <p>{icon.category_text}</p>

              </div>
            )}
          </div>
          <div className="extern-link">
            {content ? <a href={content.extern_link.url} target="_blank" id="link">Visa på systembolaget</a> : null}
            {content.number ? <h5 id="art-number">ART:NR: {content.number}</h5> : null}
          </div>
          <div>
            {content.product_sheet.url ? <a href={content.product_sheet.url} target="_blank" id="link">Ladda ner produkblad</a> : null}
          </div>


        </div>
      </CardWrapper >

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
            <p>Alkoholhalt: {content.alcohol}</p>
            <p>Flaska: {content.volume}</p>
          </div>
          <div className="test">
            <p>Syra: {content.acidity}</p>
            <p>Sötma: {content.sweetness}</p>
            <p>Temperatur: {content.temp}</p>
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
  margin-right: 45px;
  padding: 10px;
  p{
    margin-left: 10px;
    margin-bottom: 0px;
  }

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

.extern-link{
  ${ tw` flex items-center`}
}

#icon-img{
    ${ tw` `}
   max-width: 10px;
   min-width: 10px;
  max-height: 20px;
    margin-bottom: 0px;
}

#taste-img{
    ${ tw` mb-0 mr-3`}
    max-height: 28px;
    max-width: 30px;
}

.goes-with{
  ${ tw` mt-2 mb-6 flex flex-wrap`}
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