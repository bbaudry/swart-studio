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

fn update(_app: &App, model: &mut Model, _update: Update) {
    
}

fn view(app: &App, model: &Model, frame: Frame){
    
}