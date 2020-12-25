<!-- 首页 -->

<style scoped lang="scss">
.home {
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  .title {
    width: 460px;
    height: 46px;
    line-height: 46px;
    padding-left: 15px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    font-size: 16px;
    font-family: Source Han Sans SC;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    background: rgba(0, 0, 0, 0.12);
  }
  .item {
    width: 230px;
    height: 139px;
    border: 1px solid rgba(255, 255, 255, 0.5019607843137255);
    background: rgba(0, 0, 0, 0.4);
    border-top: none;
    display: flex;
    align-items: center;
    .Item_Img {
      width: 64px;
      height: 64px;
      margin: 0px 20px;
    }
    .item_Desc {
      display: flex;
      flex-direction: column;
      .Percent {
        font-weight: bold;
        color: #ff43c7;
      }
      .LowPercenter {
        font-weight: bold;
        color: #0ece5b;
      }
      p:first-child {
        line-height: 20px;
        font-size: 12px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        line-height: 20px;
        color: rgba(255, 255, 255, 1);
      }
      p:nth-child(2) {
        font-size: 20px;
        font-family: Source Han Sans SC;
        font-weight: bold;
        line-height: 34px;
        color: rgba(0, 255, 238, 1);
        opacity: 1;
      }
      p:last-child {
      }
    }
  }
  .item:nth-child(2n) {
    border-left: none;
    float: left;
  }
  .left_Box {
    width: 460px;
    position: absolute;
    left: 0;
    padding-left: 30px;
    z-index: 2;
    box-sizing: content-box;
    overflow-y: auto;
    .left_Box_Item {
      margin-bottom: 20px;
      .left_Box_Charts {
        height: 176px;
        border: 1px solid rgba(255, 255, 255, 0.5019607843137255);
        border-top: none;
        background-color: rgba(0, 0, 0, 0.4);
        padding: 20px;
        padding-top: 0px;
        .leftCharts {
          height: 156px;
        }
      }
    }
    .left_Box_Content {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    }
  }
  .center_Box {
    min-width: 1300px;
    min-height: 1064px;
    margin: 0 auto;
    margin-top: -86px;
    display: flex;
    justify-content: center;
    position: relative;
    .centerMap {
      min-width: 1300px;
      // height: 1000px;
      position: absolute;
      // padding-top: 50px;
      z-index: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 50px;
    }
    .center_charts {
      position: absolute;
      bottom: 30px;
      width: 898px;
      height: 222px;
      margin: 0 auto;
      border: 1px solid rgba(255, 255, 255, 0.5019607843137255);
      .centerChart{
        height: 156px;
      }
    }
    .title {
      width: 100%;
      border: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5019607843137255);
    }
  }
  .right_Box {
    width: 460px;
    height: 100px;
    position: absolute;
    right: 0;
    padding-right: 30px;
    box-sizing: content-box;
    z-index: 2;
    .right_Box_Item {
      margin-bottom: 20px;
      .right_Box_Content {
        border: 1px solid rgba(255, 255, 255, 0.5019607843137255);
        background-color: rgba(0, 0, 0, 0.7);
        border-top: 0px;
        padding: 15px;
        padding-top: 0px;
        height: 176px;
        width: 100%;
        .chartHeight {
          height: 156px;
        }
      }
    }
  }
}
</style>


<template>
  <div class="home">
    <div class="left_Box">
      <div class="left_Box_Item">
        <div class="title" style="background: rgba(255, 255, 255, 0.12)">
          今日经营指标
        </div>
        <div class="left_Box_Content">
          <div v-for="(item, index) in ObjectList" :key="index" class="item">
            <img class="Item_Img" :src="item.img" />
            <div class="item_Desc">
              <p>{{ item.title }}</p>
              <p>{{ item.Number }}</p>
              <p
                class="Percent"
                :class="{ LowPercenter: item.Percent.indexOf('-') != -1 }"
              >
                <img
                  src="/static/img/zj.png"
                  v-if="item.Percent.indexOf('-') == -1"
                  style="width: 10px; height: 8px; margin-right: 6px"
                />
                <img
                  src="/static/img/xj.png"
                  v-else
                  style="width: 10px; height: 8px; margin-right: 6px"
                />
                {{ item.Percent }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="left_Box_Item"
        v-for="(item, index) in ObjectList1"
        :key="index"
      >
        <div class="title" style="background: rgba(255, 255, 255, 0.12)">
          {{ item.title }}
        </div>
        <div class="left_Box_Charts">
          <check-time
            v-show="item.type == 'lineYd'"
            ref="checkIn"
            name="预订人数"
            class="leftCharts"
            :value="item.OrderData"
            v-once
          />
          <check-time
            v-show="item.type == 'line'"
            ref="checkIn"
            v-once
            name="交易额"
            class="leftCharts"
            :value="item.OrderData"
          />
        </div>
      </div>
    </div>
    <div class="center_Box">
      <div class="centerMap">
        <center-map
          ref="chinaMap"
          :showLegend="true"
          style="width: 900px; height: 700px"
          :datas="MapData"
          :checkIndata="checkIndata"
        />
      </div>
      <div class="center_charts">
        <div class="title" style="background: rgba(255, 255, 255, 0.12)">
          小程序24小时预订分布
          <span style="color: #00ffee">（订单量）</span>
        </div>

        <chart-bar
          v-once
          ref="charBar"
          class="centerChart"
          name="订单数量"
          :datas="miniProgramData"
        />
      </div>
    </div>
    <div class="right_Box">
      <div
        class="right_Box_Item"
        v-for="(item, index) in ObjectList2"
        :key="index"
      >
        <div class="title" style="background: rgba(255, 255, 255, 0.12)">
          {{ item.title }}
        </div>
        <div class="right_Box_Content">
          <check-time
            ref="checkIn"
            :name="item.name"
            :str="item.str"
            class="chartHeight"
            :value="item.OrderData"
            v-once
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    //这里存放数据
    return {
      MapData: [
        { name: "重庆", value: "0" },
        { name: "陕西", value: "0" },
        { name: "山东", value: "0" },
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
        { name: "新疆", value: "0" },
      ],
      ObjectList: [
        {
          title: "今日预订量",
          img: "/static/img/0.png",
          Number: "12",
          Percent: "12",
        },
        {
          title: "今日交易额",
          img: "/static/img/1.png",
          Number: "11",
          Percent: "12",
        },
        {
          title: "今日间夜量",
          img: "/static/img/2.png",
          Number: "12",
          Percent: "12",
        },
        {
          title: "今日总营收",
          img: "/static/img/3.png",
          Number: "12",
          Percent: "12",
        },
        {
          title: "今日客房REVpar",
          img: "/static/img/4.png",
          Number: "12",
          Percent: "12",
        },
        {
          title: "今日入住率",
          img: "/static/img/5.png",
          Number: "12",
          Percent: "12",
        },
      ],
      ObjectList1: [
        {
          title: "近30天预订趋势",
          type: "lineYd",
          OrderData: {
            xAxis: {
              data: ['11','12','12','13'], //日期
            },
            series: {
              data: [100,200,300,200], //每一天数据，与日期对应
            },
          },
        },
        {
          title: "近30天交易趋势",

          type: "line",
          OrderData: {
            xAxis: {
              data: ['11','12','12','13'], //日期
            },
            series: {
              data: [100,200,300,200], //每一天数据，与日期对应
            },
          },
        },
      ],
      ObjectList2: [
        {
          title: "近30天间夜量趋势",
          name: "间夜量",
          type: "pie",
          str: "",
          OrderData: {
            xAxis: {
              data: ['11','12','12','13'], //日期
            },
            series: {
              data: [100,200,300,200], //每一天数据，与日期对应
            },
          },
        },
        {
          title: "近30天营收趋势",
          name: "营收额",
          type: "pie",
          str: "",
          OrderData: {
            xAxis: {
              data: ['11','12','12','13'], //日期
            },
            series: {
              data: [100,200,300,200], //每一天数据，与日期对应
            },
          },
        },
        {
          title: "近30天客房Revpar趋势",
          type: "bar",
          name: "客房Revpar",
          str: "",
          OrderData: {
            xAxis: {
              data: ['11','12','12','13'], //日期
            },
            series: {
              data: [100,200,300,200], //每一天数据，与日期对应
            },
          },
        },
        {
          title: "近30天入住率趋势",
          type: "pie",
          str: "%",
          name: "入住率",
          OrderData: {
            xAxis: {
              data: ['11','12','12','13'], //日期
            },
            series: {
              data: [100,200,300,200], //每一天数据，与日期对应
            },
          },
        },
      ],
      miniProgramData: {
        xAxis: {
          data: ['11','12','12','13'], //日期
        },
        series: {
          data: [100,200,300,200], //每一天数据，与日期对应
        },
      },
      tabIndex: "",
      checkIndata: [],
      timeout: "",
    };
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
      if (tabIndex == "0") {
        this.onload();
      }
    },
    selectedHotelId(newval) {
      let tabIndex = localStorage.getItem("tabIndex");
      if (tabIndex == "0") {
        this.onload();
      }
    },
    selectedGroupId(newval, oldval) {
      let tabIndex = localStorage.getItem("tabIndex");
      if (tabIndex == "0") {
        this.onload();
      }
    },
    tabIndex(newval) {
      this.onload();
    },
  },
  mounted() {
    this.tabIndex = window.localStorage.getItem("tabIndex");
    // 每隔五分钟请求一次数据
    this.timeout = setInterval(() => {
      // console.log('1')
      this.onload();
    }, 300000);
  },
  destroyed() {
    clearInterval(this.timeout);
  },
  //方法集合
  methods: {
    onload() {
      let url = "?date=" + this.setDate + "&groupId=" + this.selectedGroupId;
      if (this.selectedHotelId) {
        url += "&hotelId=" + this.selectedHotelId;
      }
      if (url) {
        this.getTotalRevenueTrends(url);
        this.appletsOrderFor24H(url);
        this.getToday(url);
        this.getBookingTrends(url);
        this.getTradingTrends(url);
        this.getRoomNightCountTrends(url);
        this.getRoomRevPARTrends(url);
        this.getOccupancyRateTrends(url);
        this.getcheckIndata(url);
      }
    },
    //获取今日经营指标数据  /pms/data-monitor/getRevenueStatistics
    getToday(url) {
      this.$store.dispatch("login/gtaToday", url).then((res) => {
        this.ObjectList[0].Number = res.orderQuantity;
        this.ObjectList[0].Percent = res.orderQuantityGrowthRate;

        this.ObjectList[1].Number = res.tradingVolumes;
        this.ObjectList[1].Percent = res.tradingVolumesGrowthRate;

        this.ObjectList[2].Number = res.roomNightCount;
        this.ObjectList[2].Percent = res.roomNightCountGrowthRate;

        this.ObjectList[3].Number = res.totalRevenue;
        this.ObjectList[3].Percent = res.totalRevenueGrowthRate;

        this.ObjectList[4].Number = res.roomRevPAR;
        this.ObjectList[4].Percent = res.roomRevPARGrowthRate;

        this.ObjectList[5].Number = res.occupancyRate;
        this.ObjectList[5].Percent = res.occupancyRateGrowthRate;
      });
    },
    // 近三十天预订   /pms/data-monitor/getBookingTrends
    getBookingTrends(url) {
      this.$store.dispatch("login/getBookingTrends", url).then((res) => {
        if (res) {
          this.ObjectList1[0].OrderData.xAxis.data = [];
          this.ObjectList1[0].OrderData.series.data = [];
          res.map((item) => {
            this.ObjectList1[0].OrderData.xAxis.data.push(
              item.key.slice(5, 10)
            );
            this.ObjectList1[0].OrderData.series.data.push(item.value);
          });
        }
      });
    },
    // 近三十天交易趋势  /pms/data-monitor/getTradingTrends
    getTradingTrends(url) {
      this.$store.dispatch("login/getTradingTrends", url).then((res) => {
        if (res) {
          this.ObjectList1[1].OrderData.xAxis.data = [];
          this.ObjectList1[1].OrderData.series.data = [];
          res.map((item) => {
            this.ObjectList1[1].OrderData.xAxis.data.push(
              item.key.slice(5, 10)
            );
            this.ObjectList1[1].OrderData.series.data.push(item.value);
          });
        }
      });
    },
    // 间夜量  /pms/data-monitor/getRoomNightCountTrends
    getRoomNightCountTrends(url) {
      this.$store.dispatch("login/getRoomNightCountTrends", url).then((res) => {
        if (res) {
          this.ObjectList2[0].OrderData.xAxis.data = [];
          this.ObjectList2[0].OrderData.series.data = [];
          res.map((item) => {
            this.ObjectList2[0].OrderData.xAxis.data.push(
              item.key.slice(5, 10)
            );
            this.ObjectList2[0].OrderData.series.data.push(item.value);
          });
        }
      });

      //  this.ObjectList2[0].OrderData.xAxis.data
      //  this.ObjectList2[0].OrderData.series.data
    },
    // 营收趋势 /pms/data-monitor/getTotalRevenueTrends
    getTotalRevenueTrends(url) {
      this.$store.dispatch("login/getTotalRevenueTrends", url).then((res) => {
        if (res) {
          this.ObjectList2[1].OrderData.xAxis.data = [];
          this.ObjectList2[1].OrderData.series.data = [];
          res.map((item) => {
            this.ObjectList2[1].OrderData.xAxis.data.push(
              item.key.slice(5, 10)
            );
            this.ObjectList2[1].OrderData.series.data.push(item.value);
          });
        }
      });
    },
    // 客房REvpar  /pms/data-monitor/getRoomRevPARTrends
    getRoomRevPARTrends(url) {
      this.$store.dispatch("login/getRoomRevPARTrends", url).then((res) => {
        if (res) {
          this.ObjectList2[2].OrderData.xAxis.data = [];
          this.ObjectList2[2].OrderData.series.data = [];
          res.map((item) => {
            this.ObjectList2[2].OrderData.xAxis.data.push(
              item.key.slice(5, 10)
            );
            this.ObjectList2[2].OrderData.series.data.push(item.value);
          });
        }
      });
    },
    // 入住率 /pms/data-monitor/getOccupancyRateTrends
    getOccupancyRateTrends(url) {
      this.$store.dispatch("login/getOccupancyRateTrends", url).then((res) => {
        if (res) {
          this.ObjectList2[3].OrderData.xAxis.data = [];
          this.ObjectList2[3].OrderData.series.data = [];
          res.map((item) => {
            this.ObjectList2[3].OrderData.xAxis.data.push(
              item.key.slice(5, 10)
            );
            this.ObjectList2[3].OrderData.series.data.push(item.value);
          });
        }
      });
    },
    // 24小时预订分布 /pms/data-monitor/appletsOrderFor24H
    appletsOrderFor24H(url) {
      this.$store.dispatch("login/appletsOrderFor24H", url).then((res) => {
        if (res) {
          this.miniProgramData.xAxis.data = [];
          this.miniProgramData.series.data = [];
          res.map((item) => {
            this.miniProgramData.xAxis.data.push(item.key.slice(10, 16));
            this.miniProgramData.series.data.push(item.value);
          });
        }
      });
    },
    // 获取入住人来源地
    getcheckIndata(url) {
      this.$store.dispatch("login/getcheckIndata", url).then((res) => {
        if (res) {
          this.checkIndata = res.dataMap;
        }
      });
    },
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
};
</script>

<style lang="scss" scoped>
// 分辨率小于1600px像素大于1080像素的设备
@media (max-width: 1600px) and (min-width:1080px) {
  .home {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    .title {
      width: 360px;
      height: 36px;
      line-height: 36px;
      padding-left: 15px;
      border: 1px solid rgba(255, 255, 255, 0.5);
      font-size: 16px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      background: rgba(0, 0, 0, 0.12);
    }
    .item {
      width: 180px;
      height: 93px;
      border: 1px solid rgba(255, 255, 255, 0.5019607843137255);
      background: rgba(0, 0, 0, 0.4);
      border-top: none;
      display: flex;
      align-items: center;
      .Item_Img {
        width: 64px;
        height: 64px;
        margin: 0px 5px;
      }
      .item_Desc {
        display: flex;
        flex-direction: column;
        .Percent {
          font-weight: bold;
          color: #ff43c7;
        }
        .LowPercenter {
          font-weight: bold;
          color: #0ece5b;
        }
        p:first-child {
          line-height: 20px;
          font-size: 12px;
          font-family: Source Han Sans SC;
          font-weight: 400;
          line-height: 20px;
          color: rgba(255, 255, 255, 1);
        }
        p:nth-child(2) {
          font-size: 20px;
          font-family: Source Han Sans SC;
          font-weight: bold;
          line-height: 34px;
          color: rgba(0, 255, 238, 1);
          opacity: 1;
        }
        p:last-child {
        }
      }
    }
    .item:nth-child(2n) {
      border-left: none;
      float: left;
    }
    .left_Box {
      width: 360px;
      position: absolute;
      left: 0;
      padding-left: 30px;
      z-index: 2;
      box-sizing: content-box;
      overflow-y: auto;
      .left_Box_Item {
        margin-bottom: 10px;
        .left_Box_Charts {
          height: 117px;
          border: 1px solid rgba(255, 255, 255, 0.5019607843137255);
          border-top: none;
          background-color: rgba(0, 0, 0, 0.4);
          padding: 20px;
          padding-top: 0px;
          .leftCharts {
            height: 110px;
          }
        }
      }
      .left_Box_Content {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
      }
    }
    .center_Box {
      min-width: 900px;
      min-height: 760px;
      margin: 0 auto;
      margin-top: -88px;
      display: flex;
      justify-content: center;
      position: relative;
      .centerMap {
        min-width: 900px;
        position: absolute;
        z-index: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 50px;
      }
      .center_charts {
        position: absolute;
        bottom: 30px;
        width: 498px;
        height: 156px;
        margin: 0 auto;
        border: 1px solid rgba(255, 255, 255, 0.5019607843137255);
        .centerChart{
          height: 110px;
        }
      }
      .title {
        width: 100%;
        border: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.5019607843137255);
      }
    }
    .right_Box {
      width: 360px;
      // height: 80px;
      position: absolute;
      right: 0;
      padding-right: 30px;
      box-sizing: content-box;
      z-index: 2;
      .right_Box_Item {
        margin-bottom: 10px;
        .right_Box_Content {
          border: 1px solid rgba(255, 255, 255, 0.5019607843137255);
          background-color: rgba(0, 0, 0, 0.7);
          border-top: 0px;
          padding: 10px;
          padding-top: 0px;
          height: 117px;
          width: 100%;
          .chartHeight {
            height: 110px;
          }
        }
      }
    }
  }
}
</style>
