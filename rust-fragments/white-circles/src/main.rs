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
    baldessari : [[f32;2];16],
}

fn model(app: &App) -> Model {
    Model {baldessari:[[50.0,50.0],[50.0,50.0],[50.0,50.0],[50.0,50.0],[200.0,200.0],[200.0,200.0],[200.0,200.0],[200.0,200.0],[50.0,-50.0],[50.0,-50.0],[50.0,-50.0],[50.0,-50.0],[200.0,-200.0],[200.0,-200.0],[200.0,-200.0],[200.0,-200.0]]}
}

fn update(_app: &App, model: &mut Model, _update: Update) {
    let mut snarky:f32;
    //let mut puppy;
    for i in 0..(model.baldessari.len()) {
        snarky = random_range(-300.0,300.0);
        //puppy = random_range(-200.0,200.0);
        //hei=i*100.0;
        model.baldessari[i][0]=snarky;
        println!(" {snarky} ");
    }
}

fn view(app: &App, model: &Model, frame: Frame){
    let draw = app.draw();
    draw.background().color(BLACK);
    //let john = random_range(-300.0,300.0);
    //let baldessari = random_range(-200.0,200.0);
    let vera = random_range(11.0,17.0);
    let molnar = random_range(2.0,5.0);
    for x in model.baldessari{
    draw.rect()
        .color(hsl(0.0,0.0,1.0))
        .x_y(x[0],x[1])
        .w_h(vera,molnar);
    }
    /*draw.rect()
        .color(hsl(0.5,1.0,1.0))
        .x_y(model.baldessari[1][0],model.baldessari[1][1])
        .w_h(vera,molnar);*/

    draw.to_frame(app,&frame).unwrap();
}