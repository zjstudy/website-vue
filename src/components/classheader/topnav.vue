<template>
  <div class="classheader">
    <div class="homeicon">
      <router-link to="/"><i class="iconfont icon-shouye"></i></router-link>
    </div>
    <ul class="list1">
      <li><a href="jacascript::void(0)">个人动态</a></li>
      <li><router-link to="/articlecom">文章</router-link></li>
      <li><a href="jacascript::void(0)">生活</a></li>
      <li><a href="jacascript::void(0)">留言</a></li>
      <li><a href="jacascript::void(0)">关于</a></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "topnav"
    }
</script>

<style lang="less" scoped>
  .classheader{
    position: fixed;
    display: flex;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 50px;
    background-color: rgb(50, 50, 50);
    box-shadow: 0 0 15px #3f4141;
    justify-content:space-between;
    font-family: fantasy;
    .list1{
      display: flex;
      height: 50px;
      line-height: 50px;
      justify-content:flex-end;
      margin-right: 100px;
      li{
        font-size: 20px;
        margin: 0 30px;
        a{
          color: rgba(255,255,255,.9);
        }
      }
    }
    .homeicon{
      display: flex;
      align-items: center;
      margin-left: 50px;
      .iconfont{
        color: white;
        font-size: 25px;
      }
    }
  }
</style>
