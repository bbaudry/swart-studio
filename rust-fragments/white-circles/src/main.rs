use nannou::prelude::*;
use nannou::rand::*;

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
    let john = rand::random_range::<i32>(-300.0,300.0);
    let baldessari = rand::random_range::<i32>(-200.0,200.0);

    let mut n = 42;
    while n!=0 {
        draw.rect()
        .color(WHITE)
        .w(john)
        .h(baldessari);
        n-=1;
    }
    
}