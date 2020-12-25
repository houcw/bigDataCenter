<template>
  <div ref="dom" class="charts chart-bar-h"></div>
</template>

<script>
  import echarts from 'echarts'
  import { on, off } from '@/libs/tools'
  export default {
    name: 'ChartBar',
    props: {
      value: Object,
      text: String,
      name:String,
      conversion: {
        default: false
      }
    },
    data() {
      return {
        dom: null
      }
    },
    methods: {
      resize() {
        this.dom.resize()
      },

      initChart() {
        this.$nextTick(() => {
        let option = {
            title: {
                text: '不同访问时长打开次数分布',
                // subtext: '数据来自网络'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            color:['#00C2CC'],
            // legend: {
            //     data: ['2011年']
            // },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['0-2秒', '3-5秒', '6-10秒', '20-30秒', '30-50秒', '50-100秒']
            },
            series: [
                {
                    name: '2011年',
                    type: 'bar',
                    data: [18203, 23489, 29034, 104970, 131744, 630230]
                }
            ]
        };
          
          this.dom.setOption(option)
          // 防止初始化时图表大小错误
          this.resize()
        })
      }
    },
    mounted() {
      this.dom = echarts.init(this.$refs.dom, 'tdTheme')
      on(window, 'resize', this.resize)
    },
    beforeDestroy() {
      off(window, 'resize', this.resize)
    },
    watch: {
      'value': {
        handler(val, oldVal) {
          this.initChart()
        },
        deep: true,
        immediate: true
      }
    }
  }
</script>