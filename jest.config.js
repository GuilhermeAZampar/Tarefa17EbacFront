const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Caminho para a aplicação Next.js para carregar o next.config.js e .env
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)