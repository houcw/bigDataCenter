<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted(){
      
    },
    methods:{
      clear(){
        if(!window.localStorage.getItem('userInfo')){
          window.localStorage.clear()

        }
      }
    }
  }

</script>

<style lang="scss">
#app{
  font-size: 13px;
}
.el-message {
    top: 50px !important;
}
</style>
