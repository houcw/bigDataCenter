<template>
  <div ref="dom" class="charts chart-line"></div>
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
            // title: {
            //     text: '堆叠区域图'
            // },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            color:['#772AFF','#FF54DD', '#FFC081','#00C2CC', '#A320AC','#55CC80', '#BBEFFF','#FFBEBE','#404040','#541F26', '#397578','#00C2CC', '#FF54DD','#F9F56D','#4586FF','#FF5E74','#FFC081'],
            legend: {
                icon: "roundRect", //  字段控制形状  类型包括 circle，rect,line，roundRect，triangle，diamond，pin，arrow，none
                data: ['添加AI提交次数', '添加AI提交人数', '添加AI成功次数', '添加AI成功人数']
            },
            // toolbox: {
            //     feature: {
            //         saveAsImage: {}
            //     }
            // },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['20200107', '20200111', '20200115', '20200119', '20200201', '20200204', '20200201']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '添加AI提交次数',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '添加AI提交人数',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '添加AI成功次数',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '添加AI成功人数',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [320, 332, 301, 334, 390, 330, 320]
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