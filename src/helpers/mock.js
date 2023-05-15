import productJson from './product.json';
// import blogJson from './blog.json';
import find from 'lodash/fp/find';
import isArray from 'lodash/fp/isArray';

/**

*/
function generateMockProductData(count, tags) {
  const products = productJson;
  if (!isArray(tags)) {
    tags = [tags];
  }
  const filtered = products.filter((item) => tags.every((val) => item.tags.includes(val)));
  return filtered.slice(0, count);
}

function generateSingleProductData(code) {
  const products = productJson;
  // console.log('generateSingleProductData product', products);
  const filtered = find((item) => item.productCode === code, products);
  // console.log('generateSingleProductData result', filtered);
  return filtered;
}

// function generateMockBlogData(count) {
//   return blogJson.slice(0, count);
// }

export { generateSingleProductData, generateMockProductData, generateMockBlogData };
