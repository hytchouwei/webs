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


});

 var iconN=new Array('url("images/tab_icon_conversation_selected.png")',
 		'url("images/tab_icon_contact_selected.png")',
 		'url("images/tab_icon_plugin_selected.png")',
 		'url("images/tab_icon_setup_selected.png")'
 	);