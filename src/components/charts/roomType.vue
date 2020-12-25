<template>
  <div ref="dom" class="charts chart-bar">{{datas}}</div>
</template>

<script>
import echarts from "echarts";
import { on, off } from "@/libs/tools";
export default {
  name: "roomType",
  props: {
    datas: Object,
    text: String,
    name: String,
    conversion: {
      default: false
    }
  },
  data() {
    return {
      dom: null
    };
  },
  methods: {
    resize() {
      this.dom.resize();
    },

    initChart(value) {
      this.$nextTick(() => {
        let option = {
          tooltip: {
            padding: [10, 15, 10, 15],
            backgroundColor: "rgba(0,0,0,0.8)",
            trigger: "axis",
            axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
          },
          grid: {
            left: "0",
            right: "0",
            bottom: "30",
            top: "35",
            containLabel: true
          },
          legend: {
            bottom: "0",
            left: "center",
            textStyle: {
              color: "#333333"
            },        
          },

          color: ["#00C2CC", "#772AFF", "#FF54DD", "#FFC081"],

          xAxis: { type: "category" },
          yAxis: {},
          dataset: {
            dimensions: this.datas.dimensions,
            source: this.datas.source
          },
            series: this.datas.series,
            
        };
         
        this.dom.setOption(option);
        // 防止初始化时图表大小错误
        this.resize();
      });
    }
  },
  mounted() {
    this.dom = echarts.init(this.$refs.dom, "tdTheme");
    on(window, "resize", this.resize);
  },
  beforeDestroy() {
    off(window, "resize", this.resize);
  },
  watch: {
    datas: {
      handler(val, oldVal) {
        this.initChart();
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
<style lang="scss" scoped>
.charts {
  position: relative;
  height: 100%;
  .chart-bar {
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