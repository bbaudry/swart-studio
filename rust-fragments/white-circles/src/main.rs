use nannou::prelude::*;
use nannou::rand::random_range;

fn main() {
    nannou::app(model)
        .update(update)
        .simple_window(view)
        .run();
}

struct Model {
    white : bool,
}

fn model(_app: &App) -> Model {
    Model {white : true}
}

fn update(_app: &App, _model: &mut Model, _update: Update) {
 
}

fn view(app: &App, _model: &Model, frame: Frame){
    let draw = app.draw();
    draw.background().color(BLACK);
    let john = random_range(-300.0,300.0);
    let baldessari = random_range(-200.0,200.0);
    let vera = random_range(3.0,11.0);
    let molnar = random_range(2.0,7.0);

    //let mut n = 42;
    for n in 1..42 {
        draw.rect()
        .color(hsl(0.0,0.0,1.0))
        .x_y(john,baldessari)
        .w_h(vera,molnar);
        //n-=1;
    }
    draw.to_frame(app,&frame).unwrap();

}