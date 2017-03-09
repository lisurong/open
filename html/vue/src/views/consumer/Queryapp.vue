<template>
  <div class="createapp">
   <h3 class="title">查看应用</h3>
   <div class="acc-f">
    <table class="ck-table" width="482">
      <tr>
        <th>APPID：</th>
        <td>{{appinfo.client_id}}</td>
      </tr>
      <tr>
        <th>应用名称：</th>
        <td>{{appinfo.client_name}}</td>
      </tr>
      <tr>
        <th>业务线：</th>
        <td>{{appinfo.categoryName}}</td>
      </tr>
      <tr>
        <th>URL：</th>
        <td>{{appinfo.redirect_url}}</td>
      </tr>
      <tr>
        <th>应用logo：</th>
        <td style="height:240px">
          <img  :src="appinfo.logo"  width="200" height="200">
        </td>
      </tr>
      <tr>
        <th>应用描述：</th>
        <td>{{appinfo.description}}</td>
        </tr>
      </table>
      <div class="f-cz" style="margin-left:12px;">
        <router-link :to="{name:'consumer.funlist',query:{appid:appid}}"><a class="button btn-normal">去申请功能组</a></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'createapp',
    data () {
      return {
        msg: 'consumer Hello 组件',
        appinfo:{},
        appid:this.$route.query.appid
     }
   },
   created: function () {
    var self = this;
    console.log(this.appid)
    this.$http.post($API.consumer.getdeveloperapp.url,{appId:this.appid}).then(
      (successData) => { console.log(successData.body)
       // self.getedeveloperapp();
        this.appinfo = successData.body.data;
      },
      (fileData) => { console.log(fileData) }
      )


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
