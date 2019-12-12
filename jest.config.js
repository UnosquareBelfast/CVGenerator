module.exports = {
  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^Components(.*)$': '<rootDir>/src/components$1',
    '^Common(.*)$': '<rootDir>/src/components/common$1',
    '^Pages(.*)$': '<rootDir>/src/pages$1',
    '^Utilities(.*)$': '<rootDir>/src/utilities$1',
    '^SetupTests(.*)$': '<rootDir>/src/setupTests',
    '^Themes(.*)$': '<rootDir>/src/styled',
    '^Actions(.*)$': '<rootDir>/src/store/actions',
    '^Constants(.*)$': '<rootDir>/src/components/constants',
    '^Services(.*)$': '<rootDir>/src/services',
    '^Reducers(.*)$': '<rootDir>/src/store/reducers',
  },
  testMatch: ['<rootDir>/src/__tests__/**/*.js?(x)'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
