<style lang="scss" scoped>
.home {
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
  // background-image: ('/static/img/home2.png') !important;
  // background-image: url('/static/img/home1.png');

  background-size: 100%;
  background-position: center;
  .charts_Top {
    width: 100%;
    height: 588px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .charts_Top_left {
      width: 56%;
      padding-right: 20px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      .charts_Top_left_Item {
        width: 513px;
        .top_desc {
          height: 46px;
          border: 1px solid rgba(255, 255, 255, 0.5);
          background-color: rgba(0, 0, 0, 0.12);
          box-sizing: border-box;
          font-size: 16px;
          font-family: Source Han Sans SC;
          font-weight: 400;
          line-height: 40px;
          padding-left: 15px;
          color: #ffffff;
          padding-right: 20px;
          display: flex;
          justify-content: space-between;
          .Tab {
            color: rgba(255,255,255,.64);
            cursor: pointer;
          }
          .actived {
            color: #00FFF7;
            
          }
        }
        .top_Charts {
          border: 1px solid rgba(255, 255, 255, 0.5019607843137255);
          height: 542px;
          border-top: none;
          padding: 20px;
          padding-top: 0px;
          background-color: rgba(0, 0, 0, 0.4);
          position: relative;
          .topTitleBox {
            position: absolute;
            top: 30px;
            margin-left: 10px;
            z-index: 15;
            p {
              margin-bottom: 15px;
              font-size: 16px;
              span {
                color: #00ffee;
                margin-left: 5px;
              }
            }
          }
          .mapBox {
            height: 360px;
            box-sizing: border-box;
          }
          .chartBox {
            height: 182px;
            font-family: Source Han Sans SC;
            font-weight: 400;
            color: #ffffff;
            opacity: 1;
            margin: 0px 30px;
            .Top5Table {
              height: 28px;
              width: 100%;
              line-height: 28px;
              display: flex;
              align-items: center;
              .leftBox {
                min-width: 60px;
                overflow: hidden;
                line-height: 30px;
                white-space: nowrap;
                text-overflow: ellipsis;
                box-sizing: border-box;
                border-right: 1px solid rgba(255, 255, 255, 0.3);
              }
              .center {
                min-width: 280px;
                display: block;
              }
              .rightBox {
                padding-left: 15px;
                box-sizing: border-box;
                font-size: 12px;
                font-family: Source Han Sans SC;
                font-weight: 400;
                line-height: 30px;
                color: #00ffee;
                opacity: 1;
              }
            }
          }
        }
      }
      .charts_Top_left_Item:first-child {
        margin-right: 20px;
      }
    }
    .charts_Top_right {
      width: 44%;
      .top_right_Item {
        height: 284px;
        display: flex;
        margin-bottom: 20px;
        .right_Item_Box {
          width: 50%;
        }
        .right_Item_Box:first-child {
          margin-right: 20px;
        }
        .right_Item_desc {
          height: 40px;
          border: 1px solid rgba(255, 255, 255, 0.5);
          background-color: rgba(0, 0, 0, 0.12);
          box-sizing: border-box;
          font-size: 16px;
          font-family: Source Han Sans SC;
          font-weight: 400;
          line-height: 40px;
          padding-left: 15px;
          color: #ffffff;
        }
        .right_Item_Charts {
          border: 1px solid rgba(255, 255, 255, 0.5019607843137255);
          background-color: rgba(0, 0, 0, 0.4);
          height: 220px;
          border-top: none;
          // padding-top: 15px;
        }
      }
      .bottom_right_Item {
        height: 284px;
        .bottom_right_Item_desc {
          height: 46px;
          border: 1px solid rgba(255, 255, 255, 0.5);
          background-color: rgba(255, 255, 255, 0.12);
          box-sizing: border-box;
          font-size: 16px;
          font-family: Source Han Sans SC;
          font-weight: 400;
          line-height: 40px;
          padding-left: 15px;
          color: #ffffff;
        }
        .bottom_right_Item_Charts {
          border: 1px solid rgba(255, 255, 255, 0.5019607843137255);
          background-color: rgba(0, 0, 0, 0.4);
          height: 238px;
          border-top: none;
          padding: 20px;
          box-sizing: border-box;
          padding-top: 0px;
        }
      }
    }
  }
  .charts_Bottom {
    width: 100%;
    height: 330px;
    .title {
      height: 46px;
      border: 1px solid rgba(255, 255, 255, 0.5);
      background-color: rgba(0, 0, 0, 0.4);
      box-sizing: border-box;
      font-size: 16px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      // line-height: 46px;
      padding-left: 15px;
      color: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .Profilecharts {
      height: 292px;
      border: 1px solid rgba(255, 255, 255, 0.5019607843137255);
      background-color: rgba(0, 0, 0, 0.4);
      box-sizing: border-box;
      border-top: none;
      padding: 20px;
      padding-top: 0px;
    }
  }
}
</style>
<style lang="scss">
.charts_Bottom {
  .title {
    .el-input {
      width: 166px;
    }
    .el-input__inner {
      width: 166px;
    }
  }
}
</style>
<style lang="scss" scoped>
@media (max-width: 1600px) and (min-width:1080px) {
  .home {
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
  background-size: 100%;
  background-position: center;
  .charts_Top {
    width: 100%;
    height: 588px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .charts_Top_left {
      width: 60%;
      padding-right: 20px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      .charts_Top_left_Item {
        width: 513px;
        // flex-shrink: 0;
        .top_desc {
          height: 46px;
          border: 1px solid rgba(255, 255, 255, 0.5);
          background-color: rgba(0, 0, 0, 0.12);
          box-sizing: border-box;
          font-size: 16px;
          font-family: Source Han Sans SC;
          font-weight: 400;
          line-height: 40px;
          padding-left: 15px;
          color: #ffffff;
          padding-right: 20px;
          display: flex;
          justify-content: space-between;
          .Tab {
            color: rgba(255,255,255,.64);
            cursor: pointer;
          }
          .actived {
            color: #00FFF7;
            opacity: 1;
          }
        }
        .top_Charts {
          border: 1px solid rgba(255, 255, 255, 0.5019607843137255);
          height: 542px;
          border-top: none;
          padding: 20px;
          padding-top: 0px;
          background-color: rgba(0, 0, 0, 0.4);
          position: relative;
          .topTitleBox {
            position: absolute;
            top: 30px;
            margin-left: 10px;
            z-index: 15;
            p {
              margin-bottom: 15px;
              font-size: 16px;
              span {
                color: #00ffee;
                margin-left: 5px;
              }
            }
          }
          .mapBox {
            height: 360px;
            box-sizing: border-box;
          }
          .chartBox {
            height: 182px;
            font-family: Source Han Sans SC;
            font-weight: 400;
            color: #ffffff;
            opacity: 1;
            margin: 0px 30px;
            .Top5Table {
              height: 28px;
              width: 100%;
              line-height: 28px;
              display: flex;
              align-items: center;
              .leftBox {
                min-width: 60px;
                overflow: hidden;
                line-height: 30px;
                white-space: nowrap;
                text-overflow: ellipsis;
                box-sizing: border-box;
                border-right: 1px solid rgba(255, 255, 255, 0.3);
              }
              .center {
                min-width: 280px;
                display: block;
              }
              .rightBox {
                padding-left: 15px;
                box-sizing: border-box;
                font-size: 12px;
                font-family: Source Han Sans SC;
                font-weight: 400;
                line-height: 30px;
                color: #00ffee;
                opacity: 1;
              }
            }
          }
        }
      }
      .charts_Top_left_Item:first-child {
        margin-right: 20px;
      }
    }
    .charts_Top_right {
      width: 40%;
      .top_right_Item {
        height: 284px;
        display: flex;
        margin-bottom: 20px;
        .right_Item_Box {
          width: 50%;
        }
        .right_Item_Box:first-child {
          margin-right: 20px;
        }
        .right_Item_desc {
          height: 40px;
          border: 1px solid rgba(255, 255, 255, 0.5);
          background-color: rgba(0, 0, 0, 0.12);
          box-sizing: border-box;
          font-size: 16px;
          font-family: Source Han Sans SC;
          font-weight: 400;
          line-height: 40px;
          padding-left: 15px;
          color: #ffffff;
        }
        .right_Item_Charts {
          border: 1px solid rgba(255, 255, 255, 0.5019607843137255);
          background-color: rgba(0, 0, 0, 0.4);
          height: 220px;
          border-top: none;
          // padding-top: 15px;
        }
      }
      .bottom_right_Item {
        height: 284px;
        .bottom_right_Item_desc {
          height: 46px;
          border: 1px solid rgba(255, 255, 255, 0.5);
          background-color: rgba(255, 255, 255, 0.12);
          box-sizing: border-box;
          font-size: 16px;
          font-family: Source Han Sans SC;
          font-weight: 400;
          line-height: 40px;
          padding-left: 15px;
          color: #ffffff;
        }
        .bottom_right_Item_Charts {
          border: 1px solid rgba(255, 255, 255, 0.5019607843137255);
          background-color: rgba(0, 0, 0, 0.4);
          height: 238px;
          border-top: none;
          padding: 20px;
          box-sizing: border-box;
          padding-top: 0px;
        }
      }
    }
  }
  .charts_Bottom {
    width: 100%;
    height: 330px;
    .title {
      height: 46px;
      border: 1px solid rgba(255, 255, 255, 0.5);
      background-color: rgba(0, 0, 0, 0.4);
      box-sizing: border-box;
      font-size: 16px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      // line-height: 46px;
      padding-left: 15px;
      color: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .Profilecharts {
      height: 292px;
      border: 1px solid rgba(255, 255, 255, 0.5019607843137255);
      background-color: rgba(0, 0, 0, 0.4);
      box-sizing: border-box;
      border-top: none;
      padding: 20px;
      padding-top: 0px;
    }
  }
}
}
</style>
<template>
  <div class="home">
    <!-- 上半部分 -->
    <div class="charts_Top">
      <!-- 左边部分 -->
      <div class="charts_Top_left">
        <div class="charts_Top_left_Item">
          <div class="top_desc" style="background: rgba(255, 255, 255, 0.12)">
            <p>入住人来源地</p>
            <div class="Tab">
              <span @click="selectTab(1)" :class="{ actived: index == 1 }"
                >按身份证归属地</span
              >
              <span>|</span>
              <span @click="selectTab(2)" :class="{ actived: index == 2 }"
                >按手机号码归属地</span
              >
            </div>
          </div>
          <!-- 图表 -->
          <div class="top_Charts">
            <div class="topTitleBox">
              <p>
                本地占比:
                <span
                  >{{
                    ((nativeNum / (nativeNum + notNativeNum)) * 100).toFixed(2)
                  }}%</span
                >
                <span>{{ nativeNum }}</span>
              </p>
              <p>
                异地占比:
                <span
                  >{{
                    ((notNativeNum / (nativeNum + notNativeNum)) * 100).toFixed(
                      2
                    )
                  }}%</span
                >
                <span>{{ notNativeNum }}</span>
              </p>
            </div>
            <div class="mapBox">
              <china-map
                ref="chinaMap"
                :showLegend="true"
                style="height: 360px"
                :datas="MapData"
                :personNum = "personNum"
              />
            </div>
            <div class="chartBox">
              <div class="Top5Table">
                <div>TOP5</div>
                <div>
                  <div class="center" style="width: 325px"></div>
                </div>
                <div>占比</div>
              </div>
              <div class="Top5Table" v-for="(item, index) in TOP5" :key="index">
                <div class="leftBox">
                  {{ item.name }}
                  <span>{{ item.value }}</span>
                </div>
                <div class="center">
                  <!-- {{nativeNum}} -->
                  <!-- {{notNativeNum}} -->
                  <el-progress
                    color="#00FFEE"
                    :text-inside="true"
                    :show-text="false"
                    :stroke-width="8"
                    :percentage="
                      (item.value / (nativeNum + notNativeNum)) * 100
                    "
                  ></el-progress>
                  <!--  -->
                </div>
                <div class="rightBox">
                  {{
                    ((item.value / (nativeNum + notNativeNum)) * 100).toFixed(
                      2
                    )
                  }}%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="charts_Top_left_Item">
          <div class="top_desc" style="background: rgba(255, 255, 255, 0.12)">
            星座
          </div>
          <!-- 图表 -->
          <div class="top_Charts">
            <Hobby
              ref="charBar"
              :showLegend="true"
              style="height: 560px"
              :datas="openLockersData"
            />
          </div>
        </div>
      </div>
      <!-- 右边部分 -->
      <div class="charts_Top_right">
        <div class="bottom_right_Item" style="margin-bottom: 20px">
          <div class="bottom_right_Item_desc">
            入住人数
            <span style="color: #00ffee">（平均:{{ averageNumber }}/天）</span>
          </div>
          <div class="bottom_right_Item_Charts">
            <check-time
              ref="checkIn"
              name="入住人数"
              style="height: 220px"
              :value="checkInData"
            />
          </div>
        </div>
        <div class="bottom_right_Item">
          <div class="bottom_right_Item_desc">设备使用频次统计</div>
          <div class="bottom_right_Item_Charts">
            <device-bar
              ref="charBar"
              name="使用次数"
              style="height: 220px"
              :datas="DeviceData"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- 下半部分 -->
    <div class="charts_Bottom">
      <!-- 标题 -->
      <div class="title" style="background: rgba(255, 255, 255, 0.12)">
        <p>情景模式使用统计</p>
        <el-select
          v-model="sercous"
          placeholder="请选择"
          style="width: 166px; margin-right: 15px"
          @change="changeSercous"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <!-- 图表 -->
      <div class="Profilecharts">
        <Profile
          v-if="proflieData.xAxis.data != []"
          ref="charBar"
          style="height: 270px"
          :datas="proflieData"
        />
        <div v-else>暂无数据</div>
      </div>
    </div>
  </div>
</template>

<script>
import deviceBar from "../../../components/charts/deviceBar.vue";
export default {
  components: { deviceBar },
  data() {
    return {
      sercous: "全部来源",
      nativeNum: "112",
      notNativeNum: "113",
      averageNumber: "",
      index: 1,
      options: [
        {
          value: "",
          label: "全部来源",
        },
        {
          value: "h5",
          label: "H5客控",
        },
        {
          value: "dueros",
          label: "小度音响",
        },
        {
          value: "guest_applet",
          label: "微信小程序",
        },
        {
          value: "smart_scene",
          label: "智能场景",
        },
      ],
      tableData: [],
      hobbysData: {
        data: [
          {
            name: "回家模式",
            type: "bar",
            stack: "总量",
            barWidth: "6px",
            data: [120, 120, 120, 120, 120, 120],
          },
          {
            name: "离家模式",
            type: "bar",
            stack: "总量",
            barWidth: "6px",
            data: [230, 230, 230, 230, 230, 230],
          },
          {
            name: "电影模式",
            type: "bar",
            stack: "总量",
            barWidth: "6px",
            data: [132, 132, 132, 132, 132, 132],
          },
          {
            name: "用餐模式",
            type: "bar",
            stack: "总量",
            barWidth: "6px",
            data: [134, 134, 134, 134, 134, 134],
          },
        ],
        xAxis: {
          data: ["女", "男", "<25", "35-44", "45-55", ">55"],
        },
        lengend: {
          data: ["回家模式", "离家模式", "电影模式", "用餐模式"],
        },
      },
      openLockersData: {
        data: [
          {
            name: "人脸开锁",
            type: "bar",
            stack: "总量",
            barWidth: "6px",
            data: [112,11,14],
          },
        ],
        xAxis: {
          data: ['处女座','射手座','双鱼座'],
        },
      },
      TOP5: [{ name: "陕西", value: "10000" },{ name: "山西", value: "10000" }],
      DeviceData: {
        xAxis: {
          data: ['12','12'], //日期
        },
        series: {
          data: [100,500], //每一天数据，与日期对应
        },
      },
      proflieData: {
        xAxis: {
          data: ['11','21'],
          //日期
        },
        series: {
          data: [100,500], //每一天数据，与日期对应
        },
      },
      checkInData: {
        xAxis: {
          data: ['12','12'], //日期
        },
        series: {
          data: [100,300], //每一天数据，与日期对应
        },
      },
      MapData: [{ name: "重庆", value: "1000" },
        { name: "陕西", value: "100" },
        { name: "山东", value: "1000" },
        { name: "河南", value: "0" },
        { name: "海南", value: "0" },
        { name: "安徽", value: "0" },
        { name: "江苏", value: "0" },
        { name: "浙江", value: "0" },
        { name: "天津", value: "0" },
        { name: "湖南", value: "0" },
        { name: "江西", value: "0" },
        { name: "河北", value: "0" },
        { name: "北京", value: "0" },
        { name: "上海", value: "0" },
        { name: "云南", value: "0" },
        { name: "辽宁", value: "0" },
        { name: "黑龙江", value: "0" },
        { name: "湖北", value: "0" },
        { name: "广西", value: "0" },
        { name: "甘肃", value: "0" },
        { name: "山西", value: "0" },
        { name: "内蒙古", value: "0" },
        { name: "吉林", value: "0" },
        { name: "福建", value: "0" },
        { name: "贵州", value: "0" },
        { name: "广东", value: "0" },
        { name: "青海", value: "0" },
        { name: "西藏", value: "0" },
        { name: "四川", value: "0" },
        { name: "宁夏", value: "0" },
        { name: "台湾", value: "0" },
        { name: "香港", value: "0" },
        { name: "澳门", value: "0" },
        { name: "新疆", value: "0" },],
      tabIndex:'',
      timeout:'',
      personNum:'1200',
    };
  },
  mounted() {
    // this.onload();
    
    this.tabIndex = window.localStorage.getItem("tabIndex");
    // 每隔五分钟请求一次数据
      this.timeout = setInterval(() => {
        this.onload()
      }, 300000);
  },
  destroyed(){
    clearInterval(this.timeout)
  },
  computed: {
    selectedHotelId() {
      return (
        this.$store.state.dictionary.selectedHotelId ||
        localStorage.getItem("hotelId")
      );
    },
    selectedGroupId() {
      return (
        this.$store.state.dictionary.selectedGroupId ||
        localStorage.getItem("group")
      );
    },
    setDate() {
      return (
        this.$store.state.dictionary.dateStr || localStorage.getItem("dateStr")
      );
    },
  },
  watch: {
    setDate(newval) {
      let tabIndex = localStorage.getItem("tabIndex");
      if (tabIndex !='0') {
        this.onload();
      }
    },
    selectedHotelId(newval) {
      let tabIndex = localStorage.getItem("tabIndex");
      if (tabIndex !='0') {
        this.onload();
      }
    },
    selectedGroupId(newval) {
      console.log(newval)
      let tabIndex = localStorage.getItem("tabIndex");
      console.log(tabIndex)
      if (tabIndex !='0') {
        this.onload();
      }
    },
    tabIndex(newval){
      this.onload();
    }
  },
  methods: {
    selectTab(index) {
      this.index = index;
      let url1 = "?date=" + this.setDate + "&groupId=" + this.selectedGroupId;
      if (this.selectedHotelId) url1 += "&hotelId=" + this.selectedHotelId;
      if (index === 1) {
        this.getCard(url1);
      } else {
        this.getPhone(url1);
      }
    },
    // 加载所有图标
    onload() {
      let url = "?date=" + this.setDate + "&groupId=" + this.selectedGroupId;
      if (this.selectedHotelId) url += "&hotelId=" + this.selectedHotelId;
      if (url) {
        this.getStart(url);
        this.getCheckIn(url);
        this.getDiveceList(url);
        this.proflieDataFn(url);
        this.getCard(url);
      }
    },
    // 来源地统计
    getCard(url) {
      this.$store.dispatch("login/getCard", url).then((res) => {
        this.MapData = res.mapData;
        this.notNativeNum = res.notNativeNum;
        this.nativeNum = res.nativeNum;
        this.personNum = this.notNativeNum+this.nativeNum
        this.TOP5 = [];
        if (res.topList) {
          this.TOP5 = res.topList;
        }
      });
    },
    getPhone(url) {
      this.$store.dispatch("login/getPhone", url).then((res) => {
        this.MapData = res.mapData;
        this.notNativeNum = res.notNativeNum;
        this.nativeNum = res.nativeNum;
        this.personNum = this.notNativeNum+this.nativeNum
        this.TOP5 = [];
        if (res.topList) {
          this.TOP5 = res.topList;
        }
      });
    },
    // 获取星座统计
    getStart(url) {
      this.$store.dispatch("login/gtaStart", url).then((res) => {
        if (res.keyList) {
          this.openLockersData.xAxis.data = res.keyList;
          this.openLockersData.data[0].data = res.valueList;
        }
      });
    },
    // 获取入住人数统计
    getCheckIn(url) {
      this.$store.dispatch("login/getCheckIn", url).then((res) => {
        this.averageNumber = res.averageNumber;
        this.checkInData.xAxis.data = res.keyList;
        this.checkInData.series.data = res.valueList;
      });
    },
    // 获取设备使用频次统计
    getDiveceList(url) {
      this.$store.dispatch("login/getDiveceList", url).then((res) => {
        this.DeviceData.xAxis.data = res.name;
        this.DeviceData.series.data = res.value;
      });
    },
    // 获取情景模式使用次数
    proflieDataFn(url) {
      this.$store.dispatch("login/proflieData", url).then((res) => {
        if (res) {
          this.proflieData.xAxis.data = [];
          this.proflieData.series.data = [];
          let Arr1 = [];
          let Arr2 = [];
          res.map((item) => {
            Arr1.push(item.name);
            Arr2.push(item.value);
          });
          this.proflieData.xAxis.data = JSON.parse(JSON.stringify(Arr1));
          this.proflieData.series.data = JSON.parse(JSON.stringify(Arr2));
        }
      });
    },
    changeSercous(val) {
      let url = "?date=" + this.setDate + "&groupId=" + this.selectedGroupId;
      if (this.selectedHotelId) url += "&hotelId=" + this.selectedHotelId;
      if (val) {
        url += "&source=" + val;
      }
      this.proflieDataFn(url);
    },
  },
};
</script>



