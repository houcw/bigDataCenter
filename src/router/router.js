//空白页面-刷新当前路由
// import Empty from '@/components/empty'
// const GroupMsg = () => import('@/pages/setup/aptManage/GroupMsg');
// const Device = () => import('@/pages/hotelManagement/roomDevice/device');
import main from '@/pages/index'
export const routers = [
  {
    path: '/',
    component: main,
    meta: {
      title: '首页',
      icon: 'uc-menu-icon-index',
    },
    children: [{
      path: '/',
      name: 'home',
      meta: {
        title: '首页',
      },
      component: resolve => {
        require(['@/pages/home/home.vue'], resolve);
      }
    }]
  }
];
export default [
  ...routers
]
