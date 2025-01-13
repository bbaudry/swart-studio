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
    nbcols:i64,
    nbrows:i64,
    grow:bool
}

fn model(app: &App) -> Model {
    app.new_window()
    .size(1500,1000)
    .build()
    .unwrap();
    Model{
        nbcols:2,
        nbrows:1,
        grow:true
    }
}

fn update(_app: &App, model: &mut Model, _update: Update) {
    if model.grow && model.nbrows < 84 {
        model.nbrows+=1;
    }
    else {
        model.grow = false;
        if !model.grow && model.nbrows>0{
            model.nbrows -= 1;
        }
        else {
            model.grow = true;
        }
    }
}

fn view(app: &App, model: &Model, frame: Frame){
    let draw = app.draw();
    draw.background().color(BLACK);
    let h = app.window_rect().h();
    let w = app.window_rect().w();
    let blockw = w/(model.nbcols as f32);
    let blockh = h/(model.nbrows as f32);

    for i in 0..model.nbcols{
        for j in 0..model.nbrows{
            if random_range(0.0,1.0)<0.5 {
            draw.rect()
            .color(hsl(0.0,1.0,1.0))
            .x_y(-blockw*0.5+(i as f32)*blockw,h*0.5-blockh*0.5-(j as f32)*blockh)
            .w_h(blockw,blockh);
        }
    }
    }
    draw.to_frame(app,&frame).unwrap();


}
