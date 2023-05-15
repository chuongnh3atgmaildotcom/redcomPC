import { graphql } from 'gatsby';
export const ProductJsonDetailFragment = graphql`
  fragment ProductJsonDetailFragment on ProductJson {
    name
    id
    productCode
    alt
    description
    short_description
    image {
      absolutePath
      childImageSharp {
        gatsbyImageData(
          height: 400
          width: 400
        )
      }
    }
    gallery {
      childImageSharp {
        gatsbyImageData(
          height: 520
          width: 520
        )
      }
    }
    price
    originalPrice
    tags
    hdsd
    donggoi
  }
`