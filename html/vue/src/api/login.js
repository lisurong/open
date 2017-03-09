// 请求参数：username、usertype、pwd
// usertype：1为开发者，2为接口提供者，3为后台管理员。
// 返回类型：json {ret: “OK”, msg: “提示信息”};
// 			Ret为OK时验证成功；ret为ERROR时验证失败
// 登录
export const loginApi = {
	url: '/general/login',
	method: 'post',
	auth: false,
	//mock:true
};