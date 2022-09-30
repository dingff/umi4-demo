export default {
  npmClient: 'pnpm',
  mpa: {
    template: 'index.html',
    layout: '@/layouts/mpa/index.tsx'
  },
  plugins: ['./build.plugin.ts'],
  runtimePublicPath: {},
};
