let COLS;
let ROWS;
let SQUARE_SIZE;

let canvas;
let grid;

let direction = 0;
let c_pos;
const movement = {
    0: [1, 0],
    1: [0, 1],
    2: [-1, 0],
    3: [0, -1]
}

function initConst() {
    COLS = parseInt(Utils.getElem("cols_in").value);
    ROWS = parseInt(Utils.getElem("rows_in").value);
    SQUARE_SIZE = parseInt(Utils.getElem("sq_width").value);
}

function setup() {
    initConst();
    canvas = createCanvas(COLS * SQUARE_SIZE, ROWS * SQUARE_SIZE);
    canvas.parent("sketch_view");

    c_pos = createVector(~~(COLS / 2), ~~(ROWS / 2));
    grid = new Grid(COLS, ROWS);
}

function moveAnt(x, y) {
    if (!Utils.isValidMove(x, y)) {
        return;
    }
    let curr_state = grid.getState(x, y)
    grid.setState(x, y, curr_state ^ 1);
    let newPos = movement[direction];
    c_pos.x += ((-1) ** (curr_state + 1)) * newPos[0];
    c_pos.y += ((-1) ** (curr_state + 1)) * newPos[1];
    direction = (direction + 1) % 4;
}

function draw() {
    initConst();
    moveAnt(c_pos.x, c_pos.y);

    for (let x = 0; x < grid.rows; x++) {
        for (let y = 0; y < grid.cols; y++) {
            stroke(200);
            fill(255 * grid.getState(x, y));
            rect(x * SQUARE_SIZE, y * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
        }
    }
}