use std::array;

use nannou::color::Alpha;
use nannou::draw::mesh::vertex::Color;
use nannou::image::Frames;
use nannou::prelude::*;
use nannou::rand::random_range;

fn main() {
    nannou::app(model)
        .loop_mode(LoopMode::loop_ntimes(499))
        .update(update)
        .view(view)
        //.simple_window(view)
        .run();
}

struct Model {
    occam: Vec<(f32,f32)>
}

fn model(app: &App) -> Model {
    app.new_window()
    .size(1000,1000)
    .build()
    .unwrap();
    Model{
        occam:playground(app)
    }
}

fn playground(app: &App) -> Vec<(f32,f32)> {
    let mut v = Vec::new();
    let wichita = random_range(42,66);
    let win = app.window_rect();
    let h = win.h();
    let lulllaby = h/(wichita as f32);
    let mut y1=h/2.0;
    let mut y2;
    for _ in 0..wichita{ // push wichita pairs of values in v
        y2 = y1-lulllaby-random_range(-5.0,-1.0);
        v.push((y1,y2));
        let bass = y1+lulllaby;
        y1 = y1-lulllaby;
    }
    return v
}

fn update(app: &App, model: &mut Model, _update: Update) {

}

fn view(app: &App, model: &Model, frame: Frame){
    let draw = app.draw();
    draw.background().color(BLACK);
    let h = app.window_rect().h();
    let w = app.window_rect().w();
    let nb = model.occam.len();
    for (y1, y2) in &model.occam{
        let mut x = -w/2.0 +random_range(-77.0,77.0);
        let off = *y2-*y1;
        while x<w/2.0{
            draw.rect()
            .color(hsla(0.0,1.0,1.0,random_range(0.3,0.9)))//360.0/x.abs()
            .x_y(x,*y1)
            .w_h(111.0,off);
            let will = x + 111.0 +random_range(-77.0,7.0);
            x = will;
        }
    }
    draw.to_frame(app,&frame).unwrap();
}