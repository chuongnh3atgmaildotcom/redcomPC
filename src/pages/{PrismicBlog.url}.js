import React from 'react';
import { graphql } from "gatsby";
import { PrismicLink, SliceZone } from "@prismicio/react";
// import { withPrismicPreview } from "gatsby-plugin-prismic-previews";

import { useLatestBlogs } from "../hooks/useLatestBlogs";
import { components } from "../slices";

import Layout from '../components/Layout/Layout';
import { Bounded } from "../components/prismic/Bounded";
import { HorizontalDivider } from "../components/prismic/HorizontalDivider";
import { Heading } from "../components/prismic/Heading";

import * as styles from './prismicblog.module.css';
import PrismicWrapper from '../components/prismic/PrismicWrapper';

const LatestArticle = ({ blog }) => {
  const date = blog.data.publishDate || blog.first_publication_date;

  return (
    <li>
      <Heading as="h3" size="2xl" >
        <PrismicLink href={blog.url}>{blog.data.title.text}</PrismicLink>
      </Heading>
      <p className={styles.date}>
        {date}
      </p>
    </li>
  );
};

const Blog = ({ data }) => {
  // console.log(data);
  const blog = data.prismicBlog;
  const date = blog.data.publishDate || blog.first_publication_date;

  const latestBlogs = useLatestBlogs();
  // console.log('latestblogs', latestBlogs);
  return (
    <Layout>
      <div className={styles.root}>
        <PrismicWrapper>
          <Bounded>
            <PrismicLink
              href="/blog"
              className={styles.blogLink}
            >
              &larr; Tất cả kiến thức
            </PrismicLink>
          </Bounded>
          <article>
            <Bounded >
              <h1 >
                {blog.data.title.text}
              </h1>
              <p className={styles.date}>
                {date}
              </p>
            </Bounded>
            <SliceZone slices={blog.data.slices} components={components} />
          </article>
          {latestBlogs.length > 0 && (
            <Bounded>
              <div className={`grid ${styles.latestBlogs}`}>
                <HorizontalDivider />
                <div >
                  <Heading as="h2" size="3xl" >
                    Các bài đăng mới
                  </Heading>
                  <ul className='grid'>
                    {latestBlogs.map((blog) => (
                      <LatestArticle key={blog.id} blog={blog} />
                    ))}
                  </ul>
                </div>
              </div>
            </Bounded>
          )}
        </PrismicWrapper>
      </div>
    </Layout>
  );
};

export default Blog;
// export default withPrismicPreview(Blog);

export const Head = ({ data }) => {
  const blog = data.prismicBlog;
  const meta_title = blog.data.meta_title ?? blog.data.title.text
  const meta_desc = blog.data.meta_description
  return (
    <>
      <title>{meta_title}</title>
      <meta name="description" content={meta_desc} />
    </>
  );
};

export const query = graphql`
  query Blog($id: String!) {
    prismicBlog(id: { eq: $id }) {
      data {
        title {
          text
        }
        meta_description
        meta_title
        publishDate
        slices {
          ... on PrismicSliceType {
            id
            slice_type
          }
          ...PrismicImage
          ...PrismicQuote
          ...PrismicText
        }
      }
    }
  }
`;
