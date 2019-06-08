class Magnifier {
    constructor() {
        this.lbox = document.querySelector(".lbox");
        this.rbox = document.querySelector(".rbox");
        this.sImg = document.querySelector(".simg");
        this.span = document.querySelector(".span");
        this.bImg = document.querySelector(".bimg");
        this.list = document.querySelectorAll(".imglist");
        this.addEvent();
        this.init();
    }
    init() {
        // console.log(this.list)
        var that = this;
        for (var i = 0; i < this.list.length; i++) {
            console.log(that.list[i])
            this.list[i].onclick = function () {
                console.log(this)
                that.sImg.src = this.firstChild.src;
                that.bImg.src = this.firstChild.src;
            }
        }
    }
    addEvent() {
        var that = this;
        this.lbox.onmouseover=function () {
            that.show();
        };
        this.lbox.onmouseout=function () {
            that.hidden();
        };
        this.lbox.onmousemove=function (eve) {
            var e = eve || window.event;
            that.move(e)
        }
    }
    show() {
        this.span.style.display = "block";
        this.rbox.style.display = "block";
    }
    hidden() {
        this.span.style.display = "none";
        this.rbox.style.display = "none";
    }
    move(e) {
        var l =e.offsetX - this.span.offsetWidth / 2;
        var t =e.offsetY - this.span.offsetHeight / 2;
        console.log(e.offsetX)
        console.log(e.offsetY)
        var right = this.lbox.offsetWidth - this.span.offsetWidth;
        var bottom = this.lbox.offsetHeight - this.span.offsetHeight;
        
        if (l < 0) { l = 0 }
        if (t < 0) { t = 0 }
        if (l > right) { l = right }
        if (t > bottom) { t = bottom }
        this.span.style.left = l + "px";
        this.span.style.top = t + "px";
        var x = l / right;
        var y = t / bottom;
        this.bImg.style.left = (this.rbox.offsetWidth - this.bImg.offsetWidth) * 2*x + "px";
        this.bImg.style.top = (this.rbox.offsetHeight - this.bImg.offsetHeight) * 2*y + "px";
    }

}
new Magnifier();