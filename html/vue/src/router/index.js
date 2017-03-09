// 这里面负责写路由映射，便于管理
// 引入路由模块并使用它
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

/* eslint-disable */
// 创建路由实例并配置路由映射
// path:'*',redirect:'/home'  重定向到path是/home的映射
const router = new VueRouter({
	mode: 'history',
	routes: [{
		path: '/admin/hello', component: require('../views/admin/Hello.vue')
	},{
		path: '/admin/upload', component: require('../views/admin/Upload.vue')
	},{
		path: '/consumer/app/authentication',name:'consumer.app.authentication', component: require('../views/consumer/Authentication.vue')
	},{
		path: '/consumer/app/nondeveloper', component: require('../views/consumer/Nondeveloper.vue')
	},{
		path: '/consumer/app/applist',name:'consumer.app.applist', component: require('../views/consumer/Applist.vue')
	},{
		path: '/consumer/app/createapp',name:'consumer.app.createapp',meta:{keepAlive: true}, component: require('../views/consumer/Createapp.vue')
	},{
		path: '/consumer/app/queryapp',name:'consumer.app.queryapp', component: require('../views/consumer/Queryapp.vue')
	},{
		path: '/consumer/app/updateapp',name:'consumer.app.updateapp', component: require('../views/consumer/Updateapp.vue')
	},{
		path: '/consumer/app/updategroup',name:'consumer.app.updategroup', component: require('../views/consumer/Updategroup.vue')
	},
	{
		path: '/consumer/funlist',name:'consumer.funlist' ,component: require('../views/consumer/Funlist.vue')
	},
	{
		path: '/consumer/funlist/applist',name:'consumer.funlist.apilist' ,component: require('../views/consumer/Apilist.vue')
	},{
		path: '/consumer/funlist/apidetail', name:'consumer.funlist.apidetail',component: require('../views/consumer/Apidetail.vue')
	},{
		path: '/supplier/business/createbusiness',name:'supplier.business.createbusiness', component: require('../views/supplier/Createbusiness.vue')
	},{
		path: '/supplier/business/updatebusiness',name:'supplier.business.updatebusiness', component: require('../views/supplier/Updatebusiness.vue')
	},{
		path: '/supplier/business/businesslist',name:'supplier.business.businesslist', component: require('../views/supplier/Businesslist.vue')
	},{
		path: '/supplier/business/querybusiness',name:'supplier.business.querybusiness', component: require('../views/supplier/Querybusiness.vue'),
		children:[
		{ path: '/supplier/business/querybusiness/businessinfo',name:'supplier.business.querybusiness.businessinfo', component: require('../views/supplier/manage/Businessinfo.vue')},
		{ path: '/supplier/business/querybusiness/groups',name:'supplier.business.querybusiness.groups', component: require('../views/supplier/manage/Groups.vue')},
		{ path: '/supplier/business/querybusiness/guide',name:'supplier.business.querybusiness.guide', component: require('../views/supplier/manage/Guide.vue')}
		]
	},{
		path: '/supplier/business/creategroup', name:'supplier.business.creategroup',component: require('../views/supplier/Creategroup.vue')
	},{
		path: '/supplier/business/querygroup', name:'supplier.business.querygroup',component: require('../views/supplier/Querygroup.vue')
	},{
		path: '/supplier/business/createapi', name:'supplier.business.createapi',component: require('../views/supplier/Createapi.vue')
	},{
		path: '/supplier/business/queryapi', name:'supplier.business.queryapi',component: require('../views/supplier/Queryapi.vue')
	},{
		path: '/supplier/createguide', name:'supplier.business.createguide',component: require('../views/supplier/Createguide.vue')
	},{
		path: '/supplier/queryguide', name:'supplier.business.queryguide',component: require('../views/supplier/Queryguide.vue')
	},{
		path: '/supplier/appinfo', component: require('../views/supplier/AppInfo.vue')
	},{
		path: '/supplier/interfaceapi', component: require('../views/supplier/InterfaceApi.vue')
	},{
		path: '/common/personal', component: require('../views/common/Personal.vue'),
		children:[
		{path: '/common/personal/consumer/authentication',
				name:'common.personal.consumer.authentication', component: require('../views/consumer/Authentication.vue')},

		{path: '/common/personal/supplier/authentication',
				name:'common.personal.supplier.authentication', component: require('../views/supplier/Authentication.vue')}

		]
	},
	{
		path: '*', redirect: '/common/personal/consumer/authentication'
	}]
})
// 输出router
export default router

