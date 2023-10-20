# Pen plotter uunatek idraw on Linux

We have a pen plotter UUNA TEK ([uunatek.com](https://uunatek.com/)), iDraw 2 A3 pen plotter (aka [idrawhome](https://idrawhome.com/products/idrawhome-2-0-h-structure-xy-plotter-a3-plotting-range-with-plate)). We want to use it on Linux. Here are some notes.

## General design

The pen plotter is connected to the Linux machine via USB, with a serial protocol.
The pen plotter motherboard is called DrawCore, the firmware is based on [grbl](https://github.com/grbl/grbl).
It uses a language called [g-code](https://en.wikipedia.org/wiki/G-code).
The spec of the gcode language is documented at <https://github.com/gnea/grbl/blob/master/doc/markdown/commands.md>
The X-axis is the sort side, Y-axis the long side.

## Configuration

Identify the USB device that is automatically created when you plug in the USB cable.

```
$ ls -l /dev/ttyACM0 # this what I have on my Debian/Ubuntu machine 
$ ls -l /dev/ttyUSB0 
```

Make sure you are the appropriate Unix group (`dialout` for me).

To get the grbl firmware version with `tio` (`apt install tio`):

```
$ tio -e /dev/ttyACM0
Grbl 1.1h DrawCore V2.09 ['$' for help]

```



## Drawing

### GCODE cheat sheet

* `G21`  Set Units to  millimeter
* `G20`  Set Units to Inches
* `F50` super slow, `F2500` maximum, super fast, speed only for `G01` (not for `G00`)
* `G90` Set to absolute coordinate mode
* `G91` Set to relative coordinate mode (from its where now)
* `G92 X0Y0Z0` save the current location of the head as (0,0,0)
* `G02/G03` instructs the CNC machine to move along a Circular Arc from its current position to a new coordinate. The new coordinate can be absolute or relative, depending on the effective mode (G90 or G91). In G02, the movement will be in a clockwise (CW) direction. in G03 the movement will ve in counter-clockwise (CCW). ([source](https://www.machiningdoctor.com/gcodes/g2-3-circular/))
  * Version 1 – “R” Syntax: `G02/G03 X12.5 Y14.7 R2.0`; X, Y – The target coordinates at the end of the movement. R – The arc’s radius.
  * Version 2 – “Ijk” Syntax: `G02/G03 X12.5 Y14.7 I1.0 J2.0 F0.2`; X, Y – The target coordinates at the end of the movement. I, J – The arc’s center point relative to X, Y.
* precision: hundredth of millimeter
`G00 X0.1 Y0.1`, `G00 X0.01 Y0.01`

See also <https://www.machiningdoctor.com/gcodes/>


### With raw GCODE and serial communication via tio

Note: gcode-cli is better, see below

See doc at <https://github.com/gamk67/idraw2linux/blob/925073a5b550bf1b0b20225f7e604967682c622d/README.md>

Drawing a square with `tio`:

```
; pen uo
G00 Z0
; pen down
G00 Z4
G00 Z5
G00 Z6

; draw a square
G00 X0 Y100
G00 X100 Y100
G00 X100 Y0
G00 X0 Y0
; pen up
```

With a recent version (we tried with v2.8) one can create a socket to pipe into.

```
tio --socket unix:/tmp/tio-socket0 /dev/ttyACM0

# in another terminal
echo G00 Z0 | nc -UN /tmp/tio-socket0
```


### With raw GCODE and gcode-cli

[gcode-cli](https://github.com/hzeller/gcode-cli) command line tool to send gcode to serial pen plotter.
It waits for the previous command to complete before sending the next one.
It stops if an error happens.

```
gcode-cli file.gcode
```

Bonus: it can read gcode from standard input `python conception-through-code-generator.py | gcode-cli -` This opens some interesting persepective with respect to live coding, and unreproducible art.

### With p5.js

* [p5.js-svg](https://github.com/zenozeng/p5.js-svg) can export svg from your p5 sketch. Use it with [p5.js v1.5](https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.5.0/p5.js). Add the following two lines at the top of your html
```
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.5.0/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.11/addons/p5.dom.min.js"></script>
```
and use the 'SVG' argument when creating the p5 canvas
```
            createCanvas(w, h, SVG);
```
More documentation at [https://github.com/zenozeng/p5.js-svg](https://github.com/zenozeng/p5.js-svg). For example, see [plottable001](https://github.com/bbaudry/swart-studio/blob/main/penplotting/plottable001.html)

Once you are happy with your sketch, save it as an svg.
* Transform the svg to gcode with [Juicy-GCode](https://github.com/domoszlai/juicy-gcode). Check out the flavor.txt configuration file to fine-tune the generation of the gcode. Put the generated gcode in a file, for example sketch.gcode
* Use [gcode-cli](https://github.com/hzeller/gcode-cli) to draw the sketch on the pen plotter, for example ```g-code-cli sketch.gcode```
    
 
##   Notes

* Version 1.0 of idraw was compatible with EBB commands, not version 2
* iDraw is not compatible with axidraw software. It does not use the [EBB (EiBotBoard) Command Set](https://evil-mad.github.io/EggBot/ebb.html). [axidraw user manual](https://wiki.evilmadscientist.com/AxiDraw_User_Guide) [inkscape and axidraw]( https://wiki.evilmadscientist.com/Axidraw_Software_Installation)
* One may do string art: <https://www.youtube.com/watch?v=ymWi15rvTvM>

### SVG to Gcode

**vpype** works out-of-the-box to do two things:
- post-process and optimize SVG files, see doc
- generate Gcode with vpype-gcode `vpype read input.svg gwrite --profile gcode output.gcode` [doc](https://pypi.org/project/vpype-gcode/)

**juicy-gcode** works to transform SVG to gcode
 `./juicy-gcode ~/input.svg -f flavor.txt`
One can change the size of the artwork by setting the density with `-d 32` (default is 96). Warning: a lower value means a bigger artwork , potentially outside the frame. With 1000 it's already very small.
 
## Links:

* general idraw:
  * uunatek official doc, see [github](https://github.com/UUNATEK/iDraw-Pen-Plotter>) and [drive](https://drive.google.com/drive/folders/1NlCBw1kUjKMBFF7N0A6ynWSa8dYMOfuo)
  * [idraw review @ generativehut](https://www.generativehut.com/post/reviewing-the-idraw-pen-plotter), by [Pierre Paslier](https://www.linkedin.com/in/pierrepaslier/?originalSubdomain=uk)
* controllers
  * [tio](https://github.com/tio/tio) can be used to send gcode directly to the plotter via usb serial
* gcode tech
  * [vpype-gcode](https://github.com/tatarize/vpype-gcode/) to be used with [vpype](https://pypi.org/project/vpype/)
  * [Juicy-GCode](https://github.com/domoszlai/juicy-gcode) is a command-line application that converts SVG files to GCode
  * Python stack [svg2gcode](https://github.com/vishpat/svg2gcode) -> [svg2gcode_grbl](https://github.com/arcadeperfect/svg2gcode_grbl) -> [svg2grbl](https://github.com/nknotts/svg2grbl)
  * Rust stack [svg2gcode](https://docs.rs/svg2gcode/) crate, [source](https://github.com/sameer/svg2gcode) and [web interface](https://sameer.github.io/svg2gcode/))
  * [gcode-cli](https://github.com/hzeller/gcode-cli) command line tool to send gcode to serial pen plotter
  * [inkscape-grbl](https://github.com/mahtDFR/inkscape-grbl) save Inkscape drawings as G-Code files
  * [gcode-generative-for-processing](https://github.com/o0morgan0o/gcode-generative-for-processing)
  * [Universal-G-Code-Sender](https://github.com/winder/Universal-G-Code-Sender)
  * [Gcmc](https://www.vagrearg.org/content/gcmc) is a front-end domain-specific language for generating G-code
* simulators
  * <https://ncviewer.com/>
  * <https://nraynaud.github.io/webgcode/> shows bounds and duration 
  * <https://riverbendmath.org/modules/XY_Plotter/Simulator/>
  * [v-plotter](https://github.com/domoszlai/v-plotter): A pen plotter simulator
* drawing tools
  * [p5.js-svg](https://github.com/zenozeng/p5.js-svg), works with [p5.js v1.5](https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.5.0/p5.js). For example, see [plottable001](https://github.com/bbaudry/swart-studio/blob/main/penplotting/plottable001.html)
  * [vsketch](https://github.com/abey79/vsketch) is a Python generative art toolkit for plotters (API inspired from Processing)
  * [whiskers](https://github.com/abey79/vsvg/blob/master/crates/whiskers/README.md) is a Rust-based, Processing-like interactive sketching environment for generative plotter art.
  * [DrawingBotV3](https://github.com/SonarSonic/DrawingBotV3) is a software for converting bitmap images to vector art
  * [pypotrace](https://github.com/tatarize/potrace) transforms bitmaps into vector graphics , port of [potrace](https://potrace.sourceforge.net/)
  * [p5.lab](https://github.com/machineagency/p5.fab) A p5js library for digital fabrication
* samples:
  * https://github.com/rsimmons/isovoxel/blob/master/docs/
  * https://github.com/abey79/sketches
  * https://github.com/Notgnoshi/generative/blob/main/examples/
* other
  * [The fascination of pen plotting, handwriting and spirals](https://www.fxhash.xyz/article/the-fascination-of-pen-plotting-handwriting-and-spirals)
  * Awesome plotter resources <https://github.com/beardicus/awesome-plotters>
  * [Making Machines that Make: Object-Oriented Hardware Meets Object-Oriented Software](http://infosyncratic.nl/peek-making-machines.pdf)
  * [Machine agency](https://depts.washington.edu/machines/) Our work harnesses the precision of machines for the creativity of individuals.
  * [Towards Foundational AI Models for Additive Manufacturing: Language Models for G-Code Debugging, Manipulation, and Comprehension. 2023](http://arxiv.org/pdf/2309.02465)
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
