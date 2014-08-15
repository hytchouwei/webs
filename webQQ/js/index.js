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

	$("#session").find(".icon").css("background-image",iconN[0]);
	
	$(".nav").click(function(){
		$(".nav .icon").css("background-image","");

		var n =$(this).attr("num");

		$(".nav").removeClass("navSelected");
		$(this).addClass("navSelected");
		$(this).find(".icon").css("background-image",iconN[n-1]);
		
		
		$(".panel").hide();
		$("#panel"+n).show();
	});

	$(".listItem").click(function(){
		var num = $(this).attr("class").split("Ltqq");
		var name = $(this).find(".memberNick").html().split("<span>");
		
		if($(this).attr("showchatPanel") == "false")
		{
			addChatPanel(num[1],name[0]);
			$(".Ltqq"+num[1]).attr("showchatPanel","true")
		}
		
		$(".chatPanel").css("z-index",0);
		
		$(".chatPanel"+num[1]).css("z-index",1);
		
	});
	$(document).on("click",".chatHeaderRightButton",function(){
		var numC = $(this).parent().parent().attr("class").split("chatPanel chatPanel");
		$(".Ltqq"+numC[1]).attr("showchatPanel","false");

		$(this).parent().parent().remove();
	});

	$(document).on("click",".sendBtn",function(){
		var numC = $(this).parent().parent().parent().attr("class").split("chatPanel chatPanel");
		
		var content = $(this).parent().find(".chatTextarea").val();

		send(numC[1],content);

		$(this).parent().find(".chatTextarea").val("");
	});

});

 var iconN=new Array('url("images/tab_icon_conversation_selected.png")',
 		'url("images/tab_icon_contact_selected.png")',
 		'url("images/tab_icon_plugin_selected.png")',
 		'url("images/tab_icon_setup_selected.png")'
 	);

 function addChatPanel(num,name){
 	var html="";
 	html+='			<div class="chatPanel chatPanel'+num+'">';
 	html+='				<div class="chatHeader">';
 	html+='					<div class="chatHeaderLeftButton">';
 	html+='						<span class="chatHeaderLeftButtonI"></span>';
 	html+='					</div>';
 	html+='					<h1 class="chatTitle">'+name+'</h1>';
 	html+='					<div class="chatHeaderRightButton">';
 	html+='						<span class="chatHeaderRightButtonI">关闭</span>';
 	html+='					</div>';
 	html+='				</div>';
 	html+='				<div class="chatBodyWrapper">';
 	html+='					<div class="chatBodyBox">';
 	html+='					</div>';
 	html+='				</div>';
 	html+='				<div class="chatFooter">';
 	html+='					<div class="chatToolbar">';
 	html+='						<div class="addFaceBtn">';
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


 function send(n,c){
 	var html="";
 	html+='						<div class="chatContentSelf">';
 	html+='							<img class="avatarImg" src="images/g (1).jpg">';
 	html+='							<p class="chatNick">六道';
 	html+='							</p>';
 	html+='							<p class="chatContent ">'+c+'</p>';
 	html+='						</div>';
 	$(".chatPanel"+n).find(".chatBodyBox").append(html);
 }