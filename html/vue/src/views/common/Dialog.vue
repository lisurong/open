<template>
  <div class="breadcrumb">
   <!--弹出层开始-->
   <div class="tck-wrap" style="" >
    <a class="close"></a>
    <div class="tck-con">
      <div class="floatL">
        <span class="tck-icon"></span>
      </div>
      <div class="floatL">
        <h5 class="tck-h5">温馨提示</h5>
        <span class="tck-q">是否确认删除此应用？</span>
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="tck-btn">
      <a class="button btn-normal normal64" style="margin-right:10px;">确认</a>
      <a class="yzm btn64">取消</a>
    </div>
  </div>
  <!--弹出层结束-->

</div>
</template>

<script>
  export default {
    name: 'breadcrumb',
    data () {
      return {

      }
    },
    props:{

    },
    created: function () {


    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
