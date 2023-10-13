import random

# Constants
MIN_X = 0
MAX_X = 100
MIN_Y = 0
MAX_Y = 100
NUM_LINES = 50

PENDOWN = 'G0Z7'

def generate_gcode_line(x_start, y_start, x_end, y_end):
    """Generates a pair of G-code commands for moving from the start point to the end point."""
    # Pen up
    gcode = ['G0Z0']
    # Move to start point
    gcode.append(f'G0X{x_start} Y{y_start}')
    # Pen down
    gcode.append(PENDOWN)
    # Move to end point
    gcode.append(f'G0X{x_end} Y{y_end}')
    return gcode

def generate_random_coordinates():
    """Generates a pair of random coordinates within the defined boundaries."""
    x = random.uniform(MIN_X, MAX_X)
    y = random.uniform(MIN_Y, MAX_Y)
    return x, y

def main():
    init =  [
      'G21 ; Set Units to Millimeters',
  'G17 ; Set Plane Selection to XY',
  'G90 ; Set Absolute Positioning',
  'F2500  ; Set Speed to 2500 mm/min',
  'G00 Z0 ; pen up',
  'G00 X0 Y0 ; Rapid Move to Z-coordinate 0',
   ]
    for code in init:
            print(code)
            
    for _ in range(NUM_LINES):
        # Generate random start and end points
        x_start, y_start = generate_random_coordinates()
        x_end, y_end = generate_random_coordinates()

        # Generate G-code
        gcode = generate_gcode_line(x_start, y_start, x_end, y_end)
        # print out G code line by line
        for code in gcode:
            print(code)

if __name__ == "__main__":
    main()
