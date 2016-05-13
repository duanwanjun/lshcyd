window.onload = window.onresize = function(){

	//设置整体页面布局为一屏高度
    var cHeight=document.documentElement.clientHeight-document.getElementById("nav").offsetHeight-document.getElementById("footer").offsetHeight;
    document.getElementById("layout_left").style.height=cHeight+'px';
    document.getElementById("layout_left").style.marginTop=document.getElementById("nav").offsetHeight+'px';
    document.getElementById("layout_content").style.height=cHeight+'px';

    if(document.getElementById("box").offsetHeight>cHeight){
    	document.getElementById("box").style.overflowY='scroll';
    	document.getElementById("box").style.height='100%';
    }

    if(document.getElementById("nav_slider").offsetHeight>cHeight){
    	document.getElementById("nav_slider").style.overflowY='scroll';
    	document.getElementById("nav_slider").style.height='100%';
    }

}

// ------------------1
$(function(){
	//设置当前时间
	setTime('.time');
	setInterval(function(){
		setTime('.time');
	},1000);

	/*侧导航*/
	$('#nav_slider span').click(function(){
		if($(this).hasClass('selected')){
			$(this).removeClass("selected");
			$(this).siblings('.nav_slider_son').hide();
		}else{
			$(this).parentsUntil("#layout_left").find('li span').each(function(){
				$(this).removeClass("selected");
				$(this).siblings('.nav_slider_son').hide();
			});
			$(this).addClass("selected");
			$(this).siblings('.nav_slider_son').show();
		}
	});
	$('.nav_slider_son a').click(function(){
		$('.nav_slider_son a').each(function(){
			$(this).removeClass('cur');
		});
		$(this).addClass('cur');
	});


});


//设置相邻div高度相同
function setNeighborHeight(obj,num){
	var n=parseInt($(obj).size()/num)+1;
	var h=0;

	for(var i=0; i<n; i++){
		var nVal=i*num;
		//取同一行最大高度值
		for(var m=nVal; m<nVal+num; m++){
			h= h>$(obj).eq(m).height() ? h:$(obj).eq(m).height();
		}
		//赋值
		for(var j=0; j<num; j++){
			$(obj).eq(nVal+j).height(h);
		}
	}
}

// ------------------3
//设置当前时间
function setTime(obj){
	var time=new Date();
	var sTime=time.getFullYear()+'-'+toDouble(time.getMonth()+1)+'-'+toDouble(time.getDate())+' '+toDouble(time.getHours())+':'+toDouble(time.getMinutes())+':'+toDouble(time.getSeconds());
	$(obj).text(sTime);
}

//将一位数转变为两位数
function toDouble(n){
	if(n<10){
		return '0'+n;
	}else{
		return n;
	}
}

/*全选*/
function allSelect(obj, checkObj){

	$(checkObj).each(function(){
		var $this=$(this);
		$this.click(function(){
			if($this.prop("checked")){
				$this.parentsUntil(obj).parent(obj).find("input:checkbox.check-Box").prop("checked",'true');//全选
			}else{
				$this.parentsUntil(obj).parent(obj).find("input:checkbox.check-Box").removeProp("checked");//全不选
			}
		});

		$this.parentsUntil(obj).parent(obj).find("input:checkbox.check-Box:gt(0)").each(function() {
			$(this).click(function() {
				if(!$(this).prop("checked")){
					$this.removeProp("checked");
				}
				fnAllSelect(obj, $this);
			});
		});

	});

}

/*判断是否全选*/
function fnAllSelect(obj, checkObj){
    var s=true;
    $(checkObj).parentsUntil(obj).parent(obj).find("input:checkbox.check-Box:gt(0)").each(function(){
        s=$(this).prop('checked')==true ? true: false;
        if(!s){ return false;}
    });
    if(s) {
        $(checkObj).prop("checked",'true');
    }else{
          $(checkObj).removeProp("checked");
    }
}



function BtHide(id) {
  var Div = document.getElementById(id);
  if (Div) {
    Div.style.display = "none";
  }
}
function BtShow(id) {
  var Div = document.getElementById(id);
  if (Div) {
    Div.style.display = "block";
  }
}

function BtPopload(showId) { //蒙版生成div+iframe
  var h = document.documentElement.clientHeight+ 'px';
  var w = document.documentElement.clientWidth + 'px';
  var popCss = "background:#000;opacity:0.5;filter:alpha(opacity=50);position:absolute;left:0;top:0;overflow:hidden;"
  var exsit = document.getElementById("popBox");
  if (!exsit) {
    pop_Box = document.createElement("div");
    pop_Box.id = "popBox";
    document.getElementsByTagName("body")[0].appendChild(pop_Box);
    pop_Box.style.cssText = popCss;
    pop_Box.style.zIndex = "10";
    pop_Box.style.height = h;
    pop_Box.style.width = w;
  }

  BtShow("popBox");
  BtShow(showId);
  pop_Win = document.getElementById(showId);
  pop_Win.style.position = "absolute";
  pop_Win.style.zIndex = "11";
  pop_Win.style.top = document.documentElement.scrollTop + document.documentElement.clientHeight / 2 - pop_Win.offsetHeight / 2 + 'px';
  pop_Win.style.left = (document.documentElement.clientWidth / 2 - pop_Win.offsetWidth / 2) + 'px';
}


/*删除当前行*/
function fnDel(obj, Bid, Did){
	//显示对话框
	BtPopload(Did);
	var UploadBtn = document.getElementById(Bid);
  	if (UploadBtn) {
		UploadBtn.onclick = function() {
			fnClose(Did);
    		//删除当前行
    		obj.parentNode.parentNode.parentNode.removeChild(obj.parentNode.parentNode);
			return false;
		}
	}
}

function fnClose(Did){
	BtHide(Did);
    BtHide("popBox");
}


/*删除多行*/
function fnCheckedDel(Tid){
	var oTable=document.getElementById(Tid);
	var aInput=oTable.getElementsByTagName('input');
	for(var i=1; i<aInput.length; i++){
		if(aInput[i].checked==true){
			aInput[i].parentNode.parentNode.parentNode.removeChild(aInput[i].parentNode.parentNode);
			i--;
		}
	}
}


/*选项卡*/
/*function fnTab(obj){
	$(obj).each(function(){
		var $this=$(this);
		$this.find(obj+'_hd'+'>li').each(function(index){
			$(this).click(function() {
				$(this).siblings().removeClass('cur');
				$this.find(obj+'_bd').eq(index).siblings(obj+'_bd').hide();
				$(this).addClass('cur');
				$this.find(obj+'_bd').eq(index).show();
			});
		});
	});
}*/
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

// ------------------5
/*添加新项目*/
function fnAddProj(obj){
	var oTable=$(obj).parentsUntil('table').parent('table');
	var oTr=$("<tr></tr>");
	oTr.html('<td>资料名称：</td><td><input type="text" class="text_150" value=""></input><label class="ml10">更新时间：<input class="Wdate" type="text" onClick="WdatePicker()"></input></label></td>');
	oTable.append(oTr);
}

// ------------------6
/*斑马线*/
function fnZebraStrips(obj, tagName){
	$(obj).find(tagName+':even').addClass('bg_blue');
}


/*添加新级别*/
function fnAddLevel(obj, aimsTable, num){

	var oTable=obj.parent().parent().find(aimsTable).eq(0);
	var oTr=$("<tr></tr>");
	oTr.html('<td><input type="checkbox" class="check-Box"></input></td>'+'<td></td>');

	for(var i=0; i<num; i++){
		var oTd=$("<td></td>");
		oTd.html('<input type="text" class="text_100" value=""></input>');
		oTr.append(oTd);
	}

	var oTd2=$("<td></td>");
	oTd2.html('<a href="javascript:;" onclick="fnDelSon(this)">删除</a>');
	oTr.append(oTd2);

	oTable.append(oTr);
}

function fnDelSon(obj){
	fnDel(obj,'btn_sure','dialog_del');
}


//添加
function fnAddLevel2(obj, aimsTable, num){

	var oTable=obj.parent().parent().find(aimsTable).eq(0);
	var oTr=$("<tr></tr>");
	oTr.html('<td><input type="checkbox" class="check-Box"></input></td>'+'<td></td>');

	for(var i=0; i<num-1; i++){
		var oTd=$("<td></td>");
		oTd.html('<input type="text" class="text_100" value=""></input>');
		oTr.append(oTd);
	}

	var oTd4=$("<td></td>");
	oTd4.html('<input type="text" class="text_100 icon_name" value=""></input>');
	oTr.append(oTd4);

	var oTd2=$("<td></td>");
	oTd2.addClass('icon_img');
	oTr.append(oTd2);

	var oTd3=$("<td></td>");
	oTd3.html('<a href="javascript:;" onclick="fnDelSon(this)">删除</a>');
	oTr.append(oTd3);

	oTable.append(oTr);

	oTd4.find('.icon_name').bind('blur',function(){
		fnChangeIcon($(this), '.icon_img','.icon_name');
	});

}
//设置图标
function fnSetIcon(obj_img, obj_name){
	$(obj_img).each(function(index){
		var $this=$(this);
		if($(obj_name).eq(index).val()!=''){
			var oImg=$('<img>');
			var imgSrc='images/leveico/'+$(obj_name).eq(index).val();
			oImg.attr('src', imgSrc);
			$this.append(oImg);
		}
	});

	$(obj_name).bind('blur',function(){
		fnChangeIcon($(this), obj_img, obj_name);
	})
}
//修改图标
function fnChangeIcon(obj, obj_img, obj_name){
	if(obj.val()!=''){
		if(obj.parent().siblings(obj_img).has('img').length==0){
			var oImg=$('<img>');
			obj.parent().siblings(obj_img).append(oImg);
		}
		var imgSrc='images/leveico/'+obj.val();
		obj.parent().siblings(obj_img).children('img').attr('src', imgSrc);
	}
}






