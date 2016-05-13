/*
name：yangxiusong
datetime：2015/9/6
copyRight：p2p1.0
version： 量硕宏程投资管理（北京）有限公司）
*/

$(function () {
/********导航二级菜单显示和隐藏*******/
$(".header_nav_right ul li").hover(function () {
$(this).children("dl").css("display", "block");
}, function () {
$(this).children("dl").css("display", "none");
});
/********导航二级菜单显示和隐藏**end*****/

$(".login_div_tab ul li").click(function () {
if ($(this).text() == "立即登录") {
$(this).addClass("li-change");
$(this).siblings().removeClass("li-change");
$(".register_li").css("display", "none");
$(".login_li").css("display", "block");
};
if ($(this).text() == "免费注册") {
$(this).addClass("li-change");
$(this).siblings().removeClass("li-change");
$(".login_li").css("display", "none");
$(".register_li").css("display", "block");
};
});
$(".shaixuan ul li dl dd").click(function () {
$(this).children("a").css("color", "#2483CB");
$(this).siblings().children("a").css("color", "#666");
});


$(".tab_tile ul li").click(function () {
var tid = $(this).attr("id");
$(this).css("backgroundColor", "#2483CB");
$(this).css("color", "#fff");
$(this).siblings("li").css("backgroundColor", "#fff");
$(this).siblings("li").css("color", "#000");
$("." + tid).css("display", "block");
$("." + tid).siblings().css("display", "none");
});

$(".move_tab_tile ul li").click(function () {
var tid = $(this).attr("id");
$(this).css("backgroundColor", "#2483CB");
$(this).css("color", "#fff");
$(this).siblings("li").css("backgroundColor", "#fff");
$(this).siblings("li").css("color", "#000");
$("." + tid).css("display", "block");
$("." + tid).siblings().css("display", "none");
});
/*****************canvas圆形进度条*********************/
$('canvas.process').each(function() {
var text = $(this).text();
var process = text.substring(0, text.length-1);   
var canvas = this;  
var context = canvas.getContext('2d');  
//context.clearRect(0, 0, 60,60);  
context.beginPath();  
context.moveTo(30, 30);  
context.arc(30, 30, 30, 0, Math.PI * 2, false);  
context.closePath();  
context.fillStyle = '#eee';  
context.fill();  
context.beginPath();  
context.moveTo(30, 30);    
context.arc(30, 30, 30, 0, Math.PI * 2 * process / 100, false);  
context.closePath();  
context.fillStyle = '#2E99F7';  
context.fill();   
context.beginPath();  
context.moveTo(30, 30);  
context.arc(30, 30, 29, 0, Math.PI * 2, true);  
context.closePath();  
context.fillStyle = 'rgba(255,255,255,1)';  
context.fill();  
context.beginPath();  
context.arc(30, 30, 18, 0, Math.PI * 2, true);  
context.closePath();  
context.strokeStyle = '#FFF';  
context.stroke();  
context.font = "bold 0px Arial";  
context.fillStyle = '#FFF';  
context.textAlign = 'center';  
context.textBaseline = 'middle';  
context.moveTo(30, 30);  
context.fillText(text, 30, 30);  
});
$('canvas.process1').each(function() {
var text = $(this).text();
var process = text.substring(0, text.length-1);   
var canvas = this;  
var context = canvas.getContext('2d');  
context.clearRect(0, 0, 180, 180);  
context.beginPath();  
context.moveTo(90, 90);  
context.arc(90, 90, 90, 0, Math.PI * 2, false);  
context.closePath();  
context.fillStyle = '#eee';  
context.fill();  
context.beginPath();  
context.moveTo(90, 90);    
context.arc(90, 90, 90, 0, Math.PI * 2 * process / 128.5, false);  
context.closePath();  
context.fillStyle = '#F00';  
context.fill();   
context.beginPath();  
context.moveTo(90, 90);  
context.arc(90, 90, 88, 0, Math.PI * 2, true);  
context.closePath();  
context.fillStyle = 'rgba(255,255,255,1)';  
context.fill();  
context.beginPath();  
context.arc(90, 90, 18.5, 0, Math.PI * 2, true);  
context.closePath();  
context.strokeStyle = '#FFF';  
context.stroke();  
context.font = "bold 0px Arial";  
context.fillStyle = '#FFF';  
context.textAlign = 'center';  
context.textBaseline = 'middle';  
context.moveTo(90, 90);  
context.fillText(text, 90, 90);  
});
/******about左侧菜单******/
$(".left_nav ul li a").click(function () {
$(this).parent("li").css("backgroundColor", "#2483CB");
$(this).css("color", "#fff");
$(this).parent("li").siblings("li").css("backgroundColor", "#fff");
$(this).parent("li").siblings("li").children("a").css("color", "#666");
var id = $(this).attr("id");
$.each($(".right_content div"), function () {
if (id == $(this).attr("class")) {
$(this).css("display", "block");
$(this).siblings("div").css("display", "none");
};
});
});

/*************about收起弹开******************/
$(".sq_div").click(function()
{
var str=$(".sq_div").attr("value");
if(str=="弹开")
{
$(".sq").show();
$(".sq_div").attr("value","收起");
};
if(str=="收起")
{

$(".sq").hide();
$(".sq_div").attr("value","弹开");
};
});

$(".mtbd .mtbd_alink").click(function()
{
$(".mtbd .mtbd_popbox").show();
});
$(".mtbd_popbox_clo").click(function()
{
$(".mtbd .mtbd_popbox").hide();
});
/***********header**********/
$(".header_nav_right ul li").hover(function () {
$(this).children("dl").css("display", "block");
}, function () {
$(this).children("dl").css("display", "none");
})
/********头部菜单下拉*******/
$( ".move_head_nav .menu" ).click(function() {
$( ".cl-effect-15" ).slideToggle(300, function() {
});
});
/*************我要借款弹出框****************/
$(".loan_second li span").hide();
$(".loan_second .wen").hover(function()
{
$(".loan_second li span").show();
},function(){$(".loan_second li span").hide();});

$(".loan_btn input").click(function()
{
$("#pop_up_box").css("height","100%");
$(".pox_box1").show();
});
$(".pox_clo").click(function()
{
$("#pop_up_box").css("height","0");
$(".pox_box1").hide();
});

/*modifylogin-box弹出框*/
$(".bank-box").hide();
$(".register_btn").click(function()
{
$("#pop_up_box").css("height","100%");
$(".bank-box").show();
$(".bank_box1").show();
});
$(".bank_clo,.register_clo").click(function()
{
$("#pop_up_box").css("height","0");
$(".bank-box").hide();
$(".bank_box1").hide();
});
/*m_money_matters产品介绍下拉效果*/
$(".novice_text p").hide();
$(".novice_text i:eq(1)").hide();
$(".novice_text").click(function(){;
 var stri=$(".novice_text p").attr("class");
 if(stri=='on')
 {
	$(".novice_text i:eq(1)").hide();
	$(".novice_text i:eq(0)").show();
	$(".novice_text p").removeClass("on").hide();
	
 }else{
	$(".novice_text i:eq(1)").show();
	$(".novice_text i:eq(0)").hide();
	$(".novice_text p").addClass("on").show();
 };
});
/*m_money_matters_datails菜单下拉*/
$(".move_m_t1 ul").hide();
$(".move_m_t1").each(function(e)
{
   $(".move_m_t1:eq("+e+") .m_t1").click(function()
   {
		var str=$(".move_m_t1:eq("+e+") ul");
		if (str.hasClass('on')) {
			str.hide();
			str.removeClass("on");
			$(".move_m_t1 .m_t1 em").removeClass("icon-chevron-thin-up");
		}else{
			   $(".move_m_t1 ul").hide();
			   $(".move_m_t1 ul").removeClass("on")
			   $(this).siblings("ul").show().addClass("on");
			   $(".move_m_t1:eq("+e+") .m_t1 em").addClass("icon-chevron-thin-up");
		};
		  
   });
});
/*m_money_matters_datails a赋值弹性效果*/
$(".move_a").click(function()
 {
	 if($(".move_a").html()=="全部展开")
	 {
		 $(".move_m_t1:eq(0) ul li p").show();
		 $(".move_a").html("点击收起"); 
	 }
	 else if($(".move_a").html()=="点击收起")
	 {
		 $(".move_m_t1:eq(0) ul li p").hide();
		 $(".move_a").html("全部展开");
	 };		 
 });
	
/*people_bankcard bank-box弹出框*/

$(".bank-box").hide();
$(".bank_link").click(function()
{
 $("#pop_up_box").css("height","100%");
 $(".bank-box").show();
 $(".bank_box1").show();
});
$(".bank_clo").click(function()
{
 $("#pop_up_box").css("height","0");
 $(".bank-box").hide();
 $(".bank_box1").hide();
});

/*people_boundphone解绑弹出框*/
$(".bank-box").hide();
$("._but_click").click(function()
{
 $("#pop_up_box").css("height","100%");
 $(".bank-box").show();
 $(".bank_box1").show();
});
$(".bank_clo").click(function()
{
 $("#pop_up_box").css("height","0");
 $(".bank-box").hide();
 $(".bank_box1").hide();
});

/*****people_zoe menu******/
$(".p_t1").click(function()
{
   $(".right_Pcontent .Pcontent1").hide();
   $(".right_Pcontent .Pcontent_all").show();
});
$(".p_t2").each(function(e)
{
	$(".p_t2:eq("+e+") em").click(function()
	{
	   var awary=$(".p_t2:eq("+e+") .ul_1").attr("class");
	   var str=awary.split(" ");
	   var num=jQuery.inArray("off",str);
	   if(num==1)
	   { 
		   $(".p_t2:eq("+e+") em").removeClass("on");
		   $(".p_t2:eq("+e+") .ul_1").removeClass("off");
		   $(".p_t2:eq("+e+") .ul_1").show(); 
	   }
	   else if(num==-1){
		   $(".p_t2:eq("+e+") em").addClass("on");
		   $(".p_t2:eq("+e+") .ul_1").addClass("off");
		   $(".p_t2:eq("+e+") .ul_1").hide(); 
	   }
	});
	
  $(".p_t2:eq("+e+") .ul_1 li a").click(function()
  {
	  $(".right_Pcontent .Pcontent1").show();
	   var id = $(this).attr("id");
	   $.each($(".right_Pcontent div"), function () {
		  if (id == $(this).attr("class")) {
			  $(this).css("display", "block");
			  $(this).siblings("div").css("display", "none");
		  }
	  });
	  $(".right_Pcontent .Pcontent_all").hide();
	  
  });
});
/*****people_zoe menu end******/

});
function browerType() {
var sUserAgent = navigator.userAgent.toLowerCase();   /*浏览器的用户代理设置为小写，再进行匹配*/
var isIpad = sUserAgent.match(/ipad/i) == "ipad";   /*//或者利用indexOf方法来匹配*/
var isIphoneOs = sUserAgent.match(/iphone os/i) == "iphone";
var isMidp = sUserAgent.match(/midp/i) == "midp";  /*//移动信息设备描述MIDP是一套Java应用编程接口，多适用于塞班系统*/
var isUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";  /*//CVS标签*/
var isUc = sUserAgent.match(/ucweb/i) == "ucweb";
var isAndroid = sUserAgent.match(/android/i) == "android";
var isCe = sUserAgent.match(/windows ce/i) == "windows ce";
var isWM = sUserAgent.match(/windows mobil/i) == "windows mobil";

if (isIpad || isIphoneOs || isMidp || isUc7 || isUc || isAndroid || isCe || isWM) {
/*****如果为移动端******/
var fileref=document.createElement("link"); 
fileref.setAttribute("rel", "stylesheet") ;
fileref.setAttribute("type", "text/css")  ;
fileref.setAttribute("href", "css/move_1024.css") ;
document.getElementsByTagName("head")[0].appendChild(fileref) ;
} else{
/*****如果为pc******/
var fileref=document.createElement("link") ;
fileref.setAttribute("rel", "stylesheet") ;
fileref.setAttribute("type", "text/css") ; 
fileref.setAttribute("href", "css/move.css") ;
document.getElementsByTagName("head")[0].appendChild(fileref) ;
};
};
