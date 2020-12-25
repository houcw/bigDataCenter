<template>
<div class="box">
  <div ref="dom" class="chart-pie"></div>
  <div class="number-box">
    <span>{{datas.regPieData[0].value}}</span>
    <span>{{datas.regPieData[1].value}}</span>
  </div>
  <div class="text">
    <h3>{{datas.statisticsObj.num}}</h3>
    <p>{{datas.statisticsObj.text}}</p>
  </div>
</div>

</template>

<script>
  import echarts from 'echarts'
  import { on, off } from '@/libs/tools'
  export default {
    name: 'ChartPie',
    props: {
      datas:Object
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
              text: datas.title,
              x: 'left',
              textStyle: {
                  fontSize: 16,
                  fontStyle: 'normal',
                  fontWeight: '600',
                  color:'white'
              },
            },
            color: ["#00C2CC", "#FF5E74"],
            tooltip: {
              backgroundColor: 'rgba(0,0,0,0.8)',
              padding:[10,15,10,15],
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            toolbox: {
              feature: {
                saveAsImage: { show: false }
              }
            },
            legend: {
              orient: 'vertical',
              x: 'left',
              y:'10px',
              textStyle:{
                   rich:{
                        a:{
                            fontSize:16,
                            color:"#EA5504",
                            padding:10
                        },
                        b:{
                            fontSize:14,
                            color:"#333"
                        }
                    }
              },
              itemGap:10
            },
            series: [
              {
                name:'详情',
                type:'pie',
                radius: ['50%', '70%'],
                center: ["80%", "60px"],
                avoidLabelOverlap: false,
                hoverAnimation: false,　
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                data: datas.regPieData,
                labelLine: {
                    normal: {
                        show: false
                    }
                }
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
      right: 10%;
      bottom: 40px;
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
    .number-box{
      position: absolute;
      left: 5px;
      bottom: 45px;
      span{
        font-weight: bold;
        display: inline-block;
        width: 82px;
        font-size:24px;
        color:#333333;
      }
    }
  }
</style>