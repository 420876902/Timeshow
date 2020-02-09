var baseUrl = "https://elm.cangdu.org/v1/cities";

function getDataByGet(url, callback) {
    mui.ajax(baseUrl + url, {
        dataType: "json",
        type: "get",
        success: function(data) {
            callback(data);
        }
    })
}