<!--入住管理-门禁机日志-门禁机识别日志-->
<style scoped lang="scss">
  .sl-i-discern-log{
    .sl-headers{
      display: flex;
      .sl-header-item{
        width: 20%;
        border: 1px solid rgba(222, 243, 246, 1);
        border-right:0;
        padding: 20px;
        &:last-child{
          border-right:1px solid rgba(222, 243, 246, 1);
        }
        p{
          text-align: center;
          font-size:14px;
          line-height:24px;
          color:rgba(102,102,102,1);
          &:first-child{
            font-size:24px;
            font-weight:600;
            line-height:41px;
            color:rgba(51,51,51,1);
          }
          &.red{
            color: $red1;
          }
          &.green{
            color: $bg-color2;

          }
        }
      }
    }
  }
</style>
<style lang="scss">
  .sl-i-discern-log{
    .sl-item-mac{
      .el-input{
        width: 150px;
      }
    }
    .sl-item-status{
      .el-select{
        width: 170px;
        .el-input--suffix{
          width: 170px;
          .el-input__inner{
            width: 170px;
          }
        }
      }
    }
    .el-table{
      tr td:last-child{
        text-align: left;
        .cell{
          padding-left: 15px;
        }
      }
      .bgc-img{
        width: 96px;
        height: 96px;
        background: url("http://b-ssl.duitang.com/uploads/item/201502/03/20150203144840_zGmdm.jpeg");
        background-size: 96px;
        background-repeat: no-repeat;
      }
    }
  }
</style>

<template>
  <div class="sl-i-discern-log">
    <!--头部-->
    <div class="sl-header sl-headers">
      <div class="sl-header-item" v-for="(i,index) in statisticsData" :key="index">
        <p :class="{'red':index===2 || index===4,'green':index===3}">{{i.count}}</p>
        <p>{{i.desc}}</p>
      </div>
    </div>
    <!--查询-->
    <div class="sl-header clrfix">
      <!--选择单店-->
      <div class="sl-item">
        <p class="fl">
          <span>选择单店</span>
        </p>
        <div class="fl">
          <el-select v-model="hotelId" clearable placeholder="请选择">
            <el-option
              v-for="(item,index) in hotels"
              :key="index"
              :label="item.hotelName"
              :value="item.hotelId">
            </el-option>
          </el-select>
        </div>
      </div>
      <!--房间号-->
      <div class="sl-item sl-item-mac">
        <p class="fl">
          <span>房间号</span>
        </p>
        <div class="fl">
          <el-input v-model="roomNo" clearable placeholder="请输入房间号"></el-input>
        </div>
      </div>
      <!--客人名称-->
      <div class="sl-item sl-item-status">
        <p class="fl">
          <span>客人名称</span>
        </p>
        <div class="fl">
          <el-input v-model="customerName" clearable placeholder="请输入客人名称"></el-input>
        </div>
      </div>
      <!--识别结果-->
      <div class="sl-item sl-item-status">
        <p class="fl">
          <span>识别结果</span>
        </p>
        <div class="fl">
          <el-select v-model="discernResult" clearable placeholder="请选择">
            <el-option
              v-for="(item,index) in authResultS"
              :key="index"
              :label="item.dicName"
              :value="item.dicLabel">
            </el-option>
          </el-select>
        </div>
      </div>
      <!--验证时间-->
      <div class="sl-item">
        <p class="fl">
          <span>验证时间</span>
        </p>
        <!--下拉框-->
        <div class="fl">
          <el-date-picker
            v-model="time"
            type="datetimerange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :default-time="['00:00:00','23:59:59']"
            value-format="yyyy-MM-dd HH:mm:ss">
          </el-date-picker>
        </div>
      </div>
      <!--开锁结果-->
      <div class="sl-item sl-item-status">
        <p class="fl">
          <span>开锁结果</span>
        </p>
        <div class="fl">
          <el-select v-model="openResult" clearable placeholder="请选择">
            <el-option
              v-for="(item,index) in moveInResultS"
              :key="index"
              :label="item.dicName"
              :value="item.dicLabel">
            </el-option>
          </el-select>
        </div>
      </div>
      <button type="button" class="btn-line-green fl" @click="getData('check')">查询</button>
    </div>

    <!--内容-->
    <div class="sl-content">
      <!--表格-->
      <div class="table">
        <template>
          <el-table :data="tableData" style="width: 100%" border>
            <el-table-column prop="hotelName" label="单店名称"></el-table-column>
            <el-table-column prop="building,floor" label="楼栋楼层" width="80">
              <template slot-scope="scope">
                {{scope.row.building}}栋{{scope.row.floor}}层
              </template>
            </el-table-column>
            <el-table-column prop="roomType" label="房型"></el-table-column>
            <el-table-column prop="roomNo" label="房间号" width="70"></el-table-column>
            <el-table-column prop="orderNo" label="订单号"></el-table-column>
            <el-table-column prop="logTime" label="验证时间"></el-table-column>
            <el-table-column prop="customerName" label="姓名"></el-table-column>
            <el-table-column prop="orderPhone" label="手机号"></el-table-column>
            <el-table-column prop="idCard" label="身份证号"></el-table-column>
            <el-table-column prop="imgSource" label="实拍图来源"></el-table-column>
            <el-table-column prop="imgUrl" label="实拍图" width="130">
              <template slot-scope="scope">
                <div class="bgc-img" :style="{ 'background-image': 'url(' + scope.row.imgUrl + ')' }"></div>
              </template>
            </el-table-column>
            <el-table-column prop="doorImgUrl" label="门禁机实拍图" width="130">
              <template slot-scope="scope">
                <div class="bgc-img" :style="{ 'background-image': 'url(' + scope.row.doorImgUrl + ')' }"></div>
              </template>
            </el-table-column>
            <el-table-column prop="threshold" label="相似度"></el-table-column>
            <el-table-column prop="discernResult" label="识别结果" width="80">
              <template slot-scope="scope">
                <span :style="scope.row.discernResult==='Y'?{color:'rgba(68, 68, 68, 1)'}:{color:'rgba(255, 84, 84, 1)'}">
                  {{scope.row.discernResult==='Y'?'成功':'失败'}}
                </span>
              </template>
            </el-table-column>
            <el-table-column prop="openResult" label="开锁结果" width="80">
              <template slot-scope="scope">
                <span :style="scope.row.openResult==='Y'?{color:'rgba(68, 68, 68, 1)'}:{color:'rgba(255, 84, 84, 1)'}">
                  {{scope.row.openResult==='Y'?'成功':'失败'}}
                </span>
              </template>
            </el-table-column>
            <el-table-column prop="remark" label="备注"></el-table-column>
          </el-table>
        </template>
      </div>

      <!--分页器-->
      <sl-page :pageData="pageData" @pageChange="pageChange"></sl-page>
    </div>
  </div>
</template>

<script>
  export default {
    name: "c-discern-log",
    data(){
      return {
        tableData:[],
        pageData: {
          pageSize: 15,//每页个数
          total: 0,//总条数
          current: 1,//当前页
          pageTotal: 0//总页数
        },
        time:[],
        hotelId:'',
        roomNo:'',
        openResult:'',
        customerName: '',
        discernResult: '',
        //客人名称
        guestNameS:[
          {
            dicLabel:'Y',
            dicName:'成功'
          },
          {
            dicLabel:'N',
            dicName:'失败'
          }
        ],
        //认证结果
        authResultS:[
          {
            dicLabel:'Y',
            dicName:'成功'
          },
          {
            dicLabel:'N',
            dicName:'失败'
          }
        ],
        //入住结果
        moveInResultS:[
          {
            dicLabel:'Y',
            dicName:'成功'
          },
          {
            dicLabel:'N',
            dicName:'失败'
          }
        ],
        statisticsData:[]
      }
    },
    created(){
    },
    mounted(){
      this.onload();
    },
    computed: {
      hotels() {
        return this.$store.state.dictionary.hotels
      }
    },
    methods:{
      onload(){
        // 入住机统计数据
        this.$store.dispatch('occupmng/doorStatistics').then((res)=>{
          this.statisticsData=res;
        });
        // 日志类型下拉框
        this.guestNameS=this.$getDict('customerName');
        this.getData();
      },
      // 获取表数据
      getData(type){
        // 跳添加智能场景
        let obj={
          pageCurrent:this.pageData.current,
          pageSize:this.pageData.pageSize
        };
        if (type==='check'){
          obj.pageCurrent=1;
        }
        if (this.hotelId){
          obj.hotelId=this.hotelId;
        }
        if (this.roomNo){
          obj.roomNo=this.roomNo;
        }
        if (this.customerName){
          obj.customerName=this.customerName;
        }
        if (this.discernResult){
          obj.discernResult=this.discernResult;
        }
        if (this.openResult){
          obj.openResult=this.openResult;
        }
        if (this.time){
          obj.startLogTime=this.time[0];
          obj.endLogTime=this.time[1];
        }
        this.$store.dispatch('occupmng/getDoorDiscernLog',obj).then((res)=>{
          this.tableData=this.$filterNull(res.records);
          this.pageData=this.pageDatas(res);//分页数据
        });
      },
      // 分页
      pageChange(val){
        this.getData(val)
      }
    }
  }
</script>
