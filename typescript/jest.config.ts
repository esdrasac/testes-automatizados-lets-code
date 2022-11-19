/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,
  roots: ['<rootDir>/tests'],
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageProvider: "v8",
  preset: "ts-jest"
};
