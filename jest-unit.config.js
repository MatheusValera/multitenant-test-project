// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./jest.config.js')
config.testMatch = ['**/*.spec.ts']
config.reporters = [
  'default',
  ['jest-junit', { suiteName: 'unit', outputDirectory: 'junit', outputName: 'jest-unit.xml' }]
]
module.exports = config
