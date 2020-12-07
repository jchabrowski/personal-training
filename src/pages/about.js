// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

//   const InstagramFeed = () => {
//     const data = useStaticQuery(graphql`
//       {
//         allInstaNode {
//           edges {
//             node {
//               localFile {
//                 publicURL
//                 childImageSharp {
//                   fluid {
//                     ...GatsbyImageSharpFluid
//                   }
//                   id
//                 }
//               }
//             }
//           }
//         }
//       }
//     `)

//     let arrayOfImages = data.allInstaNode.edges;
//     let amountOfImages = 6;

//     let instagramFeed = arrayOfImages.slice(0, amountOfImages).map((item, i) => {
//       return(
//         <div key={i} className="container col-4">
//           <Img fluid={item.node.localFile.childImageSharp.fluid}/>
//         </div>)
//     })

//     return (
//         <div className="container d-flex row col-6 align-items-center"> 
//         {instagramFeed}
//       </div>  
//     )
//   }

// export default InstagramFeed