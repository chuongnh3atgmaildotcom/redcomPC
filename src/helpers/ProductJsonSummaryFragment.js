import { graphql } from 'gatsby';
export const ProductJsonSummaryFragment = graphql`
  fragment ProductJsonSummaryFragment on ProductJson {
    name
    id
    productCode
    alt
    description
    image {
      childImageSharp {
        gatsbyImageData(
          height: 400
          width: 400
        )
      }
    }
    price
    originalPrice
    tags
  }
`