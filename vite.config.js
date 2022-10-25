import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import envCompatible from 'vite-plugin-env-compatible';
import svgr from 'vite-plugin-svgr';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
	envPrefix: 'REACT_APP_',
	plugins: [
		react(),
		envCompatible,
		svgr(),
		eslint({ rulePaths: ['./'] }),
	],
	build: {
		emptyOutDir: true,
		outDir: 'build',
	},
	server: {
		port: 3001,
	}
});
