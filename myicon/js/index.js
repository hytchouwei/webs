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


		//alert(a);
	$(window).scroll(function(){
		
		var scrolls = $(this).scrollTop();

		if( scrolls>580)
		{

			$(".siteTitle").css({"padding-top":"0","padding-bottom":"0"});
			$("#mainNav").css({"padding-top":"0","padding-bottom":"0"});
			$(".social").css({"padding-top":"0","padding-bottom":"0"});
			$("#navBar").css("height","40px");
			$(".navBg").css("opacity","0.95");
		}
		else
		{
			$(".siteTitle").css({"padding-top":"20px","padding-bottom":"20px"});
			$("#mainNav").css({"padding-top":"20px","padding-bottom":"20px"});
			$(".social").css({"padding-top":"20px","padding-bottom":"20px"});
			$("#navBar").css("height","82px");
			$(".navBg").css("opacity","0");
		}
		if(scrolls>550)
		{
			$(".Tile1").slideDown(1000);
			$(".Tile2").slideDown(1000);
			$(".Tile3").slideDown(1000);
		}
		if(scrolls>950)
		{
			$(".Tile4").slideDown(1000);
			$(".Tile5").slideDown(1000);
			$(".Tile6").slideDown(1000);
		}
		if(scrolls>1350)
		{
			$(".Tile7").slideDown(1000);
			$(".Tile8").slideDown(1000);
			$(".Tile9").slideDown(1000);
		}
	});


	$(".slideNavAA").click(function(){
		count= $(this).attr("number");
		change();
	});

	$(".slideNavAA").hover(function(){
		clearInterval(timerHandle);//停掉某个计时器
	},function(){
		timerHandle = setInterval('change()',3000);//给计时器取名
	});

	timerHandle = setInterval('change()',3000);//给计时器取名
	
	// $(".viewO").hover(function(){
	// 	//$(this).css({"background-color":"rgba(3, 46, 65, 1)","background-image":"none"});
	// 	$(this).stop(true,false).animate({"width":"350px","height":"455px","border-width":"20px"},200);
	// 	//$(this).animate({"opacity":"1"},400);
		
	// },function(){
	// 	$(this).stop(true,false).animate({"border-width":"0","width":"100%","height":"100%"},200);
	// 	//$(this).animate({"opacity":"0"},400);
	// });

	// $(".viewT").hover(function(){
	// 	//$(this).css({"background-color":"rgba(3, 46, 65, 1)","background-image":"none"});
	// 	$(this).stop(true,false).animate({"width":"350px","height":"313px","border-width":"20px"},200);
	// 	//$(this).animate({"opacity":"1"},400);
		
	// },function(){
	// 	$(this).stop(true,false).animate({"border-width":"0","width":"100%","height":"100%"},200);
	// 	//$(this).animate({"opacity":"0"},400);
	// });
});



var timerHandle;
var count=0;

function change(){
	var C1=(count+1)%3;
	var C2=(count+2)%3;

	$(".slide"+count).css({"z-index":"3","opacity":"1"});
	$(".slide"+C1).css({"z-index":"0","opacity":"0"});
	$(".slide"+C2).css({"z-index":"0","opacity":"0"});
	$(".transparent"+count).css({"z-index":"3","opacity":"1"});
	$(".transparent"+C1).css({"z-index":"0","opacity":"0"});
	$(".transparent"+C1).css({"z-index":"0","opacity":"0"});

	//$("#slideNavAA"+countO).attr("class","slideNavAA slideNavAAS");
	//$("#slideNavAA"+CO1).attr("class","slideNavAA");
	//$("#slideNavAA"+CO2).attr("class","slideNavAA");

	$("#slideNavAA"+count).addClass("slideNavAAS");
	$("#slideNavAA"+C1).removeClass("slideNavAAS");
	$("#slideNavAA"+C2).removeClass("slideNavAAS");


	$(".slideND"+count).css({"opacity":"0"});
	$(".slideND"+C1).css({"opacity":"1"});
	$(".slideND"+C2).css({"opacity":"1"});

	count++;
	if(count>=3)
	{
		count=0;
	}
 	
	//setTimeout("change("+count+")",3000);
}





/*function changeBgOne(){
	var addressO='url("../images/white-night-bg.jpg")';
	var addressT='url("../images/white-night.png")';
	$(".slide").css("background-image",addressO);
	$(".transparent").css("background-image",addressT);
	setTimeout("changeBgTwo()",1000);
}
function changeBgTwo(){
	var addressO='url("../images/BoNiU-gor-bg.jpg")';
	var addressT='url("../images/32ewv-monday-sunday-2.png")';
	$(".slide").css("background-image",addressO);
	$(".transparent").css("background-image",addressT);
	setTimeout("changeBgThree()",1000);
}
function changeBgThree(){
	var addressO='url("../images/1zjHi-bravo-bg-test.png")';
	var addressT='url("../images/82TbA-bravo-test.png")';
	$(".slide").css("background-image",addressO);
	$(".transparent").css("background-image",addressT);
	setTimeout("changeBgOne()",1000);
}*/










/*var countO=0;
var countT=0;
var addressO=new Array('url("images/1zjHi-bravo-bg-test.png")','url("images/white-night-bg.jpg")','url("images/BoNiU-gor-bg.jpg")');
var addressT=new Array('url("images/82TbA-bravo-test.png")','url("images/white-night.png")','url("images/32ewv-monday-sunday-2.png")');
function changeBg(){

$(".slide").css("background-image",addressO[countO+1]);
$(".transparent").css("background-image",addressT[countT+1]);
 	countO++;
  	countT++;
	if(countO>=3)
	{
		countO=0;
		countT=0;
		$(".slide").css("background-image",addressO[countO]);
		$(".transparent").css("background-image",addressT[countT]);
	}
	setTimeout("changeBg()",5000);
}*/