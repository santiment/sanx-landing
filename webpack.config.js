const webpack = require('webpack')
const WebpackModules = require('webpack-modules')
const path = require('path')
const sveltePreprocess = require('svelte-preprocess')
const cssModules = require('svelte-preprocess-cssmodules')
const config = require('sapper/config/webpack.js')
const pkg = require('./package.json')

const mode = process.env.NODE_ENV
const dev = mode === 'development'

const alias = {
  svelte: path.resolve('node_modules', 'svelte'),
  '@': path.resolve('src'),
  '@cmp': path.resolve('src', 'components'),
  webkit: path.resolve('node_modules/san-webkit/lib/'),
}
const extensions = ['.mjs', '.js', '.json', '.svelte', '.html']
const mainFields = ['svelte', 'module', 'browser', 'main']
const fileLoaderRule = {
  test: /\.(png|jpe?g|gif|woff2)$/i,
  use: ['file-loader'],
}

const cssLoaderRule = {
  test: /\.css$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
    },
  ],
}

const ENVS = {
  'process.env.NODE_ENV': JSON.stringify(mode),
  'process.env.GIT_HEAD': JSON.stringify(process.env.GIT_HEAD),
  'process.env.RAVEN_DSN': JSON.stringify(process.env.RAVEN_DSN),

  'process.env.IS_DEV_MODE': JSON.stringify(dev),
  'process.env.IS_PROD_MODE': JSON.stringify(!dev),

  'process.env.BACKEND_URL': JSON.stringify(process.env.BACKEND_URL),
  'process.env.GQL_SERVER_URL': 'window.GQL_SERVER_URL',
  'process.env.IS_STAGE_BACKEND': 'window.IS_STAGE_BACKEND',
  'process.env.IS_PROD_BACKEND': 'window.IS_PROD_BACKEND',

  'process.env.MEDIA_PATH': JSON.stringify('webkit'),
  'process.env.ICONS_PATH': JSON.stringify('webkit/icons'),
}

module.exports = {
  client: {
    entry: config.client.entry(),
    output: config.client.output(),
    resolve: { alias, extensions, mainFields },
    module: {
      rules: [
        {
          test: /\.(svelte|html)$/,
          use: {
            loader: 'svelte-loader',
            options: {
              compilerOptions: {
                dev,
                hydratable: true,
                generate: 'dom',
              },
              // Webpack 4 uses acorn v6 which doesn't work with HMR
              // Use overrides from npm or resolutions from yarn to set minimal
              // acorn version to v7+
              // https://github.com/sveltejs/sapper-template/pull/308
              hotReload: false,
              preprocess: [cssModules(), sveltePreprocess({ sourceMap: dev })],
            },
          },
        },
        cssLoaderRule,
        fileLoaderRule,
      ],
    },
    mode,
    plugins: [
      // pending https://github.com/sveltejs/svelte/issues/2377
      // dev && new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.browser': true,
        ...ENVS,
      }),
    ].filter(Boolean),
    devtool: dev && 'inline-source-map',
  },

  server: {
    entry: config.server.entry(),
    output: config.server.output(),
    target: 'node',
    resolve: { alias, extensions, mainFields },
    externals: Object.keys(pkg.dependencies).concat('encoding'),
    module: {
      rules: [
        {
          test: /\.(svelte|html)$/,
          use: {
            loader: 'svelte-loader',
            options: {
              compilerOptions: {
                css: false,
                generate: 'ssr',
                hydratable: true,
                dev,
              },
              preprocess: [cssModules(), sveltePreprocess({ sourceMap: dev })],
            },
          },
        },
        cssLoaderRule,
        fileLoaderRule,
      ],
    },
    mode,
    plugins: [
      new WebpackModules(),
      new webpack.DefinePlugin({
        'process.browser': false,
        ...ENVS,
      }),
    ],
    performance: {
      hints: false, // it doesn't matter if server.js is large
    },
  },

  //serviceworker: {
  //entry: config.serviceworker.entry(),
  //output: config.serviceworker.output(),
  //mode
  //}
}
