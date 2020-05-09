const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/jiazicai/Desktop/website/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-lekoarts-gatsby-theme-cara-templates-cara-tsx": hot(preferDefault(require("/Users/jiazicai/Desktop/website/src/@lekoarts/gatsby-theme-cara/templates/cara.tsx")))
}

