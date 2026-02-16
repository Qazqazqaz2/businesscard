import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Если репозиторий называется username.github.io, используйте base: '/'
// Для других репозиториев используйте base: '/имя_репозитория/'
const repositoryName = process.env.REPOSITORY_NAME || 'business_card'

export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? `/${repositoryName}/` : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
})
