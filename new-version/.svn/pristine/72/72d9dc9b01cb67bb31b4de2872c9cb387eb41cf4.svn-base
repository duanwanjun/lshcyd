/*
添加人：wy
时间：2016-04-20
版本：1.0
版权：量硕宏程投资管理（北京）有限公司
*/

/*主导航*/
function nav(){
	$('.nav li').bind('mouseover mouseout',function(){
		$(this).children('.sub_nav').toggleClass('dis_block');
	});
}

/*侧导航*/
function subNav(obj, brotherObj, fartherObj ){
	$(obj).click(function(event) {
		var _this=$(this);
		//_this.siblings(brotherObj).toggleClass('dis_none');
		//_this.parent().siblings(fartherObj).children(brotherObj).addClass('dis_none');
		_this.parent(fartherObj).children(brotherObj).toggleClass('dis_none');
	});
}





/*选项卡*/
/*function fnTab(obj){
	$(obj).each(function(){
		var $this=$(this);
		$this.find(obj+'_hd').children().each(function(index){
			$(this).click(function() {
				$(this).siblings().removeClass('cur');
				$this.find(obj+'_bd').eq(index).siblings(obj+'_bd').hide();
				$(this).addClass('cur');
				$this.find(obj+'_bd').eq(index).show();
			});
		});
	});
}*/

function fnTab(obj, bool){
	$(obj).each(function(){
		var $this=$(this);
		$this.find(obj+'_hd').children().each(function(index){
			$(this).click(function() {
				if(bool){
					var s=$('<span></span>');
					$(this).siblings().removeClass('cur');
					$this.find(obj+'_bd').eq(index).siblings(obj+'_bd').hide();
					$(this).siblings().find('span').remove();
					$(this).addClass('cur');
					$this.find(obj+'_bd').eq(index).show();
					$(this).append(s);
				}else{
					$(this).siblings().removeClass('cur');
					$this.find(obj+'_bd').eq(index).siblings(obj+'_bd').hide();
					$(this).addClass('cur');
					$this.find(obj+'_bd').eq(index).show();
				}

			});

		});
	});
}


/*文本框获得焦点清空内容与失去焦点提示内容*/
function inputTips(obj){
	$(obj).each(function(){
		var sTips=$(this).val();
		$(this).focus(function(event) {
			$(this).val('');
		});
		$(this).blur(function(event) {
			if($(this).val()=='') $(this).val(sTips);
		});
	});
}


/*百分比进度条--水平*/
function setLevelProgress(obj, sibilingObj){
	$(obj).each(function(){
		var w=parseFloat($(this).siblings(sibilingObj).html())/100*$(this).width();
		$(this).children('span').css('width', w);
	});
}


/*仪表盘*/
function dashBoard(obj ,className){
	$(obj).find(className).each(function(index){
		var _this=$(this);
		var idName=_this.attr('class')+'-'+index;
		var value=parseInt(_this.text());
		_this.siblings('.dash-board').attr('id',idName);

		new JustGage({
            id: idName,  //仪表盘容器的ID
            value: value,   //仪表盘显示的数值
            min: 0,     //最小值
            max: 100,   //最大值
            donut: true,//是否显示满圆
            gaugeWidthScale: 0.6,//仪表盘的宽度
            counter: true,    //数字变化动画
            symbol:'%',       //数字后面显示的符号
            valueFontColor:'#adacb1', //数值的颜色
            hideInnerShadow:true //是否显示内阴影
        });

	});
}

//鼠标经过切换样式
function displacement(obj, className){
	$(obj).bind('mouseover mouseout',function(){
		$(this).toggleClass(className);
	});
}


//数量加
function fnPlus(obj, numObj, lessObj, disableObj, startValue, num){
	var n=parseInt($(obj).parent().find(numObj).eq(0).val());
	n=n+num;
	$(obj).parent().find(numObj).eq(0).val(n+'元');
	if(n>startValue){
		$(obj).siblings(lessObj).removeClass('dis_none');
		$(obj).siblings(disableObj).addClass('dis_none');
	}

}

//数量减
function fnLess(obj, numObj, disableObj, startValue, num){
	var n=parseInt($(obj).parent().find(numObj).eq(0).val());
	var m=startValue+num;
	if(n==m) {
		$(obj).addClass('dis_none');
		$(obj).siblings(disableObj).removeClass('dis_none');
	}
	n=n-num;
	$(obj).parent().find(numObj).eq(0).val(n+'元');

}



//隐藏
function BtHide(id) {
	var Div = document.getElementById(id);
	if (Div) {
		Div.style.display = "none";
	}
}
//显示
function BtShow(id) {
	var Div = document.getElementById(id);
	if (Div) {
		Div.style.display = "block";
	}
}
//蒙版生成div
function BtPopload(showId) {
	var h = Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight) + 'px';
	var w = document.documentElement.scrollWidth + 'px';
	var popCss = "background:#000;opacity:0.3;filter:alpha(opacity=30);position:absolute;left:0;top:0;overflow:hidden;"
	var exsit = document.getElementById("popBox");
	if (!exsit) {
		pop_Box = document.createElement("div");
		pop_Box.id = "popBox";
		document.getElementsByTagName("body")[0].appendChild(pop_Box);
		pop_Box.style.cssText = popCss;
		pop_Box.style.zIndex = "999999";
		pop_Box.style.height = h;
		pop_Box.style.width = w;
	}
	BtShow("popBox");
	BtShow(showId);
	pop_Win = document.getElementById(showId);
	pop_Win.style.position = "absolute";
	pop_Win.style.zIndex = "9999999";
	var scroll_top;
	if (document.documentElement && document.documentElement.scrollTop){
		scroll_top = document.documentElement.scrollTop;
	}
    else if (document.body) {
    	scroll_top = document.body.scrollTop;
    }
	pop_Win.style.top = scroll_top + document.documentElement.clientHeight / 2 - pop_Win.offsetHeight / 2 + 'px';
	pop_Win.style.left = (document.documentElement.clientWidth / 2 - pop_Win.offsetWidth / 2) + 'px';
}

function BtPopShow(Bid, Did) {
	var UploadBtn = document.getElementById(Bid);
	if (UploadBtn) {
	  	UploadBtn.onclick = function() {
	    	BtPopload(Did);
	    	return false;
	  }
	}
}


function BtPopHide(Bid, Did) {
	var UploadBtn = document.getElementById(Bid);
	if (UploadBtn) {
		UploadBtn.onclick = function() {
		    BtHide(Did);
		    BtHide("popBox");
		    return false;
		}
	}
}


//自定义内容提示框
function customDialog(showId ,contentId, contentStr) {
	var h = Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight) + 'px';
	var w = document.documentElement.scrollWidth + 'px';
	var popCss = "background:#000;opacity:0.3;filter:alpha(opacity=30);position:absolute;left:0;top:0;overflow:hidden;"
	var exsit = document.getElementById("popBox");
	if (!exsit) {
		pop_Box = document.createElement("div");
		pop_Box.id = "popBox";
		document.getElementsByTagName("body")[0].appendChild(pop_Box);
		pop_Box.style.cssText = popCss;
		pop_Box.style.zIndex = "999999";
		pop_Box.style.height = h;
		pop_Box.style.width = w;
	}
	BtShow("popBox");
	BtShow(showId);
	pop_Win = document.getElementById(showId);
	pop_Win.style.position = "absolute";
	pop_Win.style.zIndex = "9999999";
	var scroll_top;
	if (document.documentElement && document.documentElement.scrollTop){
		scroll_top = document.documentElement.scrollTop;
	}
    else if (document.body) {
    	scroll_top = document.body.scrollTop;
    }
	pop_Win.style.top = scroll_top + document.documentElement.clientHeight / 2 - pop_Win.offsetHeight / 2 + 'px';
	pop_Win.style.left = (document.documentElement.clientWidth / 2 - pop_Win.offsetWidth / 2) + 'px';

	cont_win=document.getElementById(contentId);
	cont_win.innerHTML=contentStr;
}

function customPopShow(Bid, Did, contentId, contentStr) {
	var UploadBtn = document.getElementById(Bid);
	if (UploadBtn) {
	  	UploadBtn.onclick = function() {
	    	customDialog(Did, contentId, contentStr);
	    	return false;
	  }
	}
}

//分页
function getParameter(name) {
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r!=null) return unescape(r[2]); return null;
}

function aa() {
    alert("asdf");
}

//模拟下拉菜单
function select_simulated(select_style,bomb_con_style){
	$(document).click(function(){
		$(bomb_con_style).addClass('dis_none');
	})

	$(select_style).each(function (index) {
		var thisinput=$(this);
		var local=$(this).position();
		var zindex=99-index;
		thisinput.parent().css('zIndex' ,zindex);
		var bomb_con = thisinput.siblings(bomb_con_style);
		var w=$(this).width()+10;
		var topValue=$(this).height()+2;
		bomb_con.css({
			'top' :topValue,
			'width':w //下拉框的宽度
		});

		thisinput.on('click',function(e){

			$(bomb_con_style).addClass('dis_none');

			bomb_con.removeClass('dis_none');
			e?e.stopPropagation():event.cancelBubble = true;

			bomb_con.find("dd").click(function(e){
			    var bomb_text = $(this).text();
			    var bomb_id = $(this).attr("data-id");
				$(this).addClass("selected").siblings().removeClass("selected");
				$(this).parents(bomb_con_style).addClass('dis_none');
				$(this).parents(bomb_con_style).siblings(select_style).val(bomb_text);
				$(this).parents(bomb_con_style).siblings("[type=hidden]").val(bomb_id);
				e?e.stopPropagation():event.cancelBubble = true;
			});
		});

	});


	$(select_style).focus(function(){
		$(this).addClass('cur');
	});

	$(select_style).blur(function(){
		$(this).removeClass('cur');
	});

	return false;
}

//银行选择
function checkBank(obj){
	$(obj).bind('click',function(){
		var iObj='<i class="pos_abs checked iconfont white f10 txt-center">&#xe624;</i>';
		$(this).parent().children().find('i').remove();
		$(this).append(iObj);
		$(this).addClass('cur');
	});
}

//选中当前项
function selectedOption(obj){
	$(obj).bind('click',function(){
		$(this).siblings('span').removeClass('selected');

		$(this).addClass('selected');
	});
}

//全部提现
function allWithdraw(obj ,balance, withdraw){
	$(obj).parent().parent().next().find(withdraw).val($(obj).parent().find(balance).html());
}

//全选--复选框
function allSelect(obj, checkObj){
	$(checkObj).each(function(){

		var $this=$(this);
		$this.click(function(){
			if($this.prop("checked")){
				$this.parentsUntil(obj).parent().find(":checkbox[name='check']").prop("checked",'true');//全选
			}else{
				$this.parentsUntil(obj).parent().find(":checkbox[name='check']").removeProp("checked");//全不选
			}
		});

		$this.parentsUntil(obj).parent().find(":checkbox[name='check']:gt(0)").bind('click', function() {
			if(!$(this).prop("checked")){
				$this.removeProp("checked");
			}else{
				var s=true;
				$this.parentsUntil(obj).parent().find(":checkbox[name='check']:gt(0)").each(function(){
			        s=$(this).prop('checked');
			        if(!s){ return false;}
			    });
				if(s) {
			        $this.prop("checked",'true');
			    }else{
			        $this.removeProp("checked");
			    }
			}
		});

	});
}

















