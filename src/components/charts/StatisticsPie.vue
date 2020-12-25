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
              padding:[10,15,10,15],
              backgroundColor: 'rgba(0,0,0,0.8)',
              trigger: 'item',
                formatter: "{b} <br/> 使用次数：{c}  <br/>占比({d}%)",
            },
           color:['#11481E','#BCFFD0','#55CC80','#098025','#003CAC','#FFC081','#FF703A','#541F26','#F9F56D','#FF54DD','#772AFF','#00C2CC','#404040','#FBF0CD','#FFBEBE','#4586FF','#FF5E74','#6B0D5F','#BBEFFF','#A320AC','#C29FFF','#BCA299','#397578','#C4775C','#959595','#DCDCDC','#97FF2E'],
           legend: {
                orient: 'auto',
                x: '20px',
                show:this.showLegend,
                textStyle:{
                  color: '#333333',
                },
                padding:[15,0,10,0],
                itemGap:15
            },
            series: [
                {
                    type:'pie',
                    radius : '85%',
                    center: ['75%', '46%'],
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