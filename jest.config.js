module.exports = {
  clearMocks: true,
  collectCoverage:  false,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  moduleDirectories: [
    "node_modules"
  ],
  testEnvironment: "jsdom",
  testMatch: [
    '**/?(*.)+(test).[jt]s?(x)',
  ],
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  testPathIgnorePatterns: [
    '.storybook',
    '/.next/',
    '/node_modules/',
    '/storybook/',
    '/.storybook/',
    '/storybook-static/',
    '/pages/'
  ],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect'
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss|less)$": "identity-obj-proxy"
  },
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
};
