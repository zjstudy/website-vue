<template>
  <div class="bigbox">
    <div class="content">hello world<\br>{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .bigbox{
    .content{
      color: red;
    }
  }
</style>
