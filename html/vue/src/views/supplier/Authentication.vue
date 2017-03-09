<template>
  <div class="authentication">
    <div v-if="!non">
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
              <a v-on:click="countdown" class="yzm btn120" style="display: inline-block;">获取验证码</a>
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
         <a v-if="!submit"  class="button btn96 btn-disabled">提交</a><a v-if="submit" class="button btn96 btn-normal" v-on:click="submitinfo" >提交</a>
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
  <div class="control-r" v-if="non">
    <div class="con-ts">
      <span class="ts-pic"></span>
      <div class="ts-t">
        <h5>提示</h5>
        <p>您未进行认证，无业务权限！</p>
        <router-link :to="{name:'common.personal.supplier.authentication'}"><a class="button  btn-normal" v-on:click="non=false">API提供者认证</a></router-link>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'authentication',
    data () {
      return {
        dialog:false,
        info: {},
        submit:true,
        non:true
      }
    },
    created:function(){
      this.$http.get($API.supplier.showsupplierinfo.url).then(
        (successData) => { console.log(successData.body)
              // this.dialog = true;
              var self = this;
              self.info = successData.body.data.supplierrole;
              self.non = self.info.checkstate==0;
        // ,query:{categoryid:successData.body.data.categoryid}
      },
      (fileData) => { console.log(fileData)
        console.log(2) }
        )
    },
    methods: {
      countdown: function (event) {

        var obj = event.target,second = 60;
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
        this.$http.post($API.supplier.sendcheckcode.url,this.info).then(
          (successData) => { console.log(successData.body) },
          (fileData) => { console.log(fileData) }
          )
      },
      submitinfo:function(){
        var self = this;
        //验证码
        this.$http.post($API.supplier.sendcheckcode.url,this.info).then(
          (successData) => { console.log(successData.body)
            if(successData.body.status==1){
              self.submit = true;
            }
          },
          (fileData) => { console.log(fileData) }
          )
        if(this.submit!=true){
          return;
        }
        this.$http.get($API.consumer.updatedeveloperinfo.url,this.info).then(
          (successData) => { console.log(successData.body)
              // this.dialog = true;
              var self = this;

              this.$router.push({name:'supplier.business.businesslist'});
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
