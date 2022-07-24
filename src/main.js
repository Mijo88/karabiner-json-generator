import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import '@babel/polyfill';

Vue.config.productionTip = false;

const requireContext = require.context('@/components', true, /\.vue$/);
requireContext.keys().forEach((file) => {
  const componentName = file
    .match(/([^/]+\.vue$)/)[0]
    .replace('.vue', '');

  const component = requireContext(file);
  Vue.component(componentName, component.default);
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
