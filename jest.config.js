module.exports = {
  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^Components(.*)$': '<rootDir>/src/components$1',
    '^Pages(.*)$': '<rootDir>/src/pages$1',
    '^Store(.*)$': '<rootDir>/src/store$1',
  },
  testMatch: ['<rootDir>/(src/**/*.test.(js|jsx)|**/__tests__/*.(js|jsx|ts|tsx))'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
