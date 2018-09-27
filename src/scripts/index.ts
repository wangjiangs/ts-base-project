import "../styles/index.less"
import {registerAutoBaseFontListener} from "./common/autoBaseFont"
import {toast} from "./common/utils"

registerAutoBaseFontListener()

window.onload = function(){
    
    let p = this.document.createElement("p")
    p.textContent = "hello world!"
    this.document.body.appendChild(p)
    toast("hello world!")
    this.console.log("hello")
}