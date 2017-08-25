var iframe = document.createElement('iframe');
iframe.src='server.html'
document.body.appendChild(iframe)

var times = 0;
iframe.onload = function(){
    if(++times == 2){
        console.log(JSON.parse(iframe.contentWindow.name))
    }
}