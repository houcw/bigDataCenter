import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import login from './login'//登录，登出接口axios地址
import dictionary from './dictionary'//字典axios地址
import groupList from './groupList' //集团列表地址

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    login,
    dictionary,
    groupList,


  }
});

export default store
