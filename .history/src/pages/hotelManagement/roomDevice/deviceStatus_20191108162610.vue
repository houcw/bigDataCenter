<!--房间列表-设备状态-->
<style scoped lang="scss">
  .device{
    background: $bg-body;
    .device-light{
      background: $white;
      margin: 0 10px;
      .device-light-title{
        line-height: 44px;
        display: flex;
        border-bottom:1px solid rgba(222,243,246,1);
        padding-left: 15px;
        img{
          display: block;
          margin-right: 10px;
          width: 16px;
          height: 16px;
          margin-top: 14px;
        }
        span{
          display: block;
          font-size:16px;
          color:$color-333;
          font-weight:600;
          margin-right: 5px;
        }
      }
      .empty-power-title{
        display: flex;
        justify-content: space-between;
        .empty-power-left{
          display: flex;
        }
        .empty-power-right{
          img{
            display: block;
            width:24px;
            height:24px;
          }
        }
      }
      .device-light-content{
        width: 100%;
        display: flex;
        .light-content-img{
          padding: 20px;
          border-right: 1px solid $bd-device;
          border-bottom: 1px solid $bd-device;
          img{
            width: 184px;
            height: 184px;
          }
        }
        .light-content{
          flex: 1;
          .light-content-item{
            width: 25%;
            float: left;
            line-height:30px;
            border-right: 1px solid $bd-device;
            border-bottom: 1px solid $bd-device;
            padding: 22px 20px;
            display: flex;
            justify-content: space-between;
            font-size: 16px;
            color: $color-444;
            &:nth-child(4n){
              border-right: 0;
            }
            div{
              display: flex;
              img{
                margin-right: 10px;
                width: 24px;
                height:24px;
                margin-top: 3px;
              }
              p{
                width:62px;
                background:rgba(0,194,204,0.1);
                border:1px solid $bg-color16;
                border-radius:15px;
                line-height: 30px;
                text-align: center;
                font-size: 14px;
                color:$color-333;
                &.status{
                  color:$color-999;
                  border:1px solid rgba(204,204,204,1);
                  background:rgba(153, 153, 153, 0.1);
                }
              }
            }
          }
        }
      }
    }
    .empty-power-supply{
      margin-bottom: 10px;
      .device-light-content{
        .light-content{
          .light-content-item{
            width: 20%;
            &:nth-child(5n){
              border-right: 0;
            }
            &:nth-child(4n){
              border-right: 1px solid $bd-device;
            }
          }
        }
      }
    }
    .devices{
      width: 100%;
      .devices-item{
        width: 25%;
        float: left;
        margin-top: 10px;
        padding: 0 5px;
        .item-box{
          background: white;
          .devices-item-title{
            line-height: 44px;
            display: flex;
            justify-content: space-between;
            padding: 0 20px 0 15px;
            border-bottom:1px solid rgba(222,243,246,1);
            .title-left{
              font-size: 16px;
              font-weight: 600;
              display: flex;
              .title-left-font{
                margin: 0 5px 0 10px;
              }
              .title-left-img{
                width: 16px;
                height: 16px;
                margin-top: 14px;
                display: block;
                img:last-child{
                  width: 14px;
                  height: 14px;
                  margin-top:15px;
                }
              }
              .tip-img{
                margin-top: -4px;
              }
              .tipIcon:hover{
                cursor: pointer;
              }
            }
            .title-right{
              display: flex;
              line-height: 44px;
              span{
                font-size:13px;
                color:rgba(85,204,128,1);
                opacity:1;
                display: block;
                line-height: 44px;
                margin: 0 10px 0 4px;
              }
              img{
                width: 24px;
                height: 24px;
                display: block;
                margin-top: 10px;
              }
            }
          }
          .devices-item-content{
            padding: 20px;
            div{
              width: 100%;
              height: 184px;
              background: rgba(237, 244, 249, 1);
              background-image: url("../../../../static/img/img_air.svg");
              background-repeat: no-repeat;
              background-size: 300px 188px;
              background-position: center;
            }
          }
        }
        &:nth-child(4n+1){
          padding-left: 10px;
        }
        &:nth-child(4n){
          padding-right: 10px;
        }
      }
    }
    .tip{
      position: relative;
      &:hover{
        cursor: pointer;
        .tip-hover{
          display: block;
        }
      }
      img{
        width: 14px;
        height: 14px;
        margin-top: 15px;
      }
      .tip-hover{
        position:absolute;
        top:0;
        left: 28px;
        width: 287px;
        background:rgba(0,0,0,0.7);
        padding: 20px;
        display: none;
        p{
          font-size:12px;
          line-height:20px;
          color:rgba(255,255,255,1);
          opacity:1;
          margin-bottom: 15px;
          &:last-child{
            margin-bottom: 0;
          }
        }
        .tip-title{
          font-weight:600;
          position: relative;
          height:20px;
          line-height:20px;
          margin-bottom: 10px;
          span{
            position: absolute;
            font-size:14px;
            color:rgba(255,255,255,1);
            z-index: 2;
            line-height:24px;
            &:last-child{
              display: inline-block;
              bottom: 1px;
              width:70px;
              height:6px;
              background:rgba(0,194,204,1);
              z-index: 1;
            }
          }
        }
        .triangle {
          position: absolute;
          top:15px;
          left: -12px;
          width: 0;
          height: 0;
          border: 6px solid transparent;
          border-right: 6px solid rgba(0, 0, 0, 0.7);
        }
        &.tip-hover-left{
          left:-294px;
          .triangle{
            top:15px;
            left: 287px;
            border: 6px solid transparent;
            border-left: 6px solid rgba(0, 0, 0, 0.7);
          }
        }
      }
    }
    .tip-font{
      text-align: center;
      line-height: 200px;
      color: rgba(68, 68, 68, 1);
    }
  }
</style>

<!--电量低：electricLow.svg-->
<!--电量正常：electric.svg-->
<!--在线wifi:wifiIcon.svg-->
<!--离线wifi:wifiIcon.svg-->
<!--说明图标：tipIcon.svg-->


<template>
  <div class="device">
    <!--空开电源-->
    <div class="device-light empty-power-supply" v-if="false">
      <!--标题-->
      <div class="device-light-title empty-power-title">
        <div class="empty-power-left">
          <img src="@/assets/img/device_light.svg">
          <span>空开电源</span>
          <!--说明-->
          <div class="tip" v-if="false">
            <img src="@/assets/img/tipIcon.svg">
            <div class="tip-hover">
              <p class="tip-title">
                <span>智能小知识</span>
                <span></span>
              </p>
              <p>智能灯控：通过智能开关面板，使用户可通过手机的客户端软件或者客控页面轻松控制灯的开关，可以搭配语音机器人进行语音控制，支持多场景智能联动。</p>
              <p>智能开关面板采用zigbee技术，将控制信号通过zigbee网络连接到zigbee主机中，实现智能控制。</p>
              <!--三角-->
              <span class="triangle"></span>
            </div>
          </div>
        </div>
        <div class="empty-power-right">
          <img src="@/assets/img/wifiIcon.svg">
        </div>
      </div>
      <!--内容-->
      <div class="device-light-content">
        <div class="light-content clrfix">
          <div v-for="(i,index) in lightData.devices" class="light-content-item" :key="index">
            <p class="content-item-p">{{i.deviceName}}</p>
            <div>
              <p :class="{'status':i.status!=='ON'}">{{i.status==='ON'?'已开启':'已关闭'}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--灯-->
    <div class="device-light" v-if="lightData.devices.length>0">
      <!--标题-->
      <div class="device-light-title">
        <img src="@/assets/img/device_light.svg">
        <span>{{lightData.deviceTypeDescription}}</span>
        <!--说明-->
        <div class="tip">
          <img src="@/assets/img/tipIcon.svg">
          <div class="tip-hover">
            <p class="tip-title">
              <span>智能小知识</span>
              <span></span>
            </p>
            <p>智能灯控：通过智能开关面板，使用户可通过手机的客户端软件或者客控页面轻松控制灯的开关，可以搭配语音机器人进行语音控制，支持多场景智能联动。</p>
            <p>智能开关面板采用zigbee技术，将控制信号通过zigbee网络连接到zigbee主机中，实现智能控制。</p>
            <!--三角-->
            <span class="triangle"></span>
          </div>
        </div>
        </div>
      <!--内容-->
      <div class="device-light-content">
        <div class="light-content-img"><img src="@/assets/img/img_light.svg" alt=""></div>
        <div class="light-content clrfix">
          <div v-for="(i,index) in lightData.devices" class="light-content-item" :key="index">
            <p class="content-item-p">{{i.deviceName}}</p>
            <div>
              <img src="@/assets/img/wifiIcon.svg" v-if="i.isOnline==='Y'">
              <img src="@/assets/img/wifiOff.svg" v-if="i.isOnline!=='Y'">
              <p :class="{'status':i.status!=='ON'}">{{i.status==='ON'?'已开启':'已关闭'}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--其他设备-->
    <div class="devices clrfix" v-if="tableData.length>0">
      <div class="devices-item" v-for="(i,index) in tableData" :key="index">
        <div class="item-box">
          <div class="devices-item-title">
            <div class="title-left">
              <img :src="'../../../../static/img/'+i.titleIcon" class="title-left-img">
              <span class="title-left-font">{{i.deviceName}}</span>
              <!--说明-->
              <div class="tip">
                <img src="@/assets/img/tipIcon.svg" class="tip-img" v-if="i.tip">
                <div class="tip-hover" :class="{'tip-hover-left':(index+1)%4===0}">
                  <p class="tip-title">
                    <span>智能小知识</span>
                    <span></span>
                  </p>
                  <p v-for="(item,idx) in i.tip" :key="idx">{{item}}</p>
                  <!--三角-->
                  <span class="triangle"></span>
                </div>
              </div>
            </div>
            <div class="title-right">
              <img src="@/assets/img/electric.svg" v-if="i.deviceType==='LOCK' && i.battery>0.4">
              <img src="@/assets/img/electricLow.svg" v-if="i.deviceType==='LOCK' && i.battery<=0.4">
              <span v-if="i.deviceType==='LOCK'">{{i.battery}}%</span>
              <img src="@/assets/img/wifiIcon.svg" v-if="i.isOnline!=='N'">
              <img src="@/assets/img/wifiOff.svg" v-if="i.isOnline==='N'">
            </div>
          </div>
          <div class="devices-item-content">
            <div :style="{'backgroundImage':'url('+'../../../../static/img/'+i.bgcImg+')'}">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tip-font" v-if="lightData.devices.length===0 && tableData.length===0">暂无数据</div>
  </div>
</template>

<script>
    export default {
      name: "device-status",
      props: {
        roomListItem: Object
      },
      data() {
        return {
          tableData: [],
          lightData:[],
          bottomNum:0,
          content:''
        }
      },
      created() {
      },
      mounted() {
        this.getData();
      },
      methods: {
        getData() {
          let url='?roomId='+this.roomListItem.id;
          // 设备状态表数据
          this.$store.dispatch('htlmng/getDevicesStatus', url).then((res) => {
            this.tableData=[];
            this.lightData={
              deviceType: "SWITCH",
              deviceTypeDescription: "灯",
              devices:[]
            };
            for (let i in res){
              if (res[i].deviceType==='LIGHT'){
                  this.lightData=res[i];
              }
              if (res[i].deviceType==='SWITCH'){
                this.lightData.devices=this.lightData.devices.concat(res[i].devices);
                this.bottomNum=Math.floor(this.lightData.devices.length/4)*4-1;
              }
              if (res[i].deviceType!=='LIGHT' && res[i].deviceType!=='SWITCH'){
                for (let j in res[i].devices){
                  res[i].devices[j].deviceType=res[i].deviceType;
                }
                this.tableData=this.tableData.concat(res[i].devices);
              }
            }
            for (let i in this.tableData){
              // Icon                                    // Img
              // 灯:device_light.svg
              // 空调:device_air.svg                     img_air.svg
              // 窗帘:device_curtain.svg                 img_curtain.svg
              // 排气扇:device_exhaust.svg               img_exhaust.svg
              // 投影仪:device_projector.svg             img_projector.svg
              // 门锁:device_lock.svg                    img_lock.svg
              // 卷帘：device_roller_shutters.svg        img_roller_shutters.svg
              // 幕布：device_screen.svg                 img_screen.svg
              // 智能音箱：device_voice_box.svg          img_voice_box.svg
              // 情景面板：device_scene_panel.svg        img_scene_panel.svg
              // 窗帘面板：device_curtain_panel.svg      img_curtain_panel.svg
              // 电视:device_tv.svg                      img_tv.svg

              // titleIcon及bgcImg处理
              switch (this.tableData[i].deviceType) {
                case 'AC_REMOTE'://空调
                  this.tableData[i].titleIcon='device_air.svg';
                  this.tableData[i].bgcImg='img_air.svg';
                  this.tableData[i].tip=[
                    '智能空调：通过万能遥控器，使用户可通过手机的客户端软件或者客控页面轻松控制空调的开关、温度调节、模式切换等操作，支持多场景智能联动。',
                    '万能遥控器是一款对红外家电设备（如：空调、电视、机顶盒、 DVD、音响等）进行无线操作的智能控制器。普通家用红外电器可通过红外对码学习，ZigBee主机可通过ZigBee信号转发学习过的红外码，实现智能控制。'
                  ];
                  break;
                case 'TV_REMOTE'://投影仪
                    this.tableData[i].titleIcon='device_projector.svg';
                    this.tableData[i].bgcImg='img_projector.svg';
                    this.tableData[i].tip=[
                      '智能投影仪：通过万能遥控器，使用户可通过手机的客户端软件或者客控页面轻松控制投影仪的开关、音量调节、频道切换等操作，支持多场景智能联动。',
                      '万能遥控器是一款对红外家电设备（如：空调、电视、机顶盒、 DVD、音响等）进行无线操作的智能控制器。普通家用红外电器可通过红外对码学习，ZigBee主机可通过ZigBee信号转发学习过的红外码，实现智能控制。'
                    ];
                    if (this.tableData[i].deviceName==='电视'){
                      this.tableData[i].titleIcon='device_tv.svg';
                      this.tableData[i].bgcImg='img_tv.svg';
                      this.tableData[i].tip=null;
                    }
                  break;
                case 'CURTAIN'://窗帘电机
                  this.tableData[i].titleIcon='device_curtain.svg';
                  this.tableData[i].bgcImg='img_curtain.svg';
                  this.tableData[i].tip=[
                    '智能窗帘：通过①②两种产品，使用户可通过手机的客户端软件或者客控页面轻松调节窗帘的开启或关闭，让窗帘化身智能设备，可以搭配语音机器人进行语音控制，支持多场景智能联动。',
                    '①多功能控制盒多功能控制盒采用ZigBee技术，可以与智能窗帘电机连接，将控制信号通过ZigBee网络连接到ZigBee主机中，实现智能控制。',
                    '②智能窗帘电机智能窗帘电机使用的超静音开合帘电机，适用于市面上大部分窗帘款式，可以达到开合帘打开、关闭、暂停。'
                  ];
                  if (this.tableData[i].deviceName==='投影幕布'){
                    this.tableData[i].titleIcon='device_screen.svg';
                    this.tableData[i].bgcImg='pjf.svg';
                    this.tableData[i].tip=[
                      '智能投影幕布：通过多功能控制盒，使用户可通过手机的客户端软件或者客控页面轻松调节投影的开启或关闭，可以搭配语音机器人进行语音控制，支持多场景智能联动。',
                      '多功能控制盒采用ZigBee技术，可以与幕布电机连接，将控制信号通过ZigBee网络连接到ZigBee主机中，实现智能控制。'
                    ];
                  }else if (this.tableData[i].deviceName==='卷帘'){
                    this.tableData[i].titleIcon='device_roller_shutters.svg';
                    this.tableData[i].bgcImg='img_roller_shutters.svg';
                    this.tableData[i].tip=[
                      '智能卷帘：通过多功能控制盒，使用户可通过手机的客户端软件或者客控页面轻松调节卷帘的开启或关闭，让卷帘化身智能设备，可以搭配语音机器人进行语音控制，支持多场景智能联动。',
                      '多功能控制盒采用ZigBee技术，可以与卷帘电机连接，将控制信号通过ZigBee网络连接到ZigBee主机中，实现智能控制。'
                    ];
                  }
                  break;
                case 'SCENE_PANEL'://情景面板
                  this.tableData[i].titleIcon='device_scene_panel.svg';
                  this.tableData[i].bgcImg='img_scene_panel.svg';
                  this.tableData[i].tip=null;
                  // if (this.tableData[i].deviceName==='窗帘面板'){
                  //   this.tableData[i].titleIcon='device_curtain_panel.svg';
                  //   this.tableData[i].bgcImg='img_curtain_panel.svg';
                  // }
                break;
                case 'SPEAKER'://智能音箱
                  this.tableData[i].titleIcon='device_voice_box.svg';
                  this.tableData[i].bgcImg='img_voice_box.svg';
                  this.tableData[i].tip=null;
                  break;
                case 'DOOR_LOCK'://门锁
                  this.tableData[i].titleIcon='device_lock.svg';
                  this.tableData[i].bgcImg='img_lock.svg';
                  this.tableData[i].tip=[
                    '智能门锁：可实现密码开锁、门卡开锁、钥匙开锁，用户也可在手机通过客控页面操作一键开锁，搭配门禁机和自助入住机可实现人脸开锁。'
                  ];
                  break;
                case 'LOCK'://门锁
                  this.tableData[i].titleIcon='device_lock.svg';
                  this.tableData[i].bgcImg='img_lock.svg';
                  this.tableData[i].tip=[
                    '智能门锁：可实现密码开锁、门卡开锁、钥匙开锁，用户也可在手机通过客控页面操作一键开锁，搭配门禁机和自助入住机可实现人脸开锁。'
                  ];
                  break;
                case 'IR_TRANSPONDER'://红外转发器
                  this.tableData[i].titleIcon='infrared-transponder.svg';
                  this.tableData[i].bgcImg='img_infrared.svg';
                  this.tableData[i].tip=null;
                  break;
                case 'GATEWAY'://maxpad
                  this.tableData[i].titleIcon='maxpad.svg';
                  this.tableData[i].bgcImg='img_maxpad.svg';
                  this.tableData[i].tip=null;
                  break;
                default:
                  break;
              }
            }
          });
        }
      }
    }
</script>


