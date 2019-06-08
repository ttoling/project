class List {
    constructor() {
        this.cont = document.getElementsByClassName("dd");
        this.url = "http://localhost/1903/project-yichao/data/goods.json";
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
                str += `<a href="##"><img src="${this.res[i].src}"></a>
                        <div class="goodsDetails">
                            <p class="goodsName">${this.res[i].name}</p>
                            <p class="goodsCont">${this.res[i].cont}</p>
                            <p class="goodsPrice">${this.res[i].price}</p>
                    </div>
                    <div class="goodsComment">
                        <p>${this.res[i].comment}</p>
                    </div>,`
                    arr = str.split(",")
                    // console.log(arr)
            }
            //console.log(this.cont[j])
        var index = parseInt(this.cont[j].getAttribute("num"));
        this.cont[j].innerHTML = arr[index];
        
        }

    }
}  
new List;