<template>
  <div class="header">
    <div class="pageWidth">
      <h1 class="logo floatL">
        <a href="JavaScript:;" title="中企动力开放平台"></a>
      </h1>
      <div class="nav floatL">
        <a>API文档</a>
        <a>控制台</a>
      </div>
      <div class="fr floatR">
        <div class="search floatL">
          <div class="s-con">
            <input class="s-input" value="帮助文档/API搜索" attr="帮助文档/API搜索" /><a class="s-icon"></a>
          </div>
        </div>
        <div class="person floatR">
          <!-- <a class="per-btn">登录</a><span class="per-x">|</span><a class="per-btn">注册</a> -->
          <span class="pic"></span>
          <span class="txt">
            <a class="a1">中企会员</a>
            <a class="a2"></a>
            <div class="xl" style="display:none;">
              <div class="gr">
                <em class="xl-icon"></em>
                <span><router-link :to="{name:'common.personal.consumer.authentication'}">个人中心</router-link></span>
              </div>
              <div class="line"></div>
              <div class="tc">
                <em class="xl-icon"></em>
                <span>退出</span>
              </div>
            </div>
          </span>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
  export default {
    name: 'headnav',
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

</style>
