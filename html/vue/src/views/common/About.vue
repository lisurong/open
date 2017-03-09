<template>
   <div class="head">
    <div class="container">
      <span >
        <a  class="logo" href="" title="中企动力开放平台">中企动力开放平台</a>
        <a href="" title="API文档">API文档</a>
        <a href="" title="控制台">控制台</a>
      </span>
      <div class="search" style="width: 146px;">
          <input class="s-input" value="帮助文档/API搜索" attr="帮助文档/API搜索" style="color: rgb(85, 85, 85);">
          <a class="s-icon"></a>
      </div>
      <div class="person floatR">
        <a class="per-btn">登录</a><span class="per-x">|</span><a class="per-btn">注册</a>
    <!--     <span class="pic"></span>
        <span class="txt">
          <a class="a1">中企会员</a>
          <a class="a2"></a>
          <div class="xl" style="display: none;">
            <div class="gr">
              <em class="xl-icon"></em>
              <span>个人中心</span>
            </div>
            <div class="line"></div>
            <div class="tc">
              <em class="xl-icon"></em>
              <span>退出</span>
            </div>
          </div>
        </span> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: '开放平台'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
