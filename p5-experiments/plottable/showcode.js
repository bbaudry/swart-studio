function showknobs(){
    posx=leftmargin
    posy=topmargin+actualheight

    for(i=0;i<knobs.length;i++){
        var s = knobs[i].name+" "+knobs[i].value
        tw = textWidth(s)
        if (posx + tw > rightmargin) {
            posx = leftmargin
            posy += fSize + 1
        }
        text(s, posx, posy)
        posx+=tw+fSize
    }
    posx = leftmargin
    posy += 2*fSize + 1
}

function showcode() {
    var allcode, c, tw 
    allcode = ''
    for (var i = 0; i < sourcecode.length; i++) {
        var token = sourcecode[i]
        var notab = token.toString().replace(/\s/g, '').split('\r\n')[0]
        allcode += notab
    }
    for (let i = 0; i < allcode.length; i++) {
        c = allcode.charAt(i)
        tw = textWidth(c)
        if (posx + tw > rightmargin) {
            posx = leftmargin
            posy += fSize + 1
        }
        text(c, posx, posy)
        posx += tw
    }
    posx = leftmargin
    posy += 2*fSize + 1
}