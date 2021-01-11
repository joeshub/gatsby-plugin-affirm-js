# gatsby-plugin-affirm-js

A plugin for integrating [Affirm JS](https://docs.affirm.com/affirm-developers/docs) payment options with Gatsby.

## Installation

```sh
npm install gatsby-plugin-affirm-js

# or

yarn add gatsby-plugin-affirm-js
```

## Configuration and usage

### .env.\*

In the root of your Gatsby project, create 2 environment variables files (`.env.development` and `.env.production`) if you don't have them already, then ddd this key and value.

```ini
AFFIRM_API_KEY=YOUR_AFFIRM_API_KEY
```

### gatsby-config.js

Add the pulugin and its options to `gatsby-config.js` in your project.

```js
// 1. Import your .env files
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    // 2. add the plugin
    {
      resolve: "gatsby-plugin-affirm-js",
      options: {
        // 3. pass in the API key in the options
        AFFIRM_API_KEY: `${process.env.AFFIRM_API_KEY}`,
      },
    },
  ],
};
```

You can now access the Affirm object in your React code using `window.affirm`. For example

```js
window.affirm.checkout({});
```
