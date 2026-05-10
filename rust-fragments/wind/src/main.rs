use std::array;
use std::ptr::null;

use nannou::color::Alpha;
use nannou::draw::background::new;
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
    grid:Vec<Cell>,
    files:Vec<Particle>
}

struct Cell{
    x:f32,
    y:f32,
    w:f32,
    h:f32,
    hu:f32,
    s:f32,
    l:f32
}

struct Particle{
    cx:f32,
    cy:f32,
    rad:f32
}

fn model(app: &App) -> Model {
    // Create a window that can receive user input like mouse and keyboard events.
    app.new_window()
        .event(event)
        // .size(1000,1000)
        .fullscreen()
        .build()
        .unwrap();
    let mut ha:Vec<String>=Vec::new();
    ha.push(String::from("48d5ee7bfb46ee177d865ace846b1cb6695b3cd7"));
    let res=8;
    let w: f32 = app.window_rect().w();
    let h: f32 = app.window_rect().h();
    let grid=initgrid(res,w,h);
    let files=initFile(7, w);
    Model {
        hashes:ha,
        grid:grid,
        files:files
    }   
}

fn initgrid(res:i32,w:f32,h:f32) -> Vec<Cell>{
    let step=h*2 as f32/res as f32;
    let initx=-step*res as f32*0.5+step*0.5;
    let inity=-step*res as f32*0.5+step*0.5;
    let mut g:Vec<Cell>=Vec::new();
    println!("{}", step);
    for x in 0..res{
        for y in 0..res{
            let c: Cell;
            c = Cell {
                x:initx + x as f32 *step,
                y:inity + y as f32 *step,
                w:step,
                h:step,
                hu:0.0,
                s:0.0,
                l:random_range(0.0,1.0)
            };
            g.push(c);
        }
    }

    return g;
}

fn initFile(nbfiles: i32, w:f32) -> Vec<Particle>{
    let blast = map_range(nbfiles, 1, 300, 1, (w * 0.2).floor() as i32) as f32;
    let mut res:Vec<Particle>=Vec::new();
    for i in 0..nbfiles{
        let x=random_range(-blast,blast);
        let y=random_range(-blast,blast);
        let p=Particle{
            cx:x,
            cy:y,
            rad:7.0
        };
        res.push(p);
    }
    return res;
}

fn event(_app: &App, _model: &mut Model, event: WindowEvent) {
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

fn update(app: &App, model: &mut Model, _update: Update) {
    let index = random_range(0.0,model.hashes.len() as f64).floor() as i64;
    let hash = model.hashes.get(0);
    for mut cell in model.grid.iter_mut() {
        cell.l=random_range(0.0,1.0)
    }   
    let w: f32 = app.window_rect().w();
    let files=initFile(random_range(1,300), w);
    model.files=files;

}

fn view(app: &App, model: &Model, frame: Frame) {
    let draw = app.draw();
    draw.background().color(BLACK);
    // let h = app.window_rect().h();
    // let w = app.window_rect().w();
    let s = model.hashes.get(0).unwrap().to_string();
    let char_vec: Vec<char> = s.chars().collect();   
    for c in char_vec {
        // println!("{}", c);
    }
    //drawcells(model,draw.clone());
    draw.rect()
        .color(hsl(330.0 / 360.0, 1.0, 0.5))
        .x_y(0.0,0.0)
        .w_h(110.0, 110.0);
    draw.ellipse()
        .color(hsl(230.0 / 360.0, 1.0, 0.5))
        .x_y(-0.0,-0.0)
        .w_h(10.0, 10.0);
    drawfiles(model,draw.clone());
    draw.to_frame(app, &frame).unwrap();
}

fn drawfiles(model: &Model, draw:Draw){
    for f in model.files.iter(){
        draw.ellipse()
            .color(hsl(0.0, 1.0, 0.5))
            .x_y(f.cx,f.cy)
            .w_h(f.rad,f.rad);
        println!("one file at x {}, y {}", f.cx, f.cy);
    } 
}

fn drawcells(model: &Model, draw:Draw){
    for cell in model.grid.iter() {
        draw.rect()
        .color(hsl(cell.hu / 360.0, cell.s, cell.l))
        .x_y(cell.x as f32,cell.y as f32)
        .w_h(cell.w,cell.h);
        draw.ellipse()
            .color(hsl(230.0 / 360.0, 1.0, 0.5))
            .x_y(cell.x,cell.y)
            .w_h(10.0, 10.0);
    }   

}