(() => {
  let fifty
  async function init() {
    fifty=[1,1,0,0,1,0]
    console.log("init closure")
    noStroke()
  }

  function draw() {
    drawfifty()
    flipone()
  }

  function drawfifty(){
    let pad=w*0.01
    let stepx = w/3
    let stepy=h/2
    let index=Math.floor(random(fifty.length))
    for(let i=0;i<3;i++){
      for(let j=0;j<2;j++){
        let sat
        i+j==index?sat=50:sat=100*fifty[i+j]
        fill(350,sat,100)
        rect(i*stepx+pad,j*stepy+pad,stepx-2*pad,stepy-2*pad)
      }
    } 
  }

  function flipone(){
    

  }

  window.closure = { init, draw };
})();
