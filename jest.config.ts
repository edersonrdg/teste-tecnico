import { resolve } from 'path';
import { compilerOptions } from './tsconfig.json'

export default {
  roots: ['<rootDir>/__tests__'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['node_modules'],
  moduleNameMapper: {
    '^@modules/(.*)$': resolve(__dirname, './src/modules/$1'),
    '^@shared/(.*)$': resolve(__dirname, './src/shared/$1'),
    '^@config/(.*)$': resolve(__dirname, './src/config/$1'),
  },
  preset: 'ts-jest',
  testMatch: [
    '**/?(*.)+(spec|test).[tj]s?(x)',
  ],
};
