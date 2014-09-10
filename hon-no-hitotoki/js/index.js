$(function(){
	logoBgChange();
	//$(".logoanime").css("background-position","-"+29*272+"px "+0*272+"px");
});

var index1=1;
var index2=0;
function logoBgChange(){
	$(".logoanime").css("background-position","-"+index1*272+"px "+"-"+index2*272+"px");
	index1++;
	if(index1==30){
		index2++;
		index1=0;
		if(index2==6){
			index2=0;
		}
	}
	setTimeout("logoBgChange()",50);
}