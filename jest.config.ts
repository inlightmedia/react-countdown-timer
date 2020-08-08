const {
  defaults
} = require("jest-config");

module.exports = {
  coverageReporters: [
    'json',
    'lcov',
    'text-summary'
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'scss'
  ],
  modulePaths: [
    './src'
  ],
  moduleDirectories: ["node_modules", "src"],
  setupFiles: [
    '<rootDir>/config/jest/setup.ts'
  ],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testMatch: [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ],
  transform: {
    '^.+\.tsx?$': 'ts-jest',
  },
  roots: ["."],
  verbose: true,
  bail: true,
};