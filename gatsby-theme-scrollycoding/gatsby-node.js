// const crypto = require('crypto')

// // readd later --> no options right now
// exports.createSchemaCustomization = ({ actions }, siteOptions) => {
//   const { createTypes } = actions
//   console.log(siteOptions)
//   createTypes(`
//   type Classes @infer

//   type ScrollycodingConfig implements Node {
//   classes: Classes
//   }
//   `)
// }

// exports.sourceNodes = ({ actions: { createNode }, schema }, { classes }) => {
//   // create garden data from plugin config
//   const scrollycodingConfig = {
//     classes
//   }

//   createNode({
//     ...scrollycodingConfig,
//     id: '@awolf81/gatsby-theme-scrollycoding',
//     parent: null,
//     children: [],
//     internal: {
//       type: 'ScrollycodingConfig',
//       contentDigest: crypto
//         .createHash('md5')
//         .update(JSON.stringify(scrollycodingConfig))
//         .digest('hex'),
//       content: JSON.stringify(scrollycodingConfig),
//       description: 'Scrollycoding Config'
//     }
//   })
// }
