<template>
  <div ref="dom" class="charts chart-bar"></div>
</template>

<script>
import echarts from "echarts";
import { on, off } from "@/libs/tools";
export default {
  name: "avgAge",
  props: {
    value: Object,
    text: String,
    name: String,
    str:String,
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

    initChart() {
      this.$nextTick(() => {
        let option = {
          title: {
            text: this.text,
            left: "left",
            textStyle: {
              fontSize: 16,
              fontStyle: "normal",
              color: "#333"
            }
          },
          tooltip: {
            backgroundColor: "rgba(0,0,0,0.8)",
            padding: [10, 15, 10, 15],
            trigger: "item",
            formatter: '{a}: {c}'+this.str+ '<br/>日期:{b} '
          },
          grid: {
            top: "15px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            containLabel: true
          },
          xAxis: [
            {
              type: "category",
              data: this.value.xAxis.data,
              axisLine: {
                //这是x轴文字颜色
                lineStyle: {
                  color: "#444"
                }
              },
              axisLabel: {
                interval: 3,
                textStyle: {
                  color: "rgba(225,225,255,1)"
                }
              },
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: [
            {
              type: "value",
              axisLine: {
                //这是x轴文字颜色
                lineStyle: {
                  color: "#444"
                }
              },
              axisLabel: {
                interval: 0,
                textStyle: {
                  color: "rgba(225,225,255,1)"
                }
              },
              axisTick: {
                show: false
              },
              splitLine: {
                show: true,
                lineStyle: {
                  type: "dashed",
                  color: "rgba(255,255,255,0.3)"
                }
              }
            }
          ],
          series: [
            {
              name: this.name,
              type: "line",
              barWidth: "30px",
              itemStyle: {
                color: "#CC3DFF"
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(204, 61, 255, 0.3)" // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(204, 61, 255, 0)" // 100% 处的颜色
                  }
                ]) //背景渐变色
              },
              // symbol: "none", //去掉圆点
              symbolSize: 2,
              // smooth:true,  //让曲线变平滑的
              data: this.value.series.data
            }
          ]
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
    value: {
      handler(val, oldVal) {
        this.initChart();
      },
      deep: true,
      immediate: true
    }
  }
};
</script>