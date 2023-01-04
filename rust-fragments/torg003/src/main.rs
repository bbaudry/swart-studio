use nannou::color::Alpha;
use nannou::color::GetHue;
use nannou::draw::mesh::vertex::Color;
use nannou::geom::Range;
use nannou::geom::Rect;
use nannou::image::Frames;
use nannou::prelude::*;
use nannou::rand::random_range;

fn main() {
    nannou::app(model)
        //.loop_mode(LoopMode::loop_ntimes(499))
        .update(update)
        .view(view)
        //.simple_window(view)
        .run();
}



struct Wheel{
    rad_in:f32,
    rad_out:f32,
    sectors:Vec<(f32,Hsla,f32)>, // this should be a series of angles between 0 and 2*PI
    clock:bool,
    speed:f32,
}

struct Spin{
    cx:f32,
    cy:f32,
    rad_max:f32,
    petals:Vec<Wheel>
}

struct Model {
    spin: Vec<Spin>,
    startspin:i32,endspin:i32,
    count: i32,
}

fn model(app: &App) -> Model {
    app.new_window().size(1000, 1000).build().unwrap();
    Model {
        spin: playground_spin(app),
        startspin:0,endspin:42,
        count: 0,
    }
}

fn playground_spin(app: &App) -> Vec<Spin> {
    let w = app.window_rect().w();
    let mut play = Vec::new(); //for the general list of Spins, for now 1
    let mut fire = Vec::new();//for the list of wheels
    let mut drone = Vec::new();// for the list of sectors in the wheels
    drone.push((0.0,Hsla::new(230.0 / 360.0, 1.0, 0.5, 0.5),PI));
    drone.push((PI,Hsla::new(30.0 / 360.0, 1.0, 0.5, 0.5),PI+PI/2.0));
    drone.push((PI+PI/2.0,Hsla::new(130.0 / 360.0, 1.0, 0.5, 0.5),0.0));
    fire.push(
        Wheel{
            rad_in:242.0,
            rad_out:287.0,
            sectors:drone,
            clock:false,
            speed:PI/142.0,
        }
    );
    play.push(
        Spin{
            cx:0.0,
            cy:0.0,
            rad_max:w/2.0,
            petals:fire,
        }
    );
    return play;
}


fn update(_app: &App, model: &mut Model, _update: Update) {
    if model.count >= model.startspin && model.count < model.endspin{
        update_spin(model);
    }
    model.count += 1;
}

fn update_spin(model: &mut Model) {
    for baldessari in &mut model.spin {
        for vera in &mut baldessari.petals{
            for ryoji in &mut vera.sectors{
                if vera.clock {
                    ryoji.0-=vera.speed;
                    ryoji.2-=vera.speed;
                }
                else{
                    ryoji.0+=vera.speed;
                    ryoji.2+=vera.speed;    
                }
            }
        }
    }
}

fn view(app: &App, model: &Model, frame: Frame) {
    let h = app.window_rect().h();
    let w = app.window_rect().w();
    let draw = app.draw();
    draw.background().color(BLACK);
    if model.count >= model.startspin && model.count<model.endspin{
        view_spin(model,&draw);
    }
    draw.to_frame(app, &frame).unwrap();
}

fn view_spin(model: &Model,draw: &Draw){
    for baldessari in  &model.spin {
        for vera in &baldessari.petals{
            for ryoji in &vera.sectors{
                let anglestart = ryoji.0;
                let angleend = ryoji.2;
                let x1 = baldessari.cx+vera.rad_in*anglestart.cos();
                let y1 = baldessari.cy+vera.rad_in*anglestart.sin();
                let x2 = baldessari.cx+vera.rad_in*angleend.cos();
                let y2 = baldessari.cy+vera.rad_in*angleend.sin();
                let start_point = pt2(x1,y1);
                let end_point   = pt2(x2,y2);
                draw.line()
                .start(start_point)
                .end(end_point)
                .weight(1.23)
                .color(hsl(ryoji.1.hue.to_degrees(),ryoji.1.saturation,ryoji.1.lightness));
            }
        }
    }    
}