module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended-type-checked',
		'plugin:@typescript-eslint/stylistic-type-checked',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['./tsconfig.json', './tsconfig.node.json'],
		tsconfigRootDir: __dirname,
	},
	plugins: ['import', 'react-refresh'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'import/order': [
			'error',
			{
				alphabetize: {
					order: 'asc',
				},
				groups: [
					'type',
					'builtin',
					'external',
					'internal',
					'parent',
					['sibling', 'index'],
					'object',
				],
				'newlines-between': 'always',
				pathGroups: [
					{
						pattern: '~/**',
						group: 'internal',
						position: 'before',
					},
					{
						pattern: '/**',
						group: 'object',
						position: 'after',
					},
				],
				distinctGroup: false,
			},
		],
	},
}
