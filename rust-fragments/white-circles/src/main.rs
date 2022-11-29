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
    baldessari : [[f32;2];2],
}

fn model(app: &App) -> Model {
    Model {baldessari:[[50.0,50.0],[200.0,200.0]]}
}

fn update(_app: &App, model: &mut Model, _update: Update) {
    let john = random_range(-300.0,300.0);
    let baldessari = random_range(-200.0,200.0);

    model.baldessari[0]=[50.0,50.0];
    model.baldessari[1]=[john,baldessari] 
}

fn view(app: &App, model: &Model, frame: Frame){
    let draw = app.draw();
    draw.background().color(BLACK);
    //let john = random_range(-300.0,300.0);
    //let baldessari = random_range(-200.0,200.0);
    let vera = random_range(3.0,11.0);
    let molnar = random_range(2.0,7.0);

    draw.rect()
        .color(hsl(0.0,0.0,1.0))
        .x_y(model.baldessari[0][0],model.baldessari[0][1])
        .w_h(vera,molnar);
    draw.rect()
        .color(hsl(0.5,1.0,1.0))
        .x_y(model.baldessari[1][0],model.baldessari[1][1])
        .w_h(vera,molnar);

    draw.to_frame(app,&frame).unwrap();
}