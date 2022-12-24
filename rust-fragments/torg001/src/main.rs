use std::array;

use nannou::color::Alpha;
use nannou::draw::mesh::vertex::Color;
use nannou::geom::Range;
use nannou::geom::Rect;
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

struct Cell {
    beam:Rect,
    speed: i32,
    c:Hsl
}

struct Model {
    occam: Vec<Cell>
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

fn playground(app: &App) -> Vec<Cell> {
    let h = app.window_rect().h();
    let w = app.window_rect().w();
    let mut play = Vec::new();
    let mut b= Rect{
        x:Range{start:w/2.0-100.0,end:w/2.0},
        y:Range{start:h/2.0,end:h/2.0-50.0}
    };
    let mut col: Hsl = Hsl::new(0.0,1.0,1.0);
    play.push(Cell{beam:b,speed:15,c:col});
    
    b= Rect{
        x:Range{start:w/2.0-200.0,end:w/2.0-120.0},
        y:Range{start:h/2.0-55.0,end:h/2.0-80.0}
    };
    col = Hsl::new(0.0,1.0,1.0);
    play.push(
        Cell{
        beam:Rect{
            x:Range{start:w/2.0-200.0,end:w/2.0-120.0},
            y:Range{start:h/2.0-55.0,end:h/2.0-80.0}
        },
        speed:12,
        c:Hsl::new(50.0,1.0,1.0)
        }
    );
    return play;
}

fn update(app: &App, model: &mut Model, _update: Update) {
    for baldessari in &mut model.occam{
        baldessari.beam.x.start-=baldessari.speed as f32;
        baldessari.beam.x.end-=baldessari.speed as f32;
        //baldessari.beam.y.start-=baldessari.speed as f32;
        //baldessari.beam.y.end-=baldessari.speed as f32;
    }
}

fn view(app: &App, model: &Model, frame: Frame){
    let draw = app.draw();
    draw.background().color(BLACK);
    let h = app.window_rect().h();
    let w = app.window_rect().w();
    for baldessari in &model.occam{
        let r=baldessari.beam;
        draw.rect()
        .x_y(r.x(), r.y())
        .w_h(r.w(), r.h())
        .color(hsl(0.0,0.5,1.0));
    }



    draw.to_frame(app,&frame).unwrap();
}