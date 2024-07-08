// Same as showcode.js, except that initial positions (posx,posy) are passed as arguments, rather than as a shared state

function showknobs(posx,posy){
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

function showcode(posx,posy) {
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
    return([posx,posy])
}