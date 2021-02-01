import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import '../FirstCard/firstCard.css'

  const InstagramFeed = () => {
    const data = useStaticQuery(graphql`
      {
        allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 8) {
          edges {
            node {
              localFile {
                publicURL
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                  id
                }
              }
            }
          }
        }
      }
    `)

    let arrayOfImages = data.allInstaNode.edges;
    let instagramFeed = arrayOfImages.map((item, i) => {
      return(
        <>
          <div key={i} className="container feed col-3 px-auto my-1">
            <Img fluid={item.node.localFile.childImageSharp.fluid} style={{height: '234px'}}/>
            <div className="ig-overlay">
            </div>
          </div> 
        </>)
    })

    return (
      <div className="container frame py-5 px-4" data-sal="slide-up" delay="300">
        <h2 className="py-3">Podejrzyj mnie na instagramie</h2>
        <div className="container d-flex row align-items-center"> 
          {instagramFeed}
        </div>
      </div>
        
    )
  }

export default InstagramFeed