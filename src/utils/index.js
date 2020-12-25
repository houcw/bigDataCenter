import qs from 'qs'
import store from '../store'
import COS from '../../node_modules/cos-js-sdk-v5/dist/cos-js-sdk-v5.min'

// import {Message} from 'element-ui'

let pageData= {
    pageSize: 15,//每页个数
    total: 0,//总条数
    current: 1,//当前页
    pageTotal: 0//总页数
  };

// 省市数据
let PCdata=[
  {
    province:'北京',
    city:['北京市']
  },
  {
    province:'天津',
    city:['天津市']
  },
  {
    province:'河北',
    city:['石家庄市','唐山市','秦皇岛市','邯郸市','邢台市','保定市','张家口市','承德市','沧州市','廊坊市','衡水市']
  },
  {
    province:'山西',
    city:['太原市','大同市','阳泉市','长治市','晋城市','朔州市','晋中市','运城市','忻州市','临汾市','吕梁市']
  },
  {
    province:'内蒙古',
    city:['呼和浩特市','包头市','乌海市','赤峰市','通辽市','鄂尔多斯市','呼伦贝尔市','巴彦淖尔市','乌兰察布市','锡林郭勒市','阿拉善市']
  },
  {
    province:'辽宁',
    city:['沈阳市','大连市','鞍山市','抚顺市','本溪市','丹东市','锦州市','营口市','阜新市','辽阳市','盘锦市','铁岭市','朝阳市','葫芦岛市']
  },
  {
    province:'吉林',
    city:['长春市','吉林市','四平市','辽源市','通化市','白山市','松原市','白城市','延边市']
  },
  {
    province:'黑龙江',
    city:['哈尔滨市','齐齐哈尔市','鸡西市','鹤岗市','双鸭山市','大庆市','伊春市','佳木斯市','七台河市','牡丹江市','黑河市','绥化市','大兴安岭市']
  },
  {
    province:'上海',
    city:['上海市']
  },
  {
    province:'江苏',
    city:['南京市','无锡市','徐州市','常州市','苏州市','南通市','连云港市','淮安市','盐城市','扬州市','镇江市','泰州市','宿迁市']
  },
  {
    province:'浙江',
    city:['杭州市','宁波市','温州市','嘉兴市','湖州市','绍兴市','金华市','衢州市','舟山市','台州市','丽水市']
  },
  {
    province:'安徽',
    city:['合肥市','芜湖市','蚌埠市','淮南市','马鞍山市','淮北市','铜陵市','安庆市','黄山市','滁州市','阜阳市','宿州市','巢湖市','六安市','亳州市','池州市','宣城市']
  },
  {
    province:'福建',
    city:['福州市','厦门市','莆田市','三明市','泉州市','漳州市','南平市','龙岩市','宁德市']
  },
  {
    province:'江西',
    city:['南昌市','景德镇市','萍乡市','九江市','新余市','鹰潭市','赣州市','吉安市','宜春市','抚州市','上饶市']
  },
  {
    province:'山东',
    city:['济南市','青岛市','淄博市','枣庄市','东营市','烟台市','潍坊市','济宁市','泰安市','威海市','日照市','莱芜市','临沂市','德州市','聊城市','滨州市','菏泽市']
  },
  {
    province:'河南',
    city:['郑州市','开封市','洛阳市','平顶山市','安阳市','鹤壁市','新乡市','焦作市','濮阳市','许昌市','漯河市','三门峡市','南阳市','商丘市','信阳市','周口市','驻马店市','济源市']
  },
  {
    province:'湖北',
    city:['武汉市','黄石市','十堰市','宜昌市','襄樊市','鄂州市','荆门市','孝感市','荆州市','黄冈市','咸宁市','随州市','恩施市','仙桃市','潜江市','天门市','神农架市']
  },
  {
    province:'湖南',
    city:['长沙市','株洲市','湘潭市','衡阳市','邵阳市','岳阳市','常德市','张家界市','益阳市','郴州市','永州市','怀化市','娄底市','湘西市']
  },
  {
    province:'广东',
    city:['广州市','韶关市','深圳市','珠海市','汕头市','佛山市','江门市','湛江市','茂名市','肇庆市','惠州市','梅州市','汕尾市','河源市','阳江市','清远市','东莞市','中山市','潮州市','揭阳市','云浮市']
  },
  {
    province:'广西',
    city:['南宁市','柳州市','桂林市','梧州市','北海市','防城港市','钦州市','贵港市','玉林市','百色市','贺州市','河池市','来宾市','崇左市']
  },
  {
    province:'海南',
    city:['海口市','三亚市','三沙市','五指山市','琼海市','儋州市','文昌市','万宁市','东方市','定安市','屯昌市','澄迈市','临高市','白沙市','昌江市','乐东市','陵水市','保亭市','琼中市']
  },
  {
    province:'重庆',
    city:['重庆市']
  },
  {
    province:'四川',
    city:['成都市','自贡市','攀枝花市','泸州市','德阳市','绵阳市','广元市','遂宁市','内江市','乐山市','南充市','眉山市','宜宾市','广安市','达川市','雅安市','巴中市','资阳市','阿坝市','甘孜市','凉山市']
  },
  {
    province:'云南',
    city:['昆明市','曲靖市','玉溪市','保山市','昭通市','丽江市','普洱市','临沧市','楚雄市','红河市','文山市','西双版纳市','大理市','德宏市','怒江市','迪庆市']
  },
  {
    province:'贵州',
    city:['贵阳市','六盘水市','遵义市','安顺市','毕节市','铜仁市','清镇市','盘州市','赤水市','仁怀市','兴义市','兴仁市','凯里市','都匀市','福泉市']
  },
  {
    province:'西藏',
    city:['拉萨市','昌都市','山南市','日喀则市','那曲市','阿里市','林芝市']
  },
  {
    province:'陕西',
    city:['西安市','铜川市','宝鸡市','咸阳市','渭南市','延安市','汉中市','榆林市','安康市','商洛市']
  },
  {
    province:'甘肃',
    city:['兰州市','嘉峪关市','金昌市','白银市','天水市','武威市','张掖市','平凉市','酒泉市','庆阳市','定西市','陇南市','临夏市','甘南市']
  },
  {
    province:'青海',
    city:['西宁市','海东市','海北市','黄南市','海南市','果洛市','玉树市','梅西市']
  },
  {
    province:'宁夏',
    city:['银川市','石嘴山市','吴忠市','固原市','中卫市']
  },
  {
    province:'新疆',
    city:['乌鲁木齐市','克拉玛依市','吐鲁番市','哈密市','昌吉市','博尔塔拉市','巴音郭楞市','阿克苏市','克孜勒苏市','喀什市','和田市','伊犁市','塔城市','阿勒泰市','石河子市','阿拉尔市','图木舒克市','五家渠市']
  },
  {
    province:'香港',
    city:['香港市']
  },
  {
    province:'澳门',
    city:['澳门市']
  },
  {
    province:'台湾',
    city:['台湾市']
  }
];

let prototype = {
  // 获取省市数据
  PCdatas(){
    return PCdata
  },
  // 修改弹框初始数据赋值
  // obj1 列表某行数据
  // obj2 参数
  voluation(obj1,obj2){
    for (let i in obj1){
      for (let j in obj2){
        if (i==j && obj1[i]!=='--'){
          obj2[j]=obj1[i];
        }
      }
    }
    return obj2
  },
  //数据序列化
  $qs(obj) {
    return qs.stringify(obj)
  },
  //arr序列化
  $qsArr(arr, k) {
    //let k='name';
    //let arr=[1,2,3];
    //返回 &name=1&name=2&name=3
    let url = '';
    for (let i in arr) {
      url += '&' + k + '=' + arr[i];
    }
    return url
  },
  //集团数据-//暂时无下拉级联-后期可能有
  $groups(groupId) {
    let groups = store.state.dictionary.groups;
    return groups
  },
  //单店-房型下拉
  $hotels(hotelId) {
    //不传hotelId返回单店数组  传入hotedlId返回房型数组/查不到数据返回[]
    let hotelRoomtype = store.state.dictionary.hotelRoomtype;
    if (hotelId) {
      for (let i in hotelRoomtype) {
        if (hotelRoomtype[i].hotelId.toString() === hotelId.toString()) {
          return hotelRoomtype[i].roomTypeData;
        }
      }
      return []
    } else {
      return hotelRoomtype
    }
  },
  //单店-楼栋-楼层
  $hotelBuild(hotelId, buildingId) {
    //不传hotelId返回单店数组  传入hotedlId返回楼栋数组  同时传入hotelId和buildingId返回楼层数组  /查不到数据返回[]
    let hotelBuild = store.state.dictionary.hotelBuildFloor;
    if (hotelId) {
      for (let i in hotelBuild) {
        if (hotelBuild[i].hotelId === hotelId) {
          if (buildingId) {
            for (let k in  hotelBuild[i].buildData) {
              if (hotelBuild[i].buildData[k].buildingId === buildingId) {
                return hotelBuild[i].buildData[k].floorData
              }
            }
            return []
          }
          return hotelBuild[i].buildData
        }
      }
      return []
    } else {
      return hotelBuild
    }
  },
  //根据字典名取字典list
  $getDict(str) {
    let dict = store.state.dictionary.dictData;
    let state = true;
    for (let i in dict) {
      if (dict[i].dictType === str) {
        state = false;
        //找到相应的字典
        return dict[i].data;
      }
    }
    if (state) {
      //未找到返回空数组
      return [];
    }
  },
  //根据字段取字典数据 name:字典名称 k：dictLabel值  type：‘dictName’，‘dictValue’，‘dictCode’
  $dictData(name,k,type) {
    if (this.$checkEmpty(k)) {
      let arr = this.$getDict(name);
      let state = true;
      for (let i in arr) {
        if (arr[i].dictLabel.toString() === k.toString()) {
          state = false;
          if (type==='dictName'){
            return arr[i].dictName;
          }else if (type==='dictValue'){
            return arr[i].dictValue;
          }else{
            return arr[i].dictCode;
          }
        }
      }
      if (state) {
        return ''
      }
    } else {
      return ''
    }
  },
  //取渠道
  $getChannel(k) {
    if (this.$checkEmpty(k)) {
      let arr = store.state.dictionary.channel;
      let state = true;
      for (let i in arr) {
        if (arr[i].channelId.toString() === k.toString()) {
          state = false;
          return arr[i];
        }
      }
      if (state) {
        return {}
      }
    } else {
      return ''
    }
  },
  //取来源
  $getSource(name, k) {
    if (this.$checkEmpty(k)) {
      let arr = this.$getDict(name);
      let state = true;
      for (let i in arr) {
        if (arr[i].dictLabel.toString() === k.toString()) {
          state = false;
          return arr[i].dictName;
        }
      }
      if (state) {
        return ''
      }
    } else {
      return ''
    }
  },
  //取酒店名称
  $getHotelName(k) {
    if (this.$checkEmpty(k)) {
      let arr = store.state.dictionary.hotels;
      let state = true;
      for (let i in arr) {
        if (arr[i].hotelId.toString() === k.toString()) {
          state = false;
          return arr[i];
        }
      }
      if (state) {
        return {}
      }
    } else {
      return ''
    }
  },
  //验证非法字符
  //强制向服务器提交数据，必须验证，请求类型数据，查询，不做验证
  $character(str) {
    if (this.$checkEmpty(str)) {
      let re = ['<', '>', 'script', '~', '!', '@', '#', '$', '%', '^', '&', '*', '{', '}', '[', ']', ':'];
      for (let i in re) {
        if (str.indexOf(re[i]) !== -1) {
          return false
        }
      }
      return true
    } else {
      return true
    }
  },
  //简单验证非法字符-textarea
  $character2(str) {
    if (this.$checkEmpty(str)) {
      let re = ['<', '>'];
      for (let i in re) {
        if (str.indexOf(re[i]) !== -1) {
          return false
        }
      }
      return true
    } else {
      return true
    }
  },
  //验证非空
  $checkEmpty(str) {
    if (str === null || str === undefined) {
      return false
    } else {
      str = str.toString().replace(/^\s+|\s+$/g, "");
      if (str === '') {
        return false
      } else {
        return true
      }
    }
  },
  //验证手机
  $checkPhone(str) {
    if (this.$checkEmpty(str)) {
      let re =/^1[3456789]\d{9}$/;
      if (re.test(str)) {
        return true
      } else {
        return false
      }
    } else {
      return true
    }
  },
  //验证手机和座机
  $checkLandPhone(str) {
    if (this.$checkEmpty(str)) {
      if (this.$checkPhone(str) || this.$checkmo(str)) {
        return true
      } else {
        return false
      }
    } else {
      return true
    }
  },
  //验证座机
  $checkmo(str) {
    // if (this.$checkEmpty(str)) {
    //   // let re = /[0-9-()（）]{7,18}/;
    //   // let re = /^((0\d{2,3})-)(\d{7,8})(-(d{3,}))/;
    //   // 029-83380588
    //   let re = /^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$/;

    //   if (re.test(str)) {
    //     return true
    //   } else {
    //     return false
    //   }
    // } else {
    //   return true
    // }
    if (this.$checkEmpty(str)) {
      let re = /[0-9-()（）]{7,18}/;
      if (re.test(str)) {
        return true
      } else {
        return false
      }
    } else {
      return true
    }
  },
  // 用一个正则来验证(支持手机号码、含区号固定电话、不含区号固定电话)
  checkTel(tel) {
    var pattern = /(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}13[0-9]{9}$)/;
    if (pattern.test(tel)) {
        return true;
    }
    else {
        return false;
    }
  },
  //邮箱格式验证
  $checkEmail(str) {
    if (this.$checkEmpty(str)) {
      let re = /^[0-9A-Za-z][\.-_0-9A-Za-z]*@[0-9A-Za-z]+(?:\.[0-9A-Za-z]+)+$/;
      if (re.test(str)) {
        return true
      } else {
        return false
      }
    } else {
      return true
    }
  },
  //只能为字母数字
  $checkAlphanumeric(str) {
    if (this.$checkEmpty(str)) {
      let re = /^[0-9a-zA-Z]+$/;
      if (re.test(str)) {
        return true
      } else {
        return false
      }
    } else {
      return true
    }
  },
  //验证是否为数字
  $checkNumber(str) {
    if (this.$checkEmpty(str)) {
      if (!isNaN(str)) {
        return true;
      } else {
        return false;
      }
    } else {
      return true
    }
  },
  //验证是否为正整数/不能为0
  $checkInteger(str) {
    if (this.$checkEmpty(str)) {
      let re = /^[0-9]*[1-9][0-9]*$/;
      if (this.$checkNumber(str) && re.test(str)) {
        return true
      } else {
        return false
      }
    } else {
      return true
    }
  },
  //验证是否为整数/可以为0
  $checkInteger0(str) {
    if (this.$checkEmpty(str)) {
      let re = /^(0|[1-9][0-9]*)$/;
      if (this.$checkNumber(str) && re.test(str)) {
        return true
      } else {
        return false
      }
    } else {
      return true
    }
  },
  //验证是否为正数/可以为浮点数
  $checkPositiveNum(str) {
    if (this.$checkEmpty(str)) {
      let re = /^([0-9]\d*(\.\d*[1-9])?)|(0\.\d*[1-9])$/;
      if (this.$checkNumEqual0(str) && re.test(str)) {
        return true
      } else {
        return false
      }
    } else {
      return true
    }
  },
  //大于等于0的数字
  $checkNumEqual0(num){
    if (this.$checkEmpty(num)) {
      if(this.$checkNumber(num)&&num>=0){
        return true
      }else{
        return false
      }
    }
  },
  //会员等级-延长时间 大于0 小数点最多1位
  $checkExtended(str) {
    if (this.$checkEmpty(str)) {
      if (!this.$checkNumber(str)) {
        return false
      }
      str = parseFloat(str);
      if (str < 0) {
        return false
      } else {
        if (str.toString().indexOf('.') !== -1) {
          if (str.toString().split(".")[1].length <= 1) {
            return true
          } else {
            return false
          }
        } else {
          return true
        }
      }
    } else {
      return true
    }
  },
  //会员等级-折扣验证 大于0 小于等于1 小数点后最多两位
  $checkDiscount(str) {
    if (this.$checkEmpty(str)) {
      if (!this.$checkNumber(str)) {
        return false
      }
      str = parseFloat(str);
      if (str <= 0 || str > 1) {
        return false
      } else if (str === 1) {
        return true
      } else {
        if (str.toString().split(".")[1].length <= 2) {
          return true
        } else {
          return false
        }
      }
    } else {
      return true
    }
  },
  // 优惠券折扣验证 大于0 小于1 小数点后最多两位
  $couponDiscount(str) {
    if (this.$checkEmpty(str)) {
      if (!this.$checkNumber(str)) {
        return false
      }
      str = parseFloat(str);
      if (str <= 0 || str >= 1) {
        return false
      } else {
        if (str.toString().split(".")[1].length <= 2) {
          return true
        } else {
          return false
        }

      }
    } else {
      return true
    }
  },
  //全局验证方法
  $checkForm(arr) {
    //传入的格式为
    /*
    params//要验证的字段
    rules key为验证方法名
    rules val为错误提示的文字
    [{params:'',rules:[{'$checkEmpty':'请输入手机号'},{'$checkPhone':'手机格式不正确'}]}]

    返回true或false
    */
    for (let x in arr) {
      for (let y in arr[x].rules) {
        for (let z in arr[x].rules[y]) {
          if (!this[z](arr[x].params)) {
            Message({
              showClose: true,
              message: arr[x].rules[y][z],
              type: 'error'
            });

            return false
          }
        }
      }
    }
    return true
  },
  //转换字符串日期时间
  $dateTimeChange(time, type) {
    //type不传为 年-月-日 时:分:秒 type=1 为 年-月-日  type=2 为 时:分:秒
    let DateTime;
    if (time) {
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let date = time.getDate();
      let Time = time.toTimeString().slice(0, 8);
      month <= 9 ? month = '0' + month : month;
      date <= 9 ? date = '0' + date : date;
      if (type === 1) {
        return year + '-' + month + '-' + date
      } else if(type === 2){
        return Time;
      }else {
        return year + '-' + month + '-' + date + ' ' + Time;
      }
    } else {
      return '日期格式有误'
    }
  },
  //获取日期
  //s -2前天  -1昨天  0 今天  1明天 2后天
  //date 从哪天开始计算  不传为今天
  $getDateStr(s, date) {
    let dd = '';
    date ? dd = new Date(date) : dd = new Date();
    dd.setDate(dd.getDate() + s);
    let y = dd.getFullYear();
    let m = dd.getMonth() + 1;
    let d = dd.getDate();
    let H = dd.getHours();
    let M = dd.getMinutes();
    let S = dd.getSeconds();
    m < 10 ? m = '0' + m : m;
    d < 10 ? d = '0' + d : d;
    return y + "-" + m + "-" + d+' '+H+':'+M+':'+S;
  },
  //日期相减得到天时分
  $getJetLag(d1, d2, type) {
    //d2-d1  type不传为天时分秒  0为总秒数  1为天 2为小时 3为分
    let date1 = new Date(d1), date2 = new Date(d2);
    let s1 = date1.getTime(), s2 = date2.getTime();
    let total = (s2 - s1) / 1000;
    let day = parseInt(total / (24 * 60 * 60));//计算整数天数
    let afterDay = total - day * 24 * 60 * 60;//取得算出天数后剩余的秒数
    let hour = parseInt(afterDay / (60 * 60));//计算整数小时数
    let afterHour = total - day * 24 * 60 * 60 - hour * 60 * 60;//取得算出小时数后剩余的秒数
    let min = parseInt(afterHour / 60);//计算整数分
    let afterMin = total - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60;//取得算出分后剩余的秒数
    switch (type) {
      //有需要继续添加
      case 0:
        return total;
      case 1:
        return day;
      case 2:
        return hour;
      case 3:
        return min;
      default:
        return day + '天' + hour + '小时' + min + '分' + afterMin + '秒';
    }
  },
  //时间戳转换年月日时分秒 type=1 年月日，type=2 年月日时分秒 type=3 月日
  $formatDate(timestamp,type) {
    if(timestamp!==null && timestamp != '--'){
      var date = new Date(parseInt(timestamp));//时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var D = date.getDate() <10 ? '0' + date.getDate()+' ':date.getDate()+' ';
      var h = (date.getHours() >= 10 ? date.getHours() : '0' + date.getHours()) + ':';
      var m = (date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes()) + ':';
      var s = (date.getSeconds() >= 10 ? date.getSeconds() : '0' + date.getSeconds());
      if(type==1){
        return Y + M + D;
      }else if(type==3){
        return M + D;
      }else{
        return Y + M + D + h + m + s;
      }
    }else{
      return '--'
    }
  },

  //计算n天的0点0分0秒的时间戳
  $initDateRange (dayCount) {

    const end = new Date(new Date(new Date().toLocaleDateString()).getTime() - 3600 * 1000 * 24)

    const start = new Date(new Date(new Date().toLocaleDateString()).getTime())

    start.setTime(start.getTime() - 3600 * 1000 * 24 * (dayCount - 1))

    return this.timeArray = [start.getTime(), end.getTime()]

  },

  //年月日转换成时间戳 day 向前天数
  $formatTimeStamp(day){
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth()+1;
    var d = date.getDate();
    var timeStamp = new Date(y+'/'+m+'/'+d);
    if(day){
      if(day==1){
        return timeStamp.getTime()-1000*60*60*24+1000*60*60*24-1;
      }else{
        return timeStamp.getTime()-1000*60*60*24*day-1;
      }

    }else{
      return timeStamp.getTime()
    }
  },
  //根据日期获取周几
  $getWeek(date) {
    //this.$getWeek('2018-08-08 10:10:10')或者this.$getWeek('2018-08-08')
    let weekArray = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    let week = weekArray[new Date(date).getDay()];
    return week;
  },

  //过滤null 置为'--'
  $filterNull(arr) {
    let list = arr;
    if (list === null || list === '' || list === undefined) {
      return []
    } else {
      if (list instanceof Array) {
        for (let i in list) {
          for (let j in list[i]) {
            if (list[i][j] === null || list[i][j] === '' || list[i][j] === undefined) {
              list[i][j] = '--';
            }
          }
        }
      } else {
        for (let i in list) {
          if (list[i] === null || list[i] === '' || list[i] === undefined) {
            list[i] = '--';
          }
        }
      }
      return list
    }
  },
  // 分页赋值
  pageDatas(data){
    this.$set(pageData, 'total', data.total);
    this.$set(pageData, 'current',data.current);
    this.$set(pageData, 'pageTotal',data.pages);
    this.$set(pageData, 'pageSize',data.size);
    return pageData;
  },
  //跳转处理
  $jumpFn(obj) {
    /*参数说明
    let obj={
      thisPath:'',//当前路由地址
      path:'/orderDetails', //路由地址
      name:'OrderDetails',  //路由名
      keepName:'order-details', //组件名
      query:obj.query, //参数
      routeId:obj.orderNo, //路由id-重复打开组件路由名必须是唯一的
      font:obj.font  //标签显示的文字
    };*/
    let lab = store.state.permissions.labelArr;
    let lv = {};
    //先取当前选中菜单的索引
    for (let i in lab) {
      if (lab[i].path === obj.thisPath) {
        lv = {
          menuLv1: lab[i].menuLv1,
          menuLv2: lab[i].menuLv2,
          menuLv3: lab[i].menuLv3
        }
      }
    }
    //跳转
    this.$router.replace({
      name: obj.name,
      path: '/orderDetails',
      query: obj.query,
      params: {
        routeId: obj.routeId
      }
    });
    //更改vuex状态
    this.$store.commit('permissions/setLabel', {
      font: obj.font,
      path: obj.path,
      name: obj.name,
      query: obj.query,
      menuLv1: lv.menuLv1,
      menuLv2: lv.menuLv2,
      menuLv3: lv.menuLv3,
      routeId: obj.routeId
    });
  },
  // 上传图片大小限制
  $beforeUpload(file){
    let is500=file.size/1024/1024>1;
    if (is500){
      this.$message.warning('图片大小不能超过1M');
      return false
    }
  },
  // 上传文件大小限制
  $fileBeforeUpload(file){
    let is500=file.size/1024/1024>50;
    if (is500){
      this.$message.warning('文件大小不能超过50M');
      return false
    }
  },
  // 控制按钮显示
  $btnShow(id){
    let btnDate=JSON.parse(localStorage.getItem('btnCtr'));
    return btnDate.find(item => item.menuId == id)
  },
  // 控制按钮显示(页面有tab)
  $tabBtnShow(id){
    let btnDate=JSON.parse(localStorage.getItem('btnCtrList'));
    return btnDate.find(item => item.menuId == id)
  },

  // 根据groupId查索引
  $groupsIndex(groupId) {
    let groups = store.state.dictionary.groups;
      for (let i in groups){
        if (groups[i].groupId===groupId){
          return Number(i)
      }
    }
  },
  // 根据hotelId查索引
  $hotelsIndex(hotelId) {
    let hotels = store.state.dictionary.hotels;
    for (let i in hotels){
      if (hotels[i].hotelId===hotelId){
        return Number(i)
      }
    }
  },
   // 根据hotelId查hotelName
  $hotelName(hotelId) {
    let hotels = store.state.dictionary.hotels;
    for (let i in hotels){
      if (hotels[i].hotelId===hotelId){
        return hotels[i].hotelName
      }
    }
  },
  // 根据buildingId及下拉数据查索引buildingName
  $buildName(buildData,buildingId) {
    for (let i in buildData){
      if (buildData[i].buildingId===buildingId){
        return buildData[i].buildingName
      }
    }
  },
  // 根据buildingName及下拉数据查索引buildingId
  $buildingId(buildData,buildingName) {
    for (let i in buildData){
      if (buildData[i].buildingName===buildingName){
        return buildData[i].id
      }
    }
  },
  // 根据floorId及下拉数据查索引floorName
  $floorName(floorData,floorId) {
    for (let i in floorData){
      if (floorData[i].floorId===floorId){
        return floorData[i].floorName
      }
    }
  },
  // 过滤json数据空值字段
  $filterJsonNull(obj){
    let json={};
    for (let i in obj){
      if ((obj[i]!==null && obj[i]!=='')){
        json[i]=obj[i]
      }
    }
    return json
  },
  //将json所有字段置为空字符串
  $jsonNull(obj){
    let json={};
    for (let i in obj){
      json[i]=''
    }
    return json
  },
  // 富文本编辑框-上传图片 pathName：文件名，例'hotel'
  $uploadSuccess(param,quill,pathName){
    let uploadData=store.state.dictionary.uploadData;
    let file = param.file;
    if (!file){
      this.$message.error('图片插入失败')
    }else{
      let cos = new COS({
        SecretId: uploadData.SecretId, //密钥id
        SecretKey:uploadData.SecretKey//密钥的key
      });
      let bucket = uploadData.bucket;
      let region = uploadData.region;
      let upload_dir =pathName+'/';
      let fileName=pathName+file.uid+'.'+file.name.split('.')[file.name.split('.').length-1];
      cos.putObject({
        Bucket: bucket,
        Region: region,
        Key:upload_dir+fileName,
        Body: file
      },(err, data)=>{
        if (err) {
          self.$message.error({
            message: err.error
          });
        } else {
          let file_path = 'https://' + bucket + '.cos.' + region + '.myqcloud.com/' + upload_dir +fileName;
          // 获取光标所在位置
          let length = quill.getSelection().index;
          // 插入图片  res.info为服务器返回的图片地址
          quill.insertEmbed(length, 'image', file_path);
          //  调整光标到最后
          quill.setSelection(length + 1);
        }
      });
    }
  }
};

let install = function (Vue) {
  for (let i in prototype) {
    Vue.prototype[i] = prototype[i]
  }
};
export default install
