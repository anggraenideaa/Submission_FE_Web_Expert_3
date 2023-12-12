module.exports = {
  globDirectory: 'public/',
  globPatterns: [
    '**/*.{html,js,css,png,jpg,jpeg,gif,webp,svg,woff,woff2,ttf,eot}',
  ],
  swDest: 'public/sw.js',
  clientsClaim: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: new RegExp('^https://restaurant-api.dicoding.dev/'),
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'restaurants-api',
      },
    },
  ],
};
