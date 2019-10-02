module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/recommended', '@vue/prettier', 'prettier'],
    rules: {
        'prettier/prettier': 'error'
    },
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },
    plugins: ['prettier', 'vue']
};
