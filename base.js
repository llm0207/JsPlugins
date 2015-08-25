//获取CDN资源失败时加载
function _cdnFallback(org){
    var nodeName = org.nodeName.toLowerCase()
            , elem = document.createElement(nodeName)
            , map = {script: 'src', link: 'href'}
            , srcName = map[nodeName]
            , src = org[srcName];

    src = src.replace('kdt-static.qiniudn.com', 'kdt-static.b0.upaiyun.com');
    if(nodeName == 'link'){
        elem.rel = 'stylesheet';
    }
    elem[srcName] = src;
    (document.body || document.head).appendChild(elem);
}
//命名空间管理--注册方法
var Namespace = new Object();
Namespace.Register = function(namespace,obj){
    var namespaces = namespace.split(".");
    var current = window;
    for(var i = 0; i < namespaces.length; i++){
        var _namespace = namespaces[i];
        if(!current[_namespace]){
            current[_namespace] = {};
        }
        if(obj && i == namespaces.length -1){
            for(var o in obj){
                current[_namespace][o] = obj[o];
            }
        }
        current = current[_namespace];
    }
};