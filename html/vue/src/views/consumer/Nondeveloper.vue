<template>
  <div class="nondeveloper">
    <div class="control-r">
      <div class="con-ts">
        <span class="ts-pic"></span>
        <div class="ts-t">
          <h5>提示</h5>
          <p>您未进行认证，无业务权限！</p>
          <a class="button"><router-link :to="{name:'common.personal.consumer.authentication'}">开发者认证</router-link></a>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'nondeveloper',
    data () {
      return {
        msg: 'consumer Hello 组件'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
