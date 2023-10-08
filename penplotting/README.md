# Pen plotter uunatek idraw on Linux

We have a pen plotter UUNA TEK ([uunatek.com](https://uunatek.com/)), iDraw 2 A3 pen plotter (aka [idrawhome](https://idrawhome.com/products/idrawhome-2-0-h-structure-xy-plotter-a3-plotting-range-with-plate)). We want to use it on Linux. Here are some notes.

## General design

The pen plotter is connected to the Linux machine via USB, with a serial protocol.
The pen plotter motherboard is called DrawCore, the firmware is based on [grbl](https://github.com/grbl/grbl).
It uses a language called [g-code](https://en.wikipedia.org/wiki/G-code).
The spec of the gcode language is documented at <https://github.com/gnea/grbl/blob/master/doc/markdown/commands.md>


## Configuration

Identify the USB device that is automatically created when you plug in the USB cable.

```
$ ls -l /dev/ttyACM0 # this what I have on my Debian/Ubuntu machine 
$ ls -l /dev/ttyUSB0 
```

Make sure you are the appropriate Unix group (`dialout` for me).

Install `tio`: `apt install tio`

To get the version:

```
$ tio -e /dev/ttyACM0
[tio 16:15:29] tio v1.32
[tio 16:15:29] Press ctrl-t q to quit
[tio 16:15:29] Connected

Grbl 1.1h DrawCore V2.09 ['$' for help]
```



## Drawing

### With raw GCODE and serial communication 

See doc at <https://github.com/gamk67/idraw2linux/blob/925073a5b550bf1b0b20225f7e604967682c622d/README.md>

Drawing a square with `tio`:

```
G00 X0 Y100
G00 X100 Y100
G00 X100 Y0
G00 X0 Y0
```


 
##   Notes

* Version 1.0 of idraw was compatible with EBB commands, not version 2
* iDraw is not compatible with axidraw software. It does not use the [EBB (EiBotBoard) Command Set](https://evil-mad.github.io/EggBot/ebb.html). [axidraw user manual](https://wiki.evilmadscientist.com/AxiDraw_User_Guide) [inkscape and axidraw]( https://wiki.evilmadscientist.com/Axidraw_Software_Installation)
* One may do string art: <https://www.youtube.com/watch?v=ymWi15rvTvM>

## Links:

* general idraw:
  * uunatek doc, see <https://github.com/UUNATEK/iDraw-Pen-Plotter>
  * idraw docs and software: https://drive.google.com/drive/folders/1NlCBw1kUjKMBFF7N0A6ynWSa8dYMOfuo
  * [idraw review @ generativehut](https://www.generativehut.com/post/reviewing-the-idraw-pen-plotter), by [Pierre Paslier](https://www.linkedin.com/in/pierrepaslier/?originalSubdomain=uk)
  * Review at generativehut <https://www.generativehut.com/post/reviewing-the-idraw-pen-plotter>
* low level gcode
  * [Gcmc](https://www.vagrearg.org/content/gcmc) is a front-end domain-specific language for generating G-code
  * [gcode-cli](https://github.com/hzeller/gcode-cli) command line tool to send gcode to serial pen plotter
  * [Juicy-GCode](https://github.com/domoszlai/juicy-gcode) is a command-line application that converts SVG files to GCode
  * [v-plotter](https://github.com/domoszlai/v-plotter): A pen plotter simulator
  * [inkscape-grbl](https://github.com/mahtDFR/inkscape-grbl) save Inkscape drawings as G-Code files 
* drawing tools
  * [vsketch](https://github.com/abey79/vsketch) is a Python generative art toolkit for plotters (API inspired from Processing)
  * [vpype](https://pypi.org/project/vpype/) is the Swiss-Army-knife generative art command-line tool for plotter vector graphics and [vpype-gcode](https://github.com/tatarize/vpype-gcode/)
  * [whiskers](https://github.com/abey79/vsvg/blob/master/crates/whiskers/README.md) is a Rust-based, Processing-like interactive sketching environment for generative plotter art.
* other
  * [The fascination of pen plotting, handwriting and spirals](https://www.fxhash.xyz/article/the-fascination-of-pen-plotting-handwriting-and-spirals)
  * Awesome plotter resources <https://github.com/beardicus/awesome-plotters>
  * [DrawingBotV3](https://github.com/SonarSonic/DrawingBotV3) is a software for converting images 
