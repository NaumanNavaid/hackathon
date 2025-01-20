module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.tsx?$': 'ts-jest',  // Transform .ts and .tsx files using ts-jest
      '^.+\\.jsx?$': 'babel-jest', // Transform .js and .jsx files using babel-jest
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    transformIgnorePatterns: [
      '/node_modules/(?!your-module-to-transform)/',  // If needed, add modules that require transformation
    ],
  };
  