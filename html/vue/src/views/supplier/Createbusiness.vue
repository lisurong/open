<template>
  <div class="createbusiness">
   <h3 class="title">创建业务线</h3>
   <div class="acc-f">
    <ul class="acc-list">
      <li>
        <div class="f-title"><span>APPID</span><i>*</i></div>
        <div class="f-input">
          <input type="text" class="com-input input-dis input320" disabled="true" value="" />
        </div>
      </li>
      <li>
        <div class="f-title"><span>业务线名称</span><i>*</i></div>
        <div class="f-input">
          <input type="text" class="com-input input320" placeholder="请输入应用名称" v-model="category.categoryname"/>
        </div>
      </li>
      <li>
        <div class="f-title"><span>业务线分类</span><i>*</i></div>
        <div class="f-input">
          <select class="select error" v-model="category.categorytype">
            <!-- <option value="" selected="selected">请选择业务线</option> -->
            <option v-for="option in options" :value="option.value">{{option.text}}</option>
          </select>
          <em class="red">请选择业务线</em>
        </div>
      </li>
      <li>
        <div class="f-title"><span>业务线简介</span><i>*</i></div>
        <div class="f-input">
          <input type="text" class="com-input input320" placeholder="www.300.cn"  v-model="category.intro"/>
          <em class="red"></em>
        </div>
      </li>
      <li>
        <div class="f-title"><span>业务线描述</span><i>*</i></div>
        <div class="f-input">
          <textarea placeholder="请输入应用描述，不超过500字符"  v-model="category.desc"></textarea>

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
        options:[{
            text:'快车',value:'flash'
        }]
      }
    },methods: {
      uploadimg: function () {

      },
      submitinfo:function(){
        var self = this;
        console.log(self.category);
        this.$http.get($API.supplier.addcategory.url,self.category).then(
          (successData) => { console.log(successData.body)
              // this.dialog = true;
              var self = this;
              // var clocker = setTimeout(function(){
              //     self.dialog = false;
              //     clearTimeout(clocker);
              // }, 1000);
             // this.$router.push({name:'supplier.app.businesslist'});
             this.$router.push({name:'supplier.business.creategroup',query:{categoryid:successData.body.data.categoryid,categoryname:self.category.categoryname}});
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
