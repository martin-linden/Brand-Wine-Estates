import React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'

export const query = graphql`
query PageQuery($id: String) {
    prismic {
      allPages(id: $id) {
        edges {
          node {
              content
              page_title
            _meta {
              id
              uid
            }
          }
        }
      }
    }
  }
`;

const Page = (props) => {

    console.log(props.data.prismic.allPages.edges[0].node);

    const pageTitle = props.data.prismic.allPages.edges[0].node.page_title;
    const content = props.data.prismic.allPages.edges[0].node.content;

    return (
        <>
            <RichText render={pageTitle} />
            <RichText render={content} />
        </>
    )
}

export default Page;