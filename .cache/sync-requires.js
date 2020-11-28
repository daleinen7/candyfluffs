const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/douglasleinen/code/candyfluffs/.cache/dev-404-page.js"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/douglasleinen/code/candyfluffs/src/pages/index.jsx"))),
  "component---src-pages-necahual-jsx": hot(preferDefault(require("/Users/douglasleinen/code/candyfluffs/src/pages/necahual.jsx"))),
  "component---src-pages-product-index-jsx": hot(preferDefault(require("/Users/douglasleinen/code/candyfluffs/src/pages/product/index.jsx"))),
  "component---src-pages-shop-jsx": hot(preferDefault(require("/Users/douglasleinen/code/candyfluffs/src/pages/shop.jsx")))
}

