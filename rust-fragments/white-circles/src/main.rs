use std::array;

use nannou::prelude::*;
use nannou::rand::random_range;

fn main() {
    nannou::app(model)
        .loop_mode(LoopMode::loop_ntimes(42))
        .update(update)
        .simple_window(view)
        .run();
}

struct Model {
    baldessari : [[f32;2];24],
    hall : [[f32;2];24],
}

fn model(app: &App) -> Model {
    Model {baldessari:[[50.0,50.0],[50.0,50.0],[50.0,50.0],[50.0,50.0],
        [200.0,200.0],[200.0,200.0],[200.0,200.0],[200.0,200.0],
        [50.0,-50.0],[50.0,-50.0],[50.0,-50.0],[50.0,-50.0],
        [200.0,-200.0],[200.0,-200.0],[200.0,-200.0],[200.0,-200.0],
        [50.0,450.0],[50.0,450.0],[50.0,450.0],[50.0,450.0],
        [200.0,-450.0],[200.0,-450.0],[200.0,-450.0],[200.0,-450.0]],
        hall:[[-40.0,0.0],[-40.0,0.0],[-40.0,0.0],[-40.0,0.0],
        [-40.0,0.0],[-40.0,0.0],[-40.0,0.0],[-40.0,0.0],
        [-40.0,0.0],[-40.0,0.0],[-40.0,0.0],[-40.0,0.0],
        [-40.0,0.0],[-40.0,0.0],[-40.0,0.0],[-40.0,0.0],
        [-40.0,0.0],[-40.0,0.0],[-40.0,0.0],[-40.0,0.0],
        [-40.0,0.0],[-40.0,0.0],[-40.0,0.0],[-40.0,0.0]]
    
    }
}

fn update(app: &App, model: &mut Model, _update: Update) {
    let mut snarky:f32;
    let mut puppy:f32;
    let win = app.window_rect();
    let w = win.w();
    let h = win.h();
    for i in 0..(model.baldessari.len()) {
        snarky = random_range(-w/2.0,w/2.0);
        model.baldessari[i][0]=snarky;
        puppy = random_range(-h/2.0,h/2.0);
        model.baldessari[i][1]=puppy; //this works if hall has the exact same size as baldessari
        //println!(" {snarky} ");
    }
}

fn view(app: &App, model: &Model, frame: Frame){
    let draw = app.draw();
    draw.background().color(BLACK);
    //let john = random_range(-300.0,300.0);
    //let baldessari = random_range(-200.0,200.0);
    let mut wichita;
    let mut vera;
    let mut molnar;
    let mut rect = true;
    for x in model.baldessari{
        wichita = random_range(42.0,99.0);
        vera = random_range(17.0,77.0);
        molnar = random_range(200.0,300.0);
        if rect{
         draw.rect()
        .color(hsl(230.0/360.0,1.0,0.5))
        .x_y(x[0],x[1])
        .w_h(vera,molnar); 
        rect=false;}
        else{
    draw.ellipse()
        .color(hsl(molnar/360.0,1.0,0.5))
        .x_y(x[0],x[1])
        .radius(wichita);
        rect=true;
    }
    }
    for x in model.hall{
        vera = random_range(17.0,27.0);

        draw.rect()
        .color(hsl(230.0/360.0,1.0,1.0))
        .x_y(x[0],x[1])
        .w_h(100.0,vera);
    }
    /*draw.rect()
        .color(hsl(0.5,1.0,1.0))
        .x_y(model.baldessari[1][0],model.baldessari[1][1])
        .w_h(vera,molnar);*/

    draw.to_frame(app,&frame).unwrap();
}