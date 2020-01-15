var baseUrl = "https://elm.cangdu.org";

function getDataByGet(url,data,callback){
    mui.ajax(baseUrl+url,{
		data:data,
		dataType:"json",
		type:"get",
		success:function(data){
		    callback(data);
		}
    })
}





//function getDataByPost(url,data){
//
//}