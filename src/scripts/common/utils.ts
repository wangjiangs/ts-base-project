/**
 * 弹出toast消息
 * @param msg 需要toast的消息
 */
let toast = function(msg:string){
    let p = document.createElement("p")
    p.classList.add("toast")
    let span = document.createElement("span")
    span.textContent = msg
    p.appendChild(span)
    document.body.appendChild(p)
    setTimeout(() => {
        document.body.removeChild(p)
    }, 1500)
}
export {toast}