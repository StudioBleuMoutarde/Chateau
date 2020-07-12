module.exports = {
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/enigme/chambre-des-mysteres": {
        page: "/enigme/[slug]",
        query: { slug: "chambre-des-mysteres" }
      },
      "/enigme/guet-apens-royal": {
        page: "/enigme/[slug]",
        query: { slug: "guet-apens-royal" }
      }
    }
  }
}
