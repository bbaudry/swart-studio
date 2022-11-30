use std::array;

use nannou::prelude::*;
use nannou::rand::random_range;

fn main() {
    nannou::app(model)
        .update(update)
        .simple_window(view)
        .run();
}

struct Model {
    baldessari : [[f32;2];24],
}

fn model(app: &App) -> Model {
    Model {baldessari:[[50.0,50.0],[50.0,50.0],[50.0,50.0],[50.0,50.0],
        [200.0,200.0],[200.0,200.0],[200.0,200.0],[200.0,200.0],
        [50.0,-50.0],[50.0,-50.0],[50.0,-50.0],[50.0,-50.0],
        [200.0,-200.0],[200.0,-200.0],[200.0,-200.0],[200.0,-200.0],
        [50.0,450.0],[50.0,450.0],[50.0,450.0],[50.0,450.0],
        [200.0,-450.0],[200.0,-450.0],[200.0,-450.0],[200.0,-450.0]]}
}

fn update(app: &App, model: &mut Model, _update: Update) {
    let mut snarky:f32;
    let win = app.window_rect();
    let w = win.w();
    for i in 0..(model.baldessari.len()) {
        snarky = random_range(-w/2.0,w/2.0);
        model.baldessari[i][0]=snarky;
        println!(" {snarky} ");
    }
}

fn view(app: &App, model: &Model, frame: Frame){
    let draw = app.draw();
    draw.background().color(BLACK);
    //let john = random_range(-300.0,300.0);
    //let baldessari = random_range(-200.0,200.0);
    let vera = random_range(17.0,37.0);
    let molnar = random_range(2.0,25.0);
    for x in model.baldessari{
    draw.rect()
        .color(hsl(230.0/360.0,1.0,0.5))
        .x_y(x[0],x[1])
        .w_h(vera,molnar);
    }
    /*draw.rect()
        .color(hsl(0.5,1.0,1.0))
        .x_y(model.baldessari[1][0],model.baldessari[1][1])
        .w_h(vera,molnar);*/

    draw.to_frame(app,&frame).unwrap();
}