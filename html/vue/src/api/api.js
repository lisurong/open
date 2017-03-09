import Supplier from './supplierapi'
import Consumer from './consumerapi'
// 输出结果
/* eslint-disable */
// 	console.log(Data);
// export default Mock.mock('',function(options) {
// 	let api = options.url.split('.');
// 	console.log(options);
// 	let data ;
// 	if(Data[api[0]]&&Data[api[0]][api[1]]){
// 		 data = Data[api[0]][api[1]];
// 	}else{
// 		data = {"message":"OK","status":1,"data":{}}
// 	}
//     return data;

// })
global.$API = {
	supplier:Supplier,
	consumer:Consumer
}
// export default {
// 	mockApi:function(options){
// 		let api = options.split('.');
// 		return Data[api[0]][api[1]];
// 	}
// }