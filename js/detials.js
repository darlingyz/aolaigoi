;(function($){
	$(function(){
	$(".detial_left li").each(function() {
	
			$(this).hover(function() {
			$(this).find("img").css("border", "1px solid #f00")
				var x = $(this).index();
				$(".detial_li img").eq(0).attr("src", "../img/" + x + x + ".jpg");
				$(".detial_li img").eq(1).attr("src", "../img/"  + x + x + ".jpg");
				$(".detial_li img").eq(2).attr("src", "../img/" + x + x + ".jpg");
				$(".detial_li img").eq(3).attr("src", "../img/"  + x + x + ".jpg");
				$(".detial_li img").eq(4).attr("src", "../img/" + x + x + ".jpg");
				
				$(".detial_right_li img").eq(0).attr("src", "../img/"	+ x + x + x + ".jpg");
				$(".detial_right_li img").eq(1).attr("src", "../img/" + x + x + x + ".jpg");
				$(".detial_right_li img").eq(2).attr("src", "../img/" + x+ x + x + ".jpg");
				$(".detial_right_li img").eq(3).attr("src", "../img/"	+ x  + x + x + ".jpg");
				$(".detial_right_li img").eq(4).attr("src", "../img/" + x+ x + x + ".jpg");

			}, function() {
				$(this).find("img").css("border", "1px solid #fff")
			})
		})
		var index1=0;
		$(".jia").click(function(){
			index1++;
			$(".num").val(index1);
		})
		$(".jian").click(function(){			
			if(index1>1){
				$(".num").val(--index1)
			}
			
		})
		
		$(".banner_pic1 img").hover(function(){
			$(".pic img").show();
		},function(){
			$(".pic img").hide();
		})
		
		
		
		
		
		
})
})(jQuery)

