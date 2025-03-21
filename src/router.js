// src/router/index.js

import Vue from 'vue';
import VueRouter from 'vue-router';

// 导入你的组件
import Home from './components/HelloWorld.vue';
import About from '@/components/About.vue';

// 使用 VueRouter 插件
Vue.use(VueRouter);

// 定义路由
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
];

// 创建 router 实例
const router = new VueRouter({
  // mode: 'history', // 使用 HTML5 History 模式
  routes // 简写，相当于 routes: routes
});

export default router;