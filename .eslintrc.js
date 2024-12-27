module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false, // Disable Babel config file requirement
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // For React projects
  ],
  rules: {
    // Add your custom ESLint rules here
  },
};
