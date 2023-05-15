async function onCreateNode({
    node,
    actions,
    loadNodeContent,
    createNodeId,
    createContentDigest,
}) {
    //issuse: transformer-json parse json which have images as txt, not a file node.
    //So it will not be transformed by source-filesystem and transformer-sharp

    //tried to create file node and let gatsby-transformer-sharp work with it later
    //but error can not created a node of a type owned by another plugin
    //https://github.com/gatsbyjs/gatsby/issues/11092
    // const createFileNode = require('gatsby-source-filesystem/create-file-node');
    // const createAndProcessNode = path => {
    //     path = '/app/static/'+path;
    //     const fileNodePromise = createFileNode.createFileNode(path, createNodeId).then(fileNode => {
    //       createNode({
    //         ...fileNode,
    //         internal: {
    //           contentDigest: createContentDigest(fileNode),
    //           type: `productJsonChildImage`
    //         },
    //       });
    //       createParentChildLink({ parent: node, child: fileNode })
    //       return null;
    //     });
    //     return fileNodePromise;
    // };
    //const { image = undefined, gallery = undefined } = content
    // if (image) {
    //     createAndProcessNode(image);
    // }

    //correct solution: create fields object in ProductJson nodes 
    //gatsby-source-filesystem will convert to fileNode, then gatsby-transformer-sharp add childimagesharp
    //https://github.com/gatsbyjs/gatsby/issues/6041#issuecomment-398728208
    
    //actually images just need to be a valid relative path from json file, and images are parsed by source-filesystem
    //then it will be convert automatically
    //https://github.com/gatsbyjs/gatsby/issues/6041#issuecomment-398738426

    const { createNodeField } = actions
    
    // console.log('my plugin filer node', node.internal.type, node.id);
    if (node.internal.type !== `ProductJson`) {
        return
    }

    // console.log('my plugin process node', node.internal.type, node.id, node.name);
    
    const content = node
    // console.log('my plugin content', content);
    const { image = undefined, gallery = undefined } = content
    console.log('my plugin parsed', image, gallery);
    
    // createNodeField({
    //     node,
    //     name: `childProductImageSharp`,
    //     value: '../../static/'+image, // adjust as needed here - this need to be relative path to image from your json file
    // });
}

exports.onCreateNode = onCreateNode