 var now = Date.now();
 var appid = "A6061114726582";
 var appKey = SHA1(appid + "UZ" + "F70FEF7F-7BB8-5B9C-EEB3-41D3963C3F0C" + "UZ" + now) + "." + now;

 function fnGet(Class, where, skip, limit, callback) {

     if (!where) {
         where = {};
     }

     api.ajax({
         url: 'https://d.apicloud.com/mcm/api/' + Class + '?filter={"where":' + JSON.stringify(where) + ',"skip":' + skip + ',"limit":' + limit + '}',
         method: 'get',
         timeout: 5,
         dataType: 'json',
         returnAll : true,
         headers: {
             "X-APICloud-AppId": appid,
             "X-APICloud-AppKey": appKey
         }
     }, function(ret, err) {
         api.refreshHeaderLoadDone();
         callback(ret, err);
     });
 };

 function fnPost(Class, id, data, isPut, callback) {
     var headers = {
         "X-APICloud-AppId": appid,
         "X-APICloud-AppKey": appKey
     };

     api.ajax({
         url: 'https://d.apicloud.com/mcm/api/' + Class + '/' + id,
         method: isPut ? 'put' : 'post',
         timeout: 5,
         dataType: 'json',
         returnAll: false,
         headers: headers,
         data: data
     }, function(ret, err) {
         api.refreshHeaderLoadDone();
         callback(ret, err);
     });
 };
