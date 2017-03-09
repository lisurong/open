<template>
  <div class="applist">
   <h3 class="title">订单管理</h3>
   <table class="table" width="100%" cellspacing="0" cellpadding="0" border="0">
    <tr>
      <th width="136">API名称</th>
      <th>描述</th>
    </tr>
    <tr v-for="item in items">
      <td><a><router-link :to="{name:'consumer.funlist.apidetail',query:{apiid:item.id}}">{{item.apichname}} </router-link></a></td>
      <td>{{item.desc}}</td>
    </tr>

  </table>

</div>
</template>

<script>
  export default {
    name: 'applist',
    data () {
      return {
        msg: 'consumer Hello 组件',
        params:{
          groupid:'1',
          currentPage:'1',
          pageSize:'1'
        },
        items:{},
        groupid:this.$route.query.groupid

      }
    },
    created: function () {
      var self = this;

      this.$http.post($API.supplier.showapis.url).then(
        (successData) => { console.log(successData.body)
            self.items = successData.body.data.items;
         },
        (fileData) => { console.log(fileData) }
        )
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
