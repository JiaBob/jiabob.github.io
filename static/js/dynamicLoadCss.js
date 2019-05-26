function dynamicLoadCss(filename){
        let fileref = document.createElement('link');
        fileref.setAttribute("rel","stylesheet");
        fileref.setAttribute("type","text/css");
        fileref.setAttribute("href",filename);

        document.getElementsByTagName("head")[0].appendChild(fileref);
}

function removeCss(filename){
    let targetelement = "link";
    let targetattr = "href";
    let allsuspects = document.getElementsByTagName(targetelement)
    for (let i = allsuspects.length; i>=0;i--){
    if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
     allsuspects[i].parentNode.removeChild(allsuspects[i])
    }
}