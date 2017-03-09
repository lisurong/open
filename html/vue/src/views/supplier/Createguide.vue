<template>
  <div class="createbusiness">
   <h3 class="title">创建接入指南</h3>
   <div class="acc-f">
    <ul class="acc-list">

      <li>
        <div class="f-title"><span>文档名称</span><i>*</i></div>
        <div class="f-input">
          <input type="text" class="com-input input320" placeholder="请输入文档名称" v-model="doc.title" />
        </div>
      </li>
      <li>
        <div class="f-title"><span>所属业务线</span><i>*</i></div>
        <div class="f-input">
          <select class="select error" v-model="doc.categoryid">
            <option value="" v-for="option in options" :value="option.value">{{option.text}}</option>
          </select>
          <em class="red">请选择业务线</em>
        </div>
      </li>

      <li>
        <div class="f-title"><span>内容</span><i>*</i></div>
        <div class="f-input">
          <textarea v-model="doc.content" placeholder="请输入应用描述，不超过500字符"></textarea>
        </div>
      </li>
    </ul>
    <div class="f-cz">
      <a class="button btn-disabled">立即创建</a><a class="button btn-normal"  v-on:click="submitinfo" >立即创建</a>
    </div>
  </div>

</div>
</template>

<script>
  export default {
    name: 'createbusiness',
    data () {
      return {
        doc:{
          categoryid:'',
          title:'',
          content:''
        },
        options:[]
      }
    },
    created:function(){
      this.$http.get($API.supplier.getallcategories.url).then((successData) => {
              // this.dialog = true;
              var self = this;
              self.list = successData.body.data;
              console.log(self.list )

              self.list.forEach(item=>{
                self.doc.categoryid?'':self.doc.categoryid=item.id;
                self.options.push({text:item.categoryname,value:item.id});
              })
            },
            (fileData) => {

              console.log(fileData)
            })
    },
    methods: {
      uploadimg: function () {

      },
      submitinfo:function(){
        var self = this;
        console.log(this.doc);
        this.$http.get($API.supplier.categoryadddoc.url,this.doc).then(
          (successData) => { console.log(successData.body)
            var self = this;

            this.$router.push({name:'supplier.business.querybusiness.guide',query:{categoryid:this.doc.categoryid}});
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
