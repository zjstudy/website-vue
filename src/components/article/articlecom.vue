<template>
  <div class="bigbox">
    <classheader></classheader>
    <div v-for="item in contentlist" class="articlelist">
      <span class="title">{{item.title}}</span>
      <div class="content">
        <div class="content-top">
          <span class="article-time">{{item.time}}</span>
          <span class="article-type">{{item.ctype}}</span>
          <span class="article-thumbup">
            <i class="iconfont icon-like-b"></i>
            {{item.thumbup}}
          </span>
        </div>
        <div class="text-view">
          <span>{{item.content}}</span>
        </div>
      </div>
      <div class="more"><router-link to="/detailscom">阅读全文</router-link></div>
    </div>
  </div>

</template>

<script>
  import classheader from "@c/classheader/topnav"
    export default {
      name: "articlecom",
      data(){
        return{
          i:5,
          contentlists:[
            {
              title:"JavaScript事件委托代理和函数封装详解",
              time:"2018-12-6",
              ctype:"javascript",
              thumbup:"66",
              content:"通过前面的几篇关于JavaScript的捕获事件和冒泡事件的认识，今天学习一下事件委托，JavaScript高级程序设计上讲：事件委托就是利用事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。下面我们一起看看事件代理相关介绍。" +
                "通过前面的几篇关于JavaScript的捕获事件和冒泡事件的认识，今天学习一下事件委托，JavaScript高级程序设计上讲：事件委托就是利用事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。下面我们一起看看事件代理相关介绍。" +
                "当用事件委托的时候，根本就不需要去遍历元素的子节点，只需要给父级元素添加事件就好了，其他的都是在js里面的执行，这样可以大大的减少dom操作，这才是事件委托的精髓所在。"
            }
          ],
          contentlist:[]
        }
      },
      components:{
        classheader
      },
      methods:{
        startfun:function () {
          console.log("sjowjfowjow")
        },
        getdatas:function () {
          let _this = this
          // this.$http({
          //   method: 'get',
          //   url: `/api/getallarticle`,
          // }).then(function (res) {
          //   console.log(res)
          //   _this.contentlist = res.data.list
          // })
          this.$http.get('/api/getallarticle')
            .then(function (res) {
            _this.contentlist = res.data.list
          })
        }
      },
      created(){
        this.startfun()
        this.getdatas()
      }
    }
</script>

<style lang="less" scoped>
  .bigbox{
    display: flex;
    z-index: 998;
    width: 100%;
    min-height: 600px;
    max-height: 1500px;
    height: 100vh;
    background-size: 100% auto;
    flex-wrap: wrap;
    padding-top: 50px;
    align-content:flex-start;
    .articlelist{
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-content: flex-start;
      height: 300px;
      width: 90%;
      background-color: white;
      margin: 20px auto;
      border-radius: 10px;
      box-shadow: 0 0 10px #adafaf;
      padding: 10px 20px;
      box-sizing: border-box;
      overflow: hidden;
      .title{
        font-size: 25px;
      }
      .content{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        width: 100%;
        min-height: 200px;
        .content-top{
          width: 100%;
          height: 50px;
          span{
            line-height: 50px;
            margin-right: 20px;
            float: left;
          }
        }
        .text-view{
          width: 100%;
          height: 148px;
          overflow: hidden;
          text-align: left;
        }
      }
      .more{
        background-color: #aac8eb;
        padding: 5px;
        border-radius: 5px;
        color: white;
      }
    }
  }
</style>
