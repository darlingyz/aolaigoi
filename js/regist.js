$(function(){
//登录界面处理
//鼠标放在登录页面请输入用户名，然后input失去焦点，如果为空，提示请输入邮箱、手机号；如果不是手机号，提示不是手机号。；
//点击登录，如果用户名为空，提示输入用户名，如果用户名不为空，判断密码是否为空，如果为空提示输入密码。如果不为空，判断是否正确。
$("#user").focusin(function(){
	$(this).siblings().html("");
	
})
$("#user").focusout(function(){
	if($(this).val().length==0){
		$(this).siblings().html("请输入邮箱/手机号").css("color","#f00");
	}
})
$("#tj").on("click",function(){
	if($("#user").val().length==0){
		$(".username .error").html("请输入用户名").css("color","#f00");
		return false;
	}
	
	var str=$("#user").val();
	var pattern = /(13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7}/;
	if(!pattern.test(str)){
		$("#user").siblings().html("请输入邮箱/手机号").css("color","red")
		return false;
	}
	if($("#pass").val().length==0){
		$("#pass").siblings().html("请输入密码").css("color","red");
		return false;
	}
	$.post("http://localhost/aolaigou/aolaigou/php/login.php",{"phone_num":$("#user").val(),"password":$("#pass").val()},function(data){
		if(data==1){location.href="../index.html"}
		else{alert("用户名或密码错误")}
	})
})

			$(".regist-change").eq(0).on("click",function(){
				$(".regist-main").eq(0).fadeOut();	
				$(".regist-main").eq(1).fadeIn();				
				$(this).fadeOut();
				$(".regist-change").eq(1).fadeIn();
			})
		
			$(".regist-change").eq(1).on("click",function(){
				$(this).fadeOut();
				$(".regist-change").eq(0).fadeIn();
				$(".regist-main").eq(1).fadeOut();	
				$(".regist-main").eq(0).fadeIn();		
			})
		
//注册页面处理；	
	//验证手机号
	var flag=true;flag1=true;flag2=true;flag3=true;flag4=true;
	$(".w225").eq(0).find("input").focusin(function(){	
		$(this).siblings().html("请输入注册的手机号").css("color","#000")	
	})
	$(".w225").eq(0).find("input").focusout(function(){
		var str=$(this).val();
		if(str==""){
			$(this).siblings().html("")
		}else{
			var pattern = /(13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7}/;
			if(!pattern.test(str)){
				$(this).siblings().html("账号暂时只开放手机号码注册").css("color","red")
				flag=false;
			}else{
				$(this).siblings().html("")
				flag=true}
			
		}		
	})
	//验证密码
	$(".w225").eq(1).find("input").focusin(function(){	
		$(this).siblings().html("6-20位字符,可使用字母、数字或字符的组合").css("color","#000")
	})
	$(".w225").eq(1).find("input").focusout(function(){
		var str=$(this).val();
		if(str==""){
			$(this).siblings().html("")

		}else{
			//判断密码长度
			if(str.length<6||str.length>=20){
				$(this).siblings().html("密码长度只能在6-20位字符之间").css("color","red")
				flag1=false;
			}else{
				var pattern = /./;
				var pattern1=/\s/;
		//		console.log(pattern.test(str),pattern1.test(str));
				if(!pattern.test(str)||pattern1.test(str)){		
					$(this).siblings().html("密码只能由英文、数字及标点符号组成").css("color","red")
					flag1=false;
				}else{
					$(this).siblings().html("")
					flag1=true}
			}
		}		
	})
	//确认密码
	$(".w225").eq(2).find("input").focusin(function(){	
		$(this).siblings().html("请再次输入密码").css("color","#000")
	})
	$(".w225").eq(2).find("input").focusout(function(){
		var str=$(this).val();
		if(str==""){
			$(this).siblings().html("");

		}else{
			var password=$(".w225").eq(1).find("input").val()
		//	console.log(password,$(this).val())
			if($(this).val()!==password){
				$(this).siblings().html("两次输入密码不一致").css("color","#f00");
				flag2=false;
			}else{
				$(this).siblings().html("两次输入密码一致")
				flag2=true;
			}
		}
	})
	//生成四位随机数验证码。

	getRandNum();
	function getRandNum(){
		var randCode="";
		var str="12345RTZXCYUI67SDFGHJ8KLV90QWEOPABNM";
		for(var i=0;i<4;i++){
			var randNum = Math.floor(Math.random()*36);
			var getNum = str.substr(randNum,1)
			randCode+=getNum;
		}
		$(".w142").eq(0).find(".yzm").html(randCode);
	}
	$(".w142").eq(0).find(".yzm").on("click",function(){
		getRandNum();
	})
//	console.log(randCode);
	//检测验证码
	$(".w142").eq(0).find("input").focusin(function(){	
		$(".w142").eq(0).find(".error").html("输入验证码").css("color","#000")
	})
	$(".w142").eq(0).find("input").focusout(function(){
		var str=$(this).val();
		if(str==""){
			$(".w142").eq(0).find(".error").html("请输入验证码").css("color","#f00");

		}else{
			$(".w142").eq(0).find(".error").html("")
		}
	})
	
	//点击注册按钮，
	$(".zc-btn").on("click",function(){
		if($(".w225").eq(2).find("input").val()!==$(".w225").eq(1).find("input").val()){
				$(".w225").eq(2).find("input").siblings().html("两次输入密码不一致").css("color","#f00");
				flag1=false;
			}else{
				$(".w225").eq(2).find("input").siblings().html("两次输入密码一致")
				flag1=true;
			}
		if($(".w225").eq(0).find("input").val()==""){
			$(".w225").eq(0).find(".error").html("请输入注册的手机号").css("color","#f00")
			flag=false;
		}
		if($(".w225").eq(1).find("input").val()==""){
			$(".w225").eq(1).find(".error").html("请输入密码").css("color","#f00")
			flag1=false;
		}
		if($(".w225").eq(2).find("input").val()==""){
			$(".w225").eq(2).find(".error").html("请输入密码").css("color","#f00")
			flag2=false;
		}
		if($(".w142").eq(1).find("input").val()==""){
			$(".w142").eq(1).find(".error").html("请输入验证码").css("color","#f00")
			flag3=false;
		}else{$(".w142").eq(1).find(".error").html("")}
		if($(".w142").eq(0).find("input").val()==""){
			$(".w142").eq(0).find(".error").html("请输入验证码").css("color","#f00")
			flag4=false;
		}

		if($(".w142").eq(0).find("input").val().toUpperCase()!==$(".w142").eq(0).find(".yzm").html()){
			flag4=false;
			$(".w142").eq(0).find(".error").html("验证码输入错误").css("color","#f00");
			getRandNum();
		}else{
			flag4=true;
		}
		var flags=flag&&flag1&&flag2&&flag3&&flag4;
		
		if(!flags==true){
			console.log(1);
			return false;
		}else{
			
			$.post("http://localhost/aolaigou/aolaigou/php/regist.php",{"phone_num":$(".w225").eq(0).find("input").val(),"password":$(".w225").eq(1).find("input").val()},function(data){
				if(data==1){
					location.href='../index.html';
				}else{
					alert("该用户名已存在，请重新注册");
					
				}	
			})
		}
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})