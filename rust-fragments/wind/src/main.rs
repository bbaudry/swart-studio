// Rust version of https://formandcode.com/code-examples/repeat-embedded
use std::array;
use std::ptr::null;

use nannou::color::Alpha;
use nannou::draw::mesh::vertex::Color;
use nannou::image::Frames;
use nannou::lyon::geom::arrayvec::Array;
use nannou::prelude::*;
use nannou::rand::random_range;

fn main() {
    nannou::app(model)
        // .loop_mode(LoopMode::loop_ntimes(499))
        .update(update)
        .view(view)
        //.simple_window(view)
        .run();
}

struct Model {
    // .size(1000,1000)
    hashes: Vec<String>,
    resolution:i32,
    grid:Vec<Cell>
}

struct Cell{
    x:f64,
    y:f64,
    h:f32,
    s:f32,
    l:f32
}

fn model(app: &App) -> Model {
    // Create a window that can receive user input like mouse and keyboard events.
    app.new_window()
        .event(event)
        // .size(1000,1000)
        .fullscreen()
        .build()
        .unwrap();
    let mut h=Vec::new();
    h.push(String::from("48d5ee7bfb46ee177d865ace846b1cb6695b3cd7"));
    let res=8;
    let w: f64 = app.window_rect().w() as f64;
    let grid=initgrid(8,w);
    Model {
        hashes:h,
        resolution:res,
        grid:grid
    }
}

fn initgrid(res:i32,w:f64) -> Vec<Cell>{
    let step=w/res as f64;
    let mut g:Vec<Cell>=Vec::new();
    println!("{}", step);
    for x in 0..res{
        for y in 0..res{
            let c: Cell;
            c = Cell {
                x:x as f64 *step,
                y:(y+x*y) as f64 *step,
                h:0.0,
                s:1.0,
                l:0.5
            };
            g.push(c);
        }
    }

    return g;
}

fn event(_app: &App, model: &mut Model, event: WindowEvent) {
    // Print events as they occur to the console
    println!("{:?}", event);

    // We can `match` on the event to do something different depending on the kind of event.
    match event {
        // Keyboard events
        KeyPressed(_key) => {}
        KeyReleased(_key) => {}
        ReceivedCharacter(_char) => {}

        // Mouse events
        MouseMoved(_pos) => {}
        MouseReleased(_button) => {}
        MouseWheel(_amount, _phase) => {}
        MouseEntered => {}
        MouseExited => {}

        // Touch events
        Touch(_touch) => {}
        TouchPressure(_pressure) => {}

        // Window events
        Moved(_pos) => {}
        Resized(_size) => {}
        HoveredFile(_path) => {}
        DroppedFile(_path) => {}
        HoveredFileCancelled => {}
        Focused => {}
        Unfocused => {}
        Closed => {}

        MousePressed(_button) => {}
    }
}

fn update(app: &App, model: &mut Model, _update: Update) {}

fn view(app: &App, model: &Model, frame: Frame) {
    let draw = app.draw();
    draw.background().color(WHITE);
    // let h = app.window_rect().h();
    // let w = app.window_rect().w();
    draw.rect()
        .color(hsl(330.0 / 360.0, 1.0, 0.5))
        .x_y(0.0,0.0)
        .w_h(111.0, 111.0);
    let s = model.hashes.get(0).unwrap().to_string();
    let char_vec: Vec<char> = s.chars().collect();   
    for c in char_vec {
        // println!("{}", c);
    }
    for cell in model.grid.iter() {
        draw.rect()
        .color(hsl(cell.h / 360.0, cell.s, cell.l))
        .x_y(cell.x as f32,cell.y as f32)
        .w_h(100.0, 100.0);
    }   
    draw.to_frame(app, &frame).unwrap();
}
