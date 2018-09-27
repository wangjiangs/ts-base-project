const baseFontSize = 18
const baseWidth = 375
const maxWidth = 500
const minWidth = 300
const ratio = baseFontSize / baseWidth
function autoBaseFont():void{
    let currentWidth = window.innerWidth < minWidth? minWidth:window.innerWidth
    currentWidth = window.innerWidth > maxWidth ? maxWidth:window.innerWidth
    let computedFontSize =  ratio * currentWidth
    document.getElementsByTagName("html")[0].style.fontSize = `${computedFontSize}px`
}
function registerAutoBaseFontListener(){
    autoBaseFont()
    window.onresize = autoBaseFont
}
export {
    registerAutoBaseFontListener
}