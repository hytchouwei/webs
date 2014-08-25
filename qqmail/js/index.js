$(function(){
	//全选
	$("input[name='checkedall']").click(function(){
		var checkedofAll = $(this).prop("checked");
		$("input[name='mailid']").prop("checked",checkedofAll);
		if(checkedofAll==true)
		{
			$(".M").addClass("B");
		}
		else if(checkedofAll==false)
		{
			$(".M").removeClass("B");
		}
	});

	//选择改背景
	$("input[name='mailid']").click(function(){
		var checkedofNo = $(this).prop("checked");
		if(checkedofNo==true)
		{
			$(this).parent().parent().parent().parent().addClass("B");
		}
		else if(checkedofNo==false)
		{
			$(this).parent().parent().parent().parent().removeClass("B");
		}
		//alert(checkedofNo);
	});
	//hover改背景
	$(".i").hover(function(){
		var checkedofNo = $(this).find("input[name='mailid']").prop("checked");
		if(checkedofNo==false)
		{
			$(this).addClass("V");
		}
	},function(){
		$(this).removeClass("V");
	});

	//删除
	$(".del").click(function(){
		//删除本身
		$("input[name='mailid']").each(function(){
			if($(this).prop("checked")==true)
			{
				$(this).parent().parent().parent().parent().remove();
			}
		});
		//删除标题
		$(".toarea").each(function(){
			var count;
			$(this).find(".M").each(function(i){//i为元素序号
				count=i;
			});
			if(count==null)
			{
				$(this).prev().remove();
				$(this).remove();
			}
		});
	});
	//全部标记为已读
	$(".tag").click(function(){
		$(".Rr").css("background-position","-48px -16px");
	});
	//星标
	//var count1=0;//控制点击次数
	$(".fg").click(function(){
		//$(this).toggleClass("fs1");
		//$(this).toggleClass("fs1", count1++ % 4 == 0);
		if($(this).attr("title")=="标记星标")
		{
			$(this).addClass("fs1");
			$(this).attr("title","取消星标");
		}
		else
		{
			$(this).removeClass("fs1");
			$(this).attr("title","标记星标");
		}

	 });
	//标记为下拉-显示
	$(".btnDropdownTag").click(function(){
		$(this).find(".icoSelectSN").toggle();
		return false;
	});
	$(document).click(function(){
		$(".icoSelectSN").hide();
	});
	//标记为-具体
	$(".menu_item").click(function(){
		var title = $(this).html();
		var count2=0;//计数器
		$("input[name='mailid']").each(function(){
			if($(this).prop("checked")==true)
			{
				if(title=="已读邮件")
				{
					$(this).parent().next().find(".Rr").css("background-position","-48px -16px");
				}
				if(title=="未读邮件")
				{
					$(this).parent().next().find(".Rr").css("background-position","-48px 0");
				}
				if(title=="星标邮件")
				{
					$(this).parent().next().next().find(".fg").addClass("fs1");
				}
				if(title=="取消星标")
				{
					$(this).parent().next().next().find(".fg").removeClass("fs1");
				}
				count2++;
			}
		});
		if(count2==0)
		{
			$("#msgBoxDIV").show();
			setTimeout('$("#msgBoxDIV").hide()',5000);
		}
	});
})



//jQuery 1.9.1以后toggle事件不可用只剩切换显示隐藏
// $(document).ready(function(){
//   $("button").toggle(function(){
//     $("body").css("background-color","green");},
//     function(){
//     $("body").css("background-color","red");},
//     function(){
//     $("body").css("background-color","yellow");}
//   );
// });