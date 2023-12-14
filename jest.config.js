module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transform: {
    'node_modules/variables/.+\\.(j|t)sx?$': 'ts-jest',
  },
};
