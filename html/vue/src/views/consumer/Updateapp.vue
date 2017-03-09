<template>
  <div class="createapp">
   <h3 class="title">修改应用信息</h3>
   <div class="acc-f">
    <ul class="acc-list">
      <li>
        <div class="f-title"><span>APPID</span><i>*</i></div>
        <div class="f-input">
          <input type="text" class="com-input input-dis input320" disabled="true" :value="appinfo.client_id" />
        </div>
      </li>
      <li>
        <div class="f-title"><span>应用名称</span><i>*</i></div>
        <div class="f-input">
          <input type="text" class="com-input input-dis input320" disabled="true" :value="appinfo.client_name"   placeholder="请输入应用名称" />
        </div>
      </li>
      <li>
        <div class="f-title"><span>业务线</span><i>*</i></div>
        <div class="f-input">
          <select class="select error">
            <option value="" selected="selected" class="input-dis" disabled="true" >请选择业务线</option>
            <option value="1">1</option>
          </select>
          <em class="red">请选择业务线</em>
        </div>
      </li>
      <li>
        <div class="f-title"><span>URL</span><i>*</i></div>
        <div class="f-input">
          <input type="text" class="com-input input320" v-model="appinfo.redirect_url"  :value="appinfo.redirect_url" />
          <em class="red"></em>
        </div>
      </li>
      <li>
        <div class="f-title"><span>应用logo</span><i>*</i></div>
        <div class="f-input">
         <!--  <div class="f-logo">
            <div class="no-logo">
              <span class="no-icon"></span><span>没有图片</span>
            </div>
          </div> -->
          <div class="img-container">
            <img  :src="appinfo.logo"  width="200" height="200">
          </div>
          <a class="yzm btn96" v-on:click="uploadimg">上传logo</a>
        </div>
      </li>
      <li>
        <div class="f-title"><span>应用描述</span><i>*</i></div>
        <div class="f-input">
          <textarea placeholder="请输入应用描述，不超过500字符" >{{appinfo.description}}</textarea>
        </div>
      </li>
    </ul>
    <div class="f-cz">
     <router-link :to="{name:'consumer.app.applist'}"><a class="button btn-disabled">返回</a></router-link><a class="button btn-normal"  v-on:click="updatedeveloperapp" >保存</a>
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
        description:'',
        appinfo:{

          description:' '
        },
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


    },
    methods: {
      uploadimg: function () {

      },
      updatedeveloperapp:function(){
        var self = this;
        this.$http.get($API.consumer.updatedeveloperapp.url,this.appinfo).then(
          (successData) => { console.log(successData.body)
              // this.dialog = true;
              var self = this;
              // var clocker = setTimeout(function(){
              //     self.dialog = false;
              //     clearTimeout(clocker);
              // }, 1000);

              this.$router.push({name:'consumer.app.applist'});
            },
            (fileData) => { console.log(fileData) }
            )
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
