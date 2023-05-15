import React from "react";
import { graphql } from "gatsby";
import { PrismicLink } from "@prismicio/react";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import { Bounded } from "../components/prismic/Bounded";
import { Heading } from "../components/prismic/Heading";
import { HorizontalDivider } from "../components/prismic/HorizontalDivider";
import Pagination from '../components/Pagination'
import * as styles from './blogs.module.css';

const findFirstImage = (slices) => {
  const imageSlice = slices.find((slice) => slice.slice_type === "image");

  return imageSlice.primary.image;
};

const getExcerpt = (slices) => {
  const text = slices
    .filter((slice) => slice.slice_type === "text")
    .map((slice) => slice.primary.text.text)
    .join(" ");

  const excerpt = text.substring(0, 300);

  if (text.length > 300) {
    return excerpt.substring(0, excerpt.lastIndexOf(" ")) + "…";
  } else {
    return excerpt;
  }
};

const BlogItem = ({ blog }) => {
  const featuredImage =
    blog.data.featuredImage || findFirstImage(blog.data.slices);
  const date = blog.data.publishDate || blog.first_publication_date;
  const excerpt = getExcerpt(blog.data.slices);

  return (
    <li className="grid">
      <PrismicLink href={blog.url} tabIndex="-1">
        <div className={styles.featuredImage}>
          {featuredImage.gatsbyImageData && (
            <GatsbyImage
              image={featuredImage.gatsbyImageData}
              alt={featuredImage.alt}
              layout="fullWidth"

            />
          )}
        </div>
      </PrismicLink>
      <div className={`grid ${styles.summary}`}>
        <Heading as="h2">
          <PrismicLink href={blog.url}>
            {blog.data.title.text}
          </PrismicLink>
        </Heading>
        <p className={styles.date}>
          {date}
        </p>
        {excerpt && (
          <p >
            {excerpt}
          </p>
        )}
      </div>
    </li>
  );
};

const BlogPage = ({ data }) => {
  const blogs = data.allPrismicBlog.nodes;

  return (
    <Layout>
      <div className={styles.root}>
        <Bounded>
          <ul className="grid">
            {blogs.map((blog) => (
              <BlogItem key={blog.id} blog={blog} />
            ))}
          </ul>
        </Bounded>
        <HorizontalDivider />
        <Pagination pageInfo={data.allPrismicBlog.pageInfo} />
      </div>
    </Layout>
  );
};

export default BlogPage;

export const Head = () => {

  return <title>Kiến thức | Sâm Shilla</title>;
};

export const query = graphql`
  query Blogs($limit: Int!, $skip: Int!) {
    allPrismicBlog(
      sort: [{last_publication_date: DESC}, {data: {publishDate: DESC}}]
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        _previewable
        url
        first_publication_date(formatString: "MMM D, YYYY")
        data {
          featuredImage {
            gatsbyImageData
            alt
          }
          title {
            text
          }
          publishDate(formatString: "MMM D, YYYY")
          slices {
            ... on PrismicSliceType {
              id
              slice_type
            }
            ... on PrismicTextDefault {
              primary {
                text {
                  text
                }
              }
            }
            ... on PrismicImageWide {
              primary {
                image {
                  gatsbyImageData
                  alt
                }
              }
            }
            ... on PrismicImageDefault {
              primary {
                image {
                  gatsbyImageData
                  alt
                }
              }
            }
          }
        }
      }
      pageInfo {
        currentPage
        pageCount
      }
    }
  }
`;
