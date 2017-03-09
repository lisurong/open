<template>
  <div class="breadcrumb">

   <div class="crumbs">
    <a class="c-home"></a><em>></em><a class="c-x">控制台</a>
    <span v-if="levelConfig[bread.level2]">
      <em>></em><a class="c-x">{{levelConfig[bread.level2]}}</a>
    </span>
     <span v-if="levelConfig[bread.level3]">
      <em>></em><a class="c-x">{{levelConfig[bread.level3]}}</a>
    </span>
  </div>

</div>
</template>

<script>
  export default {
    name: 'breadcrumb',
    data () {
      return {
        bread:{
            level1:'控制台',
            level2:'',
            level3:'',
            level4:''
        },
        levelConfig:{
            app:'应用管理',
            nonapp:'创建应用',
            authentication:'开发者认证',
            createapp:'创建应用',
            nondeveloper:'',
            funlist:'开放功能列表',
            apilist:'订单管理',
            apidetail:''
        }
      }
    },
    created: function () {
      // this.$router.beforeEach((to, from, next) => {

      //   console.log(to);
      // })
      var self = this;
      function breadChange(url){
        const reg  = /\w+/g;
         url = url.match(reg);
        self.bread.level2 = url[1],self.bread.level3 =url[2];
      }
      //console.log(this.$route.path);
      var url = this.$route.path;
      breadChange(url);
      this.$router.afterEach(route => {
          breadChange(route.path);
      })

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
