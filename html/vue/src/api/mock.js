import Mock from 'mockjs'
import Data from './data'
// 输出结果
/* eslint-disable */
// 	console.log(Data);
export default Mock.mock('',function(options) {
	let api = options.url.match(/\w+/g);
	console.log(options);
	let data ;
	if(Data[api[0]]&&Data[api[0]][api[1]]){
		 data = Data[api[0]][api[1]];
	}else{
		data = {"message":"OK","status":0,"data":{}}
	}
    return data;

})

// export default {
// 	mockApi:function(options){
// 		let api = options.split('.');
// 		return Data[api[0]][api[1]];
// 	}
// }