// {id:”323”,
//                      username:”jack”,
//                 		email: “jack@163.com”,
//                      tel : “12344567”,
//                      mem: “备注”,
//                      category: “所属业务分类”,
//                      state: “可用” }
// 	(1)	查看基本信息
export const showSupplierInfoApi = {
	url: '/supplier/showsupplierinfo',
	method: 'get',
	auth: false,
	//mock:true
};
// 	(2)	创建业务分类
// 请求参数：categoryname, categorytype, desc, state, categorycode, verifyapi
export const addCategoryPwdApi = {
	url: '/supplier/addcategory',
	method: 'post',
	auth: false,
	//mock:true
};
// 	(2)	修改登录密码
// 请求参数：orgpwd, pwd1,pwd2
export const modifyPwdApi = {
	url: '/supplier/modifypwd',
	method: 'post',
	auth: false,
	//mock:true
};

// (3)	获取当前全部接口的功能分组
// 请求参数：currentPage
// 返回类型:json，示例{currentPage:4, pageSize:8, totalPage:1, items:[{id:”1”, groupname:“abc”}]}

export const showApiGroupApi = {
	url: '/supplier/showapigroup',
	method: 'get',
	auth: false,
	//mock:true
};


// (4)	获取某一功能分组下的全部接口
// 请求参数：currentPage, groupid, groupname
// 返回类型：json，示例{currentPage:1, pageSize:8, totalPage:2, items:[{id:”1”, apienname:”com.get.user”, state:”1”}]

export const showApisApi = {
	url: '/supplier/showapis',
	method: 'get',
	auth: false,
	//mock:true
};

// (5)	添加功能分组
// 请求参数：groupname

export const addGroupApi = {
	url: '/supplier/addgroup',
	method: 'post',
	auth: false,
	//mock:true
};

// (6)	删除功能分组
// 请求参数：groupid

export const delGroupApi = {
	url: '/supplier/delgroup',
	method: 'get',
	auth: false,
	//mock:true
};

// (7)	修改功能分组名称
// 请求参数：groupid, groupname[修改后的分组名称]

export const modifyGroupApi = {
	url: '/supplier/modifygroup',
	method: 'post',
	auth: false,
	//mock:true
};


// (8)	发布接口
// 请求参数：enname 接口英文名称
// 		   chname 接口中文名称
// 		   tstaddr  接口测试地址
// 			addr    接口正式地址
// 	      exname  示例名称
// 		   extype   示例类型
//           excode   示例代码
//           exval     示例值
//           apigrp   所属分组标识
//           httpmd  http请求方法GET或POST
//           headers 请求的header参数列表

export const saveApiApi = {
	url: '/supplier/saveapi',
	method: 'post',
	auth: false,
	//mock:true
};

// (9)	查看接口
// 请求参数：apiid
// 返回类型：json，示例，内容同”发布接口”参数描述。
export const showApiDetailApi = {
	url: '/supplier/showapidetail',
	method: 'get',
	auth: false,
	//mock:true
};

// (10)	修改接口
// 请求参数：参数同“发布接口”描述。
export const modifyApiApi = {
	url: '/supplier/modifyapi',
	method: 'post',
	auth: false,
	//mock:true
};


// (11)	删除接口
// 请求参数：apiid
export const delApiApi = {
	url: '/supplier/delapi',
	method: 'get',
	auth: false,
	//mock:true
};

