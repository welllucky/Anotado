/** @type {import('jest').Config} */
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  transform: {
    "^.+\\.tsx?$": "esbuild-jest",
    "^.+\\.jsx?$": "esbuild-jest",
  },
  moduleDirectories: ["node_modules"],
}