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
    let mut vera;
    let mut molnar;
    let mut rect = true;
    for x in model.baldessari{
        vera = random_range(17.0,77.0);
        molnar = random_range(200.0,300.0);
        if rect{
         draw.rect()
        .color(hsl(230.0/360.0,1.0,0.5))
        .x_y(x[0],x[1])
        .w_h(vera,molnar); rect=false}
        else{
    draw.ellipse()
        .color(hsl(molnar/360.0,1.0,0.5))
        .x_y(x[0],x[1])
        .radius(vera);rect=true}
    }
    /*draw.rect()
        .color(hsl(0.5,1.0,1.0))
        .x_y(model.baldessari[1][0],model.baldessari[1][1])
        .w_h(vera,molnar);*/

    draw.to_frame(app,&frame).unwrap();
}