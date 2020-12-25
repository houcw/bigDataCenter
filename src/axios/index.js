import Vue from 'vue';
import axios from "axios";
import store from "../store"
import {Message} from 'element-ui'
import {Loading} from 'element-ui';
import apiConfig from "./apiConfig";
import $api from '../axios/apiConfig'//接口

//接口
for (let k in apiConfig) {
  Vue.prototype[k] = apiConfig[k];
}
const Axios = axios.create({
  timeout: 120000,
  responseType: "json",
  headers: {
    'Content-Type': 'application/json',
  }
});
let loadAll;
Axios.interceptors.request.use(
  config => {
  let userInfo=JSON.parse(window.localStorage.getItem('userInfo')||'{}');
  if (userInfo&&userInfo.accessToken) {
    config.headers['Authorization'] = userInfo.accessToken;
  }else{
    window.localStorage.clear()
  }
  if ((config.mask !== false)&&!(config.url.indexOf('/notice/getUnReadUserNoticeList')>-1)&&!(config.url.indexOf('/notice/getUnReadNoticeCount')>-1)) {
    loadAll = Loading.service({
      lock: true,
      text: '加载中',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    });
  }
  return config;
},
err => {
  return Promise.reject(err);
});

Axios.interceptors.response.use(
  response => {
  setTimeout(()=> {
    loadAll.close();
  }, 500);
  if (response.data.code === 200) {
    //操作成功返回数据
    return response.data;
  } else {
    console.log(response.data,'response.data');
    if (response.data.code === 401) {
      setTimeout(()=>{
        store.commit('authmng/removeInfo');
        localStorage.clear();
      },2000)
    }
    //操作失败 弹窗
    Message({
      showClose: true,
      message: response.data.msg,
      type: 'error'
    });
    return false;
  }
},
error => {
  console.log(error);

  setTimeout(()=> {
    loadAll.close();
  }, 500);
  if (error.response) {
    switch (error.response.status) {
      case 401:
        store.commit('authmng/removeInfo');
        break;
      case 404:
        break;
      case 403:
        break;
      case 500:
        if(error.response.data.message=='请求受限资源'){
          store.commit('authmng/removeInfo');
        }
        break;
      default:
        break;
    }
    return Promise.reject(error)
  }
}
);
export default Axios

