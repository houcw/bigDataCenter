<style scoped lang="scss">
  .sl-page {
    width: 100%;
    height: 28px;
    margin-top:15px;
    // color: $color-666;
    color: white;
    .sl-page-left {
        float: left;
        line-height: 28px;
        padding-left: 15px;
        color: white;
      }
    .sl-page-right {
        float: right;
        .sl-page-right-p {
          float: left;
          color: white;
          p {
            float: left;
            height: 28px;
            line-height: 28px;
    
            &:nth-child(1) {
              margin-left: 10px;
            }

            &:nth-child(2) {
              width: 30px;
              height: 28px;
              margin: 0 5px;

              input {
                width: 30px;
                height: 28px;
                line-height: 28px;
                background: #212121;
                color: white;
                border-radius:2px;
                text-align: center;
                border: 1px solid $bd-table-body;
              }
            }

            &:nth-child(3) {
              margin-right: 12px;
            }
          }

        }
    }
  }
</style>

<template>
  <div class="sl-page">
    <!--<div class="Bottom">-->
      <p class="sl-page-left">共{{pageData.total}}条记录</p>
      <div class="sl-page-right">
        <el-pagination
          background
          layout="prev, pager, next"
          :total=pageData.total
          :current-page=pageData.current
          :page-size=pageData.pageSize
          @current-change="pageChange"
          class="fl">
        </el-pagination>

        <div class="sl-page-right-p">
          <p>第</p>
          <P><input type="text" v-model="current" style="color:#FFFFFF;border:1px solid rgba(255, 255, 255, 0.5);background:rgba(0,0,0,0.8)" @keyup.enter="pageChange(current)"/></P>
          <P>页，共{{pageData.pages}}页</P>
          <P>每页</P>
          <P>{{pageData.pageSize}}</P>
          <P>条</P>
        </div>
      </div>
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    name: "sl-page",
    props: {
      pageData: Object,
    },
    data() {
      return {
        current: this.pageData.current,
        defaultCurrent: this.pageData.current
      }
    },
    computed: {},
    methods: {
      pageChange(currentPage) {
        let page = parseInt(currentPage);
        if (page > 0 && page <= parseInt(this.pageData.pageTotal)) {
          this.$set(this.pageData, 'current', page);
          this.$emit('pageChange', page);
        }
      },
    }

  }
</script>

