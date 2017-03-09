<template>
  <div class="authentication">
    <h3 class="title">开发者认证</h3>

    <div class="acc-f">
      <div class="acc-ch"><label class="disabled"><input type="radio" disabled="true" />个人开发者</label><label><input type="radio"  v-model="info.checkstate" v-bind:value="1"/>企业开发者</label></div>
      <ul class="acc-list">
        <li>
          <div class="f-title"><span>企业名称</span><i>*</i></div>
          <div class="f-input">
            <input type="text" class="com-input  input320"  v-model="info.enterprisename" placeholder="中企动力科技股份有限公司" />
          </div>
        </li>
        <li>
          <div class="f-title"><span>联系人</span><i>*</i></div>
          <div class="f-input">
            <input type="text" class="com-input input320" v-model="info.enterprisename" placeholder="请输入联系人" />
          </div>
        </li>
        <li>
          <div class="f-title"><span>手机号码</span><i>*</i></div>
          <div class="f-input">
            <input type="text" class="com-input input320 error" v-model="info.tel"  placeholder="" />
            <em class="red">请输入正确的手机号码</em>
          </div>
        </li>
        <li>
          <div class="f-title"><span>验证码</span><i>*</i></div>
          <div class="f-input">
            <input type="text" class="com-input input188" placeholder=""  v-model="info.enterprisename" /><!-- <a class="yzm btn120">获取验证码</a> -->
            <a v-on:click="countdown" class="yzm btn120" style="display: inline-block;"><span class="bind_button-middle">获取验证码</span></a>
            <a class="yzm btn120 time_button" style="display: none;"><span class="time_button-middle"><em class="time">60</em>&nbsp;秒后重新获取</span></a>
            <em class="red">请输入正确的手机号码</em>
          </div>
        </li>
        <li>
          <div class="f-title"><span>邮箱</span><i>*</i></div>
          <div class="f-input">
            <input type="text"  v-model="info.email"  class="com-input input320 input-blue" value="" />
          </div>
        </li>
      </ul>
      <div class="f-cz">
        <!-- <a class="button btn96 btn-disabled">提交</a> --><a class="button btn96 btn-normal" v-on:click="submitinfo" >提交</a>
      </div>
    </div>

    <div class="tcc" v-if="dialog">
      <div class="tcc-con">
        <span class="tcc-icon"></span><em>认证成功</em>
      </div>
    </div>
    <!--认证成功弹出层结束-->
    <div class="clearfix"></div>
  </div>
</template>

<script>
  export default {
    name: 'authentication',
    data () {
      return {
        dialog:false,
        info: {"reason":"","email":"fff@fs.fs","tel":"111111","state":0,"checkstate":1,"enterprisename":"333","contact":"ll"}
      }
    },
    // computed: this.Validator.mapValidation({
    //   valid: '$validation.validation1.valid',
    //   usernameInvalid: '$validation.validation1.username.invalid',
    //   passwordInvalid: '$validation.validation1.password.invalid',
    //   confirmInvalid: '$validation.validation1.confirm.invalid'
    // }),
    methods: {
      // handleValidate: function (e) {
      //   e.target.$validity.validate()
      // },
      countdown: function (event) {

        var obj = event.target.tagName,second = 60;
        //var title = $(obj).find('.bind_button-middle').attr('title');
        $(obj).hide();
        $(obj).siblings('.time_button').css('display','inline-block');
        var time = parseInt($.trim($(obj).siblings('.time_button').find('.time').text()));
        var timer = setInterval(function(){
          if(time>0){
            time--;
            $(obj).siblings('.time_button').find('.time').text(time);
          }else{
            clearInterval(timer);
            $(obj).css('display','inline-block');
            $(obj).find('.bind_button-middle').text('重新获取验证码');
            $(obj).siblings('.time_button').hide();
            $(obj).siblings('.time_button').find('.time').text(second);
          }
        },1000);
      },
      submitinfo:function(){
        console.log($API);
        this.$http.get($API.consumer.updatedeveloperinfo.url,this.info).then(
          (successData) => { console.log(successData.body)
            this.dialog = true;
            var self = this;
            var clocker = setTimeout(function(){
              self.dialog = false;
              clearTimeout(clocker);
            }, 1000);
            this.$router.push({name:'consumer.app.nonapp'});
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
