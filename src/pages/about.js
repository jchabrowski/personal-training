// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
// import Layout from '../components/layout'

// const Image = () => {
//   const data = useStaticQuery(graphql`
//     {
//       allInstaNode {
//         edges {
//           node {
//             localFile {
//               publicURL
//               childImageSharp {
//                 fluid {
//                   originalImg
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `)

//   return (
//     <Layout>
//       <Img fluid={data.allInstaNode.edges.node.localFile.fluid.originalImg} />
//     </Layout>
//   )
// }

// export default Image