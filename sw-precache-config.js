module.exports = {
  staticFileGlobs: [
    'build/static/css/**.css',
    'build/static/js/**.js',
    'build/fonts/Sedgwick_Ave_Display/SedgwickAveDisplay-Regular.ttf',
    'build/fonts/Poppins/Poppins-Regular.ttf',
    'build/ding.m4a',
  ],
  swFilePath: './build/service-worker.js',
  stripPrefix: 'build/',
  handleFetch: false,
  runtimeCaching: [{
    urlPattern: /this\\.is\\.a\\.regex/,
    handler: 'networkFirst'
  }]
}