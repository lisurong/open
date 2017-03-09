<template>
  <div class="personal">
   <div class="tab">
     <div class="line"></div>
     <ul class="tab_header">
     <router-link :to="{name:'common.personal.consumer.authentication'}"><li  class="">开发者认证信息</li></router-link>
       <router-link :to="{name:'common.personal.supplier.authentication'}"> <li style="border-left:0;">API提供者认证信息</li></router-link>
     </ul>
     <div >
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
  /* eslint-disable */
  export default {
    name: 'personal',
    data () {
      return {
        msg: '开放平台'
      }
    }
  }

  $(function(){
   /*********顶部搜索*********/
   $('.s-input').focus(function(){
    var value =  $.trim($(this).val());
    var placeholder = $(this).attr('attr');
    if(value==placeholder){
     $(this).val('').css("color","#fff");
     $(this).parent('.s-con').animate({width:'240px'});
   }

 });
   $('.s-input').blur(function(){
    var value =  $.trim($(this).val());
    if(value==''){
      var placeholder = $(this).attr('attr');
      $(this).val(placeholder).css("color","#555");
      $(this).parent('.s-con').animate({width:'146px'});
    }

  });
   /*********中间内容滑过变色*********/
   $('.i-b').hover(function(){
    $(this).siblings('.i-bg').find('span').addClass('hover');
  },function(){
   $(this).siblings('.i-bg').find('span').removeClass('hover');
 });

   /*********导航选中状态********/
   function clickActive(obj,active){
    $(obj).on("click", function(event) {
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
    });
  }
    // $('.nav a').click(function(){
    //     $('.nav a').removeClass('active');
    //     $(this).addClass('active');
    // });
    clickActive('.nav a','active');
    clickActive('.nav-box a','active');
    /**********下拉*************/
    /*显示隐藏函数(有定时器) begin*/
    function showHide(obj,hide){
      var timer = null;
      $(obj).on("mouseenter", function(event) {
        if(timer){
          clearTimeout(timer);
        }
        $(this).addClass('hover').find(hide).show();
      });
      $(obj).on("mouseleave", function(event) {
        var me = this;
        timer = setTimeout(function(){
          $(me).removeClass('hover').find(hide).hide();
        }, 200)
      });

    }
    /*显示隐藏函数(有定时器) end*/
    //显示隐藏调用
    showHide('.txt','.xl');


  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .ck-table tr th{
  width: 97px;
}
.tab_header .router-link-active li{
  border-bottom: 2px solid #fff;
  background: #fff;
  border-top: 2px solid #5794ff;
  line-height: 36px;
}
</style>
