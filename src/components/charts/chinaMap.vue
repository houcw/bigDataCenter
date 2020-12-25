<template>
  <div class="box">
    <div ref="dom" class="chart-pie"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import { on, off } from "@/libs/tools";
export default {
  name: "chinaMap",
  props: {
    datas: Array,
    showLegend: Boolean,
    personNum:[String,Number]
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
        let option = (option = {
          tooltip: {
             backgroundColor: 'rgba(0,0,0,0.8)',
              padding:[10,15,10,15],
              trigger: 'item',
          },
          toolbox: {
            show: true,
            orient: "horizontal",
            left: "right",
            top: "center"
          },
          visualMap: {
                min: 0,
                max: this.personNum,
                left: 'left',
                top: 'bottom',
                text: ['高','低'],
                inRange: {
                    color:['#6F31FF','#AF8DFF']
                },
                show:false
            },
          series: [
          
            {
              name: "人数",
              type: "map",
              mapType: "china",
              roam: false,
              zoom: 1.25,
              label: {
                normal: {
                  show: false,
                },
                emphasis: {
                  show: true,
                }
              },
               itemStyle: {
                    normal: {
                        borderWidth: .5,//区域边框宽度
                        borderColor: '#000',//区域边框颜色
                        areaColor:"#6F31FF",//区域颜色
 
                    },
                    emphasis: {
                        borderWidth: .10,
                        borderColor: '#000',
                        areaColor:"#6F31FF",
                    }
                },

              data: datas
            },
          ]
        });
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
        if (val) {
          this.initChart(val);
        }
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
<style lang="scss" scoped>
.box {
  position: relative;
  height: 100%;
  .chart-pie {
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