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

### SVG to Gcode

**Vpype** works out-of-the-box to do two things:
- post-process and optimize SVG files, see doc
- generate Gcode with vpyope-gcode `vpype read input.svg gwrite --profile gcode output.gcode` [doc](https://pypi.org/project/vpype-gcode/)

**juicy-gcode** works to transform SVG to gcode
 `./juicy-gcode ~/input.svg`
 
## Links:

* general idraw:
  * uunatek doc, see <https://github.com/UUNATEK/iDraw-Pen-Plotter>
  * idraw docs and software: https://drive.google.com/drive/folders/1NlCBw1kUjKMBFF7N0A6ynWSa8dYMOfuo
  * [idraw review @ generativehut](https://www.generativehut.com/post/reviewing-the-idraw-pen-plotter), by [Pierre Paslier](https://www.linkedin.com/in/pierrepaslier/?originalSubdomain=uk)
  * Review at generativehut <https://www.generativehut.com/post/reviewing-the-idraw-pen-plotter>
* low level gcode
  * [vpype-gcode](https://github.com/tatarize/vpype-gcode/) to be used with [vpype](https://pypi.org/project/vpype/)
  * [Juicy-GCode](https://github.com/domoszlai/juicy-gcode) is a command-line application that converts SVG files to GCode
  * [svg2gcode](https://github.com/vishpat/svg2gcode) -> [svg2gcode_grbl](https://github.com/arcadeperfect/svg2gcode_grbl) -> [svg2grbl](https://github.com/nknotts/svg2grbl)
  * [gcode-cli](https://github.com/hzeller/gcode-cli) command line tool to send gcode to serial pen plotter
  * [inkscape-grbl](https://github.com/mahtDFR/inkscape-grbl) save Inkscape drawings as G-Code files
  * [gcode-generative-for-processing](https://github.com/o0morgan0o/gcode-generative-for-processing)
  * [Gcmc](https://www.vagrearg.org/content/gcmc) is a front-end domain-specific language for generating G-code
* simulators
  * <https://ncviewer.com/>
  * <https://nraynaud.github.io/webgcode/> shows bounds and duration 
  * <https://riverbendmath.org/modules/XY_Plotter/Simulator/>
  * [v-plotter](https://github.com/domoszlai/v-plotter): A pen plotter simulator
* drawing tools
  * [vsketch](https://github.com/abey79/vsketch) is a Python generative art toolkit for plotters (API inspired from Processing)
  * [whiskers](https://github.com/abey79/vsvg/blob/master/crates/whiskers/README.md) is a Rust-based, Processing-like interactive sketching environment for generative plotter art.
  * [pypotrace](https://github.com/tatarize/potrace) transforms bitmaps into vector graphics , port of [potrace](https://potrace.sourceforge.net/)
* samples:
  * https://github.com/rsimmons/isovoxel/blob/master/docs/
  * https://github.com/abey79/sketches
  * https://github.com/Notgnoshi/generative/blob/main/examples/

* other
  * [The fascination of pen plotting, handwriting and spirals](https://www.fxhash.xyz/article/the-fascination-of-pen-plotting-handwriting-and-spirals)
  * Awesome plotter resources <https://github.com/beardicus/awesome-plotters>
  * [DrawingBotV3](https://github.com/SonarSonic/DrawingBotV3) is a software for converting images 

## Help

```
./juicy-gcode --help
juicy-gcode - The SVG to G-Code converter

Usage: juicy-gcode [-v|--version] SVGFILE [-f|--flavor CONFIGFILE] 
                   [-o|--output OUTPUTFILE] [-d|--dpi DPI] 
                   [-t|--tolerance TOLERANCE] [-c|--curve-fitting TYPE]
  Convert SVGFILE to G-Code

Available options:
  -h,--help                Show this help text
  -v,--version             Show version
  SVGFILE                  The SVG file to be converted
  -f,--flavor CONFIGFILE   Configuration of G-Code flavor
  -o,--output OUTPUTFILE   The output G-Code file (default is standard output)
  -d,--dpi DPI             Used to determine the size of the SVG when it does
                           not contain any units; dot per inch (default is 96)
  -t,--tolerance TOLERANCE Maximum derivation of the approximation curve
  -c,--curve-fitting TYPE  Bezier curve approximation algorithm. TYPE can be
                           linear, biarc (default) or cubic-bezier
```
