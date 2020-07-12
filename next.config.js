module.exports = {
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/enigme/chambre-des-mysteres': { page: '/enigme/chambre-des-mysteres' },
      '/enigme/guet-apens-royal': { page: '/enigme/guet-apens-royal' },
    }
  },
}
