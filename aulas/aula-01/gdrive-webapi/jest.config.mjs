/*
 * For a detailed explanation regarding each configuration property, visit:
 */

export default {
  clearMocks: true,
  restoreMocks: true,
  // collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReportes: [
    "text",
    "lcov"
  ],
  testEnviroment: "node",
  coverageThreshold:{
    global:{
      branches: 100,
      funtions: 100,
      lines: 100,
      statements: 100
    }
  },
  watchPathIgnorePatterns: [
    "node_modules"
  ],
  transforIgnorePattenrs: ["node_modules"],
  collectCoverageFrom: [
    "src/**/*.js", "!src/**/index.js"
  ]
};
