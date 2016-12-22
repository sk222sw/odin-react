const dev = require('mozilla-neo/config/webpack.dev')
const { join } = require('path')
const FlowStatusPlugin = require('flow-status-webpack-plugin')

dev.eslint.configFile = join(__dirname, 'eslint.dev.js')

dev.plugins.push(new FlowStatusPlugin({
  binaryPath: 'node_modules/.bin/flow'
}))

module.exports = dev