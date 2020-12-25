<template>
<div class="box">
  <div ref="dom" class="chart-pie"></div>
</div>

</template>

<script>
  import echarts from 'echarts'
  import { on, off } from '@/libs/tools'
  export default {
    name: 'charPie',
    props: {
      datas:Array,
      showLegend:Boolean,
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
                backgroundColor: 'rgba(0,0,0,0.8)',
                padding:[10,15,10,15],
                trigger: 'item',
                formatter: "{b} <br/> 使用次数：{c}  <br/>占比({d}%)",
            },
            color:['#772AFF','#FF54DD', '#FFC081','#00C2CC', '#A320AC','#55CC80', '#BBEFFF','#FFBEBE','#404040','#541F26', '#397578','#00C2CC', '#FF54DD','#F9F56D','#4586FF','#FF5E74','#FFC081'],
            legend: {
                orient: 'auto',
                x: '20px',
                show:this.showLegend,
                 textStyle:{
                  color: '#333333',
                  lineHeight:20
                },
                padding:[30,0,30,0],
                itemGap:60,
                formatter:  (name)=>{
                  let data=datas;
                  let total = 0;
                  let target;
                  for (let i = 0; i < datas.length; i++) {
                      total += datas[i].value;
                      if (datas[i].name == name) {
                          target = datas[i].value;
                      }
                  }
                  let arr = [
                      ''+name+'',
                      '使用次数 '+target+'',
                      '占比：'+((target/total)*100).toFixed(2)+'%'
                  ]
                  return arr.join('\n')
              },
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
                    data:datas,
                    
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