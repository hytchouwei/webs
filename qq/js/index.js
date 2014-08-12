$(function(){
	$(".notcurrentContent").hover(function(){
		var nC1 = $(this).parent().parent().find(".lm2LL1LContent1");
		var C1 = $(this).parent().parent().find(".lm2LL1LContent2");
		var nC2 = $(this).parent().parent().find(".lm2LL1Right2Content1");
		var C2 = $(this).parent().parent().find(".lm2LL1Right2Content2");
		var nC3 = $(this).parent().parent().find(".lm7LContent1");
		var C3 = $(this).parent().parent().find(".lm7LContent2");
		
		$(this).parent().find(".selectContent").attr("class","notcurrentContent");
		$(this).attr("class","currentContent selectContent");
		
		nC1.css({"display":"none"});
		C1.css({"display":"block"});
		nC2.css({"display":"none"});
		C2.css({"display":"block"});
		nC3.css({"display":"none"});
		C3.css({"display":"block"});
	},function(){
	});
	$(".currentContent").hover(function(){
		var nC1 = $(this).parent().parent().find(".lm2LL1LContent1");
		var C1 = $(this).parent().parent().find(".lm2LL1LContent2");
		var nC2 = $(this).parent().parent().find(".lm2LL1Right2Content1");
		var C2 = $(this).parent().parent().find(".lm2LL1Right2Content2");
		var nC3 = $(this).parent().parent().find(".lm7LContent1");
		var C3 = $(this).parent().parent().find(".lm7LContent2");

		$(this).parent().find(".selectContent").attr("class","notcurrentContent");
		$(this).attr("class","currentContent selectContent");

		C1.css({"display":"none"});
		nC1.css({"display":"block"});
		C2.css({"display":"none"});
		nC2.css({"display":"block"});
		C3.css({"display":"none"});
		nC3.css({"display":"block"});
	},function(){
	});

	$(".lmLL2RUContent1").show();
	$(".lmLL2RUTA").mouseover(function(){
		$(".lmLL2RUContent").hide();
		var m = $(this).attr("shuzi");
		$(".lmLL2RUContent"+m).show();
	});

	$(".rightArea3CCLCS").show();
	$(".rightArea3CCLT").mouseover(function(){
		$(this).parent().parent().parent().find(".rightArea3CCLC").hide();
		$(this).next().show();
	});


	for( var b=0; b<=5;b++)
	{
		$(".layouPC2Li"+b).animate({"left":b*188+"px"},0);
	}
	//locate();
	timerHandle = setInterval("newchange(2000,-1)",2000);
	directionR=-1;


	$(".layoutPicContentL").click(function(){
		$("#layoutPicContent2 li").stop(true,true);
		clearInterval(timerHandle);
		//clearInterval(timerHandleL);
		// n++;
		// if(n==6)
		// {
		// 	n=0;
		// }

		newchange(0,-1);
		timerHandle = setInterval("newchange(2000,-1)",2000);
		directionR=-1;
	});

	$(".layoutPicContentR").click(function(){
		$("#layoutPicContent2 li").stop(true,true);
		clearInterval(timerHandle);
		//clearInterval(timerHandleR);
		newchange(0,0);
		timerHandle = setInterval("newchange(2000,0)",2000);
		directionR=0;		
		// n--;
		// if(n==-1)
		// {
		// 	n=5;
		// }
		//timerHandle = setInterval("newchange()",2000);
	});



	$("#sosoText").focus(function(){
		$(this).attr({"value":""});
	});

	$("#sosoText").blur(function(){
		$(this).attr({"value":"QQ"});
	});

	$("#sosoLeftBox").hover(function(){
		$("#sosoLeftBox ul").show();
	},function(){
		$("#sosoLeftBox ul").hide();
	});

	//timeId = setInterval("change()",1000);
	/*
	$(".layoutPicContentL").click(function(){
		index=2;
		$("#layoutPicContent2").stop(true,false);
		change();
	});
	$(".layoutPicContentR").click(function(){
		index=3;
		$("#layoutPicContent2").stop(true,false);
		change();
	});*/


	$("#sosoLeftBox li").hover(function(){
		$(this).css("background-color",""); 
	},function(){});

	$("#rightArea1LeftA").click(function(){
		$("#rightArea1LeftA").css({"left":"-353px","top":"-1px"});
		$("#rightArea1showUl").show();
	});
	$("#rightArea1show")
});

var directionR=-1;
var n=0;//第一张
var i=0;//循环用
var l=0;//总数
//var index=0;
function newchange(time,direction){//-1表示左，0表示右   time : 动画时间
	l=n+5;
	var a=n%6;//第一张
	var b=(n+5)%6;//最后一张

	for(n;n<=l;n++)//从当前第一张开始将整体向direction方向位移188px
	{
		var m=n%6;
		$(".layouPC2Li"+m).animate({"left":(i+direction)*188+"px"},time);
		i++;
	}	
	n=n-6;//回到第一张
	i=0;//循环置零

	if(direction==-1)
	{
		$(".layouPC2Li"+a).animate({"left":"940px"},0);//将第一张闪到最后
	}
	else
	{
		$(".layouPC2Li"+b).animate({"left":"-188px"},0);//将最后一张闪到最前
		n=b-1;
	}
	n++;//加完回到第一张	
	if(n==6)
	{
		n=0;
	}
}


	// $("#layoutPicContent2 li").hover(function(){
	// 	clearInterval(timerHandle);
	// 	//$("#layoutPicContent2 li").pause();
	// 	$("#layoutPicContent2 li").stop(true,false);
	// 	if(directionR==-1)
	// 	{
	// 		n--;
	// 		if(n==-1)
	// 		{
	// 			n=5;
	// 		}
	// 	}
	// 	// if(directionR==0)
	// 	// {
	// 	// 	n++;
	// 	// 	if(n==6)
	// 	// 	{
	// 	// 		n=0;
	// 	// 	}
	// 	// }
	// },function(){
	// 	var rr=$(".layouPC2Li"+n).css("left");

	// 	if(directionR==-1)
	// 	{
	// 		if(rr=="940px")
	// 		{
	// 			timerHandle = setInterval("newchange(2000,-1)",2000);
	// 		}
	// 		//newchange(1000,-1);
	// 		else
	// 		{
	// 			newchange(1000,-1);
	// 			timerHandle = setInterval("newchange(2000,-1)",2000);
	// 			// n--;
	// 			// if(n==-1)
	// 			// {
	// 			// 	n=5;
	// 			// }	
	// 			// alert(n);	
	// 		 }
			
			
	// 		directionR=-1;
	// 	}
	// 	// if(directionR==0)
	// 	// {
	// 	// 	newchange(1000,0);
	// 	// 	timerHandle = setInterval("newchange(2000,0)",2000);
	// 	// 	directionR=0;
	// 	// }
	// });

	

// function locate(time,direction){	
// 	for(n;n<=l;n++)
// 	{
// 		var m=n%6;
// 		$(".layouPC2Li"+m).animate({"left":(i+direction)*188+"px"},time);//从当前第一张开始将整体向direction方向位移188px
// 		i++;
// 	}	
// 	n=n-6;//回到第一张
// 	i=0;//循环置零
// }









// var n=0;//第一张
// var i=0;//循环用
// var l=0;//总数
// //var index=0;
// function newchange(time,direction){//-1表示左，0表示右   time : 动画时间
// 	l=n+5;
// 	var a=n%6;//第一张
// 	var b=(n+5)%6;//最后一张
// 	locate(time,direction);
// 	if(direction==-1)
// 	{
// 		$(".layouPC2Li"+a).animate({"left":"940px"},0);//将第一张闪到最后
// 	}
// 	else
// 	{
// 		$(".layouPC2Li"+b).animate({"left":"-188px"},0);//将最后一张闪到最前
// 		n=b-1;
// 	}
// 	n++;//加完回到第一张	
// 	if(n==6)
// 	{
// 		n=0;
// 	}
// }

// function locate(time,direction){	
// 	for(n;n<=l;n++)
// 	{
// 		var m=n%6;
// 		$(".layouPC2Li"+m).animate({"left":(i+direction)*188+"px"},time);//从当前第一张开始将整体向direction方向位移188px
// 		i++;
// 	}	
// 	n=n-6;//回到第一张
// 	i=0;//循环置零
// }











// function locateN(){	
// 	$(".layouPC2Li"+n).animate({"left":"940px"},0);
// 	for(n+1;n<=l;n++)
// 	{
// 		var m=n%6;
// 		$(".layouPC2Li"+m).animate({"left":(i-1)*188+"px"},0);
// 		i++;
// 	}	
// 	n=n-5;
// 	i=0;
// }


// function newchange(){
// 	l=n+6
// 	locate();
// 	n++;
// 	i++;
	
	
// 	if(n==7)
// 	{
// 		n=0;
// 	}
// }
// function locate(){
// 	var a=(n+6)%7;
// 	for(n;n<=l;n++)
// 	{
// 		var m=n%7;
// 		if(m==a)
// 		{
// 			$(".layouPC2Li"+m).animate({"left":(i-1)*188+"px"},0);
// 		}
// 		$(".layouPC2Li"+m).animate({"left":(i-2)*188+"px"},2000);
// 		i++;
// 	}
// 	n=n-7;
// 	i=0;
// }





/*
var n=1;
var i=0;
var l=0;

function newchange(){
	n--;
	i++;
	l=n+5
	locate();
	if(n==-5)
	{
		n=1;
	}
}

function locate(){
	for(n;n<=l;n++)
	{
		var m=n+i;
		
		if(n>-1)
		{
			//$(".layouPC2Li"+m).css("left",(n-1)*188+"px");
			$(".layouPC2Li"+m).animate({"left":(n-1)*188+"px"},2000);
		}
		else 
		{
			//$(".layouPC2Li"+m).css("left",((n-1)*188+6*188)+"px");
			$(".layouPC2Li"+m).animate({"left":((n-1)*188+6*188)+"px"},0);
		}
	}
	n=n-6;
}
*/

/*
function change(){
	if(index==0)
	{
		$("#layoutPicContent2").animate({
			"left":"-165px"
		},2000);
		index=1;
	}
	else if(index==1)
	{
		$("#layoutPicContent2").animate({
			"left":"23px"
		},2000);
		index=0;
	}
	else if(index==2)
	{
		$("#layoutPicContent2").animate({
			"left":"-165px"
		},0);
		index=1;
	}
	else if(index==3)
	{
		$("#layoutPicContent2").animate({
			"left":"23px"
		},0);
		index=0;
	}
}*/