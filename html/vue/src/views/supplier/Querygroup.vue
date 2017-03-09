<template>
  <div class="createbusiness">
   <h3 class="title">{{group.categoryname}}-{{group.groupname}}</h3>
   <div class="acc-f">
     <table class="ck-table" width="482">
      <tr>
        <th>所属业务线:</th>
        <td>{{group.categoryname}}</td>
      </tr>
      <tr>
        <th>功能状态：</th>
        <td>{{group.status}}</td>
      </tr>
      <tr>
        <th>功能描述：</th>
        <td>{{group.desc}}</td>
      </tr>
      <tr>
        <th>接口列表：</th>
        <td></td>
      </tr>

    </table>
    <table class="table" cellspacing="0" cellpadding="0" border="0">
      <tr>
        <th width="460">接口名称</th>
        <th width="220">是否开放</th>
        <th width="220">状态</th>
        <th width="220">操作</th>
      </tr>

      <tr  v-for="item in apis">
        <td>
          <input type="checkbox" class="checkbox" :value="item.id" v-model="apiids"/>
          <a><router-link :to="{ name:'supplier.business.queryapi',query:{apiid:item.id}}" >{{item.apichname}}</router-link></a></td>

          <td>{{item.isopen}}</td>
          <td>{{item.status}}</td>
          <td>
            <a><router-link :to="{name:'consumer.app.updategroup',query:{appid:item.client_id}}" >提交审核 </router-link></a><em class="width20"></em>
            <a><router-link :to="{name:'consumer.app.updategroup',query:{appid:item.client_id}}" >编辑 </router-link></a><em class="width20"></em>
            <a><router-link :to="{name:'consumer.app.updategroup',query:{appid:item.client_id}}" >删除 </router-link></a>
          </td>
        </tr>

      </table>
      <div class="pages">
        <div class="floatL">
          <input class="checkboxAll checkbox" type="checkbox" /><a class="yzm btn78" v-on:click="">批量审核</a>
        </div>

        <div class="clearfix"></div>
      </div>
      <div class="f-cz">
          <a class="button btn-disabled"> <router-link :to="{name:'supplier.business.businesslist'}">返回</router-link></a>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'createbusiness',
    data () {
      return {
        msg: 'consumer Hello 组件',

        groupid:this.$route.query.groupid,
        group:{},
        apis:{},
        apiids:[]
      }
    },
    created:function(){

      this.$http.get($API.supplier.getgroup.url,{groupid:this.groupid}).then(
        (successData) => { console.log(successData.body)
              // this.dialog = true;
              var self = this;
              self.group = successData.body.data;
        // ,query:{categoryid:successData.body.data.categoryid}
      },
      (fileData) => { console.log(fileData)
        console.log(2) }
        )
      this.$http.get($API.supplier.showapis.url,{groupid:this.groupid}).then(
        (successData) => { console.log(successData.body)
              // this.dialog = true;
              var self = this;
              self.apis = successData.body.data.items;
              console.log(JSON.stringify(self.apis,null,1));
        // ,query:{categoryid:successData.body.data.categoryid}
      },
      (fileData) => { console.log(fileData)
        console.log(2) }
        )
    }
    ,methods: {
      uploadimg: function () {

      },
      submitinfo:function(){
        var self = this;
        this.$http.get($API.supplier.addcategory.url,self.category).then(
          (successData) => { console.log(successData.body)
              // this.dialog = true;
              console.log(1)
              var self = this;
          // ,query:{categoryid:successData.body.data.categoryid}
          this.$router.push({name:'supplier.business.createapi'});
        },
        (fileData) => { console.log(fileData)
          console.log(2) }
          )
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
