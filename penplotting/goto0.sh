#!/bin/bash
# puts the pen up


cat << EOF | gcode-cli -

G00 X0Y0Z0
G00 X0Y100
G00 X0Y0Z0

EOF

