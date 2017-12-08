function BtnLogin() {
	if(!$('.login_user').val()) {
		Bootsmodal('show',"登陆失败:","账号不能为空!")
		return;
	}
	if(!$('.login_pass').val()) {
		Bootsmodal('show',"登陆失败:","密码不能为空!")
		return;
	}
	if(!$('.login_Code').val()) {
		Bootsmodal('show',"登陆失败:","验证码不能为空!")
		return;
	}
}
function BtnRegister() {
	if(!$('.login_user').val()) {
		Bootsmodal('show',"注册失败:","账号不能为空!")
		return;
	}
	if(!$('.login_pass').val()) {
		Bootsmodal('show',"注册失败:","密码不能为空!")
		return;
	}
	if(!$('.login_Code').val()) {
		Bootsmodal('show',"注册失败:","验证码不能为空!")
		return;
	}
}

function Bootsmodal(shows,titles,datas){
	$("#myModal").css('display', 'block');  
    var modalHeight=$(window).height() / 2 - $('#myModal .modal-dialog').height() / 2;  
    $('#myModal').find('.modal-dialog').css({  
        'margin-top': modalHeight  
    });  
	$('#myModal').modal(shows);
	$('.modal-body').html(datas);
	$('.modal-title').html(titles);
}

function HeaderIp(){
	
}
