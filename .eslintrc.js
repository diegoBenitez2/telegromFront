module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        commonjs: true,
        es6: true,
    },
    extends: ['plugin:vue/essential', 'eslint:recommended', 'airbnb-base'],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        indent: ['error', 4],
        'spaced-comment': 'warn',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        semi: ['error', 'always'],
        'no-underscore-dangle': 0,
        'arrow-body-style': ['error', 'always'],
        camelcase: ['error', { properties: 'always' }],
        'no-shadow': ['error', { builtinGlobals: true, hoist: 'functions', allow: [] }],
        'consistent-return': 0,
        'no-nested-ternary': 0,
        'import/no-unresolved': 0,
        'import/extensions': ['error', 'never'],
        'no-unused-vars': 'off',
        'linebreak-style': [
            'error',
            'unix',
        ],
    },
};
