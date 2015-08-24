$(function(){
	var idstr = $(".valid").attr("bindId");
   var	ids = idstr.split("|");
   for(var i = 0;i<ids.length;i++){
   	$('#'+ids[i]).click(function(){
				$(this).attr('style','');
				$(this).parents('.set').find('.tagging').attr('style','');
				$(this).parents('.set').find('.img02').hide();
				$(this).parents('.set').find('.img01').show();
				$(this).parents('.set').find('.tagging').find('span').text($(this).attr("pointmsg"));
				
			})

   		$('#'+ids[i]).blur(function(){
   			
			var datatype = $(this).attr("datatype");
			var val = $(this).val();
			var erromsg = $(this).attr("erromsg");
			var res = vaildfunc(datatype,val,erromsg);
			
			if(res!="success"){
			$(this).parents('.set').find('.tagging').css('background','#e96d29');
			$(this).css('border','1px solid #e96d29');
			$(this).parents('.set').find('.img02').show();
			$(this).parents('.set').find('.img01').hide();
			$(this).parents('.set').find('.tagging').find('span').text(res);
			
			}else{
			$(this).parents('.set').find('.tagging').css('background','#4cb8d6');
			$(this).css('border','1px solid #eee');
			$(this).parents('.set').find('.img02').hide();
			$(this).parents('.set').find('.img01').show();
			$(this).parents('.set').find('.tagging').find('span').text("成功");
		
			}
				
			})
   }


	$(".valid").click(function(){
		var idstr = $(this).attr("bindId");
		var	ids = idstr.split("|");
		var vaildres = 0;
		for(var i = 0;i<ids.length;i++){
			var datatype = $("#"+ids[i]).attr("datatype");
			var val = $("#"+ids[i]).val();
			var erromsg = $("#"+ids[i]).attr("erromsg");
			var res = vaildfunc(datatype,val,erromsg);
			if(res!="success"){
			$("#"+ids[i]).parents('.set').find('.tagging').css('background','#e96d29');
			$("#"+ids[i]).css('border','1px solid #e96d29');
			$("#"+ids[i]).parents('.set').find('.img02').show();
			$("#"+ids[i]).parents('.set').find('.img01').hide();
			$("#"+ids[i]).parents('.set').find('.tagging').find('span').text(res);
			vaildres++;
			}else{
			$("#"+ids[i]).parents('.set').find('.tagging').css('background','#4cb8d6');
			$("#"+ids[i]).css('border','1px solid #eee');
			$("#"+ids[i]).parents('.set').find('.img02').hide();
			$("#"+ids[i]).parents('.set').find('.img01').show();
			$("#"+ids[i]).parents('.set').find('.tagging').find('span').text("成功");
			}
		}
		if(vaildres == 0){
			return true;
		}else{
			return false;
		}
	})
})


var vaildfunc = function(datatype,val,erromsg){

	var type = datatype.substring(0,1);
	var data = datatype.substring(1);
	var ran = data.split("-");
	switch(type){
		case 's' :
		return vaildstring(ran,erromsg,val);
		break;

		case 'n':
		return vaildnum(ran,erromsg,val);
		break;
	}

}

var vaildstring = function(ran,erromsg,val){

	if(ran.length ==2){
			if(val.length>=ran[0]&&val.length<=ran[1]){
				return "success";
			}else{
				return erromsg;
			}

		}
		else if(ran.length == 1){
			if(val.length>=ran[0]){
				return "success";
			}else{
				return erromsg;
				}
		}
		return "success";
}


var vaildnum = function(ran,erromsg,val){

if(isNaN(val)&&val.length>0){
			return "请输入数字";
		}else{
			if(ran.length ==2){
			if(val.length>=ran[0]&&val.length<=ran[1]){
				return "success";
			}else{
				return erromsg;
			}
		}
		else if(ran.length == 1){
			if(val.length>=ran[0]){
				return "success";
			}else{
				return erromsg;
				}
		}
		return "success";
		}
}