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
    if model.white {
        model.white=false;
    }
    else{
        model.white=true;
    }
}

fn view(app: &App, model: &Model, frame: Frame){
    let draw = app.draw();
    draw.background().color(BLACK);
    if model.white {
        let win = app.window_rect();
        let w = win.w();
        let h = win.h();
        draw.rect().x_y(0.0,0.0).w_h(w/3.0,h/3.0).color(hsl(0.0,0.0,1.0));
    }
    else{
        
    }
    draw.to_frame(app,&frame).unwrap();
}
