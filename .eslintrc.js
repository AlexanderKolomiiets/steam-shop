module.exports = {
  extends: ['@mate-academy/eslint-config-react-typescript'],
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  rules: {
    'max-len': ['error', {
      ignoreTemplateLiterals: true,
      ignoreComments: true,
    }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
  },
};
