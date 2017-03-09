<template>
  <div class="consumerindex">
    <div class="api-main">
      <div class="pageWidth">
        <div class="crumbs">
          <a class="c-home"></a><em>></em><a class="c-x">控制台</a><em>></em><span class="c-x">应用管理</span>
        </div>


        <div class="api-con">

          <div class="floatL left-nav">
            <div class="nav-box">
              <h3>控制台</h3>
              <a class="active"><router-link to="/consumer/nonapp">应用管理</router-link></a>

              <a><router-link to="/consumer/nonapp">开放功能列表</router-link></a>
            </div>
          </div>

          <div class="floatR right-list">
            <div class="control-r">
              <div class="con-ts">
                <span class="ts-pic"></span>
                <div class="ts-t">
                  <h5>提示</h5>
                  <p>您未进行认证，无业务权限！</p>
                  <a class="button">开发者认证</a>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
          </div>

          <div class="clearfix"></div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'consumerindex',
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
