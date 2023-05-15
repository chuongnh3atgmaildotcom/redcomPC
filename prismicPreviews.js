/**
 * This file contains configuration for `gatsby-plugin-prismic-previews` to
 * support preview sessions from Prismic with unpublished documents.
 *
 * @see https://prismic.io/docs/technical-reference/gatsby-plugin-prismic-previews
 */

import { componentResolverFromMap } from "gatsby-plugin-prismic-previews";

import BlogTemplate from "./src/pages/{PrismicBlog.url}.js";

/**
 * Prismic preview configuration for each repository in your app. This set of
 * configuration objects will be used with the `withPrismicPreview` and
 * `withPrismicUnpublishedPreview` higher order components.
 *
 * If your app needs to support multiple Prismic repositories, add each of
 * their own configuration objects here as additional elements.
 *
 * @see https://prismic.io/docs/technical-reference/gatsby-plugin-prismic-previews#withprismicunpublishedpreview
 */
export const repositoryConfigs = [
  {
    repositoryName: 'samshilla',
    componentResolver: componentResolverFromMap({
      blog: BlogTemplate,
    }),
  },
];
