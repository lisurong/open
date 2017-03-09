<template>

  <div id="app">
    <navbar></navbar>
    <div class="nav">
     <!-- 使用 router-link 组件来导航. -->
     <!-- 通过传入 `to` 属性指定链接. -->
     <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
     <ul>
      <li><router-link to="/admin/hello">Home</router-link></li>
      <li><router-link to="/admin/about">About</router-link></li>
    </ul>
  </div>
  <div class="main">
   <!-- 路由匹配到的组件将渲染在这里 -->
   <router-view></router-view>
 </div>
</div>
</template>

<script>
import Navbar from './views/common/Navbar.vue'
/* eslint-disable */
  export default {
    name: 'app',
    components: {Navbar},
    created: function () {  // 这里mounted和created生命周期函数区别
      this.$http.get('consumer.showInfoApi',{a:1}).then(
        (successData) => { console.log(successData.body) },
        (fileData) => { console.log(fileData) }
        )
     // console.log(Api.mockApi('consumer.showInfoApi'));
    }
  }
</script>

<style lang='scss'>


</style>
