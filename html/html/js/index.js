/*********多页签插件************/
 (function($){
    $.fn.tab = function(options){
        var opts = $.extend({}, $.fn.tab.defaults, options); 
        //alert(opts.root);
        //alert(opts.switchingMode)
        return this.each(function() {   
            $this = $(this);

            $("ul li", $this).bind(opts.switchingMode,function(){
                var idx = $(this).index();
                //alert(idx)
                $(this).siblings().removeClass(opts.active).end().addClass(opts.active);
                $(this).parent().siblings('.'+opts.content).css('display','none').eq(idx).css('display','block');
            });
        })
    }
    $.fn.tab.defaults = {
        root : 'tab',   
        switchingMode : 'click', 
        active : "current" ,
        content　: "tab_content"   
    } 
})(jQuery)
  
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
    /*function clickActive(obj,active){
        $(obj).on("click", function(event) {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });
    }*/
    // $('.nav a').click(function(){
    //     $('.nav a').removeClass('active');
    //     $(this).addClass('active');
    // });
    //clickActive('.nav a','active');
    //clickActive('.nav-box a','active');
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

    /*tab切换调用*/
    $('.tab').tab({
        switchingMode : 'click'
    });
    
    /********* 导航选中状态 *******/
    var url=window.location.href;
	var equalStar=url.indexOf('=');
	var length = url.length;
	var api=url.indexOf('=')==-1?url.substr(0, length) :url.substr(equalStar + 1, length);
	var arr=api.split('/');
	var cls=arr[arr.length-1];
	//面包屑上列表的值
	var bannerCtg = $("#bannerCtg").html();
	$('.apinav a, .nav a').each(function() {
		var $thisAttr=$(this).attr('attr');
		if($thisAttr==cls || $(this).html() == bannerCtg) {
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
			//api文档内的操作时，顶部导航 “API文档”有强调样式
			if($(this).parent('div').hasClass('apinav')){
				$("#apidoc").addClass('active');
			};
		}
	});
})
/*绑定手机倒计时*/ 
function countdown(obj,second){
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

}
 