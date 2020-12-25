<style lang="scss">
html,
body {
  height: 100%;
  background-image: url("/static/img/newbg.png");
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  background: #000;
}
#app {
  height: 100%;
  .main-box {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    background-image: url("/static/img/newbg.png");
    background-size: 100% 100%;
    background-position: 50% 50%;
    .public-top {
      padding: 0 30px;
      width: 100%;
      height: 86px;
      display: flex;
      position: absolute;
      z-index: 25;
      align-items: center;
      background-image: url("/static/img/top.png");
      background-size: 100%;
      .public-top-left {
        float: left;
        color: white;
        display: flex;
        align-items: center;
        width: 33%;
        padding-left: 18px;
        img {
          display: block;
          width: 38px;
          height: 38px;
          margin-right: 30px;
          flex-shrink: 0;
        }
      }
      .public-top-title {
        font-size: 28px;
        font-family: Source Han Sans SC;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        margin: 0 auto;
        box-sizing: border-box;
        width: 33%;
        text-align: center;
        img {
          width: 28px;
          height: 28px;
          cursor: pointer;
        }
        img:first-child {
          margin-right: 20px;
        }
        img:last-child {
          margin-left: 20px;
        }
      }
      .public-top-logo {
        float: right;
        color: white;
        display: flex;
        width: 33%;
        justify-content: flex-end;
        img:first-child {
          margin-right: 19px;
        }
        img:last-child {
          padding-right: 18px;
        }
        p {
          width: 1px;
          height: 38px;
          background: rgba(255, 255, 255, 1);
          opacity: 0.5;
          margin-right: 19px;
        }
      }
    }
    .public-center {
      width: 100%;
      color: white;
      padding: 0px 30px;
      padding-top: 30px;
      margin-top: 72px;
      box-sizing: border-box;
      height: 100%;
      flex: 1;

      .left-box {
        width: 260px;
        left: -260px;
        top: 0;
        height: 100%;
        position: absolute;
        z-index: 20;
        clear: both;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .zw {
          height: 76px;
          background: transparent;
        }
        .UserInfo {
          text-align: center;
          box-sizing: border-box;
          padding-top: 40px;
          padding-bottom: 20px;
          background: #212121;
          img {
            margin-bottom: 16px;
          }
          p {
            margin-bottom: 40px;
            font-size: 16px;
            font-family: Source Han Sans SC;
            font-weight: 400;
            line-height: 27px;
            color: rgba(255, 255, 255, 1);
          }
          // 边框
          span {
            display: block;
            width: 220px;
            height: 1px;
            background: #000000;
            opacity: 1;
            margin: 0 auto;
          }
        }
        .logo {
          width: 100%;
          font-size: 14px;
          background: #212121;
          text-align: center;
          vertical-align: middle;
          line-height: 54px;
          display: flex;
          align-items: flex-end;
          flex: 1;
          cursor: pointer;
          display: flex;
          box-sizing: border-box;
          span {
            display: block;
            width: 130px;
            height: 54px;
            background: rgba(255, 255, 255, 0.08);
            color: rgba(255, 255, 255, 1);
            opacity: 1;
            bottom: 0;
            float: left;
          }
          span:hover {
            color: #00ffee;
          }
          span:first-child {
            border-right: 1px solid black;
            // color: white;
          }
        }
        .el-menu {
          border-right: solid 1px #212121;
          background: #212121;
          span {
            color: rgba(255, 255, 255, 0.5);
          }
          .el-menu-item-group__title {
            display: none;
          }
          .el-submenu .el-menu-item {
            height: 40px;
            line-height: 40px;
            padding: 0 45px;
            min-width: 200px;
          }
          // 多级菜单打开字体颜色
          .el-submenu.is-opened {
            background-color: #212121;
            .el-submenu__title {
              span {
                // color:#00FFEE;
                color: rgba(255, 255, 255, 0.5);
              }
              .el-icon-location {
                // color: #00FFEE;
                color: rgba(255, 255, 255, 0.5);
              }
              .el-submenu__icon-arrow {
                color: #fff;
              }
              .iconzu13504 {
                opacity: 1;
                transform: rotate(-180deg);
                transition: 0.5s;
              }
              .iconfont-nav-left {
                opacity: 1;
                color: rgba(255, 255, 255, 0.5);
              }
            }
          }
          .el-submenu__title {
            padding: 0 30px;
            .iconfont-nav-left {
              color: white;
              margin-right: 10px;
              float: left;
              opacity: 0.5;
            }
            .iconfont-nav-right {
              color: white;
              opacity: 0.3;
              font-size: 12px;
              float: right;
              transition: 0.5s;
            }
            &:hover {
              span {
                color: #00ffee;
              }
              .iconfont-nav-left {
                opacity: 1;
                color: #00ffee;
              }
              .iconfont-nav-right {
                opacity: 1;
              }
            }
          }
        }
        .el-menu {
          .icon-public {
            display: inline-block;
            width: 14px;
            height: 14px;
            margin-right: 5px;
          }
          .el-icon-arrow-down {
            &::before {
              content: "";
            }
            display: inline-block;
            width: 10px;
            height: 10px;
            // background: url(../assets/img/sm-up-icon.svg) no-repeat center center;
            // background-size: 100% 100%;
          }
          //替换图标
          .index-icon {
            background: url(../assets/img/sm-index-icon.svg) no-repeat center
              center;
            background-size: 100% 100%;
          }
          .privilegeManagement {
            background: url(../assets/img/sm-qxgl-icon.svg) no-repeat center
              center;
            background-size: 100% 100%;
          }
          .hotelManagement {
            background: url(../assets/img/sm-ddgl-icon.svg) no-repeat center
              center;
            background-size: 100% 100%;
          }
          .IntelligentControl {
            background: url(../assets/img/sm-znkz-icon.svg) no-repeat center
              center;
            background-size: 100% 100%;
          }
          .dataReport {
            background: url(../assets/img/sm-sjbb-icon.svg) no-repeat center
              center;
            background-size: 100% 100%;
          }
          .occupancyManagement {
            background: url(../assets/img/sm-rugl-icon.svg) no-repeat center
              center;
            background-size: 100% 100%;
          }
          .is-active {
            .index-icon {
              background: url(../assets/img/sm-index-active-icon.svg) no-repeat
                center center;
              background-size: 100% 100%;
            }
            .privilegeManagement {
              background: url(../assets/img/sm-qxgl-active-icon.svg) no-repeat
                center center;
              background-size: 100% 100%;
            }
            .hotelManagement {
              background: url(../assets/img/sm-ddgl-active-icon.svg) no-repeat
                center center;
              background-size: 100% 100%;
            }
            .IntelligentControl {
              background: url(../assets/img/sm-znkz-active-icon.svg) no-repeat
                center center;
              background-size: 100% 100%;
            }
            .dataReport {
              background: url(../assets/img/sm-sjbb-active-icon.svg) no-repeat
                center center;
              background-size: 100% 100%;
            }
            .occupancyManagement {
              background: url(../assets/img/sm-rugl-active-icon.svg) no-repeat
                center center;
              background-size: 100% 100%;
            }
          }
        }

        .el-menu-item {
          color: #fff;
          position: relative;
          .iconfont-nav-index {
            color: white;
            font-size: 14px;
            opacity: 0.5;
            margin-right: 10px;
            &.active {
              opacity: 1;
              color: #00ffee;
            }
          }
          a {
            color: rgba(255, 255, 255, 0.5);
          }
          span {
            font-size: 14px;
            color: #fff;
            opacity: 0.5;
            &.active {
              opacity: 1;
            }
          }
        }

        .el-menu-item:focus,
        .el-menu-item:hover {
          color: #00ffee;
          background: #212121;
          .iconfont-nav-index {
            opacity: 1;
            color: #00ffee;
          }
          span {
            opacity: 1;
            color: #00ffee;
          }
        }
        .el-submenu__title:hover {
          color: #fff;
          background: #212121;
        }
        .el-menu-item.is-active {
          color: red;
          span {
            color: #00ffee;
          }
          .el-submenu__title {
            span {
              color: #fff;
            }
          }
        }
        .el-menu-item-group > ul {
          background: #212121;
          padding: 0px 15px;
          .el-menu-item-group:hover {
            background: #212121;
          }
          .el-menu-item:hover {
            a {
              color: #00ffee;
            }
          }
          .el-menu-item.is-active {
            background: #212121;
            a {
              color: #00ffee;
              position: absolute;
              width: 100%;
              height: 100%;
              padding-left: 40px;
              box-sizing: border-box;
              line-height: 40px;
              left: 0;
              top: 0;
            }
          }
        }
      }
      .container-box {
        background: #ecf1f5;
        width: 100%;
        padding: 0px 30px;
        padding-top: 60px;
      }
    }
  }
  .bg2 {
    background-image: url("/static/img/bg1.png");
    background-size: 100%;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }
}
#TopSelect {
  .el-select {
    width: 180px;
    height: 34px;
    display: block;
    z-index: 5;
  }
  .el-input--suffix {
    width: 180px;
  }
  .el-input--suffix:hover {
    border-color: #00ffee;
  }
}
</style>
<style>
@import "//at.alicdn.com/t/font_2029453_zcpgtx3bu7.css";
</style>

<template>
  <div class="main-box" :class="{ bg2: dataSelect && tabIndex == 0 }">
    <!-- 公共顶部 -->
    <div class="public-top">
      <div class="public-top-left" id="TopSelect">
        <img
          style="width: 38px; height: 38px"
          src="/static/img/menue.png"
          @click="openMenue()"
        />
        <el-date-picker
          v-model="setTime"
          type="date"
          v-show="dataSelect"
          value-format="timestamp"
          placeholder="选择日期"
          :clearable="false"
          @change="selectTime"
        ></el-date-picker>
        <el-cascader
          v-show="dataSelect && tabIndex == 0"
          style="margin-left: 15px"
          v-model="value"
          :options="PMSgroupList"
          @change="handleChange"
        ></el-cascader>
        <el-cascader
          v-show="dataSelect && tabIndex == 1"
          style="margin-left: 15px"
          v-model="value"
          :options="groupList"
          @change="handleChange"
        ></el-cascader>
      </div>
      <div class="public-top-title">
        <img
          v-if="tabIndex == 0"
          v-show="dataSelect"
          src="/static/img/left.png"
        />
        <img v-else src="/static/img/leftH.png" @click="Change()" />
        {{ name }}
        <img
          v-if="tabIndex == 0"
          v-show="dataSelect"
          src="/static/img/right.png"
          @click="Change()"
        />
        <img v-else src="/static/img/rightS.png" />
      </div>
      <div class="public-top-logo">
        <!-- <img src="/static/img/logo1.png" /> -->
        <!-- <p></p> -->
        <!-- <img src="/static/img/logo2.png" /> -->
        <!-- <> -->
      </div>
    </div>
    <!--下方内容区域-->
    <div class="public-center">
      <!-- 左侧菜单 -->
      <div class="left-box" :style="display">
        <!-- 占位 -->
        <div>
          <div class="zw"></div>
          <div class="UserInfo">
            <img src="/static/img/tx.png" />
            <p>{{ userInfo.name }}</p>
            <span></span>
          </div>
          <el-menu
            :default-active="path"
            @open="handleOpen"
            @close="handleClose"
            router
            unique-opened
          >
            <el-menu-item index="/" @open="handleOpen">
              <i
                class="iconfont iconfont-nav-index iconzu13496"
                :class="{ active: path == '/' }"
              ></i>
              <span slot="title" :class="{ active: path == '/' }">首页</span>
            </el-menu-item>
          </el-menu>
        </div>
        <div class="logo">
          <span @click="rePassword">
            <i
              class="iconfont iconfont-nav-index iconzu13501"
              style="margin-right: 10px"
            ></i>
            修改密码
          </span>
          <span @click="dialogOut">
            <i
              class="iconfont iconfont-nav-index iconzu13500"
              style="margin-right: 10px"
            ></i>
            退出登录
          </span>
        </div>
      </div>
      <!-- 中间内容展示 -->
      <div class="center-box" @click="closeMenue()">
        <router-view></router-view>
      </div>
    </div>
    <el-dialog
      title="修改密码"
      class="pms-dialog"
      :visible.sync="dialogPwd"
      width="530px"
      :before-close="Close"
    >
      <div class="pms-body">
        <el-form
          :model="Pwdform"
          :rules="rules"
          ref="ruleForm"
          label-width="80px"
          label-position="top"
        >
          <el-form-item label="账号">
            <!-- <label style="color:white">{{userInfo.accessToken?userInfo.accessToken.split("-")[0]:''}}</label> -->
            <el-input
              v-model="userInfo.name"
              type="text"
              disabled
              style="width: 450px"
              auto-complete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="原密码" prop="password">
            <el-input
              v-model="Pwdform.password"
              type="password"
              style="width: 450px"
              placeholder="请输入"
              clearable
              auto-complete="new-password"
            ></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="newPassword">
            <el-input
              v-model="Pwdform.newPassword"
              type="password"
              style="width: 450px"
              placeholder="请输入新密码"
              clearable
              auto-complete="new-password"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="newPassword2">
            <el-input
              v-model="Pwdform.newPassword2"
              style="width: 450px"
              clearable
              placeholder="请再次输入新密码"
              auto-complete="new-password"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer clrfix">
        <el-button class="btn-line-green" type="button" @click="Close"
          >取消</el-button
        >
        <el-button class="btn-bg-green" type="button" @click="changePwd"
          >确认</el-button
        >
      </div>
    </el-dialog>

    <sl-confirm :confirmObj="confirmObj" @btn1="loginOut"></sl-confirm>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    let password = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入原密码"));
      } else if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/.test(value)) {
        callback(new Error("密码格式为6-12位字母加数字"));
      } else {
        callback();
      }
    };
    let validatePassPwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/.test(value)) {
        callback(new Error("密码格式为6-12位字母加数字"));
      } else if (value !== this.Pwdform.newPassword) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      display: "left:-260px",
      path: "",
      setTime: "",
      groupId: "",
      PMSgroupId: "",
      groupList: [],
      PMSgroupList: [],
      hotelId: "",
      hotelList: [],
      name: "",
      dataSelect: false,
      dialogPwd: false,
      tabIndex: 0,
      userInfo: {},
      confirmObj: {},
      rules: {
        password: [{ required: true, validator: password, trigger: "blur" }],
        newPassword: [
          { required: true, validator: validatePassPwd, trigger: "blur" },
        ],
        newPassword2: [
          { required: true, validator: validatePassPwd, trigger: "blur" },
        ],
      },
      Pwdform: {
        username: "",
        password: "",
        newPassword: "",
        newPassword2: "",
      },
      open: "",
      value: "",
    };
  },
  filters: {
    addClass(val) {
      switch (val) {
        case "/privilegeManagement":
          return "iconGroup17";
          break;
        case "/hotelManagement":
          return "iconjiudian";
          break;
        case "/IntelligentControl":
          return "iconrengongzhineng";
          break;
        case "/dataReport":
          return "iconxiaoxi";
          break;
        case "/occupancyManagement":
          return "iconGroup-1";
          break;
        case "/noticeManage":
          return "icontongzhi";
          break;
        default:
          break;
      }
    },
  },
  computed: {},
  methods: {
    handleChange(val) {
      this.$store.commit("dictionary/setGroupId", val[0]);
      this.$store.commit("dictionary/setHotelId", val[1]);
    },
    // 菜单的隐藏展示
    openMenue() {
      if (this.display.indexOf("left:-260px") != -1 && this.open != true) {
        this.display = "left:0px;transition:left linear .5s";
        this.open = true;
        return;
      }
      if (this.open == true) {
        this.display = "left:-260px;transition:left linear .5s";
        this.open = false;
        return;
      }
    },
    closeMenue() {
      if (this.open == true) {
        this.display = "left:-260px;transition:left linear .5s";
        this.open = false;
        return;
      }
    },
    Change() {
      this.hotelId = "";
      this.PMSgroupId = "";
      this.groupId = "";
      this.$store.commit("dictionary/setHotelId", "");
      if (this.tabIndex == 0) {
        this.getGrounpList();
        this.tabIndex = 1;
        window.localStorage.setItem("tabIndex", this.tabIndex);
        this.value = [1000, ""];
        this.groupId = this.value[0];
        localStorage.setItem("groupId", this.groupId);
        this.$store.commit("dictionary/setGroupId", this.groupId);
      } else {
        this.tabIndex = 0;
        this.getPMSgroupList();
        window.localStorage.setItem("tabIndex", this.tabIndex);
        this.value = ["961545985934856", ""];
        this.PMSgroupId = this.value[0];
        localStorage.setItem("groupId", this.PMSgroupId);
        this.$store.commit("dictionary/setGroupId", this.PMSgroupId);
      }
    },
    handleOpen(key, path) {},
    handleClose(key, path) {},
    getName(path) {
      switch (path) {
        case "/":
          this.name = "数据监控平台";
          this.dataSelect = true;
          break;
        case "/grouplist":
          this.name = "smartLink集团管理";
          this.dataSelect = false;
          break;
        case "/pmsGrouplist":
          this.name = "pms集团管理";
          this.dataSelect = false;
          break;
        case "/hotelManagement":
          this.name = "集团管理";
          this.dataSelect = false;
          break;
        case "/roleList":
          this.name = "smartLink集团管理员";
          this.dataSelect = false;
          break;
        case "/pmsroleList":
          this.name = "pms集团管理员";
          this.dataSelect = false;
          break;
        case "/accountList":
          this.name = "域账号管理";
          this.dataSelect = false;
          break;
        case "/dictionary":
          this.name = "字典管理";
          this.dataSelect = false;
          break;
        case "/notice":
          this.name = "通知管理";
          this.dataSelect = false;
          break;
        default:
          break;
      }
    },
    // 退出登录提示-弹框
    dialogOut() {
      this.userOperation = false;
      this.confirmObj = {
        show: true,
        title: "提示",
        icon: 1, //1:提示图标  2:成功图标  3：失败图标
        content: "",
        tip: "确定要退出？",
        query: {},
        btn: ["取消", "确定"],
        cancelIndex: 0, //0:取消的下标 -1:表示没有取消按钮
      };
    },
    //退出登录
    loginOut() {
      this.$store.dispatch("login/loginOut").then((res) => {
        location.reload();
      });
    },
    // 获取PMS集团下拉
    getPMSgroupList() {
      this.$store.dispatch("login/getPMSGrounpList").then((res) => {
        this.PMSgroupList = res;
        res.map((item) => {
          item.value = item.id;
          item.children.map((item) => {
            if (item.children.length <= 0) {
              item.children = null;
              item.value = item.id;
            }
          });
          item.children.unshift({ label: "全部", value: "" });
        });
      });
    },
    // 获取smartlink集团下拉列表
    getGrounpList() {
      this.$store.dispatch("login/getGrounpList").then((res) => {
        this.groupList = res;
        res.map((item) => {
          item.value = item.id;
          item.children.map((item) => {
            if (item.children.length <= 0) {
              item.children = null;
              item.value = item.id;
            }
          });
          item.children.unshift({ label: "全部", value: "" });
        });
      });
    },
    selectTime(val) {
      localStorage.setItem("dateStr", this.setTime);
      this.$store.commit("dictionary/setDate", this.setTime);
    },
    // 修改密码
    rePassword() {
      this.userOperation = false;
      this.dialogPwd = true;
    },
    Close() {
      (this.dialogPwd = false),
        this.$nextTick(() => {
          this.$refs.ruleForm.resetFields();
        });
    },
    //修改密码确认
    changePwd() {
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          let params = {
            username: this.userInfo.accessToken.split("-")[0],
            password: this.Pwdform.password,
            newPassword: this.Pwdform.newPassword,
          };
          this.$store.dispatch("login/changePwd", params).then((res) => {
            this.$message({
              message: "修改成功,请重新登录！",
              type: "success",
            });
            this.$refs["ruleForm"].resetFields();
            this.dialogShow = false;
            setTimeout(() => {
              this.loginOut();
            }, 2000);
          });
        }
      });
    },
  },
  mounted() {
    this.userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
    this.path = this.$route.path;
    this.getName(this.path);
    let Time = new Date().getTime();
    this.setTime = Time;
    localStorage.setItem("dateStr", this.setTime);
    this.$store.commit("dictionary/setDate", this.setTime);
    this.getPMSgroupList();
    if (this.tabIndex == 0) {
      this.value = ["961545985934856", ""];
      this.PMSgroupId = "961545985934856";
      localStorage.setItem("groupId", this.PMSgroupId);
      this.$store.commit("dictionary/setGroupId", this.PMSgroupId);
    } else {
      this.value = ["1000", "10006101000737"];
      this.groupId = 1000;
      localStorage.setItem("groupId", this.groupId);
      this.$store.commit("dictionary/setGroupId", this.groupId);
    }
  },
  watch: {
    "$route.path"(newval) {
      this.path = newval;
      this.getName(this.path);
      this.closeMenue();
      if (this.path != "/") {
        (this.dataSelect = false), (this.tabIndex = 0);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 1600px) and (min-width: 1080px) {
  #app {
    height: 100%;
    .main-box {
      height: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      background-image: url("/static/img/newbg.png");
      background-size: 100% 100%;
      background-position: 50% 50%;
      .public-top {
        padding: 0 30px;
        width: 100%;
        height: 66px;
        display: flex;
        position: absolute;
        z-index: 25;
        align-items: center;
        background-image: url("/static/img/top.png");
        background-size: 100%;
        background-repeat: no-repeat;
        line-height: 66px;
        // flex: 1;
        .public-top-left {
          float: left;
          color: white;
          display: flex;
          align-items: center;
          width: 33%;
          padding-left: 18px;
          justify-content: space-between;
          img {
            display: block;
            width: 38px;
            height: 38px;
            margin-right: 30px;
            flex-shrink: 0;
          }
        }
        .public-top-title {
          font-size: 28px;
          line-height: 28px;
          font-family: Source Han Sans SC;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
          margin: 0 auto;
          box-sizing: border-box;
          width: 33%;
          text-align: center;
          img {
            width: 28px;
            height: 28px;
            cursor: pointer;
          }
          img:first-child {
            margin-right: 2px;
          }
          img:last-child {
            margin-left: 2px;
          }
        }
        .public-top-logo {
          float: right;
          color: white;
          display: flex;
          width: 33%;
          justify-content: flex-end;
          align-items: center;
          img:first-child {
            margin-right: 19px;
            height: 36px;
          }
          img:last-child {
            padding-right: 18px;
            height: 36px;
          }
          p {
            width: 1px;
            height: 38px;
            background: rgba(255, 255, 255, 1);
            opacity: 0.5;
            margin-right: 19px;
          }
        }
      }
      .public-center {
        width: 100%;
        color: white;
        padding: 0px 30px;
        padding-top: 20px;
        margin-top: 72px;
        box-sizing: border-box;
        height: 100%;
        flex: 1;

        .left-box {
          width: 260px;
          left: -260px;
          top: 0;
          height: 100%;
          position: absolute;
          z-index: 20;
          clear: both;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .zw {
            height: 76px;
            background: transparent;
          }
          .UserInfo {
            text-align: center;
            box-sizing: border-box;
            padding-top: 40px;
            padding-bottom: 20px;
            background: #212121;
            img {
              margin-bottom: 16px;
            }
            p {
              margin-bottom: 40px;
              font-size: 16px;
              font-family: Source Han Sans SC;
              font-weight: 400;
              line-height: 27px;
              color: rgba(255, 255, 255, 1);
            }
            // 边框
            span {
              display: block;
              width: 220px;
              height: 1px;
              background: #000000;
              opacity: 1;
              margin: 0 auto;
            }
          }
          .logo {
            width: 100%;
            font-size: 14px;
            background: #212121;
            text-align: center;
            vertical-align: middle;
            line-height: 54px;
            display: flex;
            align-items: flex-end;
            flex: 1;
            cursor: pointer;
            display: flex;
            box-sizing: border-box;
            span {
              display: block;
              width: 130px;
              height: 54px;
              background: rgba(255, 255, 255, 0.08);
              color: rgba(255, 255, 255, 1);
              opacity: 1;
              bottom: 0;
              float: left;
            }
            span:hover {
              color: #00ffee;
            }
            span:first-child {
              border-right: 1px solid black;
              // color: white;
            }
          }
          .el-menu {
            border-right: solid 1px #212121;
            background: #212121;
            span {
              color: rgba(255, 255, 255, 0.5);
            }
            .el-menu-item-group__title {
              display: none;
            }
            .el-submenu .el-menu-item {
              height: 40px;
              line-height: 40px;
              padding: 0 45px;
              min-width: 200px;
            }
            // 多级菜单打开字体颜色
            .el-submenu.is-opened {
              background-color: #212121;
              .el-submenu__title {
                span {
                  // color:#00FFEE;
                  color: rgba(255, 255, 255, 0.5);
                }
                .el-icon-location {
                  // color: #00FFEE;
                  color: rgba(255, 255, 255, 0.5);
                }
                .el-submenu__icon-arrow {
                  color: #fff;
                }
                .iconzu13504 {
                  opacity: 1;
                  transform: rotate(-180deg);
                  transition: 0.5s;
                }
                .iconfont-nav-left {
                  opacity: 1;
                  color: rgba(255, 255, 255, 0.5);
                }
              }
            }
            .el-submenu__title {
              padding: 0 30px;
              .iconfont-nav-left {
                color: white;
                margin-right: 10px;
                float: left;
                opacity: 0.5;
              }
              .iconfont-nav-right {
                color: white;
                opacity: 0.3;
                font-size: 12px;
                float: right;
                transition: 0.5s;
              }
              &:hover {
                span {
                  color: #00ffee;
                }
                .iconfont-nav-left {
                  opacity: 1;
                  color: #00ffee;
                }
                .iconfont-nav-right {
                  opacity: 1;
                }
              }
            }
          }
          .el-menu {
            .icon-public {
              display: inline-block;
              width: 14px;
              height: 14px;
              margin-right: 5px;
            }
            .el-icon-arrow-down {
              &::before {
                content: "";
              }
              display: inline-block;
              width: 10px;
              height: 10px;
              // background: url(../assets/img/sm-up-icon.svg) no-repeat center center;
              // background-size: 100% 100%;
            }
            //替换图标
            .index-icon {
              background: url(../assets/img/sm-index-icon.svg) no-repeat center
                center;
              background-size: 100% 100%;
            }
            .privilegeManagement {
              background: url(../assets/img/sm-qxgl-icon.svg) no-repeat center
                center;
              background-size: 100% 100%;
            }
            .hotelManagement {
              background: url(../assets/img/sm-ddgl-icon.svg) no-repeat center
                center;
              background-size: 100% 100%;
            }
            .IntelligentControl {
              background: url(../assets/img/sm-znkz-icon.svg) no-repeat center
                center;
              background-size: 100% 100%;
            }
            .dataReport {
              background: url(../assets/img/sm-sjbb-icon.svg) no-repeat center
                center;
              background-size: 100% 100%;
            }
            .occupancyManagement {
              background: url(../assets/img/sm-rugl-icon.svg) no-repeat center
                center;
              background-size: 100% 100%;
            }
            .is-active {
              .index-icon {
                background: url(../assets/img/sm-index-active-icon.svg)
                  no-repeat center center;
                background-size: 100% 100%;
              }
              .privilegeManagement {
                background: url(../assets/img/sm-qxgl-active-icon.svg) no-repeat
                  center center;
                background-size: 100% 100%;
              }
              .hotelManagement {
                background: url(../assets/img/sm-ddgl-active-icon.svg) no-repeat
                  center center;
                background-size: 100% 100%;
              }
              .IntelligentControl {
                background: url(../assets/img/sm-znkz-active-icon.svg) no-repeat
                  center center;
                background-size: 100% 100%;
              }
              .dataReport {
                background: url(../assets/img/sm-sjbb-active-icon.svg) no-repeat
                  center center;
                background-size: 100% 100%;
              }
              .occupancyManagement {
                background: url(../assets/img/sm-rugl-active-icon.svg) no-repeat
                  center center;
                background-size: 100% 100%;
              }
            }
          }

          .el-menu-item {
            color: #fff;
            position: relative;
            .iconfont-nav-index {
              color: white;
              font-size: 14px;
              opacity: 0.5;
              margin-right: 10px;
              &.active {
                opacity: 1;
                color: #00ffee;
              }
            }
            a {
              color: rgba(255, 255, 255, 0.5);
            }
            span {
              font-size: 14px;
              color: #fff;
              opacity: 0.5;
              &.active {
                opacity: 1;
              }
            }
          }

          .el-menu-item:focus,
          .el-menu-item:hover {
            color: #00ffee;
            background: #212121;
            .iconfont-nav-index {
              opacity: 1;
              color: #00ffee;
            }
            span {
              opacity: 1;
              color: #00ffee;
            }
          }
          .el-submenu__title:hover {
            color: #fff;
            background: #212121;
          }
          .el-menu-item.is-active {
            color: red;
            span {
              color: #00ffee;
            }
            .el-submenu__title {
              span {
                color: #fff;
              }
            }
          }
          .el-menu-item-group > ul {
            background: #212121;
            padding: 0px 15px;
            .el-menu-item-group:hover {
              background: #212121;
            }
            .el-menu-item:hover {
              a {
                color: #00ffee;
              }
            }
            .el-menu-item.is-active {
              background: #212121;
              a {
                color: #00ffee;
                position: absolute;
                width: 100%;
                height: 100%;
                padding-left: 40px;
                box-sizing: border-box;
                line-height: 40px;
                left: 0;
                top: 0;
              }
            }
          }
        }
        .container-box {
          background: #ecf1f5;
          width: 100%;
          padding: 0px 30px;
          padding-top: 60px;
        }
      }
    }
  }
}
</style>


