module.exports = {
    bracketSameLine: true,
    endOfLine: 'lf',
    printWidth: 1000,
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'none',
    overrides: [
        {
            files: ['*.hbs', '*.css'],
            options: { singleQuote: false }
        }
    ],
    plugins: ['prettier-plugin-css-order', 'prettier-plugin-organize-imports', 'prettier-plugin-packagejson', 'prettier-plugin-tsconfig']
};
