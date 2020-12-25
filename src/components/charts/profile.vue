<template>
  <div ref="dom" class="charts chart-bar"></div>
</template>

<script>
import echarts from "echarts";
import { on, off } from "@/libs/tools";
export default {
  name: "Proflie",
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

    initChart(datas) {
      this.$nextTick(() => {
        let option = {
          title: {
            text: this.text,
            left: "left"
          },
          tooltip: {
            backgroundColor: "rgba(0,0,0,0.8)",
            padding: [10, 15, 10, 15],
            trigger: "item",
            formatter: "<br/>{b} : {c}"
          },
          grid: {
            top: "50px",
            left: "5px",
            right: "0px",
            bottom: "0px",
            containLabel: true
          },
          xAxis: [
            {
              type: "category",
              data: this.datas.xAxis.data,
              axisLine: {
                //这是x轴文字颜色
                lineStyle: {
                  color: "#444"
                }
              },
              axisLabel: {
                //   interval: 2,
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
              name: "使用次数",
              nameTextStyle: {
                color: "#fff"
              },
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
                show: false
              }
            },
            {
              type: "value",
              scale: true,
              name: "占比",
              nameTextStyle: {
                color: "#fff"
              },
              max: 100,
              min: 0,
              boundaryGap: [0.2, 0.2],
              axisTick: {
                show: false
              },
              splitLine: {
                show: true,
                lineStyle: {
                  type: "dashed",
                  color: "rgba(255,255,255,0.3)"
                }
              },
              axisLabel: {
                textStyle: {
                  color: "rgba(225,225,255,1)"
                }
              }
            }
          ],
          series: [
            {
              name: this.name,
              type: "bar",
              barWidth: "6px",
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#00FFEE" },
                  { offset: 1, color: "rgba(0, 249, 233, 0)" }
                ])
              },
              data: this.datas.series.data
            },

            {
              data: this.datas.series.data,
              type: "line",
              lineStyle: {
                color: "#CC3DFF",
                barWidth: "2px"
              },
              areaStyle: {
                type: "default"
              },
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