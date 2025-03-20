module.exports = {
  roots: ['<rootDir>/tests'],
  collectCoverageFrom: [
    '<rootDir>/tests/**/*.ts',
    '!**/test/**'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  testTimeout: 60000
}