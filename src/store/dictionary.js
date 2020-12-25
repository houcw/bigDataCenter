import $api from '../axios/apiConfig'//接口
import axios from '../axios'//请求
import Axios from 'axios'//静态Axios.all
//基础数据模块
const module = {
  namespaced: true,
  state: {
    groups: [],//集团下拉框数据
    hotels:[],//单店下拉框数据
    dictData: [],//字典数据
    uploadData: {},//上传参数
    selectedHotelId:'',//已选择的酒店id
    selectedGroupId:'',//已选择的集团id
    dateStr:'',//一选择的日期
  },
  mutations: {
    setData(state, str) {
      for (let i in str) {
        state[i] = str[i];
      }
    },
    setHotelId(state,value){
      state.selectedHotelId = value;
    },
    setGroupId(state,value){
      state.selectedGroupId =value;
    },
    setDate(state,value){
      state.dateStr =value;
    }
  },
  actions: {
    //获取字典列表-共享数据
    getDict(context) {
      let pageDate ={}
      let axiosArr = [
        axios.get($api.api+'/group/menus'),//获取菜单
        // axios.post($api.api + '/group/page',pageDate),//获取集团下拉框数据
        // axios.get($api.api + '/hotel/drop-down/list'),//获取单店下拉框数据
        // axios.get($api.api + '/dict-data/getSysDict'),//获取基础数据
      ];
      return new Promise((resolve) => {
        Axios.all(axiosArr).then(Axios.spread(function (smartLinkTree,hotels,dict) {
          if (smartLinkTree&&hotels&&dict) {
            context.commit('setData', {'smartLinkTree': smartLinkTree.data});//获取菜单
            if(!(window.localStorage.getItem('hotelName')&&window.localStorage.getItem('hotelId'))){
              console.log(hotels.data[0]);
              if(hotels.data[0]){
                window.localStorage.setItem('hotelName',hotels.data[0].hotelName);
                window.localStorage.setItem('hotelId',hotels.data[0].id);
              }
            }

            // context.commit('setData', {'groups': groups.data.records});//集团数据
            context.commit('setData', {'hotels': hotels.data});//单店数据
            context.commit('setData', {'dictData': dict.data});//基础数据

            //上传参数
            const uploadData = {
              SecretId: 'AKIDgCYlxxAe35vWrKDbS2pOgbHitoUywIAA', //密钥id
              SecretKey: 'vb4P1ShkgOxKXbQ3TiiWEl5EBuSlxC81',//密钥的key
              bucket: 'smartlink-test-1259379841',
              region: 'ap-chengdu'
            };
            context.commit('setData', {'uploadData': uploadData});//上传参数-后期通过http请求过来
            // smartlink 正式版存储桶 :https://smartlink-product-1259379841.cos.ap-shanghai.myqcloud.com
            // smartlink 测试版存储桶 :https://smartlink-test-1259379841.cos.ap-chengdu.myqcloud.com

            resolve();
          }
        }));
      })
    },
  }
};
export default module
