"use strict";
exports.__esModule = true;
var fs = require("fs");
var file = fs.readFileSync('./input', 'utf-8');
function initGrid(x, y) {
    var array = [];
    for (var i = 0; i < x; i++) {
        array.push(Array(y).fill(0));
    }
    return array;
}
function sortIntervall(i, j) {
    if (i < j) {
        return [i, j];
    }
    return [j, i];
}
function updateGrid(p1, p2) {
    //console.log(p1, p2)
    if (p1[0] == p2[0]) { //x is same
        var inter = sortIntervall(p1[1], p2[1]);
        while (inter[0] <= inter[1]) {
            grid[p1[0]][inter[0]] += 1;
            //console.log(p1[0],inter[0])
            inter[0] += 1;
        }
    }
    else if (p1[1] == p2[1]) {
        var inter = sortIntervall(p1[0], p2[0]);
        while (inter[0] <= inter[1]) {
            grid[inter[0]][p1[1]] += 1;
            //console.log(inter[0],p1[1]);
            inter[0] += 1;
        }
    }
    else {
        var start_x = p1[0];
        var end_x = p2[0];
        var start_y = p1[1];
        var end_y = p2[1];
        var x_factor = void 0;
        var y_factor = 1;
        if (start_x < end_x) {
            x_factor = 1;
        }
        else {
            x_factor = -1;
        }
        if (start_y > end_y) {
            y_factor *= -1;
        }
        while (start_x != end_x) {
            //console.log(start_x, start_y);
            grid[start_x][start_y]++;
            start_y += y_factor;
            start_x += x_factor;
        }
        grid[start_x][start_y]++;
    }
}
var grid = initGrid(1000, 1000);
var lines = file.split(/\r?\n/);
//console.log(lines)
for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
    var line = lines_1[_i];
    console.log(line);
    updateGrid(line.split(/ -> /)[0].split(",").map(Number), line.split(/ -> /)[1].split(",").map(Number));
}
var dAreas = 0;
for (var i = 0; i < 1000; i++) {
    for (var j = 0; j < 1000; j++) {
        if (grid[i][j] >= 2) {
            dAreas++;
        }
    }
}
//console.log(grid)
console.log(dAreas);
//x1,y1 -> x2,y2
