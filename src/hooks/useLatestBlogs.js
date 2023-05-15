import { useStaticQuery, graphql } from "gatsby";

export const useLatestBlogs = () => {
  const queryData = useStaticQuery(graphql`
    query LatestBlogs {
      allPrismicBlog(
        sort: [{data: {publishDate: DESC}}, {first_publication_date: ASC}]
        limit: 3
      ) {
        nodes {
          _previewable
          url
          first_publication_date(formatString: "MMM D, YYYY")
          id
          data {
            title {
              text
            }
            publishDate(formatString: "MMM D, YYYY")
          }
        }
      }
    }
  `);

  return queryData.allPrismicBlog.nodes;
};
