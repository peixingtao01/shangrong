$(function() {
		$('.flexslider').flexslider({
			animation: "slide",
			slideshow: true,
			slideshowSpeed: 4000,
			animationSpeed: 2000,
			touch: false,
			controlNav: true,
			directionNav: true,
			pauseOnHover: true  
		});
		$(".index01 .content ul li").hover(function(){
			$("http://www.kunyue2019.com/Public/Home/default/js/.index01 .content ul li .box").stop(false,true);
			$(this).find(".box").fadeIn();	
		},function(){
			$("http://www.kunyue2019.com/Public/Home/default/js/.index01 .content ul li .box").stop(false,true);
			$(this).find(".box").fadeOut();
		});	
		$('.fled').flexslider({
			animation: "fade",
			slideshow: true,
			slideshowSpeed: 4000,
			animationSpeed: 2000,
			touch: false,
			controlNav: true,
			directionNav: true,
			pauseOnHover: true  
		});
		$(".index03 .content ul li").hover(function(){
			$("http://www.kunyue2019.com/Public/Home/default/js/.index03 .content ul li .box").stop(false,true);
			$("http://www.kunyue2019.com/Public/Home/default/js/.index03 .content ul li .test").stop(false,true);
			$(this).find(".test").fadeOut();	
			$(this).find(".box").fadeIn();	
		},function(){
			$("http://www.kunyue2019.com/Public/Home/default/js/.index03 .content ul li .box").stop(false,true);
			$("http://www.kunyue2019.com/Public/Home/default/js/.index03 .content ul li .test").stop(false,true);
			$(this).find(".test").fadeIn();	
			$(this).find(".box").fadeOut();
		});	
		$(".index02 .left ul li:gt(3)").hide();
	});