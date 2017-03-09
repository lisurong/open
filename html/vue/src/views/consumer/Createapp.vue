<template>
  <div class="createapp">
   <h3 class="title">创建应用</h3>
   <div class="acc-f">
     <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
     <el-form-item label="APPID" prop="key">
     <el-input :value="ruleForm.key" :disabled="true"></el-input>
   </el-form-item>
   <el-form-item label="应用名称" prop="appName">
   <el-input v-model="ruleForm.appName"></el-input>
 </el-form-item>
 <el-form-item label="业务线" prop="categoryId" >
 <el-select v-model="ruleForm.categoryId" placeholder="请选择业务线">
 <el-option v-for="option in options" :label="option.text" :value="option.value"></el-option>
</el-select>
</el-form-item>
<el-form-item label="URL" prop="url">
<el-input v-model="ruleForm.url"></el-input>
</el-form-item>
<el-form-item label="应用logo" prop="logo">
<el-upload
class="avatar-uploader"
:action="uploadUrl"
:show-file-list="false"
:on-success="handleAvatarScucess"
:before-upload="beforeAvatarUpload">
<img v-if="imageUrl" :src="imageUrl" class="avatar">
<i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
</el-form-item>
<el-form-item label="应用描述" prop="description">
<template>
  <div ref="editor"></div>
</template>
</el-form-item>
<el-form-item>
<el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
<!-- <el-button @click="resetForm('ruleForm')" >立即创建</el-button> -->
<!-- <el-button type="primary" :disabled="true">立即创建</el-button> -->
</el-form-item>
</el-form>
<!--  <ul class="acc-list">
  <li>

    <div class="f-title"><span>APPID</span><i>*</i></div>
    <div class="f-input">
      <input type="text" class="com-input input-dis input320" disabled="true" v-model="appinfo.key" :value="appinfo.key" />
    </div>
  </li>
  <li>
    <div class="f-title"><span>应用名称</span><i>*</i></div>
    <div class="f-input">
      <input type="text" class="com-input  input320"  v-model="appinfo.appName"   placeholder="请输入应用名称" />
    </div>
  </li>
  <li>
    <div class="f-title"><span>业务线</span><i>*</i></div>
    <div class="f-input">
      <select class="select error" v-model="appinfo.categoryId">
        <option v-for="option in options" :value="option.value">{{option.text}}</option>
      </select>
      <em class="red">请选择业务线</em>
    </div>
  </li>
  <li>
    <div class="f-title"><span>URL</span><i>*</i></div>
    <div class="f-input">
      <input type="text" class="com-input input320"  v-model="appinfo.url" />
      <em class="red"></em>
    </div>
  </li>
  <li>
    <div class="f-title"><span>应用logo</span><i>*</i></div>
    <div class="f-input">
          <div class="f-logo">
            <div class="no-logo">
              <span class="no-icon"></span><span>没有图片</span>
            </div>
          </div>
          <div class="img-container">
            <img  :src="appinfo.logo"  width="200" height="200">
          </div>

          <a class="yzm btn96" v-on:click="uploadimg">上传logo</a>
          <input id="files" type="file" onchange="previewImage(this, 'prvid')" v-show="false"/>
        </div>
      </li>
      <li>
        <div class="f-title"><span>应用描述</span><i>*</i></div>
        <div class="f-input">
          <textarea placeholder="请输入应用描述，不超过500字符" v-model="appinfo.description"></textarea>


          <template>
            <div ref="editor"></div>
          </template>
        </div>
      </li>
    </ul>
    <div class="f-cz">
      <a class="button btn-disabled">立即创建</a><a class="button btn-normal"  v-on:click="submitinfo" >立即创建</a>
    </div>
  -->
</div>

</div>
</template>

<script>
  import 'element-ui/lib/theme-default/index.css'
  import '../../../static/plugins/editor/ueditor.config';
  import '../../../static/plugins/editor/ueditor.all';
  import '../../../static/plugins/editor/lang/zh-cn/zh-cn';
  import UploadImg  from '../../assets/scripts/upload.img';
  export default {
    name:'createapp',
    data () {
      var validUrl = (rule, value, callback) => {
        var reg = /((http|ftp|https):\/\/)*[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/;
        if(!reg.test(value)){
          callback(new Error('请输入正确url'));
        }else{
          callback();
        }
      }
      return {

        imageUrl:'',
        uploadUrl:$API.consumer.uploadpic.url,
        id:  'ueditorId'+new Date().getTime(),
        appinfo:{
          key:'',
          appName:'',
          categoryId:'',
          logo:'',
          url:'',
          description:''
        },
        options:[],
        value: '',
        config: {
          initialFrameWidth: null,
          initialFrameHeight: 320,
        },
        ruleForm: {
          key: '',
          appName: '',
          categoryId:'',
          logo:'',
          url:'',
          description: ''
        },
        rules: {
          key: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
          ],
          appName: [
          { required: true, message: '请输入应用名称', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10个字符', trigger: 'blur' }
          ],
          categoryId: [
          { required: true, message: '请选择业务线', trigger: 'change' }
          ],
          logo: [
          { required: true, message: '请选上传logo', trigger: 'change' }
          ],
          url: [
            { validator: validUrl, trigger: 'blur' }
          ],
          description: [
          { required: true, message: '请填写描述', trigger: 'blur' }
          ]
        }
      }
    },
    created: function () {
      var self = this;
      console.log(this.appid)
      this.$http.post($API.consumer.getdeveloperappid.url).then(
        (successData) => { console.log(successData.body)
       // self.getedeveloperapp();

       self.appinfo.key = successData.body.data;
       self.ruleForm.key = successData.body.data;
     },
     (fileData) => { console.log(fileData) }
     )
      this.$http.post($API.consumer.getdevelopercategory.url).then(
        (successData) => { console.log(successData.body.data)

          successData.body.data.forEach(item=>{
            if(!self.appinfo.categoryId){
              self.ruleForm.categoryId=item.id;
            }
            self.options.push({text:item.categoryname,value:item.id});
          })

        },
        (fileData) => { console.log(fileData) }
        )

    }
    ,methods: {
     handleAvatarScucess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.ruleForm.logo = this.imageUrl ;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    submitForm(formName) {
      var self = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
         self.submitinfo();
       } else {
        console.log('error submit!!');
        return false;
      }
    });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    uploadimg: function () {
      $('.el-upload').trigger('click');
    },
    submitinfo:function(){
      var self = this;
      console.log(JSON.stringify(this.appinfo,null,1))
      console.log(JSON.stringify(this.ruleForm,null,1))
      this.$http.get($API.consumer.adddeveloperapp.url,this.ruleForm).then(
        (successData) => { console.log(successData.body)

          var self = this;

          this.$router.push({name:'consumer.app.queryapp'});
        },
        (fileData) => { console.log(fileData) }
        )
    },ready(){
      console.log(1)
    },
    editortext(data){
      console.log(self.defaultMsg)
      this.appinfo.description =  data.content;
      this.ruleForm.description =  data.content;
    }
  },
  watch: {
    value: function value(val, oldVal) {
      this.editor = UE.getEditor(this.id, this.config);
      if (val !== null) {
        this.editor.setContent(val);
      }
    },
  },
  mounted() {
    var self = this;
    console.log(this)
    this.$nextTick(function f1() {
        // 保证 this.$el 已经插入文档

        this.$refs.editor.id = this.id;
        this.editor = UE.getEditor(this.id, this.config);

        this.editor.ready(function f2() {
          this.editor.setContent(this.value);

          this.editor.addListener("contentChange", function () {
            const wordCount = this.editor.getContentLength(true);
            const content = this.editor.getContent();
            const plainTxt = this.editor.getPlainTxt();

            // this.$emit('input', { wordCount: wordCount, content: content, plainTxt: plainTxt });
            console.log({ wordCount: wordCount, content: content, plainTxt: plainTxt })
            self.appinfo.description = content;
            this.ruleForm.description =  content;

          }.bind(this));
          console.log(this.editor)

          // this.$emit('ready', this.editor);

        }.bind(this));
      });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;


  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width:198px;
    height:198px;
    line-height: 198px;
    border: 1px solid #e0e0e0;
    text-align: center;
  }
  .avatar {
    width: 200px;
    height: 200px;
    display: block;
  }
  .btn96{
    margin-top:10px;
  }
  .avatar-uploader{
    height: 200px;
  }
  .el-button--primary:focus, .el-button--primary:hover{
    background: #74a6ff;
  }
  .el-button{
    height: 34px;
    line-height: 34px;
    font-size: 14px;
    padding: 0 14px;
    min-width: 68px;
    text-align: center;
    display: inline-block;
    border-radius:0;
    border: 0;
    font-family:'微软雅黑';
  }
  .el-button--primary{
    background: #5794ff;

  }
</style>
