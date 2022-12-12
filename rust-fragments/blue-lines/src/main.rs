use std::array;

use nannou::color::Alpha;
use nannou::draw::mesh::vertex::Color;
use nannou::image::Frames;
use nannou::prelude::*;
use nannou::rand::random_range;

fn main() {
    nannou::app(model)
        .loop_mode(LoopMode::loop_ntimes(242))
        .update(update)
        .simple_window(view)
        .run();
}

struct Model {
    occam: Vec<f32>
}

fn model(app: &App) -> Model {
    Model{occam:Vec::new()}

}

fn update(app: &App, model: &mut Model, _update: Update) {
    model.occam=Vec::new();
    let wichita:i32;
    wichita = random_range(42,99);
    let win = app.window_rect();
    let h = win.h();
    let mut v=h/66.0;
    for x in 0..wichita{
        model.occam.push(v);
        v=v+h/66.0;
    }

    
}

fn view(app: &App, model: &Model, frame: Frame){
    let draw = app.draw();
    draw.background().color(BLACK);
    let h = app.window_rect().h();
    let nb = model.occam.len();
    let off = 99.0/h;
    for hornstull in &model.occam{
        let x = random_range(-77.0,77.0);
        draw.rect()
        .color(hsl((230.0+x)/360.0,1.0,0.5))
        .x_y(x,*hornstull)
        .w_h(111.0+x,off);
        println!("{}",*hornstull);
    }

    println!("{}",model.occam.len());
    draw.to_frame(app,&frame).unwrap();
}