// Rust version of https://formandcode.com/code-examples/repeat-embedded
use std::array;

use nannou::color::Alpha;
use nannou::draw::mesh::vertex::Color;
use nannou::image::Frames;
use nannou::prelude::*;
use nannou::rand::random_range;

fn main() {
    nannou::app(model)
        // .loop_mode(LoopMode::loop_ntimes(499))
        .update(update)
        .view(view)
        //.simple_window(view)
        .run();
}

struct Model {    
    option: i32,
    hue:f32,
    cx:f32,
    cy:f32
}

fn model(app: &App) -> Model {
    // Create a window that can receive user input like mouse and keyboard events.
    app.new_window()
    .event(event)
    .size(1000,1000)
    .build()
    .unwrap();
    Model{
        option:1,
        hue:1.0,
        cx:0.0,
        cy:0.0
    }
}


fn event(_app: &App, model: &mut Model, event: WindowEvent) {
    // Print events as they occur to the console
    println!("{:?}", event);

    // We can `match` on the event to do something different depending on the kind of event.
    match event {        // Keyboard events
        KeyPressed(_key) => {}
        KeyReleased(_key) => {}
        ReceivedCharacter(_char) => {}

        // Mouse events
        MouseMoved(_pos) => {}
        MouseReleased(_button) => {}
        MouseWheel(_amount, _phase) => {}
        MouseEntered => {}
        MouseExited => {}

        // Touch events
        Touch(_touch) => {}
        TouchPressure(_pressure) => {}

        // Window events
        Moved(_pos) => {}
        Resized(_size) => {}
        HoveredFile(_path) => {}
        DroppedFile(_path) => {}
        HoveredFileCancelled => {}
        Focused => {}
        Unfocused => {}
        Closed => {}

        MousePressed(_button) => {
            model.option+=1;
            if model.option>3{model.option=1}
            model.hue+=100.0;
            println!("format {0}",model.option);
        }
    }
}


fn update(app: &App, model: &mut Model, _update: Update) {
    // model.option+=1.0;
    // println!("format {0}",model.option);
}

fn view(app: &App, model: &Model, frame: Frame){
    let draw = app.draw();
    draw.background().color(BLACK);
    let h = app.window_rect().h();
    let w = app.window_rect().w();
            draw.rect()
            .color(hsl(model.hue/360.0,1.0,0.5))
            .x_y(model.cx,model.cy)
            .w_h(111.0,111.0);
    if model.option==1 {
        for x in (-450..450).step_by(20){
            for y in (-450..450).step_by(20){
                let mut start_point = pt2(x as f32-5.0, y as f32-5.0);
                let mut end_point   = pt2(x as f32+5.0, y as f32+5.0);

                draw.line()
                    .start(start_point)
                    .end(end_point)
                    .weight(1.0)
                    .color(hsl(model.hue/360.0,1.0,0.5));
                start_point = pt2(x as f32+5.0, y as f32-5.0);
                end_point   = pt2(x as f32-5.0, y as f32+5.0);

                draw.line()
                    .start(start_point)
                    .end(end_point)
                    .weight(1.0)
                    .color(hsl(model.hue/360.0,1.0,0.5));
            }
        }
    }
    if model.option==2{
        for x in (-450..450).step_by(20){
            for y in (-450..450).step_by(20){
                let mut start_point = pt2(x as f32, y as f32);
                let mut end_point   = pt2(0.0,0.0);

                draw.line()
                    .start(start_point)
                    .end(end_point)
                    .weight(1.0)
                    .color(hsl(model.hue/360.0,1.0,0.5));
            }
        }
    }
    if model.option==3{
        for x in (-450..450).step_by(20){
            for y in (-450..450).step_by(20){
                draw.ellipse()
                    .no_fill()
                    .stroke(hsl(model.hue/360.0,1.0,0.5))
                    .stroke_weight(1.0)
                    .w(40.0)
                    .h(40.0)
                    .x_y(x as f32, y as f32);            
            }
        }
    }
    draw.to_frame(app,&frame).unwrap();
}