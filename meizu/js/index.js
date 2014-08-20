$(function(){

	$(".pwdBtnShow").click(function(){
		if($(".pwdBtnShow").attr("isshow")=="false")
		{
			$(".pwdBtnShow i").css("background-position","-60px -93px");
			$(".password").hide();
			$(".password1").val($(".password").val());
			$(".password1").show();
			$(".pwdBtnShow").attr("isshow","true");
		}
		else
		{
			$(".pwdBtnShow i").css("background-position","");
			$(".password1").hide();
			$(".password").val($(".password1").val());
			$(".password").show();
			$(".pwdBtnShow").attr("isshow","false");
		}
		
	});
	
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
		reg=/^1[3|4|5|8][0-9]\d{4,8}$/i;//验证手机正则(输入前7位至11位)

		if( $(".phone").val()=="")
		{ 
			$(".phone").parent().addClass("errorC");
			$(".error1").html("请输入手机号");
			$(".error1").css("display","block");
		}
		else if($(".phone").val().length<11)
        {   
        	$(".phone").parent().addClass("errorC");
            $(".error1").html("手机号长度有误！");
            $(".error1").css("display","block");
        }
        else if(!reg.test($(".phone").val()))
        {   
        	$(".phone").parent().addClass("errorC");
            $(".error1").html("逗我呢吧，你确定这是你的手机号!!");
            $(".error1").css("display","block");
        }
        else
        {
        	$(".phone").parent().addClass("checkedN");
        }
	});


	$(".kapkey").blur(function(){
		reg=/^.*[\u4e00-\u9fa5]+.*$/;
		if( $(".kapkey").val()=="")
		{
			$(".kapkey").parent().addClass("errorC");
			$(".error2").html("请填写验证码");
			$(".error2").css("display","block");
		}
        else if($(".kapkey").val().length<6)
        {   
        	$(".kapkey").parent().addClass("errorC");
            $(".error2").html("验证码长度有误！");
            $(".error2").css("display","block");
        }
        else if(reg.test($(".kapkey").val()))
        {
        	$(".kapkey").parent().addClass("errorC");
            $(".error2").html("验证码里无中文！");
            $(".error2").css("display","block");
        }
        else 
        {
        	$(".kapkey").parent().addClass("checkedN");
        }
	});


	$(".password,.password1").blur(function(){
		reg1=/^.*[\d]+.*$/;
		reg2=/^.*[A-Za-z]+.*$/;
		reg3=/^.*[_@#%&^+-/*\/\\]+.*$/;//验证密码
		if($(".pwdBtnShow").attr("isshow")=="false")
		{
			var Pval = $(".password").val();
		}
		else
		{
			var Pval = $(".password1").val();
		}
		
		if( Pval =="")
		{
			$(".password").parent().addClass("errorC");
			$(".error3").html("请填写密码");
			$(".error3").css("display","block");
		}
        else if(Pval.length>16 || Pval.length<8)
        {   
        	$(".password").parent().addClass("errorC");
            $(".error3").html("密码应为8-16个字符，区分大小写");
            $(".error3").css("display","block");
        }
        else if(!((reg1.test(Pval) && reg2.test(Pval)) || (reg1.test(Pval) && reg3.test(Pval)) || (reg2.test(Pval) && reg3.test(Pval)) ))
        {
        	$(".password").parent().addClass("errorC");
            $(".error3").html("需至少包含数字、字母和符号中的两种类型");
            $(".error3").css("display","block");
        }
        else
        {
        	$(".password").parent().addClass("checkedN");
        }
	});


	$(".phone").focus(function(){
		$(".phone").parent().removeClass("errorC");
		$(".phone").parent().removeClass("checkedN");
		$(".error1").hide();
		$("#mz_Float").css("top","232px");
		$("#mz_Float").find(".bRadius2").html("输入11位手机号码，可用于登录和找回密码");
	});
	$(".kapkey").focus(function(){
		$(".kapkey").parent().removeClass("errorC");
		$(".kapkey").parent().removeClass("checkedN");
		$(".error2").hide();
		if($(".error1").css("display")=="block")
		{
			$("#mz_Float").css("top","334px");
		}
		else
		{
			$("#mz_Float").css("top","304px");
		}
		
		$("#mz_Float").find(".bRadius2").html("请输入手机收到的验证码");
	});
	$(".password,.password1").focus(function(){
		$(".password").parent().removeClass("errorC");
		$(this).parent().removeClass("checkedN");
		$(".error3").hide();
		if($(".error1").css("display")=="block" && $(".error2").css("display")=="block")
		{
			$("#mz_Float").css("top","436px");
		}
		else if($(".error1").css("display")=="block" || $(".error2").css("display")=="block")
		{
			$("#mz_Float").css("top","406px");
		}
		else
		{
			$("#mz_Float").css("top","376px");
		}
		
		$("#mz_Float").find(".bRadius2").html("长度为8-16个字符，区分大小写，至少包含两种类型");
	});
	$("#mainForm input").blur(function(){
		$("#mz_Float").css("top","");
	});


	//mainForm2
	$(".username").focus(function(){
		$(".username").parent().removeClass("errorC");
		$(".username").parent().removeClass("checkedN");
		$(".error1").hide();
		$("#mz_Float").css("top","232px");
		$("#mz_Float").find(".bRadius2").html("长度为4-32个字符支持数字、字母、下划线，字母开头，字母或数字结尾");
	});
	$(".email").focus(function(){
		$(".email").parent().removeClass("errorC");
		$(".email").parent().removeClass("checkedN");
		$(".error2").hide();
		if($(".error1").css("display")=="block")
		{
			$("#mz_Float").css("top","334px");
		}
		else
		{
			$("#mz_Float").css("top","304px");
		}
		
		$("#mz_Float").find(".bRadius2").html("请输入手机收到的验证码");
	});
	$(".password,.password1").focus(function(){
		$(".password").parent().removeClass("errorC");
		$(this).parent().removeClass("checkedN");
		$(".error3").hide();
		if($(".error1").css("display")=="block" && $(".error2").css("display")=="block")
		{
			$("#mz_Float").css("top","436px");
		}
		else if($(".error1").css("display")=="block" || $(".error2").css("display")=="block")
		{
			$("#mz_Float").css("top","406px");
		}
		else
		{
			$("#mz_Float").css("top","376px");
		}
		
		$("#mz_Float").find(".bRadius2").html("长度为8-16个字符，区分大小写，至少包含两种类型");
	});
	$("#mainForm input").blur(function(){
		$("#mz_Float").css("top","");
	});
});

