<template>
  <div class="nonbusiness">

    <h3 class="title">业务线管理</h3>
    <div class="con-go">
      <span class="go-icon">您还没有创建业务线，<a><router-link :to="{name:'supplier.app.createbusiness'}">去创建GO>></router-link></a></span>
    </div>
    <!--没有功能的情况结束-->
    <div class="but-div"><router-link :to="{name:'supplier.app.createbusiness'}"><a class="button btn-normal"><strong>+</strong>创建业务线</a></router-link></div>
    <table class="table" cellspacing="0" cellpadding="0" border="0">
      <tr>
        <th width="138">业务线名称</th>
        <th width="61">APPID</th>
        <th width="179">业务线分类</th>
        <th width="162">功能组</th>
        <th width="227">简介</th>
        <th width="66">操作</th>
      </tr>
      <tr>
        <td><a>test01</a></td>
        <td>123456</td>
        <td>微酒店</td>
        <td>
          <div class="td-fc">
            <div class="td-sl">功能一、功能二、功能三、功能一、功能二、功能三、功能一、功能二、功能三、功能二、功能三</div>
            <div class="org_box" style="display: none;">
              <span class="org_bot_cor_2"></span>
              功能一、功能二、功能三、功能一、功能二、功能三、功能一、功能二、功能三、功能二、功能三
            </div>
          </div>
        </td>
        <td>无聊无聊无聊</td>
        <td><a><router-link :to="{name:'consumer.app.updateapp'}">修改信息 </router-link></a></td>
      </tr>

    </table>
    <!--弹出层开始-->
    <div class="tck-wrap" style="" v-if="dialog">
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
    name: 'nonbusiness',
    data () {
      return {
        msg: 'consumer Hello 组件',
        dialog:false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
