import { defineConfig } from 'umi';

export default defineConfig({
  // nodeModulesTransform: {
  //   type: 'none',
  // },
  routes: [
    { path: '/123', component: '@/pages/index' },
  ],
  qiankun: {
    slave: {}
  }
});
