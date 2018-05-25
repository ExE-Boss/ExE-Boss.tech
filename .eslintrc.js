"use strict";
/* eslint comma-dangle: ["error", "always"] */
/* eslint sort-keys: ["error", "asc"] */

module.exports = {
	"env": {
		"browser":	true,
		"es6":	true,
		"jquery":	true,
	},
	"extends": "eslint:recommended",
	"parserOptions": {
		"sourceType": "script",
	},
	"rules": {
		"block-scoped-var": "error",
		"comma-dangle": [
			"error",
			{
				"functions": "never",
			},
		],
		"indent": [
			"error",
			"tab",
			{
				"SwitchCase": 1,
			},
		],
		"linebreak-style": [
			"error",
			"unix",
		],
		"no-console": "off",
		"no-octal": "off",
		"no-unused-vars": "warn",
		"quotes": [
			"error",
			"double",
			{
				"allowTemplateLiterals": true,
				"avoidEscape": true,
			},
		],
		"semi": [
			"error",
			"always",
		],
	},
};
