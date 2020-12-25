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
        // 登录
        adminLogin(context, data) {
            return new Promise((resolve) => {
                axios.post($api.api + '/login', data).then(res => {
                    if (res) {
                        context.commit('setData', { 'userInfo': res.data });//存vuex
                        window.localStorage.setItem('userInfo', JSON.stringify(res.data));//存localStorage
                        window.localStorage.setItem('userName', JSON.stringify(res.data.name))
                        resolve(res.data)
                    }
                })
            })
        },
        // 退出
        loginOut(context, data) {
            return new Promise((resolve) => {
                axios.post($api.api + '/logout').then(res => {
                    if (res) {
                        resolve(res.data)
                        context.commit('removeInfo');//清空vuex
                        window.localStorage.clear();//清空所有缓存
                    }
                })
            })
        },
        // 修改密码
        changePwd(context, data) {
            return new Promise((resolve) => {
                axios.post($api.api + '/update/password', data).then(res => {
                    if (res) {
                        // context.commit('setData', {'userInfo': res.data});//存vuex
                        // window.localStorage.setItem('userInfo', JSON.stringify(res.data));//存localStorage
                        resolve(res.data)
                    }
                })
            })
        },
        getGrounpList(context, data) {
            return new Promise((resolve) => {
                axios.get($api.api + '/group/getGroupHotelDropDown').then(res => {
                    if (res) {
                        resolve(res.data)
                    }
                })
            })
        },
        getPMSGrounpList(context,data){
            return new Promise((resolve) => {
                axios.get($api.api + '/group/getPmsGroupHotelDropDown').then(res => {
                    if (res) {
                        resolve(res.data)
                    }
                })
            })
        },


        // 经营趋势
        gtaToday(context, data) {
            return new Promise((resolve) => {
                axios.get($api.api + '/pms/data-monitor/getRevenueStatistics' + data).then(res => {
                    if (res) {
                        resolve(res.data)
                    }
                })
            })
        },
        // 30天预订趋势
        getBookingTrends(context, data) {
            return new Promise((resolve) => {
                axios.get($api.api + '/pms/data-monitor/getBookingTrends' + data).then(res => {
                    if (res) {
                        resolve(res.data)
                    }
                })
            })
        },
        // 30天交易趋势
        getTradingTrends(context, data) {
            return new Promise((resolve) => {
                axios.get($api.api + '/pms/data-monitor/getTradingTrends' + data).then(res => {
                    if (res) {
                        resolve(res.data)
                    }
                })
            })
        },
        // 间夜量
        getRoomNightCountTrends(context, data) {
            return new Promise((resolve) => {
                axios.get($api.api + '/pms/data-monitor/getRoomNightCountTrends' + data).then(res => {
                    if (res) {
                        resolve(res.data)
                    }
                })
            })
        },
        // 营收趋势
        getTotalRevenueTrends(context, data) {
            return new Promise((resolve) => {
                axios.get($api.api + '/pms/data-monitor/getTotalRevenueTrends' + data).then(res => {
                    if (res) {
                        resolve(res.data)
                    }
                })
            })
        },
        // 客房revpar
        getRoomRevPARTrends(context, data) {
            return new Promise((resolve) => {
                axios.get($api.api + '/pms/data-monitor/getRoomRevPARTrends' + data).then(res => {
                    if (res) {
                        resolve(res.data)
                    }
                })
            })
        },
        // 入住率
        getOccupancyRateTrends(context, data) {
            return new Promise((resolve) => {
                axios.get($api.api + '/pms/data-monitor/getOccupancyRateTrends' + data).then(res => {
                    if (res) {
                        resolve(res.data)
                    }
                })
            })
        },
        // 24小时
        appletsOrderFor24H(context,data){
            return new Promise((resolve) => {
                axios.get($api.api + '/pms/data-monitor/appletsOrderFor24H' + data).then(res => {
                    if (res) {
                        resolve(res.data)
                    }
                })
            })
        },
        // 数据统计
        // 1-星座
        gtaStart(context, data) {
            return new Promise((resolve) => {
                axios.get($api.api + '/SmartLink-Statistics/residentsConstellationStatistics' + data).then(res => {
                    if (res) {
                        resolve(res.data)
                    }
                })
            })
        },
        // 2-入住人数
        getCheckIn(context, data) {
            return new Promise((resolve) => {
                axios.get($api.api + '/SmartLink-Statistics/residentsNumberStatistics' + data).then(res => {
                    if (res) {
                        resolve(res.data)
                    }
                })
            })
        },
        // 3-情景模式
        proflieData(context, data) {
            return new Promise((resolve) => {
                axios.get($api.api + '/SmartLink-Statistics/profilesUseStatistics' + data).then(res => {
                    if (res) {
                        resolve(res.data)
                    }
                })
            })
        },
        // 4-设备统计
        getDiveceList(context, data) {
            return new Promise((resolve) => {
                axios.get($api.api + '/SmartLink-Statistics/deviceUseFrequencyStatistics' + data).then(res => {
                    if (res) {
                        resolve(res.data)
                    }
                })
            })
        },
        // 5-来源地统计
        getCard(context, data) {
            return new Promise((resolve) => {
                axios.get($api.api + '/SmartLink-Statistics/residentsIdCardOriginStatistics' + data).then(res => {
                    if (res) {
                        resolve(res.data)
                    }
                })
            })
        },
        // 6-手机来源
        getPhone(context, data) {
            return new Promise((resolve) => {
                axios.get($api.api + '/SmartLink-Statistics/residentsMobileOriginStatistics' + data).then(res => {
                    if (res) {
                        resolve(res.data)
                    }
                })
            })
        },
        // pms入住人来源
        getcheckIndata(context,data){
            return new Promise((resolve) => {
                axios.get($api.api + '/pms/data-monitor/getMapDataOfSource' + data).then(res => {
                    if (res) {
                        resolve(res.data)
                    }
                })
            })
        }

    }
};
export default module
