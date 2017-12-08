var cookieValue = $.cookies.get('cookie_username');
	if(cookieValue != '' && cookieValue != null) {
		$("#index_username").val(cookieValue);
	}

function upLoginIndex() {
		var username = $("#index_username").val();
		var password = $("#index_password").val();
		var verify = $("#index_verify").val();

		if(username == "" || username == null || username=="请输入手机号/会员名") {
			layer.tips('{$Think.lang.请输入用户名}', '#index_username', {
				tips: 3
			});
			return false;
		}
		if(password == "" || password == null) {
			layer.tips('{$Think.lang.请输入登录密码}', '#index_password', {
				tips: 3
			});
			return false;
		}
		if(verify == "" || verify == null) {
			layer.tips('{$Think.lang.请输入验证码}', '#index_verify', {
				tips: 3
			});
			return false;
		}
		$.post("{:U('Login/submit')}", {
			username: username,
			password: password,
			verify: verify
		}, function(data) {
			if(data.status == 1) {
				$.cookies.set('cookie_username', username);
				layer.msg(data.info, {
					icon: 1
				});
				window.location = '/User';
			} else {
				//刷新验证码
				$(".reloadverifyindex").click();
				layer.msg(data.info, {
					icon: 2
				});
				if(data.url) {
					window.location = data.url;
				}
			}
		}, "json");
	}