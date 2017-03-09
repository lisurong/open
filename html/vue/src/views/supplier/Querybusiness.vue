<template>
  <div class="createbusiness">
   <h3 class="title">酒店管理系统</h3>
   <div class="tab">
     <div class="line"></div>
     <ul class="tab_header">
      <router-link :to="{name:'supplier.business.querybusiness.businessinfo',query:{categoryid:categoryid}}"><li  class="">基本信息</li></router-link>
     <router-link :to="{name:'supplier.business.querybusiness.groups',query:{categoryid:categoryid}}"> <li style="border-left:0;">功能列表</li></router-link>
      <router-link :to="{name:'supplier.business.querybusiness.guide',query:{categoryid:categoryid}}"><li  class="" style="border-left:0;">接入指南</li></router-link>
    </ul>
    <div >
      <router-view></router-view>
    </div>
  </div>

</div>
</template>

<script>
  import Businessinfo from './manage/Businessinfo.vue'
  export default {
    name: 'createbusiness',
    components: {Businessinfo},
    data () {
      return {
        msg: 'consumer Hello 组件',
        category:{},
        categoryid:this.$route.query.categoryid
      }
    },
    created: function () {

      var self = this;

      // this.$http.get($API.supplier.getcategory.url).then(
      //   (successData) => { console.log(successData.body)
      //         // this.dialog = true;
      //         var self = this;
      //         self.category = successData.body.data;

      //       },
      //       (fileData) => { console.log(fileData) }
      //       )


    },
    methods: {
      uploadimg: function () {

      },
      tab:function(){

      },
      submitinfo:function(){
        var self = this;

        this.$http.get($API.consumer.addcategory.url,this.info).then(
          (successData) => { console.log(successData.body)
              // this.dialog = true;
              var self = this;

              this.$router.push({name:'supplier.app.businesslist'});
            },
            (fileData) => { console.log(fileData) }
            )
      }
    }
  }



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ck-table tr th{
    width: 97px;
  }
  .tab_header .router-link-active li{
    border-bottom: 2px solid #fff;
    background: #fff;
    border-top: 2px solid #5794ff;
    line-height: 36px;
}
</style>
