// (1)	获取接口分类列表
// 返回类型：json，示例[{id:”1”, categoryname:”在线”}]
export const getAllCategoriesApi = {
	url: '/general/getallcategories',
	method: 'get',
	auth: false,
	//mock:true
};
// (2)	获取某个分类下的功能分组
// 请求参数:  categoryid
// 返回类型：json，示例[{id:”1”, groupname:”功能组一”]}
export const getGroupByCategoryApi = {
	url: '/general/getgroupbycategory',
	method: 'get',
	auth: false,
	//mock:true
};

// (3)	获取某个功能分组下的接口
// 请求参数：groupid
// 返回类型：json，示例[{id:”1”, apienname:”com.get”, apichname:”获取名称”]}
export const getApisByGroupApi = {
	url: '/general/getapisbygroup',
	method: 'get',
	auth: false,
	//mock:true
};
// (4)	查看某个接口的详情
// 请求参数：apiid
// 返回类型：json，同” 接口提供者功能模块”中发布接口中的参数定义。

export const apiDetailApi = {
	url: '/general/apidetail',
	method: 'get',
	auth: false,
	//mock:true
};

// (5)	用户登录
// 请求参数：username, pwd, checkcode, usertype
export const loginApi = {
	url: '/general/login',
	method: 'post',
	auth: false,
	//mock:true
};
// (6)	用户注销登录

export const logoutApi = {
	url: '/general/logout',
	method: 'get',
	auth: false,
	//mock:true
};
// (7)	开发者用户注册
// 请求参数：username, pwd, email, tel, mem
export const developerRegistApi = {
	url: '/general/developerregist',
	method: 'post',
	auth: false,
	//mock:true
};

