use std::array;

use nannou::color::Alpha;
use nannou::draw::mesh::vertex::Color;
use nannou::image::Frames;
use nannou::prelude::*;
use nannou::rand::random_range;

fn main() {
    nannou::app(model)
        .loop_mode(LoopMode::loop_ntimes(199))
        .update(update)
        .simple_window(view)
        .run();
}

struct Model {
    occam: Vec<f32>
}

fn model(app: &App) -> Model {
    Model{
        occam:playground(app)
    }
}

fn playground(app: &App) -> Vec<f32> {
    let mut v: Vec<f32>;
    v = Vec::new();
    let wichita:i32 = random_range(42,66);
    let mut i:i32=0;
    let win = app.window_rect();
    let h = win.h();
    let lulllaby:f32 = h/(wichita as f32);
    let mut y1:f32=h/2.0;
    let mut y2:f32;
    while i < wichita { // push wichita pairs of values in v
        y2 = y1+lulllaby-random_range(-5.0,-1.0);
        v.push(y1);
        v.push(y2);
        let bass = y1+lulllaby;
        y1 = bass;
        i+=1;
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
    let off = h/(nb+7.0);
    let mut rex:i32 = 0; //index to iterate on occam
    while rex < nb{
        let mut x = -w/2.0 +random_range(-77.0,77.0);
        let y1 = model.occam.get(rex);
        let y2 = model.occam.get(rex+1);
        while x<w/2.0{
            draw.rect()
            .color(hsla(0.0,1.0,1.0,random_range(0.3,0.9)))//360.0/x.abs()
            .x_y(x,y1)
            .w_h(111.0,y2-y1);
            let will = x + 111.0 +random_range(-77.0,7.0);
            x = will;
        }
        rex += 2;
    }
    draw.to_frame(app,&frame).unwrap();
}