<!--单店管理-集团列表-->
<style scoped lang="scss">
.List-top {
  margin-bottom: 5px;
}
.Addbutton {
    width: 86px;
    height: 34px;
    background: #212121;
    border: 1px solid rgba(0, 255, 238, 1);
    color: #00ffee;
    opacity: 1;
    border-radius: 2px;
    line-height: 24px;
  }
  .Addbutton:active{
    background: rgba(0, 255, 238, 0.13);
  }
.opertion {
  cursor: pointer;
}

</style>

<style lang="scss">
.sl-group-list {
  .el-dialog {
    width: 396px;
    .el-form-item {
      .el-select {
        width: 220px;
        float: left;
        margin-right: 10px;
        .el-input--suffix {
          width: 220px;
        }
        &:last-child {
          margin-right: 0;
        }
      }
      .el-textarea__inner {
        width: 220px;
      }
    }
    .el-select-min {
      .el-select {
        width: 105px;
        .el-input--suffix {
          width: 105px;
        }
      }
    }
  }
  .sl-content {
    margin-top: 0;
  }
}
.dictory1 .el-textarea__inner{
    width: 450px !important;
}
</style>


<template>
  <div :style="{'minHeight':minHeight+'px'}">
    <div class="List-top">
      <el-button class="btn-bg-green" type="button" @click="openDialog(2)">添加</el-button>
    </div>
    <div class="List-table">
      <el-table :data="tableData" style="width: 100%" border :header-cell-style="headerClass">
        <el-table-column prop="dictName" label="字典名称" width="180"></el-table-column>
        <el-table-column prop="dictType" label="字典类型" width="180"></el-table-column>
        <el-table-column prop="status" label="状态"></el-table-column>
        <el-table-column prop="updateTime" label="创建时间">
            <template slot-scope="scope">
                {{$formatDate(scope.row.updateTime)}}
            </template>
        </el-table-column>
        <el-table-column prop="remark" label="备注">
            <template slot-scope="scope">
                {{scope.row.remark?scope.row.remark:'--'}}
            </template>
        </el-table-column>
        <el-table-column prop="address" label="操作" align="center">
          <template slot-scope="scope">
            <span class="opertion" @click="openChange(scope.row)">修改</span>
            <span style="fontsize:14px;color:rgba(255,255,255,1);opacity:0.5;margin:0px 20px">|</span>
            <span class="opertion" @click="openDetail(scope.row)">查看</span>
            <span style="fontsize:14px;color:rgba(255,255,255,1);opacity:0.5;margin:0px 20px">|</span>
            <span class="opertion" @click="deleteDict(scope.row)">删除</span>
          </template>
        </el-table-column>
      </el-table>
       <!--分页器-->
      <sl-page :pageData="pageData" @pageChange="pageChange"></sl-page>
    </div>
    <!-- 添加弹框 -->
    <el-dialog  class="dictory-ruleForm" :title="btnType ===3?'查看字典类型':'添加字典类型'" :visible.sync="dialogFormVisible" width="530px" :before-close="closeDailog">
      <div class="pms-body">
        <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="76px"
            label-position="top"
        >
            <el-form-item label="字典名称" prop="dictName" hide-required-asterisk="false">
            <el-input :disabled="btnType===3"  v-model="ruleForm.dictName" style="width:450px"  clearable placeholder="请输入"></el-input>
            
            </el-form-item>
            <el-form-item label="字典类型" prop="dictType">
            <el-input v-model="ruleForm.dictType" style="width:450px" clearable placeholder="请输入" :disabled="btnType===3"></el-input>
            
            </el-form-item>
              <el-form-item label="字典状态" prop="status">
                  <el-radio-group  v-model="ruleForm.status"  >
                      <el-radio :label="1" :disabled="btnType===3">是</el-radio>
                      <el-radio :label="0" :disabled="btnType===3">否</el-radio>
                  </el-radio-group>
              </el-form-item>
            <el-form-item label="备注" class="dictory1">
            <el-input
                type="textarea"
                style="width:450px"
                v-model="ruleForm.remark"
                clearable
                :disabled="btnType===3"
                placeholder="请输入"
            ></el-input>
            </el-form-item>
        </el-form>
      </div>
        <div slot="footer" class="dialog-footer clrfix">
            <el-button type="button" class="btn-line-green" @click="closeDailog()" v-if="btnType===3">关闭</el-button>
            <el-button type="button" class="btn-line-green" @click="closeDailog()" v-if="btnType===2">取消</el-button>
            <el-button type="button" class="btn-bg-green" @click="submitForm('ruleForm')" v-if="btnType===2">添加</el-button>
        </div>
    </el-dialog>
    <!-- 修改弹窗 -->
    <el-dialog class="dictory-ruleForm" title="修改字典信息" :visible.sync="dialogChangeFormVisible" width="530px">
        <div class="pms-body">
            <el-form
                :model="changeForm"
                :rules="rules"
                ref="ruleForm"
                class="demo-ruleForm"
                label-width="76px"
                label-position="top"
            >
                <el-form-item label="字典名称" prop="dictName" hide-required-asterisk="false">
                <el-input  v-model="changeForm.dictName" style="width:450px" clearable placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="字典类型" prop="dictType">
                <el-input v-model="changeForm.dictType" style="width:450px" clearable ></el-input>
                </el-form-item>
                <el-form-item label="字典状态" prop="status">
                <el-radio-group v-model="changeForm.status">
                        <el-radio :label="1">是</el-radio>
                        <el-radio :label="0">否</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="备注" class="dictory1">
                <el-input
                    style="width:450px"
                    type="textarea"
                    v-model="changeForm.remark"
                    placeholder="请输入"
                ></el-input>

                </el-form-item>
            </el-form>
        </div>
        <div slot="footer" class="dialog-footer clrfix">
            <el-button type="button" class="btn-line-green" @click="closeDailog()">取消</el-button>
            <el-button type="button" class="btn-bg-green" @click="submitChangeForm('ruleForm')">确认</el-button>
        </div>
    </el-dialog>
    <!-- 删除提示框 -->
    <sl-confirm :confirmObj="confirmObj" @btn1="deleteOneDict"></sl-confirm>
  </div>
</template>

<script>
export default {
  name: "grouplist",
  data() {
    return {
      minHeight:'700',
      tableData: [],
      pageData: {
        pageSize: 15, //每页个数
        total: 0, //总条数
        current: 1, //当前页
        pageTotal: 0 //总页数
      },
      confirmObj:{},
      dialogFormVisible: false,
      dialogChangeFormVisible:false,
      btnType: 1, //更具按钮类型弹框内容显示不同
      value: true,
      // 添加弹框数据
      ruleForm: {
        dictName: "",
        dictType: "",
        remark: "",
        status: "",
      },
      // 修改弹框数据
      changeForm:{
        dictName: "",
        dictType: "",
        remark: "",
        status: "",
      },
      rules: {
        dictName: [
          { required: true, message: "请输入字典名称", trigger: "blur" }
        ],
        dictType: [{ required: true, message: "请输入字典类型", trigger: "blur" }],
        status:[{ required: true, message: "请选择字典状态", trigger: "blur" }]
      },
    };
  },
  created() {

  },
  mounted() {
      this.getData()
  },
  computed: {
   
  },
  methods: {
     // 查询数据
    Search() {
      this.$set(this.pageData, "current", 1);
      this.getData();
    },
    //   获取数据
    getData(){
        let query = {
            "pageCurrent":this.pageData.current,
            "pageSize":this.pageData.pageSize
        }
         this.$store.dispatch('groupList/getDictpage',query).then(res=>{
            if(res){
                this.tableData = res.records
                this.pageData = res
                this.$set(this.pageData,'pageSize',res.size)
                this.$set(this.pageData, "current", res.current);
                this.$set(this.pageData, "pageTotal", res.pages);
            }
        })
    },
    // 删除字典
    deleteDict(item){
        this.confirmObj = {
            show: true,
            title: "提示",
            icon: 1, //1:提示图标  2:成功图标  3：失败图标
            content: "",
            tip: "确定要删除？",
            query: {
            id:item.id
            },
            btn: ["取消", "确定"],
            cancelIndex: 0 //0:取消的下标 -1:表示没有取消按钮
        }
    },
    //发送删除字典请求
    deleteOneDict(item){
        let id = '?id='+item.id
        this.$store.dispatch('groupList/deleteDict',id).then((res)=>{
            this.Search()
        })
    },
    // 关闭弹框
    closeDailog(){
        this.dialogFormVisible = false;
        this.dialogChangeFormVisible = false;
        this.ruleForm = {}
        this.changeForm = {}
        this.$refs.ruleForm.resetFields()
    },
    // 设置表头的背景图
    headerClass(){
      return "backgroundImage:url('/static/img/border.png');"
      // return "backgroundColor:rgba(255,255,255,0.13);"
    },
    // 打开弹框
    openDialog(k) {
      this.dialogFormVisible = true;
      this.btnType = k;
    },
    // 查看详情
    openDetail(item){
      this.dialogFormVisible = true;
      this.btnType = 3
      this.ruleForm = JSON.parse(JSON.stringify(item))
      if(item.status == "Y"){
          this.ruleForm.status = 1
      }else{
          this.ruleForm.status = 0
      }
    },
    // 修改数据
    openChange(item){
      this.dialogChangeFormVisible = true
      this.changeForm = JSON.parse(JSON.stringify(item))
      if(item.status == "Y"){
          this.changeForm.status = 1
      }else{
          this.changeForm.status = 0
      }
    },
    // 添加弹框确定按钮
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
        //   添加字典
        let data = {
            dictName: this.ruleForm.dictName,
            dictType: this.ruleForm.dictType,
            remark: this.ruleForm.remark,
        }
        if(this.changeForm.status === 0){
          data.status = "N"
        }else{
            data.status = "Y"
        }
         this.$store.dispatch('groupList/addDict',data).then(res=>{
            this.getData()
            this.closeDailog()
        })
        } else {
          return false;
        }
      });
    },
    // 修改确认按钮
    submitChangeForm(formName){
         this.$refs[formName].validate(valid => {
        if (valid) {
        //   修改字典
        let data = {
            dictName: this.changeForm.dictName,
            dictType: this.changeForm.dictType,
            remark: this.changeForm.remark,
            id:this.changeForm.id
        }
        if(this.changeForm.status === 0){
            alert("123w1")
          data.status = "N"
        }else{
            data.status = "Y"
        }
         this.$store.dispatch('groupList/upadteDict',data).then(res=>{
            this.getData()
            this.closeDailog()
        })
        } else {
          return false;
        }
      });
    },
    // 集团电话校验
    phone(rule, value, callback) {
      let groupPhone = this.$refs.groupPhone.value;
      if (groupPhone === "") {
        callback(new Error("请输入集团电话"));
      } else if (groupPhone !== "") {
        if (!this.$checkLandPhone(groupPhone)) {
          callback(new Error("格式错误"));
        } else {
          callback();
        }
      }
    },
    pageChange(){
      this.getData()
    }
  },
  watch: {
    selectedHotelId(val) {
      if (val) {
        this.pageData = {
          pageSize: 15, //每页个数
          current: 1 //当前页
        };
        let router = this.$route.path;
        if (router == "/grouplist") {
          this.getData();
        }
      }
    }
  }
};
</script>
