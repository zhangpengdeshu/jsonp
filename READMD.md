# 简单的jsonp实现

> 在说明jsonp原理之前先说明一下同源策略
>>1、浏览器的同源策略
>>>出于安全的考虑，浏览器的同源策略限制从一个源加载的文档或脚本与另一个源的资源进行交互。<br/>不同的源具体就是：协议，域名，端口三者中任何一个不同，就是不同的源

>但是js不受同源策略的影响。因此我们可以利用浏览器的这一特性，从而实现从不同的源获取数据,jonsp就是一种实现方式

####下面我们通过例子说明

<!DOCTYPE>
<html>
<head>
    <title>jsonp</title>
    <script type="text/javascript">
    var jsonpCallback = function(data){
        alert('远程js带来的数据是：' + data.result);
    };
    </script>
    <script type="text/javascript" src="http://wwww.baidu.com/jsonpCallback.js"></script>
</head>
<body>

</body>
</html>

>远程服务器
jsonpCallback({
   "username":"zhang",
   "phone":"111111"
});

这样显然存在一个问题，那就是服务端写的js函数是固定。在平常的开发中我们要获取各种接口，怎样才能让服务器识别前端传来的函数，根据不同的函数从而动态的返回数据呢？

#### 如下代码:

<!DOCTYPE>
<html>
<head>
    <title>jsonp</title>
    <script type="text/javascript">
    // 得到航班信息查询结果后的回调函数
    var jsonpCallback = function(data){
       alert('远程js带来的数据是：' + data.result);
    };
    // 提供jsonp服务的url地址（不管是什么类型的地址，最终生成的返回值都是一段javascript代码）
    var url = "http://example.jsp?id=1&jsopnCallback=jsopnCallback";
    // 创建script标签，设置其属性
    var script = document.createElement('script');
    script.setAttribute('src', url);
    // 把script标签加入head，此时调用开始
    document.getElementsByTagName('head')[0].appendChild(script); 
    </script>
</head>
<body>

</body>
</html>

>远程服务器
jsonpCallback({
   "username":"zhang",
   "phone":"111111"
});

这样就可以服务器就可以根据前端请求的js的参数来动态的返回不同的函数。

>真实的开发比较复杂，上面的实现比较简单，本文就简单实现一个，并用它来获取qq音乐的数据。




