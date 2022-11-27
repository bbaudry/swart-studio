use nannou::prelude::*;

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

fn view(_app: &App, _model: &Model, _frame: Frame){
    let mut n = 42;
    while n!=0 {
        draw.rect()
    .color(WHITE)
    .w(300.0)
    .h(200.0);
        n-=1;
    }
    
}