<template>
  <div class="createbusiness">
   <h3 class="title">修改务线</h3>
   <div class="acc-f">
    <ul class="acc-list">
      <li>
        <div class="f-title"><span>APPID</span><i>*</i></div>
        <div class="f-input">
          <input type="text" class="com-input input-dis input320" disabled="true" value="3333333333" />
        </div>
      </li>
      <li>
        <div class="f-title"><span>业务线名称</span><i>*</i></div>
        <div class="f-input">
          <input type="text" class="com-input input-dis input320" disabled="true"  placeholder="请输入应用名称" />
        </div>
      </li>
      <li>
        <div class="f-title"><span>业务线分类</span><i>*</i></div>
        <div class="f-input">
          <select class="select error">
            <option value="" selected="selected">请选择业务线</option>
            <option value="1">1</option>
          </select>
          <em class="red">请选择业务线</em>
        </div>
      </li>
      <li>
        <div class="f-title"><span>业务线简介</span><i>*</i></div>
        <div class="f-input">
          <input type="text" class="com-input input320" value="www.300.cn" />
          <em class="red"></em>
        </div>
      </li>
      <li>
        <div class="f-title"><span>业务线描述</span><i>*</i></div>
        <div class="f-input">
          <textarea>请输入应用描述，不超过500字符</textarea>
        </div>
      </li>
    </ul>
    <div class="f-cz">
      <a class="button btn-disabled">返回</a><a class="button btn-normal"  v-on:click="submitinfo" >保存</a>
    </div>
  </div>

</div>
</template>

<script>
  export default {
    name: 'createbusiness',
    data () {
      return {
        msg: 'consumer Hello 组件'
      }
    },methods: {
      uploadimg: function () {

      },
      submitinfo:function(){
        var self = this;

        this.$http.get($API.consumer.addcategory.url,this.info).then(
          (successData) => { console.log(successData.body)
              // this.dialog = true;
              var self = this;
              // var clocker = setTimeout(function(){
              //     self.dialog = false;
              //     clearTimeout(clocker);
              // }, 1000);
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

</style>
