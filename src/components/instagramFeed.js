import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

  const InstagramFeed = () => {
    const data = useStaticQuery(graphql`
      {
        allInstaNode {
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
    let amountOfImages = 8;

    let instagramFeed = arrayOfImages.slice(0, amountOfImages).map((item, i) => {
      return(
        <div key={i} className="container col-3 px-auto py-1">
          <Img fluid={item.node.localFile.childImageSharp.fluid} style={{height: '234px'}}/>
        </div>)
    })

    return (
      <div className="container d-flex row align-items-center"> 
        {instagramFeed}
      </div>  
    )
  }

export default InstagramFeed