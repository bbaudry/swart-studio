use std::array;

use nannou::color::Alpha;
use nannou::draw::mesh::vertex::Color;
use nannou::image::Frames;
use nannou::prelude::*;
use nannou::rand::random_range;

fn main() {
    nannou::app(model)
    //.loop_mode(LoopMode::loop_ntimes(499))
    .update(update)
    .view(view)
    //.simple_window(view)
    .run();
}

struct Model {
    nbcols:i64,
    nbrows:i64,
    grow:bool,
    speed:i64,
    current:i64,
    field:Vec<Box>
}

fn model(app: &App) -> Model {
    app.new_window()
    .size(1500,1000)
    .build()
    .unwrap();
    Model{
        nbcols:2,
        nbrows:1,
        grow:true,
        speed:44,
        current:0,
        field:Vec::new()
    }
}

struct Box {
    x:f32,
    y:f32,
    width:f32,
    height:f32,
    speed:i64,
    black:bool
}

fn update(app: &App, model: &mut Model, _update: Update) {
    if model.current % model.speed == 0 {
        if model.grow && model.nbrows < 84 {
            model.nbrows+=1;
        }
        else {
            if app.elapsed_frames() > 42{
                if model.nbcols<142 {
                    model.nbcols+=1;
                }
            }
            else {
                model.grow = false;
                if !model.grow && model.nbrows>1{
                    model.nbrows -= 1;
                }
                else {
            
                model.grow = true;
                }
            }        
        }
        model.field=newField(app,model);
    
        println!("{} boxes", model.field.len());
    }
    for i in 0..model.field.len() {
        let b = &mut model.field[i];
        if model.current % b.speed==0 {b.black=!b.black}
    }
model.current+=1;
}

fn newField(app: &App,model: &Model) -> Vec<Box>{
    let mut f = Vec::new();
    let mut black: bool;
    let h = app.window_rect().h();
    let w = app.window_rect().w();
    let left = -w*0.5;
    let top = h*0.5;
    let boxw = w/(model.nbcols as f32);
    let boxh = h/(model.nbrows as f32);
    for i in 0..model.nbcols {
        for j in 0..model.nbrows {
            if random_range(0.0,1.0)<0.5 {black=true}
            else {black=false}
            let b = Box{
                x:left + (i as f32)*boxw + boxw*0.5,
                y:top - (j as f32)*boxh - boxh*0.5,
                width:boxw,
                height:boxh,
                speed:11,
                black:black            
            };
            f.push(b)
        }
    }
    return f;
}
 
fn view(app: &App, model: &Model, frame: Frame){
    let draw = app.draw();
    draw.background().color(BLACK);
    let h = app.window_rect().h();
    let w = app.window_rect().w();
    let blockw = w/(model.nbcols as f32);
    let blockh = h/(model.nbrows as f32);
    for i in 0..model.field.len() {
        let b = &model.field[i];
        let c : Color;
        if b.black {c=hsl((20.0 / 360.0),1.0,0.0).into()}
        else {c=hsl((230.0 / 360.0),1.0,1.0).into()}
        draw.rect()
        .color(c)
        .x_y(b.x,b.y)
        .w_h(b.width,b.height);
}

    /*for i in 0..model.nbcols{
        for j in 0..model.nbrows{
            if random_range(0.0,1.0)<0.5 {
                draw.rect()
                .color(hsl(0.0,1.0,1.0))
                .x_y(-w*0.5+blockw*0.5+(i as f32)*blockw,h*0.5-blockh*0.5-(j as f32)*blockh)
                .w_h(blockw,blockh);
            }
        }
    }*/
    draw.to_frame(app,&frame).unwrap();


}
