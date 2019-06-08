function ajax(options){
    // 两个必传项，不用处理
    // options.url
    // options.success
    // 两个可选项的数据，要设置默认数据
    let type=options.type?options.type:"get";//type不传数据时默认为get；
    let data=options.data?options.data:{};//data不传数据时默认为空；
    // 2,不管是get和post都需要解析数据
    let str="";
    for(let i in data){
        str+=`${i}=${data[i]}&`;
    }
    //4,判断是否未jsonp
    if(type == "jsonp"){
        options.url = options.url + "?" + str.slice(0, str.length - 1);
        var script = document.createElement("script");
        script.src = options.url;
        document.body.appendChild(script);
        window[data[data.cloumnName]] = function (res) {
            options.success(res)
        }
        return;
    }
    //若不是jsonp就执行ajax
    let d = new Date();
    // 3,开启ajax
    let ajax = new XMLHttpRequest();
    if(type == "get"){
        options.url=options.url+"?"+str+"_tlt="+d.getTime();
        ajax.open(type,options.url,true)
        str=null;
    }else if(type == "post"){
        ajax.open(type,options.url,true)
        str=str.slice(0,str.length-1);
        ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");//发送信息的格式，必备！！！
    }
    ajax.onreadystatechange=function(){
        if(ajax.readyState == 4 && ajax.status == 200){
            options.success(ajax.responseText)
        }
    }
    ajax.send(str)
}