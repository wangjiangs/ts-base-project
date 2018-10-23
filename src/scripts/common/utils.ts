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
function getById<T>(id:string):T{
    return <T>(document.getElementById(id) as any)
}
type Platform = 'iOS'|'Android'
function getPlatform():Platform{
    if(/iP/.test(window.navigator.appVersion)){
        return 'iOS'
    }else{
        return 'Android'
    }
}
let platform = getPlatform()
let searchMap:any = (<any>Object).assign({},...window.location.search.slice(1).split('&').map(v => ({[v.split('=')[0]]:v.split('=')[1]})))

function isWeiXin():boolean {
    let ua = window.navigator.userAgent.toLowerCase();
    if (/micromessenger/.test(ua)) {
        return true;
    } else {
        return false;
    }
}
let isWx = isWeiXin()
export {toast, getById ,platform, searchMap, isWx}