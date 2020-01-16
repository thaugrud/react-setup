module.exports = {
  browser: true,
  verbose: true,
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
  setupFiles: [
    "<rootDir>/test/setup.js"
  ],
  snapshotSerializers: [
    "enzyme-to-json/serializer"
  ],
  reporters: [
    'default'
  ],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60
    },
  },
};
