var iframe = document.createElement('iframe');
iframe.src="server.html";
document.body.appendChild(iframe)

window.addEventListener('message',function(e){
    console.log(JSON.parse(e.data))
},false)