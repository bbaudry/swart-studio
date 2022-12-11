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
    for x in 0..wichita{
        model.occam.push(h/99.0);
    }

    
}

fn view(app: &App, model: &Model, frame: Frame){
    let draw = app.draw();
    draw.background().color(BLACK);

    println!("Length of occam : {}", model.occam.len());


    draw.to_frame(app,&frame).unwrap();
}