// 문서가 준비될 때 -> 화면이 떳을때

$(function(){

	
	//alert('ok');
	
	// [1] 오늘 날짜를 alert 에 출력
	var today = new Date();
	// alert(today);  << 오늘날짜
	
	//*태그사이에 값을 얻어오거나 지정하는 함수 : text() / html()
	
	$("#date_wrap > .year").text(today.getFullYear());
	$("#date_wrap > .month").text(today.getMonth()+1);
	$("#date_wrap > .date").text(today.getDate());
	
	//============================================================
 	//[2] <전체메뉴 > 버튼이 눌렸을 때   자식만 > 씀  자손은 x
	$('#total_btn img').click(function(){
		$("div#total_menu").fadeIn()
	
	
	});
	// [Close] 버튼이 눌렸을때 메뉴 안보이게
	$("#total_close").click(function(){
		$("div#total_menu").fadeOut()
	});
	
	//=========================================
	//[3] 로그인 창 눌렀을 때 알림창이 뜨게
	$(".login_wrap img").click(function(){
		//alert("ok");
		$("#login_f").css({top:"30px"})
	});
	$(".login_close_btn img").click(function(){
		$("#login_f").css({top:"-500px"})
	});
	
	//==============================================
	//[4] 이미지 슬라이드
	$("#best_bg > ul").bxSlider({
		minSlides : 5,
		maxSlides : 5,
		moveSlides : 1,
		auto : true,
		slideWidth : 180
	
	});
	$("#best_bg").css({"padding-left":"70px"})
	
	
	//===================================================
	//[5] 탭팬
	$("#tabmenu dt").click(function(){
		$("#tabmenu dd").hide();
		$(this).next().show();
	
	
	});
	
	//==================================================
	//  숙제
	//(1) 탭팬 이벤트 발생할 때 마다 이미지 색상변경
	//	(hint : <img src ="">    replace() 이용
		
		$(document).ready(function() {
  $("#tabmenu dt").click(function() {
    var idx = $(this).index();
    $("#tabmenu dt").removeClass("on");
    $("#tabmenu dt").eq(idx).addClass("on");
    $(".tab_cont > div").hide();
    $(".tab_cont > div").eq(idx).show();
  })
});
		
	
		
		
//	(2)  검색창에 포커스 이벤트 발생시 -> 백그라운드 이미지 안보이게
//	  	 다시 포커스를 잃으면 -> 백그라운드 이미지 보이게

		$(document).ready(function(){    
		 $("#keyword").focusin(function(){       
		 $(this).css("background", "none");    });    
		 $("#keyword").focusout(function(){ 
		 $(this).css("background-image", url("../images/sch_guide.gif"));    
		 });
	});

	  	 
//	(3) 알림판 이미지 나의 느낌대로 처리 	
	
	
	
	
	
});