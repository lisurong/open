<template>
  <div class="createbusiness">
   <h3 class="title">创建功能分组</h3>
   <div class="acc-f">
    <ul class="acc-list">

      <li>
        <div class="f-title"><span>业务线名称</span><i>*</i></div>
        <div class="f-input">
            <input type="text" class="com-input input-dis input320" disabled="true" :value="categoryname" />
        </div>
      </li>

      <li>
        <div class="f-title"><span>功能分组名称</span><i>*</i></div>
        <div class="f-input">
          <input type="text" class="com-input input320" placeholder="功能分组名称"  v-model="category.intro"/>
          <em class="red"></em>
        </div>
      </li>
      <li>
        <div class="f-title"><span>功能分组描述</span><i>*</i></div>
        <div class="f-input">
          <textarea placeholder="请输入功能分组描述，不超过500字符"  v-model="category.desc"></textarea>
        </div>
      </li>
    </ul>
    <div class="f-cz">
      <a class="button btn-disabled"> <router-link :to="{name:'supplier.business.businesslist'}">取消</router-link></a><a class="button btn-normal"  v-on:click="submitinfo" >保存</a>
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
        category:{
          categoryname:'',
          categorytype:'',
          desc:'',
          intro:''
        },
        categoryname:this.$route.query.categoryname,
        options:[{
            text:'快车',value:'flash'
        }]
      }
    },methods: {
      uploadimg: function () {

      },
      submitinfo:function(){
        var self = this;
        this.$http.get($API.supplier.addcategory.url,self.category).then(
          (successData) => { console.log(successData.body)
              var self = this;
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
