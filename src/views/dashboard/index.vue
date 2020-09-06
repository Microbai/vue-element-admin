<template>
  <div class="dashboard-container">
    <el-container>
      <el-aside width="240px">
        <div class="myAppSideWrap">
          <ul class="mTop10">
            <li class="myProcess">
              <i class="ming Icon icon-default icon icon-knowledge_file" />
              <span class="Gray_75 bold">我的流程</span>
            </li>
          </ul>
          <div class="appTitle Font13 Gray_9e bold">协作套件</div>
          <ul>
            <li>
              <i
                class="ming Icon icon-default icon icon-dynamic-empty"
                style="color: rgb(33, 150, 243); font-size: 18px;"
              />
              <span class="Gray_75">动态</span>
            </li>
            <li>
              <i
                class="ming Icon icon-default icon icon-task_basic_application"
                style="color: rgb(60, 202, 143); font-size: 18px;"
              /><span class="Gray_75">任务</span>
            </li>
            <li>
              <i
                class="ming Icon icon-default icon icon-sidebar_calendar"
                style="color: rgb(255, 109, 108); font-size: 18px;"
              /><span class="Gray_75">日程</span>
            </li>

            <router-link to="example/create">
              <li>
                <i
                  class="ming Icon icon-default icon icon-sidebar_knowledge"
                  style="color: rgb(248, 152, 3); font-size: 18px;"
                />
                <span class="Gray_75">文件</span>
              </li></router-link>

          </ul>
        </div>
      </el-aside>
      <el-main>
        <div class="myAppGroupBox">
          <div
            id="validProject-93ac0a40-ac20-4c4b-818a-9d1d5747def9"
            class="myAppGroupItem"
          >
            <div class="myAppGroupTitle">
              <span class="projectName">无聊的呱太</span>
              <div class="appBelongInfo isValid">
                <i
                  class="ming Icon icon-default icon icon-enterprise_network"
                  style="font-size: 24px; color: rgb(249, 180, 2);"
                /><span class="pointer Bold">社区版 1人</span>
              </div>
              <div class="sc-gwVKww cIxCDC invite">邀请成员</div>
            </div>
            <div class="sortableAppItemList myAppGroupDetail">
              <div class="sortableMyAppItemWrap">
                <div class="myAppItemWrap">
                  <div class="myAppItem">
                    <div
                      class="myAppItemDetail"
                      style="background-color: rgb(63, 81, 181);"
                    >
                      <i class="ming Icon icon-default icon icon-0_lego" />
                    </div>
                    <div class="lineClampTextBox appExplain" title="未命名应用">
                      <div
                        class="contentText"
                        style="-webkit-box-orient: vertical;"
                      >
                        未命名应用
                      </div>
                    </div>
                  </div>
                  <div class="star appItemIcon">
                    <i
                      class="ming Icon icon-default icon icon-star-hollow Font16"
                    />
                  </div>
                  <div class="myAppItemMore appItemIcon">
                    <i
                      class="ming Icon icon-default icon icon-task-point-more moreOperation Font18"
                    />
                  </div>
                </div>
              </div>
              <div class="addAppItemWrap">
                <div class="addAppItem" />
                <div class="info">添加应用</div>
              </div>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',

  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters(['roles'])
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'editorDashboard'
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  height: calc(100vh - 84px);
  .el-container {
    height: calc(100vh - 84px);
    .myAppSideWrap {
      box-sizing: border-box;
      width: 240px;
      height: 100%;
      padding: 12px 0;
      background-color: #fafafa;
      overflow-y: auto;
    }
    .myAppSideWrap ul {
      padding: 0 12px;
      font-size: 13px;
    }
    .myAppSideWrap li:hover {
      background-color: #efefef;
    }
    .myAppSideWrap li {
      display: flex;
      align-items: center;
      line-height: 40px;
      padding: 0 10px 0 12px;
      cursor: pointer;
      border-radius: 4px;
      list-style: none;
    }
    .myProcess .icon-knowledge_file {
      color: #607d8b;
      font-size: 18px;
    }

    [class*=" icon-"],
    [class^="icon-"] {
      font-family: MD_Icon !important;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      line-height: 1;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    .icon-knowledge_file:before {
      content: "\E9B2";
    }
    .icon-dynamic-empty:before {
      content: "\E9D2";
    }
    .icon-task_basic_application:before {
      content: "\EC2B";
    }
    .icon-sidebar_knowledge:before {
      content: "\EC75";
    }
    .icon-sidebar_calendar:before {
      content: "\EC6F";
    }
    .myAppSideWrap .appTitle {
      margin: 24px 0 10px 24px;
      font-size: 13px !important;
    }
    .myAppSideWrap li span {
      margin-left: 8px;
    }
  }

  aside {
    box-sizing: border-box;
    width: 240px;
    height: 100%;
    padding: 12px 0;
    background-color: #fafafa;
    overflow-y: auto;
  }

  .myAppGroupBox {
    max-width: 900px;
    margin: 0 auto;
  }
  .myAppGroupTitle {
    display: flex;
    align-items: center;
    margin: 56px 0 16px;
    padding-left: 10px;
  }

  .myAppGroupBox {
    max-width: 900px;
    margin: 0 auto;
  }

  .myAppGroupTitle .appBelongInfo {
    display: flex;
    align-items: center;
    margin: 0 10px 0 12px;
    padding: 0 10px;
    border-radius: 14px;
    line-height: 28px;
    text-align: center;
    font-size: 12px;
    background-color: #f5f5f5;
    cursor: pointer;
  }
  .icon-enterprise_network:before {
    content: "\EC79";
  }
  .cIxCDC {
    font-weight: bold;
    font-size: 13px;
    line-height: 28px;
    cursor: pointer;
    border-radius: 28px;
    padding: 0px 12px;
    transition: background-color 0.25s ease 0s;
  }
  .cIxCDC.invite {
    background-color: rgba(76, 175, 80, 0.1);
    color: rgb(76, 175, 80);
  }
  .myAppGroupWrap .myAppGroupBox {
    max-width: 900px;
    margin: 0 auto;
    right: -10px;
    position: absolute;
    overflow: scroll;
    overflow-x: hidden;
    top: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    flex: 1 1;
    background-color: #fff;
  }

  .myAppGroupDetail,
  .myAppGroupDetail .sortableAppItemList {
    display: flex;
    flex-wrap: wrap;
  }
  .myAppGroupItem:last-child .myAppGroupDetail {
    padding-bottom: 80px;
  }
  .myAppGroupDetail .myAppItemWrap {
    position: relative;
    margin: 16px 9px 0;
    height: 160px;
    transition: 0.25s ease-out;
    cursor: pointer;
  }
  .myAppGroupDetail .myAppItemWrap .myAppItem {
    box-sizing: border-box;
    width: 132px;
    padding: 10px 0;
    height: 100%;
  }
  .myAppGroupDetail .myAppItemWrap .myAppItemDetail {
    width: 88px;
    height: 88px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 0 auto;
    cursor: pointer;
  }
  .myAppGroupDetail .myAppItemWrap .myAppItemDetail .icon {
    font-size: 48px;
    color: #fff;
  }
  .icon-0_lego:before {
    content: "\EC7A";
  }
  .myAppGroupDetail .myAppItemWrap .appExplain {
    width: 100%;
    height: 36px;
    margin-top: 12px;
    text-align: center;
    padding: 0 16px;
    box-sizing: border-box;
    line-height: 18px;
    font-size: 14px;
  }
  .lineClampTextBox .contentText {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    word-break: break-all;
    width: 100%;
  }
  .addAppItemWrap {
    position: relative;
    width: 132px;
    box-sizing: border-box;
    height: 160px;
    padding: 10px;
    margin: 16px 9px 0;
  }
  .addAppItemWrap .addAppItem {
    position: relative;
    border-radius: 50%;
    background-color: #f5f5f5;
    color: #a7a7a7;
    transition: all 0.25s;
    cursor: pointer;
    width: 88px;
    height: 88px;
    margin: 0 auto;
    z-index: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .addAppItemWrap .addAppItem:after,
  .addAppItemWrap .addAppItem:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
  }
  .addAppItemWrap .addAppItem:before {
    width: 30px;
    border-top: 4px solid;
    margin: -2px 0 0 -15px;
  }

  .addAppItemWrap .addAppItem:after {
    height: 30px;
    border-left: 4px solid;
    margin: -15px 0 0 -2px;
  }
  .addAppItem:hover {
    background-color: #efefef;
  }
  .addAppItemWrap .info {
    margin-top: 12px;
    text-align: center;
  }
  .sortableMyAppItemWrap:hover .myAppItemWrap {
    background-color: #f5f5f5;
    border-radius: 12px;
    -webkit-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    transform: translateY(-10px);
  }
.myAppGroupDetail .sortableMyAppItemWrap.active .appItemIcon,
    .myAppGroupDetail
    .sortableMyAppItemWrap.isSelectingIcon
    .appItemIcon,
  .myAppWrap .myAppGroupDetail .sortableMyAppItemWrap:hover .appItemIcon {
    opacity: 1;
  }
}
</style>
