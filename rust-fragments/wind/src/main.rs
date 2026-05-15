use std::array;
use std::ptr::null;

use nannou::color::Alpha;
use nannou::draw::background::new;
use nannou::draw::mesh::vertex::Color;
use nannou::image::Frames;
use nannou::lyon::geom::arrayvec::Array;
use nannou::prelude::*;
use nannou::rand::random_range;
use std::io;

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
    files:Vec<Particle>,
    connect:Connect
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

struct Connect{
    p1:Point2,
    p2:Point2,
    p3:Point2
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
    let w: u32 = app.main_window().inner_size_pixels().0;
    let h: u32 = app.main_window().inner_size_pixels().1;
//    let h: f32 = app.window_rect().h();
    let grid=initgrid(res,w,h);
    let files=initFile(7, w);
    let connect = Connect{
        p1:pt2(0.0,0.0),
        p2:pt2(40.0,0.0),
         p3:pt2(40.0,0.0)
    };
    Model {
        hashes:ha,
        grid:grid,
        files:files,
        connect:connect
    }   
}

fn initgrid(res:i32,w:u32,h:u32) -> Vec<Cell>{
    let step=(h as i32/res) as f32;
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

fn initFile(nbfiles: i32, w:u32) -> Vec<Particle>{
    // blast determines the range inside which we place the particles, the larger nbfiles, the larger the blast
    let blast = map_range(nbfiles, 1, 300, 10, (w as f32 * 0.1).floor() as i32) as f32;
    let mut res:Vec<Particle>=Vec::new();
    for i in 0..nbfiles{
        let angle:f32 = random_range(0.0,2.0*PI);
        let rayon= random_range(-blast,blast);
        let x=rayon*angle.cos();
        let y=rayon*angle.sin();
        let p=Particle{
            cx:x,
            cy:y,
            rad:3.0
        };
        res.push(p);
    }
    return res;
}


fn update(app: &App, model: &mut Model, _update: Update) {
    let index = random_range(0.0,model.hashes.len() as f64).floor() as i64;
    let hash = model.hashes.get(0);
    for mut cell in model.grid.iter_mut() {
        cell.l=random_range(0.0,1.0)
    }   
    let w =app.main_window().inner_size_pixels().0;
    let h =app.main_window().inner_size_pixels().1;
    model.files=initFile(random_range(1,300), w);
    let (x1,y1,x2,y2,x3,y3):(f32,f32,f32,f32,f32,f32);
    x1=model.files.get(0).unwrap().cx;
    y1=model.files.get(0).unwrap().cy;
    if x1>0.0 {
        x2=(w as f32)*0.25;
        x3=w as f32;
    }
    else{
        x2=-(w as f32)*0.25;
        x3=-1.0*(w as f32);
    }
    if y1>0.0 {
        y2=(h as f32) * random_range(0.0,0.5);
    }
    else{
        y2=(h as f32) * random_range(-0.5,0.0);
    }
    model.connect = Connect { 
        p1: pt2(x1,y1), 
        p2: pt2(x2, y2), 
        p3: pt2(x3, y2) 
    }

}

fn view(app: &App, model: &Model, frame: Frame) {
    let draw = app.draw();
    draw.background().color(hsla(330.0 / 360.0, 1.0, 0.0,0.1));
    let s = model.hashes.get(0).unwrap().to_string();
    let char_vec: Vec<char> = s.chars().collect();   
    let w: u32 = app.main_window().inner_size_pixels().0;
    let h: u32 = app.main_window().inner_size_pixels().1;
    draw.line()
//        .start(app.window_rect().bottom_left())
        .start(model.connect.p1)
        .end(model.connect.p2)
        .weight(1.0)
        .color(RED);
    draw.line()
//        .start(app.window_rect().bottom_left())
        .start(model.connect.p2)
        .end(model.connect.p3)
        .weight(1.0)
        .color(RED);
    //drawcells(model,draw.clone());
    //markcenter(model,draw.clone());
    drawfiles(model,draw.clone());
    draw.to_frame(app, &frame).unwrap();
}

fn drawfiles(model: &Model, draw:Draw){
    for f in model.files.iter(){
        draw.ellipse()
            .color(hsl(0.0, 0.0, 0.5))
            .x_y(f.cx,f.cy)
            .w_h(f.rad,f.rad);
        println!("one file at x {}, y {}", f.cx, f.cy);
    } 
}

/* helper method to mark the center of the window
 */
fn markcenter(model: &Model, draw:Draw){
    draw.rect()
        .color(hsl(330.0 / 360.0, 1.0, 0.5))
        .x_y(0.0,0.0)
        .w_h(110.0, 110.0);
    draw.ellipse()
        .color(hsl(230.0 / 360.0, 1.0, 0.5))
        .x_y(-0.0,-0.0)
        .w_h(10.0, 10.0);

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