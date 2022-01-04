module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/setupTests.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/src/__tests__/setupTests.ts',
    '<rootDir>/src/__tests__/tsconfig.jest.json',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^(pages|components)/(.+)': '<rootDir>/src/$1/$2',
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/src/__tests__/tsconfig.jest.json',
    },
  },
}
