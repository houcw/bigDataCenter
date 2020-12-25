// import slPreview from './sl-preview'
import slConfirm from './sl-confirm'
import slPage from './sl-page'
import ChartPie from './charts/pie'
import ChartBar from './charts/bar'
import ChartLine from './charts/line'
import sexAnnular from './charts/sexAnnular' //性别环形图
import chinaMap from './charts/chinaMap'//中国地图
import checkTime from './charts/checkTime'//入住人数折线图
import Profile from './charts/profile.vue'//情景模式使用统计
import Hobby from './charts/Hobby.vue' //情景模式，开锁方式喜好
import DeviceBar from './charts/deviceBar' //设备使用频次
import centerMap from './charts/centerMap'// 中间地图

//全局注册组件
function plugin(Vue){
  // Vue.component('pmsPreview', pmsPreview);
  Vue.component('slConfirm', slConfirm);
  Vue.component('slPage', slPage);
  Vue.component('ChartPie', ChartPie);
  Vue.component('ChartBar', ChartBar);
  Vue.component('ChartLine', ChartLine);
  Vue.component('sexAnnular',sexAnnular);
  Vue.component('chinaMap',chinaMap);
  Vue.component('checkTime',checkTime);
  Vue.component('Profile',Profile)
  Vue.component('Hobby',Hobby)
  Vue.component('DeviceBar',DeviceBar)
  Vue.component('centerMap',centerMap)
}

export default plugin
