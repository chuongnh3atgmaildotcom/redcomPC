// https://stackoverflow.com/questions/63124432/how-do-i-configure-mini-css-extract-plugin-in-gatsby
exports.onCreateWebpackConfig = (helper) => {
  const { stage, actions, getConfig } = helper;
  if (stage === 'develop' || stage === 'build-javascript') {
    const config = getConfig();
    const miniCssExtractPlugin = config.plugins.find(
      (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin'
    );
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true;
    }
    actions.replaceWebpackConfig(config);
  }
};

const path = require('path')
exports.createPages = async ({ actions: { createPage, createRedirect }, graphql }) => {
  // const config = require("./src/config.json");
  // const subCategories = config.headerLinks
  //   .find((i) => i.menuLink === '/shop')
  //   ?.category.reduce((cats, obj) => {
  //     return cats.concat(
  //       obj.submenu.reduce((acc, menu) => acc.concat(menu.menuLink), [])
  //     );
  //   }, []);
  // console.log('node subCategories', subCategories);
  // subCategories.forEach(subcat => {
  //   const tags = subcat.split("/").filter((txt)=> !!txt)
  //   createPage({
  //     path: `${subcat}`,
  //     component: require.resolve("./src/templates/category.js"),
  //     context: {
  //       tags: tags
  //     },
  //   })
  // });

  const { data } = await graphql(`
    query MyQuery {
      allProductJson {
        nodes {
          productCode
        }
      }
    }
  `);
  // console.log('node products', data);
  data.allProductJson?.nodes?.forEach(({ productCode }) => {
    if (!productCode) return;
    createPage({
      path: `product/${productCode}`,
      component: require.resolve("./src/templates/pdp.js"),
      context: {
        productCode: productCode
      },
    })
  });

  const result = await graphql(`
    {
      allPrismicBlog (sort: {last_publication_date: ASC}) {
        nodes {
          id
          url
        }
      }
    }
  `)
  const postsPerPage = 4
  const blogs = result.data.allPrismicBlog.nodes
  const numPages = Math.ceil(blogs.length / postsPerPage)


  // Create listing pages
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve('./src/templates/blogs.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  createRedirect({
    fromPath: `/shop/`,
    toPath: `/`,
  })
}

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    Query: {
      ProductsInCategory: {
        type: ["ProductJson"],
        args: {
          tags: "[String]",
        },
        resolve: async (source, args, context, info) => {
          // console.log('createResolvers source', source)
          // console.log('createResolvers args', args)
          // console.log('createResolvers context', context)
          // console.log('createResolvers info', info)
          const { tags } = args
          const { entries } = await context.nodeModel.findAll({
            type: "ProductJson",
          })
          const products = entries.filter(product =>
            tags.every((category) => product.tags.includes(category))
          )
          return Array.from(products)
        },
      },
    },
  }
  createResolvers(resolvers)
}