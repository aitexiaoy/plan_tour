const base_url ='http://localhost:8080/'

const ajax_get=function(options){
	console.log(options)
	let temp_options={
		url:base_url,
		type:'GET',
		data:'',
		header:'',
		dataType:'json',
	}
	for(let index in options){
		if(options.index){
			temp_options.index=options.index
		}
	}
	return new Promise((resolve,reject)=>{
		wx.request({
			url:temp_options.url,
			method:temp_options.type ||'GET',
			data:temp_options.data,
			dataType:temp_options.dataType,
			success:function(result){
				if(result.code=='1'){
					resolve(result.data)
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