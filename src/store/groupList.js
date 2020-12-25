import $api from '../axios/apiConfig'//接口
import axios from '../axios'//请求
const module = {
    namespaced: true,
    state: {},
    mutations: {
        setData(state, str) {
            for (let i in str) {
              state[i] = str[i];
            }
          },
          //清空信息
          removeInfo(state) {
            state.userInfo = {};
            window.localStorage.clear();
          }
    },
    actions: {
        // 查询smartLink集团数据
        getData(context,data){
            return new Promise((resolve)=>{
                axios.post($api.api+'/group/page',data).then(res=>{
                    if(res){
                        resolve(res.data)
                    }
                })
            })
        },
        // 查询Pms集团数据
        getPmsData(context,data){
            return new Promise((resolve)=>{
                axios.post($api.api+'/pms/group/page',data).then(res=>{
                    if(res){
                        resolve(res.data)
                    }
                })
            })
        },
        // 添加集团
        addGroup(context,data){
            return new Promise((resolve)=>{
                axios.post($api.api+'/group/add/group',data).then(res=>{
                    if(res){
                        resolve(res.data)
                    }
                })
            })
        },
        // 添加pms集团
        addPmsGroup(context,data){
            return new Promise((resolve)=>{
                axios.post($api.api+'/pms/group/addGroup',data).then(res=>{
                    if(res){
                        resolve(res.data)
                    }
                })
            })
        },
        // 根据Id查看集团信息
        groupDetail(context,data){
            return new Promise((resolve)=>{
                axios.post($api.api+'/group/one/group?id='+data).then(res=>{
                    if(res){
                        resolve(res.data)
                    }
                })
            })
        },
        // 根据Id修改集团信息
        updateGroup(context,data){
            return new Promise((resolve)=>{
                axios.post($api.api+'/group/update/group',data).then(res=>{
                    if(res){
                        resolve(res.data)
                    }
                })
            })
        },
        // 根据Id修改PMS集团信息
        updatePmsGroup(context,data){
            return new Promise((resolve)=>{
                axios.post($api.api+'/pms/group/updateGroup',data).then(res=>{
                    if(res){
                        resolve(res.data)
                    }
                })
            })
        },
        // 删除集团
        deleteGroup(context,data){
            return new Promise((resolve)=>{
                axios.get($api.api+'/group/delete/group'+data).then(res=>{
                    if(res){
                        resolve(res.data)
                    }
                })
            })
        },
        // 删除PMS集团
        deletePmsGroup(context,data){
            return new Promise((resolve)=>{
                axios.get($api.api+'/pms/group/deleteGroup'+data).then(res=>{
                    if(res){
                        resolve(res.data)
                    }
                })
            })
        },
        // 获取酒店集团下拉数据
        getGroupHotelDropDown(context,data){
            return new Promise((resolve)=>{
                axios.get($api.api+'/group/getGroupHotelDropDown').then(res=>{
                    if(res){
                        resolve(res.data)
                    }
                })
            })
        },
        getPmsGroupHotelDropDown(context,data){
            return new Promise((resolve)=>{
                axios.get($api.api+'/pms/group/list').then(res=>{
                    if(res){
                        resolve(res.data)
                    }
                })
            })
        },
        // 获取菜单
        getMenuTree(context,data){
            return new Promise((resolve) => {
            axios.get($api.api+'/group/menus').then(res => {
                if (res) {
                context.commit('setData', {'Menu': res.data});//存vuex
                window.localStorage.setItem('Menu',res.data)//存本地
                resolve(res.data);
                }
            });
            })
        },
        // 获取pms菜单树
        getPmsMenuTree(context,data){
            return new Promise((resolve) => {
                axios.get($api.api+'/pms/menu/getList').then(res => {
                    if (res) {
                    context.commit('setData', {'Menu': res.data});//存vuex
                    window.localStorage.setItem('Menu',res.data)//存本地
                    resolve(res.data);
                    }
                });
                })
        },
        // smartLink集团管理员分页
        getAdmin(context,data){
            return new Promise((resolve)=>{
                axios.post($api.api+'/group/list/groupAdmin'+data).then(res=>{
                    if(res){
                        resolve(res.data)
                    }
                })
            })
        },
        // pms集团管理员分页
        getPmsAdmin(context,data){
            return new Promise((resolve)=>{
                axios.post($api.api+'/pms/user/page',data).then(res=>{
                    if(res){
                        resolve(res.data)
                    }
                })
            })
        },
        // 根据角色获取菜单树
        getRoleTree(context,data){
            return new Promise((resolve)=>{
                axios.get($api.api+'/group/getMenusByUserName'+data).then(res=>{
                    if(res){
                        resolve(res.data)
                    }
                })
            })
        },
        // 根据用户获取对应的菜单树
        getPmsRoleTree(context,data){
            return new Promise((resolve)=>{
                axios.get($api.api+'/pms/menu/getListByUserId'+data).then(res=>{
                    if(res){
                        resolve(res.data)
                    }
                })
            })
        },
        // 删除集团管理员
        deleteGroupAdmin(context,data){
            return new Promise((resolve)=>{
                axios.post($api.api+'/group/delete/groupAdmin'+data).then(res=>{
                    if(res){
                        resolve(res.data)
                    }
                })
            })
        },
        deletePmsGroupAdmin(context,data){
            return new Promise((resolve)=>{
                axios.get($api.api+'/pms/user/deleteUser'+data).then(res=>{
                    if(res){
                        resolve(res.data)
                    }
                })
            })
        },
        // 修改集团管理员信息
        updateGroupAdmin(context,data){
            
        },
        // 修改pms用户信息接口
        updatePmsUser(context,data){
            return new Promise ((resolve)=>{
                axios.post($api.api+'/pms/user/updateUser',data).then(res=>{
                    if(res){
                        resolve(res.data)
                    }
                })
            })
        },
        // 添加集团管理员信息
        addGroupAdmin(context,data){
            return new Promise ((resolve)=>{
                axios.post($api.api+'/group/saveOrUpdate/groupAdmin',data).then(res=>{
                    if(res){
                        resolve(res.data)
                    }
                })
            })
        },
        // 添加pms集团管理员
        addPmsUser(context,data){
            return new Promise ((resolve)=>{
                axios.post($api.api+'/pms/user/addUser',data).then(res=>{
                    if(res){
                        resolve(res.data)
                    }
                })
            })
        },
        // 获取字典分页数据
        getDictpage(context,data){
            return new Promise((resolve)=>{
                axios.post($api.api+'/dict-type/page',data).then(res=>{
                    if(res){
                        resolve(res.data)
                    }
                })
            })
        },
        // 添加字典
        addDict(context,data){
            return new Promise((resolve)=>{
                axios.post($api.api+'/dict-type/add',data).then(res=>{
                    if(res){
                        resolve(res.data)
                    }
                })
            })
        },
        //更新字典 
        upadteDict(context,data){
            return new Promise((resolve)=>{
                axios.post($api.api+'/dict-type/update',data).then(res=>{
                    if(res){
                        resolve(res.data)
                    }
                })
            })
        },
        // 删除字典
        deleteDict(context,data){
            return new Promise((resolve)=>{
                axios.get($api.api+'/dict-type/delete'+data).then(res=>{
                    if(res){
                        resolve(res.data)
                    }
                })
            })
        },
        // 获取通知列表
        getNoticPage(context,data){
            return new Promise((resolve)=>{
                axios.get($api.api+'/sysNotice/getSysNoticePage'+data).then(res=>{
                    if(res){
                        resolve(res.data)
                    }
                })
            })
        },
        // 获取集团菜单树
        getGroupTree(context,data){
            return new Promise((resolve)=>{
                axios.get($api.api+'/group/getGroupHotelDropDown').then(res=>{
                    if(res){
                        resolve(res.data)
                    }
                })
            })
        },
        // 添加系统通知
        addNotice(context,data){
            return new Promise((resolve)=>{
                axios.post($api.api+'/sysNotice/add',data).then(res=>{
                    if(res){
                        resolve(res.data)
                    }
                })
            })
        },
        // 修改通知
        updateNotice(context,data){
            return new Promise((resolve)=>{
                axios.post($api.api+'/sysNotice/update',data).then(res=>{
                    if(res){
                        resolve(res.data)
                    }
                })
            })
        },
        // 保存并发布通知
        addAndRelease(context,data){
            return new Promise((resolve)=>{
                axios.post($api.api+'/sysNotice/addAndRelease',data).then(res=>{
                    if(res){
                        resolve(res.data)
                    }
                })
            })
        },
        // 获取单个通知对象
        getNoticeObjectList(context,data){
            return new Promise((resolve)=>{
                axios.get($api.api+'/sysNotice/getNoticeObjectList'+data).then(res=>{
                    if(res){
                        resolve(res.data)
                    }
                })
            })
        },
        // 发布单个通知
        releaseSysNotice(context,data){
            return new Promise((resolve)=>{
                axios.post($api.api+'/sysNotice/releaseSysNotice',data).then(res=>{
                    if(res){
                        resolve(res.data)
                    }
                })
            })
        },
        // 删除系统通知
        deleteSysNotice(context,data){
            return new Promise((resolve)=>{
                axios.post($api.api+'/sysNotice/deleteSysNotice'+data).then(res=>{
                    if(res){
                        resolve(res.data)
                    }
                })
            })
        }
    }
  };
  export default module
  