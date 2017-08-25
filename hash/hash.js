/**
 * Created by zhang on 2017/8/25.
 */
var iframe = document.createElement('iframe')
iframe.src = "./server.html"; //注意server.html域名跟target域名一直
document.documentElement.appendChild(iframe)
iframe.style.width = '500px';
iframe.style.height = '300px';
window.onhashchange = function () {
    // 小练习，做个工具方法，取出query的值
    console.log(location.hash)
}
