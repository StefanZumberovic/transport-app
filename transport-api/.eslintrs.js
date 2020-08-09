module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',

    parserOptions: {
        project: ['./tsconfig.json']
    },

    plugins: ['@typescript-eslint'],

    extends: ['airbnb-typescript/base'],

    rules: {
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-parameter-properties': 0,
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/no-implicit-dependencies': [true, 'dev']
    }
};
