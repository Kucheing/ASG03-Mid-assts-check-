export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

// postcss.config.js
// module.exports = {
//   plugins: [
//     require('tailwindcss'),
//     process.env.NODE_ENV === 'production'
//       ? require('@fullhuman/postcss-purgecss')({
//           content: [
//             './src/**/*.vue',
//             './src/**/*.js',
//             // etc.
//           ],
//           defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
//         })
//       : undefined,
//     require('autoprefixer'),
//     require('cssnano')({
//       preset: 'default',
//     }),
//   ]
// }




