$(function(){	
	
	function scroll(){	
	var flag=true;	
	var scrollTop=$(window).scrollTop();
	if(scrollTop>800){
		$("#_left").fadeIn(100);
	}else{
		$("#_left").fadeOut(100);
	}
	$(".Louti").each(function(){
		if(scrollTop>$(this).offset().top-$(this).outerHeight()/2 ){
			$("#_left li").eq($(this).index()-4).addClass("active").siblings().removeClass("active");
			
		}
	})
}	
	$(window).scroll(function(){
				if(true){
				scroll();
		}
	});
	
	$("#_left li").click(function(){
		$(window).off();
		var index=$(this).index();
		$(this).addClass("active").siblings().removeClass("active");
	$("body,html").animate({"scrollTop":$(".Louti").eq(index).offset().top},1000,function(){
			$(window).on("scroll",scroll)
		});
	})	
	$("#_right li").hover(function(){
		var scrollTop=$(window).scrollTop();
		$(this).css({"border-left":0})
		$(this).find("span").show().animate({left:"-62px"},250);
	},function(){	
		$(this).find("span").hide().animate({left:"0"},250);
	})	
	
	$("#_right li:last").click(function(){
		$("body,html").animate({"scrollTop":0},1000,function(){
			$(window).on("scroll",scroll);
		})
	});
	

	$(".pass").click(function(){
		var str=Math.random();
		var new_src='http://member.aolaigo.com/validcode.aspx?r='+str+'';
		$(".pass img").attr("src",new_src);
		return false;
	})
	$(document).click(function(){		
			$("#_right").animate({right:-300},500);		
	})
	$("#_right li:not(:last)").click(function(event){	
		$("#_right").animate({right:0},500)
		event.stopPropagation()
	})
	$(".em1").click(function(event){
		$("#_right").animate({right:-300},500)
		event.stopPropagation()
	});
	$("input").click(function(event){	
		event.stopPropagation()
	});
	//http://search.aolaigo.com//handler/suggest.ashx?callback=callback&cmd=GetSuggestWords&keyword=ff&order=1_1&page=1&psize=16&fp=1&iz=0 //搜索
	
	$.get("json/nav.json",function(data){
		
		var html = template("nav",data);
		$(".ban_Nav").html(html);
	})
		
	$(".ban_Nav").on("mouseenter","li",function(){		
		$(".ban_Second").show();
		var index = $(this).index();
		$.get("json/nav_second.json",function(data){
			var html = template("nav2",data[index]);
			$(".ban_Second").html(html);
		})
	})	
	$(".ban_Nav").on("mouseleave",function(){
		$(".ban_Second").hide();
	})
	$(".ban_Second").hover(function() {
		
		$(this).show();
	}, function() {
		$(this).hide();
	});
	
	
	;(function($){		
		var num=0;
	autoPlay();	
	$(".pre").click(function(event){	
		event.stopPropagation()
		clearInterval(timer);
		num--;			
		move();				
		autoPlay();
		
	})	
	$(".next").click(function(event){
		clearInterval(timer);
		num++;	
		move();		
		autoPlay();
		event.stopPropagation()
	})	
	function move(){
		if(num<0){
			num=$(".banner_pic li").size()-1;
		}
		if(num>=$(".banner_pic li").size()){
			num=0;
		}
				
	$(".banner_pic li").stop().eq(num).animate({opacity:1}).siblings().stop().animate({opacity:0});
	$(".banner_num li").stop().eq(num).addClass("active").siblings().stop().removeClass("active");				
	};
		
	$(".ban_Right").hover(function(){
			clearInterval(timer);
	},function(){
		autoPlay();
	})		
	
	
	$(".banner_num li").mouseenter(function(){
		clearInterval(timer);		
		$(this).stop().addClass("active").siblings().stop().removeClass("active");
		var num=$(this).index();
		$(".banner_pic li").eq(num).animate({opacity:1}).siblings().animate({opacity:0});				
			
	})	
		function pageshow(index){
			$(".banner_num li").eq(index).addClass("active").siblings().stop().removeClass("active");
		
		}
	function autoPlay(){
		timer=setInterval(function(){
			$(".next").trigger('click');
		},2000)
	};

	})(jQuery)
	

		var timer1 =setInterval(function(){
			foo("2017-7-12 16:25:30")
		},1000);
		function foo(endtime) {
			var oDate = new Date();
			var newDate = new Date(endtime);
			var plus = (newDate - oDate) / 1000;
			var hh = Math.floor(plus / 3600);
			var mm = Math.floor(plus % 3600 / 60)
			var ss = Math.floor(plus % 3600 % 60);
			hh = hh < 10 ? "0" + hh : hh;
			mm = mm < 10 ? "0" + mm : mm;
			ss = ss < 10 ? "0" + ss : ss;
			if(plus*1000<=300) {
				clearInterval(timer1);
			}
			$(".djs .hour").html(hh);
			$(".djs .min").html(mm);
			$(".djs .sec").html(ss);
		}

	$("._pre").click(function(){
		
		$(".Luxury_goodDown ul").animate({left:"+=150px"},function(){
		$(".Luxury_goodDown ul").find("li:last").remove().clone(true).prependTo(".Luxury_goodDown ul").parent(".Luxury_goodDown ul").css({left:"-=150px"});
			
		})
	})
	$("._next").click(function(){
		
		$(".Luxury_goodDown ul").animate({left:"-=150px"},function(){
		$(".Luxury_goodDown ul").find("li:first").remove().clone(true).appendTo(".Luxury_goodDown ul").parent(".Luxury_goodDown ul").css({left:"+=150px"});
			
		})
	})

$("._pre1").click(function(){
		
		$(".Cross_goodDown ul").animate({left:"+=150px"},function(){
		$(".Cross_goodDown ul").find("li:last").remove().clone(true).prependTo(".Cross_goodDown ul").parent(".Cross_goodDown ul").css({left:"-=150px"});
			
		})
	})
	$("._next1").click(function(){
		
		$(".Cross_goodDown ul").animate({left:"-=150px"},function(){
		$(".Cross_goodDown ul").find("li:first").remove().clone(true).appendTo(".Cross_goodDown ul").parent(".Cross_goodDown ul").css({left:"+=150px"});
			
		})
	});

	$(".Sport_pre").click(function(){
		$(".Sport_out_down").animate({left:"+=120px"},function(){
			$(".Sport_out_down").find("li:last").remove().clone(true).prependTo(".Sport_out_down").parent('.Sport_out_down').css({left:"-=120px"})
		})
	});
		$(".Sport_next").click(function(){
		$(".Sport_out_down").animate({left:"-=120px"},function(){
			$(".Sport_out_down").find("li:first").remove().clone(true).appendTo(".Sport_out_down").parent('.Sport_out_down').css({left:"+=120px"})
		})
		
	});

$(".Women_pre").click(function(){
		$(".Women_out_down").animate({left:"+=120px"},function(){			
		$(".Women_out_down").find("li:last").remove().clone(true).prependTo(".Women_out_down").parent('.Women_out_down').css({left:"-=120px"})
		})
	});
		$(".Women_next").click(function(){
		$(".Women_out_down").animate({left:"-=120px"},function(){
			$(".Women_out_down").find("li:first").remove().clone(true).appendTo(".Women_out_down").parent('.Women_out_down').css({left:"+=120px"})
		})
		
	});




$(".Men_pre").click(function(){
		$(".Men_out_down").animate({left:"+=120px"},function(){
		$(".Men_out_down").find("li:last").remove().clone(true).prependTo(".Men_out_down").parent('.Men_out_down').css({left:"-=120px"})
		})
	});
		$(".Men_next").click(function(){
		$(".Men_out_down").animate({left:"-=120px"},function(){
		$(".Men_out_down").find("li:first").remove().clone(true).appendTo(".Men_out_down").parent('.Men_out_down').css({left:"+=120px"})
		})
	});		
			
	
	
	$(".Trendy_pre").click(function(){
		$(".Trendy_out_down").animate({left:"+=120px"},function(){
		$(".Trendy_out_down").find("li:last").remove().clone(true).prependTo(".Trendy_out_down").parent('.Trendy_out_down').css({left:"-=120px"})
		})
	});
		$(".Trendy_next").click(function(){
		$(".Trendy_out_down").animate({left:"-=120px"},function(){
		$(".Trendy_out_down").find("li:first").remove().clone(true).appendTo(".Trendy_out_down").parent('.Trendy_out_down').css({left:"+=120px"})
		})					
	});
	


/*=======================*/


	$(".Bags_pre").click(function(){
		$(".Bags_out_down").animate({left:"+=120px"},function(){			
		$(".Bags_out_down").find("li:last").remove().clone(true).prependTo(".Bags_out_down").parent('.Bags_out_down').css({left:"-=120px"})
		})
	});
		$(".Bags_next").click(function(){
		$(".Bags_out_down").animate({left:"-=120px"},function(){
			$(".Bags_out_down").find("li:first").remove().clone(true).appendTo(".Bags_out_down").parent('.Bags_out_down').css({left:"+=120px"})
		})
		
	});




$(".Underwear_pre").click(function(){
		$(".Underwear_out_down").animate({left:"+=120px"},function(){
		$(".Underwear_out_down").find("li:last").remove().clone(true).prependTo(".Underwear_out_down").parent('.Underwear_out_down').css({left:"-=120px"})
		})
	});
		$(".Underwear_next").click(function(){
		$(".Underwear_out_down").animate({left:"-=120px"},function(){
		$(".Underwear_out_down").find("li:first").remove().clone(true).appendTo(".Underwear_out_down").parent('.Underwear_out_down').css({left:"+=120px"})
		})
	});		
			
	
	
	$(".Children_pre").click(function(){
		$(".Children_out_down").animate({left:"+=120px"},function(){
		$(".Children_out_down").find("li:last").remove().clone(true).prependTo(".Children_out_down").parent('.Children_out_down').css({left:"-=120px"})
		})
	});
		$(".Children_next").click(function(){
		$(".Children_out_down").animate({left:"-=120px"},function(){
		$(".Children_out_down").find("li:first").remove().clone(true).appendTo(".Children_out_down").parent('.Children_out_down').css({left:"+=120px"})
		})					
	});
	
	
	$(".others_down li a").hover(function(){
		$(this).css({color:"#C81417"})
	},function(){
		$(this).css({color:"#666"})
	})
	
	
	


})


