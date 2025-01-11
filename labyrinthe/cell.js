// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Videos
// https://youtu.be/HyK_Q5rrcr4
// https://youtu.be/D8UgRyRnvXU
// https://youtu.be/8Ju_uxJ9v44
// https://youtu.be/_p5IH0L63wo

// Depth-first search
// Recursive backtracker
// https://en.wikipedia.org/wiki/Maze_generation_algorithm

function Cell(i, j) {
    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true];
    this.visited = false;
  
    this.checkNeighbors = function() {
      var neighbors = [];
  
      var top = grid[index(i, j - 1)];
      var right = grid[index(i + 1, j)];
      var bottom = grid[index(i, j + 1)];
      var left = grid[index(i - 1, j)];
  
      if (top && !top.visited) {
        neighbors.push(top);
      }
      if (right && !right.visited) {
        neighbors.push(right);
      }
      if (bottom && !bottom.visited) {
        neighbors.push(bottom);
      }
      if (left && !left.visited) {
        neighbors.push(left);
      }
  
      if (neighbors.length > 0) {
        var r = floor(random(0, neighbors.length));
        return neighbors[r];
      } else {
        return undefined;
      }
    }

    this.highlight = function() {
      var x = leftmargin + this.i * density;
      var y = topmargin + this.j * density;
      noStroke();
      fill(320, 100, 100, 100);
      rect(x, y, density, density);
    }

    this.jeton = function(){
      var x = leftmargin + this.i * density;
      var y = topmargin + this.j * density;
      noStroke();
      fill(50, 100, 100);
      ellipse(x+density*0.5, y+density*0.5, density-7, density-7);      
    }
  
    this.show = function() {
      var x = leftmargin + this.i * density;
      var y = topmargin + this.j * density;
      stroke(255);

      if (this.walls[0]) {
        line(x, y, x + density, y);
      }
      if (this.walls[1]) {
        line(x + density, y, x + density, y + density);
      }
      if (this.walls[2]) {
        line(x + density, y + density, x, y + density);
      }
      if (this.walls[3]) {
        line(x, y + density, x, y);
      }
  
      if (this.visited) {
        noStroke();
        fill(255, 0, 255, 100);
        rect(x, y, density, density);
      }
    }
  }