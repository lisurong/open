<template>
  <div class="businessinfo">
   <table class="ck-table" width="482">
    <tr>
      <th>APPID：</th>
      <td>{{category.appId}}</td>
    </tr>

    <tr>
      <th>业务线：</th>
      <td>{{category.categoryName}}</td>
    </tr>

    <tr>
      <th>业务线描述：</th>
      <td>{{category.desc}}</td>
    </tr>
  </table>

</div>
</template>

<script>

  export default {
    name: 'businessinfo',
    data () {
      return {
        msg: 'consumer Hello 组件',
        category:{},
        categoryid:this.$route.query.categoryid
      }
    },
    created: function () {
      var self = this;
      console.log(this.categoryid);
      this.$http.get($API.supplier.getcategory.url,{categoryid:this.categoryid}).then(
        (successData) => { console.log(successData.body)
              // this.dialog = true;
              var self = this;
              self.category = successData.body.data;

            },
            (fileData) => { console.log(fileData) }
            )


    }
  }



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ck-table tr th{
    width: 97px;
  }
</style>
