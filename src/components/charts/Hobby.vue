<template>
  <div ref="dom" class="charts chart-bar"></div>
</template>

<script>
  import echarts from 'echarts'
  import { on, off } from '@/libs/tools'
  export default {
    name: 'Hobby',
    props: {
      datas: Object,
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

      initChart(datas) {
        this.$nextTick(() => {
          let option = {
                  title: {
                    text: this.text,
                    left: 'left',
                  },
                  grid: {
                    top:'20px',
                    left: '0px',
                    right: '15px',
                    bottom: '40px',
                    containLabel: true
                  },
                  tooltip: {
                  backgroundColor: 'rgba(0,0,0,0.8)',
                  padding:[10,15,10,15],
                  trigger: 'item',
                  formatter: '{b}</br>占比 : {c}'
                },
                  legend:false,
                  color:['#00FFEE','#772AFF', '#FF951C','#FF54DD','#00C2CC', '#A320AC','#55CC80', '#BBEFFF','#FFBEBE','#404040','#541F26', '#397578', '#FF54DD','#F9F56D','#4586FF','#FF5E74','#FFC081'],
                  xAxis : [
                      {
                        type : 'value',
                        show:true,
                        axisTick: {
                              show: false
                        },
                        splitLine:{
                            show:true,
                            lineStyle:{
                              type:'dashed',
                              color:'rgba(255,255,255,0.3)'
                            }
                        },
                        axisLabel: {//y轴字体颜色
                            textStyle: {
                                color: '#fff'
                            }
                        },  
                      }
                  ],
                  yAxis : [
                      {
                        type : 'category',
                        data:this.datas.xAxis.data,
                        splitArea : {show :false},//去除网格区域
                        axisLine: {  //这是x轴文字颜色
                            lineStyle: {
                                color: "rgba(255,255,255,0.3)",
                            },
                            show:true
                        },
                        axisLabel: {//y轴字体颜色
                            textStyle: {
                                color: '#fff'
                            }
                        },  
                        axisTick:{//去掉x轴刻度
        	                show: true
                        } 
                      }
                  ],
                  series : this.datas.data
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
      'datas': {
        handler(val, oldVal) {
          this.initChart()
        },
        deep: true,
        immediate: true
      }
    }
  }
</script>