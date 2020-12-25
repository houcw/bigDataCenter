<style scoped lang="scss">
  .sl-confirm{
    .sl-confirm-content{
      display: flex;
      .confirm-icon{
        width: 24px;
        height: 24px;
        margin-right: 14px;
        img{
          width: 24px;
          height: 24px;
          display: block;
        }
      }
      .confirm-font{
        font-size: $font-size;
        line-height:18px;
        color:$color-666;
        .title{
          font-size:14px;
          font-weight:700;
          line-height:24px;
          color:$color-333;
          margin-bottom: 2px;
        }
      }
    }
  }
</style>
<style lang="scss">
  .sl-confirm{
    .el-dialog__footer{
      button{
        margin-right: 15px;
        margin-bottom: 0;
        &:last-child{
          margin-right: 0;
        }
      }
    }
  }
</style>
<!--失败：loseIcon.svg-->
<!--成功：successIcon.svg-->
<!--提示：promptIcon.svg-->

<template>
    <div class="sl-confirm" v-if="confirmObj.show">
      <el-dialog
        :visible.sync="confirmObj.show">
        <div class="sl-confirm-content">
          <div class="confirm-icon">
            <img src="/static/img/ts.svg" v-if="confirmObj.icon===1">
            <img src="@/assets/img/successIcon.svg" v-if="confirmObj.icon===2">
            <img src="@/assets/img/loseIcon.svg" v-if="confirmObj.icon===3">
          </div>
          <div class="confirm-font">
            <div class="title">{{confirmObj.title}}</div>
            <div>{{confirmObj.content}}</div>
            <div>{{confirmObj.tip}}</div>
            <div v-if="confirmObj.arr">
              <p v-for='(i,index) in confirmObj.arr' :key="index">{{i}}</p>
            </div>
          </div>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button type="button" class="btn-bg-green"
                  v-for="(item,index) in confirmObj.btn"
                  :key="index"
                  v-text="item"
                  :class="{'btn-line-green':confirmObj.cancelIndex===index}"
                  @click="clickFun(index)">
          </el-button>
       </div>
      </el-dialog>
    </div>
</template>

<script>
  export default {
    name: "sl-confirm",
    props: {
      confirmObj: Object,
    },
    data() {
      return {
        dialogVisible: true
      };
    },
    mounted(){
    },
    methods: {
      clickFun(index){
        let query = '';
        this.confirmObj.query == undefined ? query = {} : query = this.confirmObj.query;
        this.$set(this.confirmObj, 'show', false);
        this.$emit('btn' + index, query);
      }
    }
  };
</script>
