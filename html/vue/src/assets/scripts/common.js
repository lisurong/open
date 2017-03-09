export default {
	paramsToString(params){


		for(let item in params){
			if(typeof item == 'Array'){
				item = JSON.stringify(params[item])
				console.log(item);
			}
		}
		return params;
	}
}