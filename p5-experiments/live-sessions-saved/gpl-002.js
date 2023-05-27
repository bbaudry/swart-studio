{
  "version": "1.4.1",
  "revision": 44,
  "count": {
    "sketches": 1,
    "folders": 0
  },
  "structure": [
    {
      "type": "sketch",
      "name": "new_018",
      "mod": 1680295960454,
      "code": "var h,w\nvar cx,cy\nvar angle\nvar dust=[]\nfunction setup() {\n\tcreateCanvas(windowWidth, windowHeight)\n\tw=windowWidth\n\th=windowHeight\n\tcx=w/2\n\tcy=h/2\n\tangle=0\n\tcolorMode(HSB,360,100,100,250)\n\tinit()\n\t\n}\n\nfunction init(){\n\tfor (i=0;i<400;i++){\n\t\tlet tom = w/2*random()\n\t\tlet waits = h/2*random()\n\t\tlet john = (i*90)%360+40\n\t\tdust.push({x:w/2, y:h/2, wid:tom, hei:waits, hu:john})\n\t}\n}\n\nfunction draw() {\n\tbackground(0,0,0,1)\n\tc()\n\td()\n}\n\nfunction d(){\n\tfor (vera=0;vera<dust.length;vera++){\n\t\tconsole.log()\n\t\tlet p = dust[vera]\n\tlet x = p.x+p.wid*cos(angle)\n\tlet y = p.y+p.hei*sin(angle)\n\tfill(p.hu,100,100,100)\n\tellipse(x,y,2,2)\n\t\t\n\t}\n}\n\nfunction c(){\n\tnoStroke()\n\tlet x = cx+200*cos(angle)\n\tlet y = cy+200*sin(angle)\n\tfill(0,60,100,10)\n\tellipse(x,y,17,17)\n\tlet x1 = cx+200*cos(angle)\n\tlet y1 = cy+100*sin(angle)\n\tfill(320,100,100)\n\tellipse(x1,y1,25,25)\n\tangle+=radians(0.01)\n}"
    }
  ]
}