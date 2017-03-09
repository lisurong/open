<template>
  <div class="nondeveloper">
    <div class="api-main">
      <div class="pageWidth">
        <breadcrumb></breadcrumb>
        <div class="api-con">
          <div class="floatL left-nav">
            <div class="nav-box">
              <h3>控制台</h3>
               <router-link :to="{name:'consumer.app.applist'}"> 应用管理</router-link>
               <router-link :to="{name:'consumer.funlist'}"> 开放功能列表</router-link>
               <router-link :to="{name:'supplier.business.businesslist'}"> 业务线管理</router-link>

            </div>
          </div>
          <div class="floatR right-list">
              <router-view></router-view>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '../common/Breadcrumb.vue'
  export default {
    name: 'consumerindex',
    components: {Breadcrumb},
    data () {
      return {
        msg: 'consumer Hello 组件',
        level2:'应用管理',
        level3:'',
        level4:''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
