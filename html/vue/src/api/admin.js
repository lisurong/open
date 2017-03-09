// 请求参数：currentPage
// 返回类型：json，示例{currentPage:1, pageSize:8, totalPage:2,
//                     items: [{id:”1”,
//  username:”jac”,
// email:”123@163.com”,
// tel: “123456”,
// state: 1,
// regdate:”2010-10-13”,
// mem: “说明”}
// (1)	 获取开发者用户列表
export const showDeveloperListApi = {
	url: '/admin/showdeveloperlist',
	method: 'get',
	auth: false,
	//mock:true
};

// (2)	删除开发者用户
// 请求参数：developerid
export const delDeveloperApi = {
	url: '/admin/deldeveloper',
	method: 'get',
	auth: false,
	//mock:true
};


// (3)	获取业务分类列表
// 请求参数：currentPage
// 返回类型：json，示例{currentPage:1, pageSize:8, totalPage:2,
//                      Items: [{id:”1”,
// categoryname:”A”,
// categorycode:”code”}]}

export const showCategporiesApi = {
	url: '/admin/showcategpories',
	method: 'get',
	auth: false,
	//mock:true
};
// (4)	删除一个业务分类
// 请求参数：categoryid
export const delCategoryApi = {
	url: '/admin/delcategory',
	method: 'get',
	auth: false,
	//mock:true
};
// (5)	添加一个业务分类
// 请求参数：categoryname, categorycode
export const addCategoryApi = {
	url: '/admin/addcategory',
	method: 'post',
	auth: false,
	//mock:true
};

// (6)	修改一个业务分类
// 请求参数：categoryid, categoryname,categorycode
export const modifyCategoryApi = {
	url: '/admin/modifycategory',
	method: 'post',
	auth: false,
	//mock:true
};
// (7)	获取接口提供者用户列表
// 请求参数：currentPage
// 返回类型：json，示例{currentPage:1, pageSize:8, totalPage:2,
//                     items: [{id:”1”,
// username:”jack”,
// email: “agsd”,
// tel: “1234567”,
// mem: “说明”,
// state: 1,
// categoryname: “在线”}]}

export const showSuppliersApi = {
	url: '/admin/showsuppliers',
	method: 'get',
	auth: false,
	//mock:true
};
// (8)	删除一个接口提供者用户
// 请求参数：supplierid
export const delSupplierApi = {
	url: '/admin/delsupplier',
	method: 'get',
	auth: false,
	//mock:true
};
// (9)	添加一个接口提供者用户
// 请求参数：username, pwd, email, tel,me,state, categoryname
export const addSupplierApi = {
	url: '/admin/addsupplier',
	method: 'post',
	auth: false,
	//mock:true
};
// (10)	修改一个接口提供者用户
// 请求参数：supplierid, username, pwd, email, tel,me,state, categoryname
export const modifySupplierApi = {
	url: '/admin/modifysupplier',
	method: 'post',
	auth: false,
	//mock:true
};
// (11)	获取公共参数列表
// 返回类型：json，示例[{id:”1”,
// argname:”method”,
// argtype:”string”,
// required:”true”,
// desc:”说明”}]

export const showCommonArgsApi = {
	url: '/admin/showcommonargs',
	method: 'get',
	auth: false,
	//mock:true
};
// (12)	添加一个公共参数
// 请求参数：argname,argtype,required,desc
export const addCommonArgsApi = {
	url: '/admin/addcommonargs',
	method: 'post',
	auth: false,
	//mock:true
};
// (13)	删除一个公共参数
// 请求参数：argid
export const delCommonArgsApi = {
	url: '/admin/delcommonargs',
	method: 'get',
	auth: false,
	//mock:true
};
// (14)	修改一个公共参数
// 请求参数：argid，argname,argtype,required,desc
export const modifyCommonArgsApi = {
	url: '/admin/modifycommonargs',
	method: 'post',
	auth: false,
	//mock:true
};
// (15)	获取开发者申请调用接口的功能组
// 请求参数：developerid
// 返回类型：json，示例[{groupid:”13”, groupname:”在线”}]
export const getDeveloperApplyGroupsApi = {
	url: '/admin/getdeveloperapplygroups',
	method: 'get',
	auth: false,
	//mock:true
};
// (16)	批复开发者申请的某一功能分组
// 请求参数：developerid，groupid, approved[true或false]
export const approveByGroupApi = {
	url: '/admin/approvebygroup',
	method: 'get',
	auth: false,
	//mock:true
};

// (17)	全部批复开发者申请
// 请求参数：developerid，approved[true或false]
export const approveAllpApi = {
	url: '/admin/approveall',
	method: 'get',
	auth: false,
	//mock:true
};
