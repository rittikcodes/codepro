import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import monacoEditorPlugin from 'vite-plugin-monaco-editor'; // Add this line

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), monacoEditorPlugin.default({})], // Include the Monaco Editor plugin here
});