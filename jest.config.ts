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
  setupFiles: [
    '<rootDir>/config/jest/setup.ts'
  ],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testMatch: [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.ts',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/config/jest/fileTransform.ts'
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$'
  ],
}