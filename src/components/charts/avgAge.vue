<template>
  <div ref="dom" class="charts chart-bar"></div>
</template>

<script>
  import echarts from 'echarts'
  import { on, off } from '@/libs/tools'
  export default {
    name: 'avgAge',
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
                  text: this.text,
                  left: 'left',
                  textStyle: {
                      fontSize: 16,
                      fontStyle: 'normal',
                      color:'#333'
                  },
                },
                tooltip: {
                  backgroundColor: 'rgba(0,0,0,0.8)',
                  padding:[10,15,10,15],
                  trigger: 'item',
                  formatter: '{a} <br/>{b} : {c}人'
                },
                grid: {
                  top:'35px',
                  left: '0px',
                  right: '0px',
                  bottom: '0px',
                  containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : this.value.xAxis.data,
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:this.name,
                        type:'bar',
                        barWidth:'30px',
                        itemStyle: {
                            color: '#00C2CC'
                        },
                        data:this.value.series.data,
                        markLine : {
                            data : [
                                {type : 'average', name: '平均值'}
                            ]
                        }
                    }
                ]
          }
          
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