// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import utils from './utils';
import components from './components/components'
import Axios from './axios'
import qs from 'qs'
import COS from '../node_modules/cos-js-sdk-v5/dist/cos-js-sdk-v5.min'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import echarts from 'echarts'
// import echarts from 'echarts/echarts.all'
Vue.prototype.$echarts = echarts
import china from 'echarts/map/json/china.json'
echarts.registerMap('china', china)

Vue.use(ElementUI);
Vue.use(components);
Vue.use(utils);
Vue.prototype.axios = Axios;
Vue.use(VueQuillEditor);
Vue.prototype.qs=qs;
Vue.prototype.COS = COS;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  components: {App},
  template: '<App/>',
  methods: {
    getData(){

      // if (this.$route.path !== '/login'){
      //   this.$store.dispatch('dictionary/getDict');
      // }
    }
  },
  mounted() {
    this.getData()
  }
});
