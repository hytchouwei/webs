function activeIt(a){
	a.style.backgroundColor = "#666";
}

function activeOut(a){
	a.style.backgroundColor = "";
}


$(function(){
	$(".btn2").hover(function(){
		$(this).css({"width":"200px"});
		$(this).css({"height":"100px"});
	},function(){
		$(this).css({"width":""});
		$(this).css({"height":""});
	});
	$(".btn2").click(function(){
		$(this).css({"width":"600px"});
		$(this).css({"height":"300px"});
	});
	showTime();

	// $( "button" ).click(function() {
 //  		$( "#show" ).show( "clip", 1000 );
	// });

	$(window).scroll(function(){
		var scrolls= $(this).scrollTop();
		//alert(scrolls);
		if( scrolls> 200)
		{
			$("#show").show("clip",1000);
		}
	});
});

function showTime(){
	var curT=new Date();
	var year=curT.getYear();
	if(year<314)
	{
		year=year+1900;
	}
	var y1=Math.floor(year/1000);
	var y2=Math.floor(year%1000/100);
	var y3=Math.floor(year%100/10);
	var y4=Math.floor(year%10);

	var month=curT.getMonth()+1;
	var m1=Math.floor(month/10);
	var m2=Math.floor(month%10);

	var day=curT.getDate();
	var d1=Math.floor(day/10);
	var d2=Math.floor(day%10);

	var hour=curT.getHours();
	var h1=Math.floor(hour/10);
	var h2=Math.floor(hour%10);

	var minute=curT.getMinutes();
	var mi1=Math.floor(minute/10);
	var mi2=Math.floor(minute%10);

	var second=curT.getSeconds();
	var s1=Math.floor(second/10);
	var s2=Math.floor(second%10);
	$("#y1").css({"background-position": "0 -"+y1*30+"px"});
	$("#y2").css({"background-position": "0 -"+y2*30+"px"});
	$("#y3").css({"background-position": "0 -"+y3*30+"px"});
	$("#y4").css({"background-position": "0 -"+y4*30+"px"});

	$("#m1").css({"background-position": "0 -"+m1*30+"px"});
	$("#m2").css({"background-position": "0 -"+m2*30+"px"});
	$("#d1").css({"background-position": "0 -"+d1*30+"px"});
	$("#d2").css({"background-position": "0 -"+d2*30+"px"});

	$("#h1").css({"background-position": "0 -"+h1*30+"px"});
	$("#h2").css({"background-position": "0 -"+h2*30+"px"});
	$("#mi1").css({"background-position": "0 -"+mi1*30+"px"});
	$("#mi2").css({"background-position": "0 -"+mi2*30+"px"});
	$("#s1").css({"background-position": "0 -"+s1*30+"px"});
	$("#s2").css({"background-position": "0 -"+s2*30+"px"});

	setTimeout(showTime,1000);
}