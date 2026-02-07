# Pen plotter uunatek idraw on Linux

We have a pen plotter UUNA TEK ([uunatek.com](https://uunatek.com/)), iDraw 2 A3 pen plotter (aka [idrawhome](https://idrawhome.com/products/idrawhome-2-0-h-structure-xy-plotter-a3-plotting-range-with-plate)). We want to use it on Linux. Here are some notes.

## General design

The pen plotter is connected to the Linux machine via USB, with a serial protocol.
The pen plotter motherboard is called DrawCore, the firmware is based on [grbl](https://github.com/grbl/grbl).
It uses a language called [g-code](https://en.wikipedia.org/wiki/G-code).
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

### GRBL configuration commands

**View Settings Commands**

**`$$` - View All Current Settings**
This command displays all configuration parameters and their current values. When you send this command, GRBL responds with a complete list showing each parameter number and its set value. This is useful for checking your machine's configuration or troubleshooting issues. You'll see output like `$0=10`, `$1=25`, etc.

**`$#` - View Coordinate System Offsets**
This displays all work coordinate systems (G54-G59) and their offsets from the machine coordinate system. It also shows G28 and G30 predefined positions, tool length offset (G92), and probe position. These offsets define where your workpiece zero points are relative to the machine's home position. This is critical for understanding where your machine thinks the workpiece is located.

**`$G` - View Parser State**
This shows the current modal state of the G-code parser. It tells you which modes are active, such as motion mode (G0, G1, G2, G3), coordinate system (G54, G55, etc.), plane selection (G17, G18, G19), distance mode (G90, G91), feed rate mode (G93, G94), units (G20, G21), cutter compensation, tool length offset, spindle state (M3, M4, M5), and coolant state (M7, M8, M9). This is essential for knowing the machine's current state.

**`$I` - View Build Info**
This displays the GRBL version number and build date. It may also show optional build information like firmware version, compile date, and source code version. This helps you identify which version of GRBL you're running, which is important for compatibility and troubleshooting.

**`$N` - View Startup Blocks**
This shows the two startup blocks (N0 and N1) that GRBL executes automatically when it powers up or resets. These blocks can contain any valid G-code commands you want to run at startup, such as setting units, coordinate systems, or turning on coolant. If no startup blocks are programmed, this returns empty.

**`$C` - Check Mode (Toggle)**
This toggles check mode on or off. In check mode, GRBL processes all G-code commands without moving the machine or changing outputs. It checks for syntax errors, validates commands, and simulates the parser state changes. This is useful for testing new G-code programs safely before running them on the actual machine.

**`$X` - Kill Alarm Lock**
This clears the alarm state that locks GRBL after certain error conditions. GRBL enters alarm mode when hard limits are triggered, during startup if homing is enabled but not performed, or after other critical errors. You must clear the alarm with this command before GRBL will accept motion commands again. However, you should first fix the underlying problem that caused the alarm.

**`$H` - Run Homing Cycle**
This initiates the homing cycle sequence. GRBL moves each axis to its limit switch in the order and direction specified by settings `$23`. It first performs a fast seek to find the switches, then backs off and does a slow precise approach. After homing, GRBL sets the machine position to the values defined in `$130`, `$131`, and `$132`. Homing establishes a known reference position for the machine coordinate system.

**Configuration Parameters**

**`$0` - Step Pulse Time (microseconds)**
This sets the minimum duration of each step pulse sent to the stepper drivers. Typical values range from 2 to 10 microseconds. If set too low, stepper drivers may miss steps because the pulse is too short to register. If set too high, it limits maximum step rates. Most modern drivers work fine with 2-5 microseconds. Check your driver specifications for the minimum pulse width requirement.

**`$1` - Step Idle Delay (milliseconds)**
This determines how long GRBL waits after motion stops before disabling the stepper motors. The value is in milliseconds, with 255 keeping motors always enabled. Disabling motors reduces heat and power consumption but allows the machine to move freely. Setting this too low might cause the machine to lose position if it's bumped before the idle time expires. Values between 25-255 are common.

**`$2` - Step Pulse Invert (mask)**
This is a binary mask that inverts the step pulse signal for each axis. Bit 0 is X, bit 1 is Y, bit 2 is Z. Some stepper drivers require active-low pulses while others need active-high. If your motor runs backward or doesn't run at all, you may need to change this setting. For example, a value of 0 means no inversion, while 7 (binary 111) inverts all three axes.

**`$3` - Step Direction Invert (mask)**
This binary mask inverts the direction signal for each axis. Like `$2`, bit 0 is X, bit 1 is Y, bit 2 is Z. If an axis moves in the wrong direction, you can flip its direction bit here instead of physically rewiring the motor. For example, if X moves backward, set bit 0 to invert it. A value of 5 (binary 101) would invert X and Z but not Y.

**`$4` - Invert Step Enable Pin (boolean)**
This inverts the stepper enable signal. Set to 0 for normal, 1 for inverted. Some stepper drivers are enabled with a low signal, others with a high signal. If your motors are always disabled or always enabled regardless of motion, toggle this setting. This applies to all axes together, not individually.

**`$5` - Invert Limit Pins (boolean)**
This inverts the limit switch input signals. Set to 0 for normally-open switches, 1 for normally-closed switches. Normally-open switches are more common and safer because a broken wire appears as an open switch (safe state). Normally-closed switches continuously conduct and trigger when opened, which means a broken wire triggers a false limit alarm. Most setups use 0.

**`$6` - Invert Probe Pin (boolean)**
This inverts the probe input signal. Set to 0 for normally-open probe, 1 for normally-closed probe. Normally-open is standard for most touch probes and tool setters. The probe triggers when the circuit closes (tool touches workpiece). If your probe behaves backward, toggle this setting.

**`$10` - Status Report Options (mask)**
This configures what information appears in status reports. Bit 0 enables machine position reporting, bit 1 enables work position reporting. Set to 0 for machine position only, 1 for both machine and work positions, 2 for work position only. Most users prefer value 1 to see both coordinate systems.

**`$11` - Junction Deviation (mm)**
This controls how GRBL handles cornering speed. Lower values make the machine slow down more at corners, higher values allow faster cornering but with less precision. The value represents how much the tool path can deviate from the programmed path at junctions. Typical values are 0.01 to 0.05 mm. Lower values give smoother motion and better dimensional accuracy but slower overall speed.

**`$12` - Arc Tolerance (mm)**
This sets the maximum allowable deviation when converting arc commands (G2/G3) into linear segments. GRBL breaks arcs into many small straight lines. Lower values create smoother arcs with more segments but require more processing. Higher values use fewer segments but create more angular paths. Typical values are 0.002 to 0.01 mm. This affects arc quality and processing speed.

**`$13` - Report in Inches (boolean)**
This sets the units for position reports and some parameters. Set to 0 for millimeters, 1 for inches. This doesn't change how G-code is interpreted (use G20/G21 for that). It only affects how GRBL reports positions back to you. Most users keep this at 0 and use millimeters.

**`$20` - Soft Limits Enable (boolean)**
This enables software limit checking. Set to 1 to enable, 0 to disable. When enabled, GRBL prevents motion beyond the maximum travel distances set in `$130-132`. If a G-code command would exceed these boundaries, GRBL triggers an alarm and stops. This requires homing to be performed first to establish the machine coordinate system. Soft limits protect your machine from crashes.

**`$21` - Hard Limits Enable (boolean)**
This enables hard limit switches. Set to 1 to enable, 0 to disable. When enabled, GRBL monitors the limit switch inputs and immediately stops all motion if any switch is triggered. This provides emergency crash protection. However, electrical noise can cause false triggers, so proper wiring and shielding are important. Hard limits require a machine reset and homing cycle after triggering.

**`$22` - Homing Cycle Enable (boolean)**
This enables the homing cycle on startup and with `$H` command. Set to 1 to enable, 0 to disable. When enabled, GRBL requires a homing cycle after startup before it will execute motion commands. Homing establishes the machine's reference position. If you don't have limit switches installed, keep this at 0.

**`$23` - Homing Direction Invert (mask)**
This binary mask sets which direction each axis moves during homing. Bit 0 is X, bit 1 is Y, bit 2 is Z. A 0 bit homes toward negative coordinates, a 1 bit homes toward positive coordinates. For example, value 1 (binary 001) homes X positive, Y and Z negative. This should match where your limit switches are physically located.

**`$24` - Homing Locate Feed Rate (mm/min)**
This sets the slower, precise feed rate used during the second homing approach. After the initial fast seek finds the limit switch, GRBL backs off and approaches again at this slower rate for accurate positioning. Typical values are 25 to 100 mm/min. Slower is more accurate but takes longer. This should be much slower than `$25`.

**`$25` - Homing Search Seek Rate (mm/min)**
This sets the fast feed rate used during the initial homing search. GRBL moves rapidly at this speed until it finds the limit switch. Typical values are 500 to 2000 mm/min. Faster saves time but may overshoot more. This should be significantly faster than `$24` to make homing efficient.

**`$26` - Homing Switch Debounce Delay (ms)**
This sets a delay in milliseconds after the limit switch triggers to filter out electrical noise. Mechanical switches can bounce and create multiple false triggers. This delay ensures the switch signal is stable before GRBL accepts it. Typical values are 50 to 250 milliseconds. Too low may cause false triggers, too high wastes time.

**`$27` - Homing Switch Pull-Off Distance (mm)**
This sets how far each axis backs off from the limit switch after homing. After finding the precise switch position, GRBL moves this distance away to clear the switch. This prevents the machine from sitting on the switch, which could cause false alarms. Typical values are 1 to 5 mm. Must be large enough to reliably clear the switch.

**`$30` - Max Spindle Speed (RPM)**
This sets the spindle speed that corresponds to maximum PWM output (100% duty cycle or S-value at maximum). When you command S1000 in G-code, GRBL calculates the PWM percentage by dividing S1000 by this `$30` value. For example, if `$30=10000` and you command S5000, GRBL outputs 50% PWM. This should match your spindle's maximum rated RPM.

**`$31` - Min Spindle Speed (RPM)**
This sets the spindle speed that corresponds to minimum PWM output (lowest useful duty cycle or minimum S-value). Speeds below this may not provide enough power to turn the spindle. When you command an S-value between `$31` and `$30`, GRBL maps it linearly to the PWM range. Values below `$31` are clamped to the minimum PWM. Typical values are 0 to 1000 RPM.

**`$32` - Laser Mode Enable (boolean)**
This enables special laser mode features. Set to 1 for lasers, 0 for spindles. In laser mode, the spindle output turns off during G0 rapid moves automatically to prevent unwanted burns. It also enables dynamic power scaling where laser power adjusts based on actual feed rate, so slowing down doesn't over-burn material. Only use this for laser cutters/engravers, not regular spindles.

**`$100` - X Axis Steps Per mm**
This defines how many stepper motor steps are needed to move the X axis 1 millimeter. Calculate this by multiplying motor steps per revolution, microstepping setting, and any gear reduction, then dividing by the distance traveled per revolution (lead screw pitch or belt pitch times pulley teeth). For example, 200 steps/rev * 8 microsteps * 1 gear ratio / 2mm pitch = 800 steps/mm. This calibrates X axis motion accuracy.

**`$101` - Y Axis Steps Per mm**
This defines steps per millimeter for the Y axis. Calculation is identical to `$100` but uses Y axis mechanical parameters. If your Y axis uses different mechanics than X (different belt pulleys, lead screw pitch, or gearing), this value will differ. Accurate calibration is critical for dimensional accuracy and square parts.

**`$102` - Z Axis Steps Per mm**
This defines steps per millimeter for the Z axis. Calculation is identical to `$100` but uses Z axis mechanical parameters. Z often uses different mechanics than X/Y, typically a finer-pitch lead screw for better resolution and holding power against gravity. Accurate Z calibration is essential for correct cutting depths and layer heights.

**`$110` - X Max Rate (mm/min)**
This sets the maximum allowed feed rate for the X axis in millimeters per minute. GRBL will not allow motion faster than this speed, even if commanded in G-code. Set this based on your mechanical limits, considering maximum safe speed before losing steps, mechanical resonance, and acceleration limits. Typical values range from 1000 to 10000 mm/min depending on the machine. Going too fast causes lost steps and position errors.

**`$111` - Y Max Rate (mm/min)**
This sets the maximum allowed feed rate for the Y axis. Same considerations as `$110`. If your Y axis has different mechanical capabilities than X (heavier gantry, different belt length, different motor), adjust this accordingly. Both axes should be set conservatively to ensure reliable operation without skipping steps.

**`$112` - Z Max Rate (mm/min)**
This sets the maximum allowed feed rate for the Z axis. Z typically has a much lower maximum rate than X/Y because it's fighting gravity and usually has higher gear reduction for better torque and resolution. Typical values are 200 to 1000 mm/min. Setting this too high can cause the Z axis to stall or lose steps, especially when plunging into material.

**`$120` - X Acceleration (mm/sec²)**
This sets how quickly the X axis can accelerate and decelerate in millimeters per second squared. Higher values make the machine more responsive and faster for short moves, but can cause mechanical stress, skipped steps, or excessive vibration. Lower values provide smoother motion. Typical values range from 50 to 500 mm/sec². Find the highest value that doesn't cause problems for optimal performance.

**`$121` - Y Acceleration (mm/sec²)**
This sets the Y axis acceleration. Same considerations as `$120`. The Y axis may support different acceleration than X due to different moving mass or mechanical stiffness. Heavy gantries require lower acceleration settings. Test to find the maximum reliable value for your machine.

**`$122` - Z Acceleration (mm/sec²)**
This sets the Z axis acceleration. Z typically uses much lower acceleration than X/Y because of higher moving mass (spindle, mount) and fighting gravity. Typical values are 20 to 200 mm/sec². Too high causes vibration and poor surface finish. Too low makes Z moves unnecessarily slow. Balance speed and smoothness for your application.

**`$130` - X Max Travel (mm)**
This defines the maximum travel distance for the X axis in millimeters. After homing, this sets the machine coordinate at the homed end. With soft limits enabled, GRBL prevents motion beyond this range. Measure your actual usable travel and set this value accordingly. Also used to set the machine coordinate system origin after homing.

**`$131` - Y Max Travel (mm)**
This defines the maximum travel distance for the Y axis. Same purpose and considerations as `$130`. Measure carefully to set the correct working envelope. This should reflect actual usable space, accounting for any mechanical limits or obstacles.

**`$132` - Z Max Travel (mm)**
This defines the maximum travel distance for the Z axis. Typically smaller than X and Y. Measure from fully retracted (top) to lowest safe position. Account for tool length and work holding to avoid crashes. This sets your maximum cutting depth capability and safe working range.

**Startup Blocks**

**`$N0=line` and `$N1=line` - Save Startup Blocks**
These store G-code commands that execute automatically whenever GRBL starts up or resets. You can save one line of G-code in each block (N0 and N1). Common uses include setting preferred units (G20/G21), selecting a default coordinate system (G54), or initializing machine state. For example, `$N0=G21 G54` would set millimeter mode and work coordinate system 1. These help ensure consistent machine state after power-up. To clear a block, send the command with no value, like `$N0=`.

**`?` returns the current state including the position?


## Drawing

### GCODE cheat sheet

* `G21`  Set Units to  millimeter (`G20`  Set Units to Inches)
* `G17` Set Plane Selection to XY, Circular motion with the operator looking down on the XY table from above. [ref](https://www.haascnc.com/service/codes-settings.type=gcode.machine=mill.value=G19.html)
* `F50` super slow, `F2500` maximum, super fast, speed applies only for `G01` (not for `G00`)
* `G90` Set to absolute coordinate mode
* `G91` Set to relative coordinate mode (from where it is now)
* `G92 X0Y0Z0` save the current location of the head as (0,0,0)
* `G02/G03` instructs the CNC machine to move along a Circular Arc from its current position to a new coordinate. The new coordinate can be absolute or relative, depending on the effective mode (G90 or G91). In G02, the movement will be in a clockwise (CW) direction. in G03 the movement will ve in counter-clockwise (CCW). ([source](https://www.machiningdoctor.com/gcodes/g2-3-circular/))
  * Version 1 – “R” Syntax: `G02/G03 X12.5 Y14.7 R2.0`; X, Y – The target coordinates at the end of the movement. R – The arc’s radius.
  * Version 2 – “Ijk” Syntax: `G02/G03 X12.5 Y14.7 I1.0 J2.0`; X, Y – The target coordinates at the end of the movement. I, J – The arc’s center point relative to X, Y.
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
The sketch in [plottable001.html](https://github.com/bbaudry/swart-studio/blob/main/penplotting/plottable001.html) illustrates the usafe of [p5.js-svg](https://github.com/zenozeng/p5.js-svg), and you can find more documentation at [https://github.com/zenozeng/p5.js-svg](https://github.com/zenozeng/p5.js-svg). 

Once you are happy with your sketch, save it as an svg, for example [```pointille.svg```](https://github.com/bbaudry/swart-studio/blob/main/penplotting/pointille.svg).

* Prepare the svg for plotting, with vpype
  * if the svg has several colors, separate each color layer into separate svg (needed to change pen when plotting)
  ```
  vpype read --attr stroke input.svg forlayer write "output%_lid%.svg" end
  ```
  This vpype command reads the input.svg, keeps the different color layers (```read --attr stroke ```) and names the output with the layer id (```%_lid%```)
  * explore the svg structure
  ```
  vpype read --attr stroke input.svg show
  ```

* Transform the svg to gcode with [Juicy-GCode](https://github.com/domoszlai/juicy-gcode). Check out the flavor.txt configuration file to fine-tune the generation of the gcode. Put the generated gcode in a file, for example [```pointille.gcode```](https://github.com/bbaudry/swart-studio/blob/main/penplotting/pointille.gcode)
* Use [gcode-cli](https://github.com/hzeller/gcode-cli) to draw the sketch on the pen plotter, for example ```g-code-cli pointille.gcode```

### With turtle LOGO 

turtle LOGO as high level API to generate gcode (not yet tried):
* <https://github.com/313ctric/turtle_gcode>
* <https://github.com/Hand-and-Machine/extruder-turtle-Rhino>


### With laser

* `M2` Program End, turn off laser and stops the machine.
* `M3` In Laser mode sets Constant power, eg `M3 S1000`
* `M4` In Laser Mode sets Dynamic power.
* `M5` Stop the laser
* `S` Set Laser Power, maybe `S10`

Ref: <https://www.sainsmart.com/blogs/news/grbl-v1-1-quick-reference>
 
##  Tools 

### SVG to Gcode

**vpype** (python) works out-of-the-box to do two things:
- post-process and optimize SVG files, see doc
- generate Gcode with vpype-gcode `vpype --config vpype-flavor.toml read input.svg gwrite --profile idrawv2 output.gcode` [doc](https://pypi.org/project/vpype-gcode/). note that it does not support G02/G03 curve commands

**juicy-gcode** (haskell ) works to transform SVG to gcode
 `./juicy-gcode ~/input.svg -f flavor.txt`
One can change the size of the artwork by setting the density with `-d 32` (default is 96). Warning: a lower value means a bigger artwork , potentially outside the frame. With 1000 it's already very small. It synthesizes G02/G03 curve commands.
 
**[svg2gcode](https://github.com/sameer/svg2gcode/)** (rust) is a third option.

### P5->SVG->GCDODE from the browser


* [p5.js-svg](https://github.com/zenozeng/p5.js-svg) with [p5.js v1.5](https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.5.0/p5.js), as documented above
* SVG to gcode, option #1
  * use [juicy-gcode](https://github.com/domoszlai/juicy-gcode)
  * ```juicy-gcode -f ../penplotting/flavor.txt ../penplotting/testplotsize.svg > testplotsize.gcode```
  * our uunatek pen plotter plots with a resolution of 96 dpi, so: 
    * a canvas of ```h = 1122; w = 793``` will print perfectly on a A4 sheet, directly out of juicy-gcode, with no need to rescale
    * a canvas of ```h = 1587; w = 1122```  will print perfectly on a A3 sheet, directly out of juicy-gcode, with no need to rescale
* SVG to gcode, option # 2
  * use [svg2gcode](https://docs.rs/svg2gcode/latest/svg2gcode/)
  * We have compiled the [svg2gcode](https://docs.rs/svg2gcode/latest/svg2gcode/) crate to webassembly. See Mozilla's guidelines to [compile rust to webassembly](https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm). 
  * The results are in [```https://github.com/bbaudry/swart-studio/blob/main/penplotting/web_svg2gcode_bg.wasm```](web_svg2gcode_bg.wasm) and [```web_svg2gcode.js```](https://github.com/bbaudry/swart-studio/blob/main/penplotting/web_svg2gcode.js) files
  * In the html page, feed the svg generated by p5 into the svg2gcode in wasm. We have a first integration in [plottable001.html](https://github.com/bbaudry/swart-studio/blob/main/penplotting/plottable001.html) 

### Modify SVG

vpype is good to modify SVG

```
# optimize gcode
vpype   read input.svg   linemerge --tolerance 0.1mm   linesort   reloop   linesimplify   write output.svg

# rotate landscape / portrait
vpype   read input.svg  pagerotate  write output.svg
```


### Fonts and letters

One has to use line fonts, starting with EMS and Hershey fonts.
* [oskay/svg-fonts](https://gitlab.com/oskay/svg-fonts) contains the SVG code for EMS and Hershey fonts
* [Andy1978/hf2gcode](https://github.com/Andy1978/hf2gcode) is an end-to-end tool from text to gcode


##   Misc

* Version 1.0 of idraw was compatible with EBB commands, not version 2
* iDraw is not compatible with axidraw software, see [axidraw user manual](https://wiki.evilmadscientist.com/AxiDraw_User_Guide), [inkscape and axidraw]( https://wiki.evilmadscientist.com/Axidraw_Software_Installation).
* One may do string art: <https://www.youtube.com/watch?v=ymWi15rvTvM>


## Links

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
  * [svenhb/GRBL-Plotter](https://github.com/svenhb/GRBL-Plotter) A GCode sender for GRBL for windows using DotNET 4.0
  * [Gcmc](https://www.vagrearg.org/content/gcmc) is a front-end domain-specific language for generating G-code
  * [gcodeparser](https://pypi.org/project/gcodeparser/) a simple gcode parser in python
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
  * [pypotrace](https://github.com/tatarize/potrace) transforms bitmaps into vector graphics, port of [potrace](https://potrace.sourceforge.net/)
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
