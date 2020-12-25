<!-- 首页 -->

<style scoped lang="scss">
  .BtnMenu{
      width: 44px;
      height: 44px;
      position: fixed;
      right: 0px;
      top: 76px;
      z-index: 20;
  }
  .RightMenu{
    width: 288px;
    height: 44px;
    position: fixed;
    right: 0px;
    top: 76px;
    z-index: 10;
    display: flex;
    align-items: center;
    background:#333;
    p{
      margin-left: 15px;
      margin-right: 60px;
      font-size:14px;
      font-family:Source Han Sans SC;
      font-weight:400;
      color:rgba(255,255,255,1);
      opacity:1;
    }
    div{
      padding:0px 20px;
      color:rgba(0,255,238,1);
      opacity:1;
      height: 34px;
      line-height: 34px;
      border:1px solid rgba(0,255,238,1);
      background:rgba(0,255,238,0.12);
      border-radius: 2px;
      margin-top: -4px;
    }
    div:hover{
      background:rgba(0,255,238,0.31);
      border-radius: 2px;
    }
  }
  .right_Menu_List{
    width: 288px;
    background: #212121;
    padding-top:20px;
    padding-left:15px;
    position: fixed;
    right: 0px;
    top:116px;
    bottom: 0;
    z-index: 19;
    color: white;
    .right_Menu_List_Item{
      height: 100%;
      overflow-y: auto;
    }
    .title{
      margin-bottom: 3px;
    }
    p{
      margin-left: 35px;
      font-size: 12px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #FFFFFF;
      opacity: 0.5;
      margin-bottom: 9px;
    }
    .radio{
      img{
        margin-left: 15px;
      }
      div{
        margin-bottom: 14px;
      }
      div:first-child{
        margin-bottom: 14px;
      }
      div:last-child{
        margin-bottom: 19px;
      }
    }
    
  }
</style>

<template>
<div class='home'>
  <div @click="CloseMenue(1)">
   <component :is="pathArr[tabIndex].components"></component>
  </div>
</div>
</template>

<script>
//import引入的组件需要注入到对象中才能使用
import Data1 from "./chartCom/home1";
import Data2 from "./chartCom/home2"
export default {
    components: {
      Data1,
      Data2
    },
    data() {
    //这里存放数据
        return {
            tabIndex:0,
            pathArr: [
              {
                text: "数据监控1",
                components: "Data1"
              },
              {
                text: "数据监控2",
                components: "Data2"
              }
            ],
            closeMenue:false,
            dataSelect:false,
            path:'',
            radio1:1,
            radio2:1
        };
    },

    computed: {

    },
    //方法集合
    methods: {
      CloseMenue(k){
        // 点击空白关闭
        if(k === 1){
          if(this.closeMenue){
            this.closeMenue = true
          }else{
            this.closeMenue = true
          }
        }
        if(this.closeMenue){
          this.closeMenue = false
        }else{
          this.closeMenue = true
        }
        
      },
      close(){
        this.closeMenue = true
      },
      getName(path) {
        switch (path) {
          case "/":
            this.dataSelect = true;
            break;
          default:
            break;
          }
      },
      getIndex(){
        setInterval(()=>{
          this.tabIndex = window.localStorage.getItem('tabIndex')
        },100)
      }
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted(){
      this.getIndex()
      this.path = this.$route.path;
      this.getName(this.path);
      window.localStorage.setItem('tabIndex','0')
    },
    watch: {
      "$route.path"(newval) {
        this.path = newval;
        this.getName(this.path);
        this.tabIndex = 0
      }
    },
}
</script>

