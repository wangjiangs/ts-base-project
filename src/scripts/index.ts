import "../styles/index.less"
import {registerAutoBaseFontListener} from "./common/autoBaseFont"
import {toast, getById, platform, searchMap, isWx} from "./common/utils"
declare let _hmt:any

registerAutoBaseFontListener()
function renderInfo(memsize:string, version:string, updated:string):void{
    let $version:HTMLParagraphElement = getById("version")
    let $update:HTMLParagraphElement = getById("update")

    $version.textContent = `版本: ${version} - ${memsize} MB`
    $update.textContent = `更新于: ${updated}`
}
function renderWxTips(){
    let img = document.createElement("img")
    img.src = "../../static/imgs/tips.png"
    img.id = "tip"
    img.className = "tip"
    let $mask:HTMLDivElement = getById("mask")
    $mask.appendChild(img)
    img.onload = function(){
        $mask.style.visibility = "visible"
    }

}
let config = {
    android:{
        btnText:"下载APK",
        memsize:"28.10",
        version:'v1.2.0',
        url:"https://iostigerwallet.oss-cn-shenzhen.aliyuncs.com/Android/TigerWallet.apk",
        after:"下载完成后，点击安装包开始安装！"
    },
    ios:{
        btnText:"点击安装",
        memsize:"7.02",
        version:'v1.2.0',
        url:"itms-services://?action=download-manifest&url=https://iostigerwallet.oss-cn-shenzhen.aliyuncs.com/iOS/tigerwallet.plist",
        after:"请回到桌面查看APP安装进度！"
    },
    updated:"2018-10-16 22:30"
}
function buttonToInfo(text:string){
    let $afterTips:HTMLParagraphElement = getById("afterInstall")
    let $button:HTMLButtonElement = getById("install")
    $button.style.display = "none"
    $afterTips.textContent = text
    $afterTips.style.display = "block"
}
function renderTutor(platform:'iOS'|'Android'){
    if(platform === 'iOS'){
        let $tutor:HTMLDivElement = getById("tutor-iOS")
        $tutor.style.display = "block"
    }else{
        let $tutor:HTMLDivElement = getById("tutor-Android")
        $tutor.style.display = "block"     
    }
}
window.onload = function(){
    let url:string|null = null
    this.document.documentElement.style.visibility = "visible"
    let $button:HTMLButtonElement = getById("install")
    let $tips:HTMLParagraphElement = getById("tips")
    renderTutor(platform)
    if(platform === 'iOS'){
        renderInfo(config.ios.memsize, config.ios.version, config.updated);
        $button.textContent = config.ios.btnText
        url = config.ios.url
    }else{
        $button.textContent = config.android.btnText
        renderInfo(config.android.memsize, config.android.version, config.updated)
        url = config.android.url
    }

    $button.addEventListener("click", function(){
        _hmt.push(["_trackEvent", "下载", "click", searchMap["utm_source"], platform])
        if(isWx){
            let $afterTips:HTMLParagraphElement = getById("afterInstall")
            buttonToInfo("请在浏览器中打开本页面！")
            renderWxTips()
        }else{
            buttonToInfo(platform === "iOS"?config.ios.after:config.android.after)
            window.open(url as string, "_self")
        }
    })
}