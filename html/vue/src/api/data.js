/* eslint-disable */
export default {
	developer:{
    getdevelopercategory:{
        "message":"OK","status":1,"data":[
          {"id":"58b3ffdf76565a2050f3121d","desc":"说明sdg新开","docs":[],"verifyapi":"http://abc.dsgsadgcom","userid":"58b3ffa6263a8fd006473fba","state":0,"createdate":null,"categoryname":"在VV线","categoryCode":"10d2","categorytype":"办sdg公"},
          {"id":"58b4ed5a76565a346098b9f7","desc":"public","docs":[{"content":"开始说明，接入声明，功能说明。","title":"接入说明","checkmem":"eeeeee","checkstate":1}],"verifyapi":"http://abc.com","userid":"58b3ffa6263a8fd006473fba","state":1,"createdate":null,"categoryname":"公共类型","categoryCode":"202","categorytype":"办公"},
          {"id":"58b6652176565a58f8504fff","desc":"public","docs":[],"verifyapi":"http://abc.com","userid":"58b3ffa6263a8fd006473fba","state":1,"createdate":{"time":1488348449055,"minutes":7,"seconds":29,"hours":14,"month":2,"year":117,"timezoneOffset":-480,"day":3,"date":1},"categoryname":"小有","categoryCode":"202","categorytype":"办公"},
          {"id":"58b790480658682ef88fd335","desc":"public","docs":[],"verifyapi":"http://abc.com","userid":"58b3ffa6263a8fd006473fba","state":1,"createdate":{"time":1488425032491,"minutes":23,"seconds":52,"hours":11,"month":2,"year":117,"timezoneOffset":-480,"day":4,"date":2},"categoryname":"ewetgwetwaet","categoryCode":"202","categorytype":"办公"}
          ]},
    getdeveloperappid:{"message":"OK","status":1,"data":"44333333"},
		showInfoApi:{
			id : "23",
			username : "badg",
			email : "sac@163.com",
			tel: "123445567",
			regdate : "2015-10-10",
			mem:"说明"
		},
    getdeveloperapplist:{
      "message":"OK","status":1,"data":{
        "items":[
        {"redirect_url":"www.ddd.com","id":"58b4e536b4ae6210a0cdf4f6","logo":"dddd","categoryName":"在VV线","description":"fs","groupNames":["功能dd组d","基础接口组-ddjjjjdNEW"],"client_id":"7045236668686055","client_name":"test"},
        {"redirect_url":"www2","id":"58b7e06d7123c406184b0e2c","logo":"222","categoryName":"在VV线","description":"3232","groupNames":["功能dd组d","基础接口组-ddjjjjdNEW"],"client_id":"3886347291178146","client_name":"aa"}
        ],
        // "items":[],
        "totalNumber":2,"pageSize":8,"currentPage":1,"totalPage":1
      }
    },
    getdeveloperapp:{
      "message":"OK","status":1,"data":
      {
        "redirect_url":"www2","id":"58b7e06d7123c406184b0e2c","logo":"222","categoryName":"在VV线","description":"3232","client_id":"3886347291178146","client_name":"aa"}
      },
      getdevelopergroup:{
        "message":"OK","status":1,"data":[
        {"appName":"aa","categoryName":"在VV线","groupName":"功能dd组d","appId":"58b7e06d7123c406184b0e2c","reason":"","groupDesc":"Firest","groupid":"58b4014e76565a2680d8158a","approvedstate":3},
        {"appName":"aa","categoryName":"在VV线","groupName":"基础接口组-ddjjjjdNEW","appId":"58b7e06d7123c406184b0e2c","reason":"","groupDesc":"BasicFunxxc","groupid":"58b4ed7276565a346098b9f8","approvedstate":1}
        ]
      },
      getdevelopergroupall:{
        "message":"OK","status":1,"data":[
        {"id":"1","categoryName":"在VV线","categoryid":"222","desc":
        "Firest","reason":"1","state":0,"create_time":null,"groupname":"12222","approvedstate":0},
        {"id":"2","categoryName":"公共类型","categoryid":"333","desc":"BasicFunxxc","reason":"1","state":0,"create_time":null,"groupname":"22222","approvedstate":1},
        {"id":"3","categoryName":"在VV线","categoryid":"222","desc":"Third","reason":"1","state":0,"create_time":null,"groupname":"3222222","approvedstate":2},
        {"id":"4","categoryName":"在VV线","categoryid":"333","desc":"Third","reason":"1","state":0,"create_time":null,"groupname":"322222","approvedstate":3}
        ]
      },
      getdeveloperinfo:{
        "message":"OK","status":1,"data":{
          "reason":"","email":"fff@fs.fs","tel":"111111","state":0,"checkstate":1,"enterprisename":"333","contact":"ll"
        }
      }
    },
    supplier:{
      showsupplierinfo:{
        "message":"OK","status":1,"data":{
          "id":"58b3ffa6263a8fd006473fba",
          "developerrole":{
            "reason":"","email":"ff@fs.fs","tel":"111111","state":1,"checkstate":1,"enterprisename":"333","contact":"ll"},
          "memberid":"boe",
          "supplierrole":{
            "OK":true,"reason":"","email":"123@163.com","tel":"135687952","state":0,"checkstate":1,"enterprisename":"中企业","contact":"李先生"
          }
          }
        },
        getgroup:{
          "message":"OK","status":1,"data":
          {
            id:'11111',
            categoryname:'酒店系统',
            groupname:'订单模块',
            desc:'描述',
            status:'开放'

          }
        },
        publishapi:{
          "message":"OK","status":1,"data":
          {
           apiid:'11111'
         }
       },
       getcategory:{
        "message":"OK","status":1,"data":
        {
          categoryName:"在VV线",
          appId:"58b7e06d7123c406184b0e2c",
          desc:"业务线描述"
        }
      },
      addcategory:{
        "message":"OK","status":1,"data":
        {
          "categoryid":"222"
        }
      },
      getdoc: {
        "message":"OK","status":1,"data":
        {
          categoryName:"在VV线",
          categorytype:"办公",
          content:"文档描述"
        }
      },
      getalldocs: {
        "message":"OK","status":1,"data":{
          "items":[
          {
            id:"id1",
            docname:"文档1",
            status:"1"//1未审核，2审核中,3审核成功，-1审核失败
          }
          ],
          "totalNumber":2,"pageSize":8,"currentPage":1,"totalPage":1
        }
      },
      showSupplierInfoApi:{
        id:"323",
        username:"jack",
        email: "jack@163.com",
        tel : "12344567",
        mem: "备注",
        category: "所属业务分类",
        state:"可用"
      },
      getallcategories:{
        "message":"OK","status":1,"data":[
        {"id":"58b3ffdf76565a2050f3121d",
        appId:"58b3ffdf76565a2050f3121d",
        "groupNames":["功能dd组d","基础接口组-ddjjjjdNEW"],
        "desc":"说明sdg新开","docs":[],"verifyapi":"http://abc.dsgsadgcom","userid":"58b3ffa6263a8fd006473fba",
        "state":0,"createdate":null,"categoryname":"在VV线","categoryCode":"10d2","categorytype":"办sdg公"},
        {"id":"58b4ed5a76565a346098b9f7","desc":"public","docs":[{"content":"开始说明，接入声明，功能说明。","title":"接入说明",
        "checkmem":"eeeeee","checkstate":1}],
        "verifyapi":"http://abc.com","userid":"58b3ffa6263a8fd006473fba","state":1,"createdate":null,
        "categoryname":"公共类型","categoryCode":"202","categorytype":"办公"},
        {"id":"58b6652176565a58f8504fff","desc":"public","docs":[],"verifyapi":"http://abc.com","userid":"58b3ffa6263a8fd006473fba",
        "state":1,"createdate":{"time":1488348449055,"minutes":7,"seconds":29,"hours":14,"month":2,"year":117,
        "timezoneOffset":-480,"day":3,"date":1},"categoryname":"小有","categoryCode":"202","categorytype":"办公"},
        {"id":"58b790480658682ef88fd335","desc":"public","docs":[],"verifyapi":"http://abc.com","userid":"58b3ffa6263a8fd006473fba","state":1,
        "createdate":{"time":1488425032491,"minutes":23,"seconds":52,"hours":11,"month":2,"year":117,"timezoneOffset":-480,"day":4,"date":2},
        "categoryname":"ewetgwetwaet","categoryCode":"202","categorytype":"办公"}
        ]
      },
      showapigroup:{
        "message":"OK","status":1,"data":{
          "items":[
          {"id":"58b4014e76565a2680d8158a","categoryname":"在VV线","categoryid":"58b3ffdf76565a2050f3121d","desc":"Firest","state":1,"create_time":null,"groupname":"功能dd组d"},
          {"id":"58b50e8fbcc5faf221bdf681","categoryname":"在VV线","categoryid":"58b3ffdf76565a2050f3121d","desc":"Third","state":1,"create_time":null,"groupname":"功能ee组e"}
          ],
          "totalNumber":2,"pageSize":8,"currentPage":1,"totalPage":1
        }
      },
      showApiGroupApi:{
        currentPage:4,
        pageSize:8,
        totalPage:1,
        items:[{id:"1", groupname:"abc"}]
      },
      showapis:{
        "message":"OK","status":1,"data":{
          "items":[
          {
            "headers":[
            {"desc":"jack","argname":"a","example":"参数","argtype":"int","required":true},
            {"desc":"xie","argname":"b","example":"OKE","argtype":"string","required":true}
            ],
            "result":[
            {"desc":"ret","rettype":"int","retname":"age","example":"参数"},
            {"desc":"rvsdget","rettype":"double","retname":"ret","example":"开始"}
            ],
            "checkmem":"",
            "desc":"第一个接口2",
            "args":[
            {
              "desc":"argset","argname":"age","example":"参数","argtype":"int","required":true},
              {"desc":"leijb","argname":"type","example":"类型","argtype":"date","required":true}
              ],
              "state":1,"testendpoint":"http://tst2.http.com","httpmethod":"GET","checkstate":1,
              "endpoint":"http://online2.http.com",
              "errcode":[{status:200,desc:'错误码1'}],
              "id":"58b50df1bcc5faf221bdf67f",
              "retexample":{"statecode":"102","exname":"forine","exvalue":{"a":3},"extype":"jack"},
              "apichname":"获取用户信息2",
              "groupid":"58b50e8fbcc5faf221bdf681",
              "createDate":null,
              "apienname":"com.get.username2",
              isopen:'开放',
              status:'未提交'
            }
            ],
            "totalNumber":1,"pageSize":8,"currentPage":1,"totalPage":1
          }
        },
        showapidetail:{
          "message":"OK","status":1,"data":{
            "headers":[
            {"desc":"jack","argname":"a","example":"参数","argtype":"int","required":true},
            {"desc":"xie","argname":"b","example":"OKE","argtype":"string","required":true}
            ],
            "result":[
            {"desc":"ret","rettype":"int","retname":"age","example":"参数","required":true},
            {"desc":"rvsdget","rettype":"double","retname":"ret","example":"开始","required":true},
            ],
            "checkmem":"",
            "desc":"第一个接口2",
            "args":[
            {"desc":"argset","argname":"age","example":"参数","argtype":"int","required":true},
            {"desc":"leijb","argname":"type","example":"类型","argtype":"date","required":true}
            ],
            "state":1,
            "testendpoint":"http://tst2.http.com",
            "httpmethod":"GET",
            "checkstate":1,
            "endpoint":"http://online2.http.com",
            "errcode":[{codename:{
              name:'sdgsdg/',
              type:'application/json',
              status:404,
              demo:'sgd'
            },desc:'错误描述'}],
            "id":"58b50df1bcc5faf221bdf67f",
            "retexample":{"statecode":"102","exname":"forine","exvalue":{"a":3},"extype":"jack"},
            "apichname":"获取用户信息2",
            "groupid":"58b50e8fbcc5faf221bdf681",
            "createDate":null,"apienname":"com.get.username2",
            categoryname:'酒店系统',
            groupname:'订单模块'

          }
        },
        showApiDetailApi:{
          enname:"Hotel management system order generation interface",
          chname :"酒店管理系统",
          tstaddr :"http://xxx.com/api/MsgSend.asmx",
          addr : "http://xxx.com/api/MsgSend.asmx",
          exname :"示例名称",
          extype : "示例类型",
          excode : "示例代码",
          exval : "示例值",
          apigrp : "所属分组标识",
          httpmd : "http请求方法GET或POST",
          headers :{}
        }

      },
      admin:{
        showDeveloperListApi:{
         currentPage:1,
         pageSize:8,
         totalPage:2,
         items: [
         {
          id:1,
          username:"jac",
          email:"123@163.com",
          tel: 123456,
          state: 1,
          regdate:"2010-10-13",
          mem: "说明"
        }
        ]
      },
      showCategporiesApi:{
       currentPage:1,
       pageSize:8,
       totalPage:2,
       Items: [
       {
        id:1,
        categoryname:"A",
        categorycode:"code"
      }
      ]
    },
    showSuppliersApi:{
     currentPage:1,
     pageSize:8,
     totalPage:2,
     items: [
     {
      id:1,
      username:"jack",
      email: "agsd",
      tel: 1234567,
      mem:"说明",
      state: 1,
      categoryname: "在线"
    }
    ]
  },
  showCommonArgsApi:[
  {
   id:1,
   argname:"method",
   argtype:"string",
   required:"true",
   desc:"说明"
 }
 ],
 getDeveloperApplyGroupsApi:[
 {
   groupid:13,
   groupname:"在线"
 }
 ]
}
}