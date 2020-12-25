<template>
<div class="box">
  <div ref="dom" class="chart-pie"></div>
</div>

</template>

<script>
  import echarts from 'echarts'
  import { on, off } from '@/libs/tools'
  export default {
    name: 'charAnnular',
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
            color:['#00FFEE','#772AFF', '#FF951C','#FF54DD','#00C2CC', '#A320AC','#55CC80', '#BBEFFF','#FFBEBE','#404040','#541F26', '#397578', '#FF54DD','#F9F56D','#4586FF','#FF5E74','#FFC081'],
            legend: {
                orient: 'vertical',
                x:'210px',
                y:'center',
                show:this.showLegend,
                textStyle:{
                  color: 'white',
                  lineHeight:14
                },
                padding:[10,10,10,30],
                itemGap:15,
                itemWidth:14,
                itemHeight:14,
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
                      ''+name+':',
                      ''+target+'',
                      ''+((target/total)*100).toFixed(2)+'%'
                  ]
                  return arr.join('  ')
              },
            },
            series: [
                {
                    type:'pie',
                    radius :['50%','70%'],
                    center: ["30%", "50%"], 
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
                    itemStyle:{
                        borderWidth:2, //设置border的宽度有多大
                        borderColor:'rgba(0, 0, 0,0.7)',
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