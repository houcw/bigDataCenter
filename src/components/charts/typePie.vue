<template>
<div class="box">
  <div ref="dom" class="chart-pie"></div>
  <!-- <div class="text" v-if="showLegend">
    <h3>{{datas.statisticsObj.num}}</h3>
    <p>{{datas.statisticsObj.text}}</p>
  </div> -->
</div>

</template>

<script>
  import echarts from 'echarts'
  import { on, off } from '@/libs/tools'
  export default {
    name: 'charPie',
    props: {
      datas:Object,
      showLegend:Boolean
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
            tooltip: {
              trigger: 'item',
                formatter: "{b} <br/> 使用次数：{c}  <br/>占比({d}%)",
            },
            legend: {
                orient: 'vertical',
                x: '20px',
                show:this.showLegend,
            },
            series: [
                {
                    type:'pie',
                    radius : '85%',
                    center: ['70%', '46%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true
                        }
                    },
                    data:datas.data,
                    color:["#4A90E2", "#2DCCA9", "#9013FE", "#FF5D5D", "#FFBE53", "#3E3F58", "#4f0202", "#ff7200"]           // 数组颜色
                }
                
            ]
          }
          this.dom.setOption(option)
          // 防止初始化时图表大小错误
          this.resize();
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
          if(val){
            this.initChart(val)
          }
        },
        deep: true,
        immediate: true
      }
    }
  }
</script>
<style lang="scss" scoped>
  .box{
    position: relative;
    height: 100%;
    .chart-pie{
      height: 100%;
    }
    .text{
      width: 100px;
      position: absolute;
      z-index: 9;
      left: 50%;
      bottom: 70px;
      text-align: center;
      h3{
        font-size:24px;
        line-height: 24px;
        color:#333;
        margin-bottom: 8px;
      }
      p{
        font-size:13px;
        color:#999999;
      }
    }
  }
</style>