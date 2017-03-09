<template>
  <div class="nonapp">

   <h3 class="title">修改功能组申请</h3>

   <div class="but-div"><router-link :to="{name:'consumer.funlist',query:{appid:appid}}"><a class="button btn-normal"><strong>+</strong>申请功能组</a></router-link></div>
   <table class="table" cellspacing="0" cellpadding="0" border="0">
    <tr>
      <th width="138">应用名称</th>
      <th width="66">业务线</th>
      <th width="162">已申请功能组</th>
      <th width="227">功能描述</th>
      <th width="227">审核状态</th>
      <th width="179">操作</th>
    </tr>
    <tr v-for="item in groupinfo">
      <td>{{item.appName}}</a></td>
      <td>{{item.categoryName}}</td>
      <td>
        {{item.groupName}}
      </td>
      <td>{{item.groupDesc}}</td>
      <td>{{item.approvedstate}}</td>
      <td><a v-if="item.approvedstate==3" v-on:click="deldevelopergroup(item.appId,item.groupid)">删除</a> <span v-if="item.approvedstate!=3">--</span></td>
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
    name: 'nonapp',
    data () {
      return {
        msg: 'consumer Hello 组件',
        dialog:false,
        appid:this.$route.query.appid,
        groupinfo:{}
      }
    },
    created:function(){
      console.log(this.appid);
      this.$http.post($API.consumer.getdevelopergroup.url,{appId:this.appid}).then(
        (successData) => { console.log(successData.body)
       // self.getedeveloperapp();
       this.groupinfo = successData.body.data;
       console.log(this.groupinfo)
     },
     (fileData) => { console.log(fileData) }
     )
    },
    methods:{
      deldevelopergroup:function(appId,groupId){
        this.$http.get($API.consumer.deldevelopergroup.url,{appId:appId,groupId:groupId}).then((successData) => {
        console.log(successData.body)

      },
      (fileData) => {

        console.log(fileData)
      })
     }
   }
 }
 $(function(){
  $(".td-sl").hover(function(){
    $(this).siblings(".org_box").css("display","block");
  },function(){
    $(this).siblings(".org_box").css("display","none");
  });
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
