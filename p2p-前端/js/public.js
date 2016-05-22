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


/*选项卡*/
function fnTab(obj){
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
		//$(this).children('span').html($(this).siblings(sibilingObj).html());
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

function displacement(obj, className){
	$(obj).bind('mouseover mouseout',function(){
		$(this).toggleClass(className);
	});
}



































