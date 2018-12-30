<template>
    <div class="bigbox">
      <topnav></topnav>
      <div class="logbox font20">
        <div class="list">
          <span>2111</span>
          <input type="text" placeholder="请输入账号">
        </div>
        <div class="list">
          <span>32</span>
          <input type="text" placeholder="请输入密码">
        </div>
      </div>
    </div>
</template>

<script>
  import topnav from '@c/classheader/topnav'
  export default {
    name: "login",
    components:{
      topnav
    }
  }
</script>

<style lang="less" scoped>
  .bigbox{
    display: flex;
    padding-top: 50px;
    height: 100vh;
    min-height: 600px;
    align-items:center;
    justify-content: center;
    .logbox{
      display: flex;
      width: 600px;
      height: 400px;
      border-radius: 10px;
      background: white;
      box-shadow: 0 0 10px #adafaf;
      flex-wrap: wrap;
      flex-direction:column;
      .list{
        line-height: 30px;
        margin: 20px 0;
        input{
          border: 1px solid #eeeeee;
        }
      }
    }
  }
</style>
