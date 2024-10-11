import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
	{
		extends: 'vite.config.js',
		test: {
			exclude: ['node_modules/**'],
			browser: {
				enabled: true,
				name: 'chromium',
				provider: 'playwright',
				// https://playwright.dev
				providerOptions: {},
			},
			includeTaskLocation: true
		},
	},
]);
