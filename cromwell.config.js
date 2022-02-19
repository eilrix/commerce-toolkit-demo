module.exports = {
  palette: {
    primaryColor: '#9900CC',
  },
  globalCss: [
    '@cromwell/toolkit-commerce/dist/_index.css',
    'react-toastify/dist/ReactToastify.css',
  ],
  headHtml: "<link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;900&display=swap\" rel=\"stylesheet\" /><meta name=\"viewport\" content=\"width=device-width\">",
  defaultPages: {
    index: 'index',
    category: 'category/[slug]',
    product: 'product/[slug]',
    post: 'blog/[slug]',
    tag: 'tag/[slug]',
    pages: 'pages/[slug]',
    account: 'account',
  },
  pages: [
    {
      id: "index",
      route: "index",
      name: "Home",
      title: "Home page",
      modifications: [
        {
          "type": "gallery",
          "id": "home_gallery",
          "gallery": {
            "images": [
              {
                "src": "/themes/cromwell-demo-toolkit-commerce/main_banner_1.png",
                "href": "/category/5"
              },
              {
                "src": "/themes/cromwell-demo-toolkit-commerce/main_banner_2.png",
                "href": "/category/6"
              },
            ],
            "width": "100%",
            "ratio": 3.75,
            "pagination": true,
            "effect": "coverflow",
            "loop": true,
            "delay": 2500,
            "speed": 800
          }
        },
        {
          "type": "plugin",
          "id": "main_showcase",
          "plugin": {
            "pluginName": "@cromwell/plugin-product-showcase"
          }
        }
      ]
    },
  ]
};