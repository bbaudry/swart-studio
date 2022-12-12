use std::array;

use nannou::color::Alpha;
use nannou::draw::mesh::vertex::Color;
use nannou::image::Frames;
use nannou::prelude::*;
use nannou::rand::random_range;

fn main() {
    nannou::app(model)
        .loop_mode(LoopMode::loop_ntimes(424))
        .update(update)
        .simple_window(view)
        .run();
}

struct Model {
    occam: Vec<f32>,
    wasa:f32
}

fn model(app: &App) -> Model {
    Model{occam:Vec::new(),
    wasa:0.0}

}

fn update(app: &App, model: &mut Model, _update: Update) {
    model.occam=Vec::new();
    let wichita:i32;
    wichita = 42;//random_range(42,45);
    let win = app.window_rect();
    let h = win.h();
    let w = win.w();
    let star : f32 = wichita as f32;
    let mut v=-h/2.0+h/star;//h/66.0;
    for x in 0..wichita{
        model.occam.push(v);
        v=v+h/star;
    }
    if (model.wasa < w/2.0){
        model.wasa = model.wasa+random_range(42.42,99.9);
    }
    else{
        model.wasa = -w/2.0;
    }
}

fn view(app: &App, model: &Model, frame: Frame){
    let draw = app.draw();
    draw.background().color(BLACK);
    let h = app.window_rect().h();
    let w = app.window_rect().w();
    let nb = model.occam.len() as f32;
    let off = h/nb-random_range(-7.0,7.0);
    for hornstull in &model.occam{
        //let x = model.wasa+random_range(-77.0,77.0);
        let mut x = -w/2.0 +random_range(-77.0,77.0);
        let y = random_range(-22.0,2.0);
        while x<w/2.0{
            draw.rect()
            .color(hsl((230.0+(2.0*x))/360.0,1.0,1.0))
            .x_y(x,*hornstull)
            .w_h(111.0,off-33.0);
            let will = x + 111.0 +random_range(-77.0,7.0);
            x = will;
        }
    }

    println!("{}",model.occam.len());
    draw.to_frame(app,&frame).unwrap();
}