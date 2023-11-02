module.exports = {
    env: {
        browser: true,
        es2021: true,
        'jest/globals': true,
    },
    extends: ['airbnb-base', 'prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['jest'],
    rules: {
        'import/prefer-default-export': 'off',
        'consistent-return': 'off',
        'no-useless-escape': 'off',
        'no-plusplus': 'off',
        'no-console': 'off',
        'no-alert': 'off',
        'no-restricted-globals': 'off',
        'default-case': 'off',
        'no-useless-concat': 'off',
        'no-param-reassign': 'off',
        'no-restricted-syntax': 'off',
        'prefer-template': 'off',
        'no-fallthrough': 'off',
        'guard-for-in': 'off',
        'no-prototype-builtins': 'off',
        'no-case-declarations': 'off',
        'max-len': 'off',
        'no-return-assign': 'no-return-assign',
        'prefer-destructuring': ['error', { object: true, array: false }],
        'max-len': [
            'error',
            {
                ignoreComments: true,
                ignoreStrings: true,
            },
        ],
    },
};
