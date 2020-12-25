<template>
  <div class="box">
    <div ref="dom" class="chart-map"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import { on, off } from "@/libs/tools";
export default {
  name: "chinaMap",
  props: {
    datas: Array,
    checkIndata: Array,
    showLegend: Boolean,
  },
  data() {
    return {
      dom: null,
    };
  },
  methods: {
    resize() {
      this.dom.resize();
    },
    initChart(datas) {
      this.$nextTick(() => {
        let option = (option = {
          tooltip: {
            backgroundColor: "rgba(0,0,0,0.8)",
            padding: [10, 15, 10, 15],
            trigger: "item",
          },
          grid: {
            top: "150px",
            left: "10px",
            right: "0px",
            bottom: "0px",
            containLabel: true,
          },
          toolbox: {
            show: true,
            orient: "horizontal",
            left: "right",
            top: "center",
          },
          series: [
            {
              name: "人数",
              type: "map",
              mapType: "china",
              hoverable: false,
              roam: true,
              roam: false,
              zoom: 1.26,
              label: {
                normal: {
                  show: false,
                  color: "#fff",
                },
                emphasis: {
                  show: true,
                  color: "#fff",
                },
              },
              itemStyle: {
                normal: {
                  borderWidth: 1.5, //区域边框宽度
                  borderColor: "#6f00ff", //区域边框颜色
                  areaColor: "rgba(111,0,255, 0.3)", //区域颜色
                  label: {
                    show: true,
                  },
                },
                emphasis: {
                  borderWidth: 1.5,
                  borderColor: "#6f00ff",
                  areaColor: "rgba(111,0,255, 0.3)",
                  label: {
                    show: true,
                  },
                },
              },
              data: datas,
              markPoint: {
                symbol: "pin",
                // symbolSize: 40,
                effect: {
                  show: true,
                  shadowBlur: 0,
                },
                itemStyle: {
                  normal: {
                    color: "#CC3DFF",
                    borderColor: "#CC3DFF",
                    borderWidth: 2, // 标注边线线宽，单位px，默认为1
                    label: {
                      show: true,
                    },
                  },
                  emphasis: {
                    color: "#CC3DFF",
                    borderColor: "#CC3DFF",
                    borderWidth: 2,
                    label: {
                      show: false,
                    },
                  },
                },
                data: this.checkIndata,
              },
            },
            {
              name: "入住人数",
              type: "map",
              mapType: "china",
              markPoint: {
                symbol:
                  "image://https://uttc-test-1259379841.cos.ap-chengdu.myqcloud.com/svg/point.svg",
                symbolSize : 20,
                effect: {
                  show: true,
                  type:'scale',
                  shadowBlur: 10,
                },
                itemStyle: {
                  normal: {
                    color:'#00FFEE',  
                    label: {
                      show: false,
                      color: "white",
                    },
                  },
                },
                data: this.checkIndata,
              },
            }
          ],
        });
        this.dom.setOption(option);
        // 防止初始化时图表大小错误
        this.resize();
      });
    },
  },
  mounted() {
    this.dom = echarts.init(this.$refs.dom, "tdTheme");
    on(window, "resize", this.resize);
    // this.initChart(datas)
  },
  beforeDestroy() {
    off(window, "resize", this.resize);
  },
  watch: {
    datas: {
      handler(val, oldVal) {
        if (val) {
          this.initChart(val);
        }
      },
      deep: true,
      immediate: true,
    },
    checkIndata: {
      handler(val, oldVal) {
        if (val) {
          this.initChart(val);
        }
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  position: relative;
  height: 100%;
  .chart-map {
    height: 100%;
  }
  .text {
    width: 100px;
    position: absolute;
    z-index: 9;
    left: 50%;
    bottom: 70px;
    text-align: center;
    h3 {
      font-size: 24px;
      line-height: 24px;
      color: #333;
      margin-bottom: 8px;
    }
    p {
      font-size: 13px;
      color: #999999;
    }
  }
}
</style>