module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  testPathIgnorePatterns: [
      '/node_modules/'
  ],
  roots: ['<rootDir>/test']
};
