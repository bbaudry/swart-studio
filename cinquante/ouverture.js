(() => {

  async function init() {
    console.log("init ouverture")
  }

  function draw() {
    console.log("draw ouverture")
    random()<0.042?fill(0,100,100):fill(0,0,100)
    ellipse(w*0.5,h*0.5,w*0.42,w*0.42)
  }

  window.ouverture = { init, draw };
})();
