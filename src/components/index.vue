<template>
  <div>
    <div class="bigbox">
      <div class="content">
        <h1 class="animated bounceInLeft ">这是一个兴趣使然的网站</h1>
        <h2 class="animated bounceInRight delay-05s">
          您是本站第{{num}}位访客
          <i @mouseover="helpfun(true)" @mouseout="helpfun(false)" class="iconfont icon-bangzhu">
            <div v-show="helpflag" class="helpbox">
              <span>一个IP一天只能增加一次哦
                <span class="font14">(也许要减去一百吧)</span>
              </span>
              <div class="to_top"></div>
            </div>
          </i>
        </h2>
        <div class="animated delay-1s homebtn" @mouseover="btnanimatefun(true)"  @mouseout="btnanimatefun(false)" :class="{btnanimate:btnanimate,zoomIn:zoomInanimate}">
          <router-link to="/articlecom" tag="span">进去看看</router-link>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
    export default {
      name: "index",
      data(){
        return{
          num:101,
          btnanimate:false,
          helpflag:false,
          zoomInanimate:true
        }
      },
      components: {
      },
      methods:{
        helpfun(val){
          this.helpflag = val
        },
        btnanimatefun(val){
          this.btnanimate = val;
          this.zoomInanimate = false;
        }
      }
    }
</script>

<style lang="less" scoped>
  .animated.delay-05s{
    animation-delay: .5s;
  }
  .bigbox{
    display: flex;
    position: relative;
    z-index: 998;
    width: 100%;
    min-height: 600px;
    max-height: 1500px;
    height: 100vh;
/*    background: url("../global/img/home_bg_4.jpg") no-repeat center top;*/
    background-size: 100% auto;
    .content{
      z-index: 999;
      display: flex;
      width: 100%;
      min-height: 550px;
      height: auto;
      position: absolute;
      top: 50px;
      left: 0;
      align-items: center;
      justify-content: center;
      flex-direction:column;
      overflow: hidden;
      color: rgba(51,51,51,.7);
      h1{
        margin: 0px 300px 20px 0;
      }
      h2{
        margin-left: 100px;
        position: relative;
        .iconfont{
          position: relative;
          font-size: 20px;
        }
        .helpbox{
          position: absolute;
          width: 200px;
          left: -90px;
          top: 30px;
          background-color: #eae9e9;
          border-radius: 10px;
          padding: 20px;
          box-sizing: border-box;
          font-size: 18px;
          box-shadow: 0 0 10px #adafaf;
          .to_top {
            position: absolute;
            top: 0;
            left: 50%;
            transform : translate(-50%,-80%);
            width: 0;
            height: 0;
            border-bottom: 10px solid #eae9e9;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
          }
        }
      }
      .homebtn{
        margin-top: 100px;
        border-radius: 5px;
        padding: 5px;
        color: white;
        background-color: #666666;
        cursor:pointer;
      }
      .btnanimate{
        animation: myfirst .8s infinite;
        animation-direction:alternate;
      }
    }
  }

  @keyframes myfirst
  {
    0%   { box-shadow: 0 0 8px #adafaf;}
    10%  { box-shadow: 0 0 10px #a5a7a7;}
    25%  { box-shadow: 0 0 12px #999b9b;}
    50%  { box-shadow: 0 0 14px #939595;}
    75%  { box-shadow: 0 0 16px #919393;}
    100% { box-shadow: 0 0 18px #818383;}
  }


</style>
