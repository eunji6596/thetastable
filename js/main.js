/* main.js */

$(document).ready(function(){
    var ht = $(window).height();
    $("section").height(ht);

    $(window).resize(function(){
		var ht = $(window).height();
		$("section").height(ht);
        $("#fullpage > section").height(ht);
		$(".main_visual").height(ht);
		$("#section1 > ul > li").height(ht);
	});

    /* famaily box */
	$(".aside .family .box > a").bind("mouseover focus",function(){
		$(".aside .family").addClass("on");

	});
	$(".aside .family").bind("mouseleave blur",function(){
		$(".aside .family").removeClass("on");
	});

    /* top버튼 클릭 */
    $(".btn_top").click(function(){
        $("html, body").stop().animate({"scrollTop": 0}, 1400, "swing");
    });

    /* 햄버거 버튼 클릭 */
    $(".allmenu").click(function(){
		$(this).toggleClass("on");
		
		if( $(this).hasClass("on") ){
			$(".allmenu_box").addClass("on");
			$("#header").addClass("ov");
			$(".scrh_box").addClass("ov");
			$(".aside").addClass("on");
		}else{
			$(".allmenu_box").removeClass("on");
			$("#header").removeClass("ov");
			$(".scrh_box").removeClass("ov");
			$(".aside").removeClass("on");
		}
	});

	var a = true;
	$(".allmenu_box .snb > ul > li > a").click(function(){
		if(a){
			$(".allmenu_box .snb > ul > li").removeClass("on");
			$(this).parent().addClass("on");
			$(".allmenu_box .snb > ul > li > ul").css("display","none");
			$(this).next().css("display","block");
			$(this).parent().addClass("hover");
			a = false;
		}else{
			$(this).parent().removeClass("hover");
			$(this).next().css("display","none");
			a = true;
		}
	});

    /* 주메뉴 */
    $(".gnb > ul > li > a").bind("mouseover focus",function(){
		$(".header_wrap").stop().animate({"height":"420px"},500,"linear");
		$(".gnb > ul > li > ul").css("display","block");
		$(".header_wrap").addClass("over");
		$("#header").addClass("over");
		$(".gnb > ul > li").removeClass("on");
		$(this).parent().addClass("on");
		$(".scrh_box").addClass("on");
		
	});

	$("#header").bind("mouseleave blur",function(){
		$(".header_wrap").stop().animate({"height":"100px"},300,"linear");
		$(".gnb > ul > li > ul").css("display","none");
		$(".header_wrap").removeClass("over");
		$("#header").removeClass("over");
		$(".gnb > ul > li").removeClass("on");
		$(".scrh_box").removeClass("on");
	});

    /* 스크롤 이동 */
    $(window).scroll(function(){
		var scroll = $(this).scrollTop(); //현재scroll 위치값
		var ht = $(window).height();
		if(scroll >= 0 * ht && scroll < 1 * ht){
			$("#fullpage > section").removeClass("on");
			$("#fullpage > section").eq(0).addClass("on");
			$("#fullpage > section").find(".b_txt").removeClass("active");
			$("#fullpage > section").eq(0).find(".b_txt").addClass("active");
			$("#wrap").removeClass('black');
			$(".footnav ul li").removeClass("on");
			$(".footnav ul li").removeClass("white");
			$(".footnav ul li").eq(0).addClass("white");
		}
		if(scroll >= 1 * ht && scroll < 2 * ht){
			$("#fullpage > section").removeClass("on");
			$("#fullpage > section").eq(1).addClass("on");
			$("#fullpage > section").find(".b_txt").removeClass("active");
			$("#fullpage > section").eq(1).find(".b_txt").addClass("active");
			$("#wrap").removeClass('black');
			$(".footnav ul li").removeClass("on");
			$(".footnav ul li").removeClass("white");
			$(".footnav ul li").eq(1).addClass("white");
		}
		if(scroll >= 2 * ht && scroll < 3 * ht){
			$("#fullpage > section").removeClass("on");
			$("#fullpage > section").eq(2).addClass("on");
			$("#fullpage > section").find(".b_txt").removeClass("active");
			$("#fullpage > section").eq(2).find(".b_txt").addClass("active");
			$("#wrap").addClass('black');
			$(".footnav ul li").removeClass("on");
			$(".footnav ul li").removeClass("white");
			$(".footnav ul li").eq(2).addClass("on");
		}
		if(scroll >= 3 * ht && scroll < 4 * ht){
			$("#fullpage > section").removeClass("on");
			$("#fullpage > section").eq(3).addClass("on");
			$("#fullpage > section").find(".b_txt").removeClass("active");
			$("#fullpage > section").eq(3).find(".b_txt").addClass("active");
			$("#wrap").addClass('black');
			$(".footnav ul li").removeClass("on");
			$(".footnav ul li").removeClass("white");
			$(".footnav ul li").eq(3).addClass("on");
		}
		if(scroll >= 4 * ht){
			$("#fullpage > section").removeClass("on");
			$("#fullpage > section").eq(4).addClass("on");
			$("#fullpage > section").find(".b_txt").removeClass("active");
			$("#fullpage > section").eq(4).find(".b_txt").addClass("active");
			$("#wrap").addClass('black');
			$(".footnav ul li").removeClass("on");
			$(".footnav ul li").removeClass("white");
			$(".footnav ul li").eq(4).addClass("on");
		}

		// 한페이지씩 이동
		$("#fullpage > section").mousewheel(function(event,delta){
			console.log("this",this);
			console.log(delta);
			if(delta > 0) { //마우스 휠을 올렸을 때
				var prev = $(this).prev().offset().top;
				$("html,body").stop().animate({"scrollTop":prev},700,"linear");
			}else if(delta < 0) { //마우스 휠을 내렸을 때
				var next = $(this).next().offset().top;
				$("html,body").stop().animate({"scrollTop":next},700,"linear");
			}
		});//mousewheel
	}); //scroll

    // footernav
	$(".footnav ul li").click(function(){
		var thisIdx = $(this).index();
		$(".footnav ul li").removeClass('on');
		$(this).addClass('on');
		$("html,body").stop().animate({"scrollTop":thisIdx * ht},1500,"swing");
	});

	/* 브랜드 박스 */


	$(".prev_btn").click(function(){
		$(".listbox ul").animate({marginLeft : -585});
	});








    
    
    
    
    
    
    
    

});