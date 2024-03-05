/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://bobong.blog',
    generateRobotsTxt: true, // (optional)
    exclude: ['/server-sitemap-index.xml'], // <= exclude here
    robotsTxtOptions: {
    additionalSitemaps: [
      'https://bobong.blog/server-sitemap-index.xml', // <==== Add here
    ],
  },
}