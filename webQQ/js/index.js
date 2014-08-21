$(function(){

// 	$(window).scroll( function() { 
//     alert("滚动条到顶部的垂直高度: "+$(document).scrollTop()); 
//     alert("页面的文档高度 ："+$(document).height());
//     alert('浏览器的高度：'+$(window).height());
//     alert($(window).height()); //浏览器时下窗口可视区域高度
// 	   alert($(document).height()); //浏览器时下窗口文档的高度
//     alert($(document.body).height());//浏览器时下窗口文档body的高度
//     alert($(document.body).outerHeight(true));//浏览器时下窗口文档body的总高度 包括border padding margin
//     alert($(window).width()); //浏览器时下窗口可视区域宽度
//     alert($(document).width());//浏览器时下窗口文档对于象宽度
//     alert($(document.body).width());//浏览器时下窗口文档body的高度
//     alert($(document.body).outerWidth(true));//浏览器时下窗口文档body的总宽度 包括border padding margin

//     alert($(document).scrollTop()); //获取滚动条到顶部的垂直高度
//     alert($(document).scrollLeft()); //获取滚动条到左边的垂直宽度
// });

	//alert('浏览器的高度：'+$(window).height());
	// $(window).height(function(){
	// 	$(".black").css("height",$(window).height());
	// });
	//$(".black").css("height",$(window).height());
	
	//$(".chatPanel").draggable({containment:".draggableBox"});


	$(document).on("click",".facemenu i",function(){
		var content = $(this).parent().parent().parent().find(".chatTextarea").val();
		content += ("["+$(this).attr("title")+"]");
		$(this).parent().parent().parent().find(".chatTextarea").val(content);
	});



	//拖动
	$(".currentChatScrollAreaList").sortable({ revert:true,axis:"y"});
	$('.chatI').draggable({
		connectToSortable:".currentChatScrollAreaList",
		//helper:"clone",
		revert:"invalid",

    });
    $("ul,li").disableSelection();

    $(".panelNotifySetting").draggable({containment:".draggableBox",scroll:false});//拖动

	$(document).on("click",".chatPanel",function(){
		$(".chatPanel").css("z-index",0);//隐藏全体聊天窗口
		$(".panelNotifySetting").css("z-index",0);//隐藏设置栏
		$(this).css("z-index",1);//显示当前聊天窗口
	});

	// $(document).on("click",".panelNotifySetting",function(){
	// 	$(".chatPanel").css("z-index",0);//隐藏全体聊天窗口
	// 	$(".panelNotifySetting").css("z-index",1);//显示设置栏
	// });
	$(".panelNotifySetting").click(function(){
		$(".chatPanel").css("z-index",0);//隐藏全体聊天窗口
		$(this).css("z-index",1);//显示设置栏
	});




	//赋初始显示状态
	$("#session").find(".icon").css("background-image",iconN[0]);
	//底部导航切换
	$(".nav").click(function(){
		$(".nav .icon").css("background-image","");

		var n =$(this).attr("num");

		$(".nav").removeClass("navSelected");
		$(this).addClass("navSelected");
		$(this).find(".icon").css("background-image",iconN[n-1]);
		
		
		$(".panel").hide();
		$("#panel"+n).show();
	});
	//生成或显示聊天窗口，生成会话列表,出小圆点 
	$(document).on("click",".listItem",function(){
		var num = $(this).attr("class").split("Ltqq");
		var name = $(this).find(".memberNick").html().split("<span>");
		var nameAll = $(this).find(".memberNick").html();
		//var Msg = $(this).find(".memberMsg").html();
		var lastC = $(this).find(".lastChat").html()
		var PicA = $(this).find("img").attr("src");
		// if(Msg==null)
		// {	
		// 	Msg="";
		// }
		

		if($(this).attr("showchatPanel") == "false")//生成聊天窗口
		{
			addChatPanel(num[1],name[0]);
			$(".Ltqq"+num[1]).attr("showchatPanel","true");
		}
		
		$(".chatPanel").css("z-index",0);//隐藏全体聊天窗口
		
		$(".chatPanel"+num[1]).css("z-index",1);//显示聊天窗口

		$(".chatPanel"+num[1]).show();

		if($(this).attr("isshow")=="false")//生成会话列表 
		{
			addChat(num[1],PicA,nameAll);
			chatCount++;
			$(".Ltqq"+num[1]).attr("isshow","true");
		}

		
		$(".chatPanel").draggable({containment:".draggableBox",scroll:false,handle:".chatHeader"});//拖动
		$("#session a").css("background-image",'url("css/images/systemmsg_unread.png")');//出小圆点


		//$(".listItem").draggable({snap:".currentChatScrollAreaList",snapModel:"outer"});
	}); 

	//会话置顶
	$(document).on("click",".chatI",function(){
		var num = $(this).attr("class").split("Ltqq");
		var name = $(this).find(".memberNick").html().split("<span>");
		var nameAll = $(this).find(".memberNick").html();
		var PicA = $(this).find("img").attr("src");
		var lastC = $(this).find(".lastChat").html()
		var PicA = $(this).find("img").attr("src");

		ChattoTop(num[1],PicA,nameAll,lastC);
		$(this).remove();

	});


	//叉叉
	$(document).on("mousemove",".listItem",function(){
		$(this).find(".close").show();
	});
	$(document).on("mouseout",".listItem",function(){
		$(this).find(".close").hide();
	});
	
	//删除会话，清空记录
	$(document).on("click",".close",function(){
		var num = $(this).parent().attr("class").split("Ltqq");
		$(".Ltqq"+num[1]).attr({"showchatPanel":"false","isshow":"false"});		
		$(this).parent().remove();
		chatCount--;
		$(".chatPanel"+num[1]).remove();
		return false;
	});


	//隐藏聊天窗口
	$(document).on("click",".chatHeaderRightButton",function(){
		//var numC = $(this).parent().parent().attr("class").split("chatPanel chatPanel");
		//$(".Ltqq"+numC[1]).attr("showchatPanel","false");

		$(this).parent().parent().fadeOut();
		$(".chatPanel").css("z-index",0);

	});
	//发送对话
	$(document).on("click",".sendBtn",function(){
		var temp = $(this).parent().parent().parent().attr("class").split("chatPanel chatPanel");
		var numC =temp[1].split(" ");//jQuery ui对类名做了改变
		
		var content = $(this).parent().find(".chatTextarea").val();

		if(content!="")
		{
			if(isshowTime=="true")
			{
				showTime(numC[0]);
				isshowTime="false";
			}
			send(numC[0],content);
			$(this).parent().find(".chatTextarea").val("");
		}
		
		$(".chatBodyBox").scrollTop($(".chatBodyBox")[0].scrollHeight); 
		
	});
	//键盘发送
	$(document).keyup(function(e){
	    if (e.keyCode == 13) //enter键的ascII码为13
	    {
	    	$(".sendBtn").trigger("click");
	    }
	});

	//弹出表情框
	$(document).on("click",".addFaceBtn",function(){

		if($(this).parent().parent().find(".facemenu").attr("isshow")=="false")
		{
			$(".facemenu").fadeIn();
			$(this).parent().parent().find(".facemenu").attr("isshow","true");
		}
		else
		{
			$(".facemenu").fadeOut();
			$(this).parent().parent().find(".facemenu").attr("isshow","false");
		}
		
	});

	//删除字符
	$(document).on("click",".delKey",function(){
		var content = $(this).parent().parent().parent().find(".chatTextarea").val();
		var contentNewLength = content.length-9;
		var contentNew = content.substring(0,contentNewLength);
		$(this).parent().parent().parent().find(".chatTextarea").val(contentNew);
	});

	//下拉小菜单
	$(document).on("click",".chatHeaderLeftButton",function(){
		if($(this).parent().parent().find(".pannelMenuList").attr("isshow")=="false")
		{
			$(this).parent().parent().find(".pannelMenuList").slideDown();
			$(this).parent().parent().find(".pannelMenuList").attr("isshow","true");
		}
		else
		{
			$(this).parent().parent().find(".pannelMenuList").slideUp();
			$(this).parent().parent().find(".pannelMenuList").attr("isshow","false");
		}
		
	});


	// 联系人顶部切换
	$(".memberTabLi").click(function(){
		$(".memberTabLi").removeClass("selectmemberTabLi");
		$(this).addClass("selectmemberTabLi");

		var LiIndex=$(this).index();
		$(".memberTNBox").removeClass("selectmemTNBox");
		$(".memberTNBox:eq("+LiIndex+")").addClass("selectmemTNBox");
	});


	// 联系人中部切换
	$(".memberTNBULiGroupD").click(function(){
		if($(this).next().attr("isshow")=="false")
		{
			$(this).css("background-image",'url("images/open_arrow_fire.png")');
			$(this).next().show();
			$(this).next().attr("isshow","true");
		}
		else
		{
			$(this).css("background-image","");
			$(this).next().hide();
			$(this).next().attr("isshow","false");
		}
		
	});

	//QQ人物状态更换
	$(".rowSetCLi").click(function(){
		var p = $(this).find(".rowSetCLiIcon").css("background-position");
		$(".userOnlineState").css("background-position",p);
		$(".rowSetL").css("background-position",p);
	});


	//打开关闭QQ人物状态栏
	$(".rowSet").click(function(){
		if($(".rowSetC").attr("isshow")=="false")
		{
			$(".rowSetC").show();
			$(".rowSetC").attr("isshow","true");
		}
		else
		{
			$(".rowSetC").hide();
			$(".rowSetC").attr("isshow","false");
		}
		return false;
	});
	$(document).click(function(){
		if($(".rowSetC").attr("isshow")=="true")
		{
			$(".rowSetC").hide();
			$(".rowSetC").attr("isshow","false");
		}
	});

	//关于QQ
	$(".aboutQQClick").click(function(){
		if($(".aboutQQ").attr("isshow")=="false")
		{
			$(this).find(".moreIcon").css("background-image",'url("images/open_arrow_fire.png")');
			$(".aboutQQ").show();
			$(".aboutQQ").attr("isshow","true");
		}
		else
		{
			$(this).find(".moreIcon").css("background-image","");
			$(".aboutQQ").hide();
			$(".aboutQQ").attr("isshow","false");
		}
	});


	//相关设置开关
	$(".panel4rowS").click(function(){
		$(".panelNotifySetting").show();
	});
	$(".panelSetHeaderB").click(function(){
		$(".panelNotifySetting").hide();
	});


	//改变背景
	$(".changBgFre").click(function(){
		//$(".bgAllImage").css({"opacity":"0"});
		BgIndex--;
		if(BgIndex==-1)
		{
			BgIndex=28;
		}
		$(".bgAllImage").css("background-image",'url("css/images/'+BgIndex+'.jpg")');
		//$(".bgAllImage").attr("background-image","css/images/"+BgIndex+".jpg");
		//$(".bgAllImage").animate({"opacity":"1"},1000);
	});
	$(".changBgNext").click(function(){
		//$(".bgAllImage").css({"opacity":"0"});
		BgIndex++;
		if(BgIndex==29)
		{
			BgIndex=0;
		}
		$(".bgAllImage").css("background-image",'url("css/images/'+BgIndex+'.jpg")');
		//$(".bgAllImage").attr("src","css/images/"+BgIndex+".jpg");
		//$(".bgAllImage").animate({"opacity":"1"},1000);
	});
	

	//消除会话圆点
	setInterval("chatspot()",1000);
	setInterval("showTimeIsorNot()",5000);
});

var BgIndex = 1;//背景图

var chatCount = 0;//会话数

var isshowTime = "true";

var iconN=new Array('url("images/tab_icon_conversation_selected.png")',//底部导航图片地址
		'url("images/tab_icon_contact_selected.png")',
		'url("images/tab_icon_plugin_selected.png")',
		'url("images/tab_icon_setup_selected.png")'
	);

//定时显示时间
function showTimeIsorNot(){
	isshowTime="true";
}


//会话小圆点
function chatspot(){
	if(chatCount==0)
	{
		$("#session a").css("background-image","");
	}
}

//添加聊天窗口
function addChatPanel(num,name){
	var html="";
	html+='			<div class="chatPanel chatPanel'+num+'" tabindex="-1">';
	html+='				<div class="chatHeader">';
	html+='					<div class="chatHeaderLeftButton">';
	html+='						<span class="chatHeaderLeftButtonI"></span>';
	html+='					</div>';
	html+='					<h1 class="chatTitle">'+name+'</h1>';
	html+='					<div class="chatHeaderRightButton" title="隐藏到会话栏">';
	html+='						<span class="chatHeaderRightButtonI">隐藏</span>';
	html+='					</div>';
	html+='				</div>';
	html+='				<div class="chatBodyWrapper">';
	html+='					<div class="chatBodyBox">';
	html+='					</div>';
	html+='				</div>';
	html+='				<ul class="pannelMenuList" isshow="false">';
	html+='					<li>';
	html+='						<div class="menuListIcon menuListIcon1"></div>';
	html+='						QQ空间';
	html+='					</li>';
	html+='					<li>';
	html+='						<div class="menuListIcon menuListIcon2"></div>';
	html+='						详细资料';
	html+='					</li>';
	html+='					<li>';
	html+='						<div class="menuListIcon menuListIcon3"></div>';
	html+='						聊天记录';
	html+='					</li>';
	html+='				</ul>';
	html+='				<div class="chatFooter">';
	html+='					<ul class="facemenu" isshow="false">';
	html+='						<li class="faceIteam">';
	html+='					        <i title="微笑"  num="1"></i>';
	html+='					        <i title="撇嘴" num="2"></i>';
	html+='					        <i title="色" num="3"></i>';
	html+='					        <i title="发呆" num="4"></i>';
	html+='					        <i title="得意" num="5"></i>';
	html+='					        <i title="流泪" num="6"></i>';
	html+='					        <i title="害羞" num="7"></i>';
	html+='					        <i title="闭嘴" num="8"></i>';
	html+='					        <i title="睡" num="9"></i>';
	html+='					        <i title="delKey"  class="delKey"></i>';
	html+='        				</li>';
	html+='					</ul>';
	html+='					<div class="chatToolbar">';
	html+='						<div class="addFaceBtn" title="时间不太够啊">';
	html+='							<span class="btnImg"></span>';
	html+='						</div>';
	html+='						<textarea class="chatTextarea"></textarea>';
	html+='						<button class="sendBtn">';
	html+='							<span>发送</span>';
	html+='						</button>';
	html+='					</div>';
	html+='				</div>';
	html+='			</div>';
	$("#container").append(html);
}

//显示时间
function showTime(n){
	var Time = new Date();
	var h = Time.getHours()<10?"0"+Time.getHours():Time.getHours();
	var m = Time.getMinutes()<10?"0"+Time.getMinutes():Time.getMinutes();
	var s = Time.getSeconds()<10?"0"+Time.getSeconds():Time.getSeconds();
	var T = h+":"+m+":"+s;

	var html="";
	html+='						<div class="chatTime">';
	html+='							<span>'+T+'</span>';
	html+='						</div>';
	$(".chatPanel"+n).find(".chatBodyBox").append(html);
}

//发送消息
function send(n,c){
	var content=c;

	for( var i=0;i<content.length;i++)
	{
		content=content.replace("[微笑]","<img src='images/14.gif' />");
		content=content.replace("[撇嘴]","<img src='images/1.gif' />");
		content=content.replace("[色]","<img src='images/2.gif' />");
		content=content.replace("[发呆]","<img src='images/3.gif' />");
		content=content.replace("[得意]","<img src='images/4.gif' />");
		content=content.replace("[流泪]","<img src='images/5.gif' />");
		content=content.replace("[害羞]","<img src='images/6.gif' />");
		content=content.replace("[闭嘴]","<img src='images/7.gif' />");
		content=content.replace("[睡]","<img src='images/8.gif' />");
	}

	


	var html="";
	html+='						<div class="chatContentSelf">';
	html+='							<img class="avatarImg" src="images/g (1).jpg">';
	html+='							<p class="chatNick">六道';
	html+='							</p>';
	html+='							<p class="chatContent ">'+content+'</p>';
	html+='						</div>';
	$(".chatPanel"+n).find(".chatBodyBox").append(html);
	$(".Ltqq"+n).find(".lastChat").html(content);
}


//添加会话
function addChat(n,p,name){
	var html="";
	html+='											<li class="listItem chatI Ltqq'+n+'" showchatPanel="true" isshow="false">';
	html+='												<a href="#" class="avatar">';
	html+='													<img src="'+p+'">';
	html+='												</a>';
	html+='												<p class="memberNick">'+name+'</p>';
	html+='												<span class="lastChat"></span>';
	html+='												<div class="close" title="结束会话，聊天记录会消失哦"></div>';
	html+='											</li>';
	$(".currentChatScrollAreaList").prepend(html);
}

//会话置顶
function ChattoTop(n,p,name,lastC){
	var html="";
	html+='											<li class="listItem chatI Ltqq'+n+'" showchatPanel="true" isshow="true">';
	html+='												<a href="#" class="avatar">';
	html+='													<img src="'+p+'">';
	html+='												</a>';
	html+='												<p class="memberNick">'+name+'</p>';
	html+='												<span class="lastChat">'+lastC+'</span>';
	html+='												<div class="close" title="结束会话，聊天记录会消失哦"></div>';
	html+='											</li>';
	$(".currentChatScrollAreaList").prepend(html);
}