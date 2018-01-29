const base_url ='http://localhost:18787'

const ajax_get=function(options){
	let temp_options={
		url:base_url,
		type:'GET',
		data:'',
		header:'',
		dataType:'json',
	}
  for (let index in temp_options){
		if(options[index]){
			temp_options[index]=options[index]
		}
	}
	return new Promise((resolve,reject)=>{
		wx.request({
			url:base_url+temp_options.url,
			method:temp_options.type ||'GET',
			data:temp_options.data,
			dataType:temp_options.dataType,
			success:function(result){
				if(result.data.code==1){
					resolve(result.data.data)
				}
				else{
					reject(result)
				}
			},
			fail:function(result){
				reject({msg:'请求接口数据失败'})
			}
		})
	})
}
module.exports.base_url=base_url
module.exports.ajax_get=ajax_get