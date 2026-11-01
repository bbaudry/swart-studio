(() => {

  async function init() {
    console.log("init closure")
  }

  function draw() {
    console.log("draw closure")
    fill(0,0,100)
    quad(w*0.5-100,h*0.5-100,
      w*0.5+100,h*0.5-100,
      w*0.5+100,h*0.5+100,
      w*0.5-100,h*0.5+100
    )
  }

  window.closure = { init, draw };
})();
