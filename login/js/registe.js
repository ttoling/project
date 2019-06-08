class Register{
    constructor(){
        this.user = document.querySelector("#txtEmail");
        this.pass = document.querySelector("#Password");
        this.repass = document.querySelector("#RePassword");
        this.btn = document.querySelector("#Register");
        this.msg = document.querySelector(".tipsmsg");

        this.init()
    }
    init(){
        var that = this;
        this.btn.onclick = function(){
            that.setData();
            }
        }
        getData(){
            this.usermsg = localStorage.getItem("usermsg")
            if(this.usermsg == null){
                this.usermsg = []
            }else{
                this.usermsg = JSON.parse(this.usermsg)
            }
        }
        setData(){
            if(this.usermsg.length == 0){
                this.usermsg.push({
                    user:this.user.value,
                    pass:this.pass.value,
                    onoff:0
                })
                this.span.innerHTML = "注册成功";
                localStorage.setItem("usermsg",JSON.stringify(this.abc))
            }else{
                for(var i = 0;i<this.setData.length;i++){
                    if(this.usermsg[i].user === this.user.value){
                        this.span.innerHTML = "名字已占用";
                        return;
                    }
                }
                this.usermsg.push({
                    user:this.user.value,
                    pass:this.pass.value,
                    onoff:0
                })
                this.span.innerHTML = "注册成功";
                localStorage.setItem("usermsg",JSON.stringify(this.abc))
            }
        }
    }

new Register;