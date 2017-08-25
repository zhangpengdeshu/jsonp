/**
 * Created by zhang on 2017/8/3.
 */
(function(win){
    var container = document.getElementsByTagName("head")[0];
    function jsonp(options){
        if(!options || !options.url) return;

        var element = document.createElement('script'),
            data = options.data || {},
            url = options.url,
            callback = options.callback,
            jsonpCallback = options.data.jsonpCallback;
        console.log(jsonpCallback);
        // 拼接url
        var params = [];
        for(var key in data){
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        }
        url = url.indexOf('?') > 0 ? (url + '&') : (url + '?');
        url += params.join("&");
        element.src = url;
        win[jsonpCallback] = function(resp){
            callback && callback(resp)
            container.removeChild(element)
            delete win[jsonpCallback]
        }

        element.onerror = function(){
            setTimeout(function(){
                callback && callback({error: 'error'})
                container.removeChild(element)
                win[jsonpCallback] && delete win[jsonpCallback]
            },2000);
        }

        element.type = "text/javascript";
        container.appendChild(element)
    }

    win.jsonp = jsonp
})(window)
