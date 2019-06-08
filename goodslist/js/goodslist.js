class List {
    constructor() {
        this.cont = document.getElementsByClassName("cell");
        this.url = "http://localhost/1903/project-yichao/goodslist/data/product.json";
        this.init();
    }
    init() {
        var that = this;
        ajax({
            url: this.url,
            success: function (res) {
                that.res = JSON.parse(res)
                that.display()
                console.log(res)
            }
        })
    }
    display() {
        var str = "";
        for(var j=0;j<this.cont.length;j++){
            this.cont[j].setAttribute("num",j);
        }
        for(var j=0;j<this.cont.length;j++){
            var arr=[]
            for (var i = 0; i < this.res.length; i++) {
                str += ` <div class="showimg">
                            <img src="${this.res[i].src}">
                        </div>
                        <div class="simg">
                            <a><img src="${this.res[i].src1}"></a>
                            <a><img src="${this.res[i].src2}"></a>
                            <a><img src="${this.res[i].src3}"></a>
                        </div>
                        <p class="listprice">
                            <b>${this.res[i].price}</b>
                        </p>
                        <h3 class="title">
                            <a>${this.res[i].title}</a>
                        </h3>,`
                        arr = str.split(",")
            }
            //console.log(this.cont[j])
            var index = parseInt(this.cont[j].getAttribute("num"));
            this.cont[j].innerHTML = arr[index];
            
        }

    }
}  
new List;
$(".cell").mouseover(function(){
    $(this).css({
        border:"2px solid #c72131"
    })
})
$(".cell").mouseout(function(){
    $(this).css({
        border:"1px solid #cdcdcd"
    })
})
$(".cell").click(function(){
    window.location.href="goodsdetails/details.html"
})