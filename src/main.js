import Vue from 'vue'
import App from './App.vue'
import router from './router'; // 导入路由配置

Vue.config.productionTip = false

const vue = new Vue({
  router,
  render: h => h(App),
});

vue.$mount('#app');
