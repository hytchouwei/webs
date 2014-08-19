$(function(){
	$(".checkboxPic").click(function(){
		if($(this).attr("isshow")=="false")
		{
			$(this).parent().css("margin-bottom","10px");
			$(".checkboxPic i").css({"background-position":" -0px -127px"});
			$(".otherError").css("display","block");
			$(this).attr("isshow","true");
		}
		else
		{
			$(this).parent().css("margin-bottom","");
			$(".checkboxPic i").css({"background-position":""});
			$(".otherError").hide();
			$(this).attr("isshow","false");
		}
		
	}); 

	$(".phone").blur(function(){
		reg=/^1[3|4|5|8][0-9]\d{4,8}$/i;
          if(!reg.test($(".phone").val())){   
                alert("错误,请输入11位的手机号！");
           }
	});


	$(".phone").focus(function(){
		$("#mz_Float").css("top","232px");
		$("#mz_Float").find(".bRadius2").html("输入11位手机号码，可用于登录和找回密码");
	});
	$(".kapkey").focus(function(){
		$("#mz_Float").css("top","304px");
		$("#mz_Float").find(".bRadius2").html("请输入手机收到的验证码");
	});
	$(".password").focus(function(){
		$("#mz_Float").css("top","376px");
		$("#mz_Float").find(".bRadius2").html("长度为8-16个字符，区分大小写，至少包含两种类型");
	});
	$("#mainForm input").blur(function(){
		$("#mz_Float").css("top","");
	});
});