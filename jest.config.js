module.exports = {
  roots: ['<rootDir>/backend/src/'],
  collectCoverageFrom: [
    '<rootDir>/backend/src/**/*.ts'
  ],
  testTimeout: 60000,
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
