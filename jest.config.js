module.exports = {
  testMatch: ["**/tests/**/*.ts"],
  collectCoverage: true,
  preset: "ts-jest", 
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 100,
      lines: 90,
      statements: 90
    },
    "./lib/rules/expect-expect.ts": { // allow error handling
      lines: -3,
      statements: -5
    }
  },
  testPathIgnorePatterns: ["<rootDir>/tests/fixtures/"],
  collectCoverageFrom: ["lib/**/*.ts", "index.ts", "!**/node_modules/**"]
};
