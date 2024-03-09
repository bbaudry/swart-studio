use nannou::color::Alpha;
use nannou::color::GetHue;
use nannou::draw::mesh::vertex::Color;
use nannou::geom::Range;
use nannou::geom::Rect;
use nannou::geom::Tri;
use nannou::image::Frames;
use nannou::lyon::geom::Triangle;
use nannou::prelude::*;
use nannou::rand::random_range;

fn main() {
    nannou::app(model)
        .update(update)
        .view(view)
        .run();
}

struct Particle {
    rad:f32,
    cx:f32,
    cy:f32,
    direction:f32,
    speed:f32
}

struct Model {
    field: Vec<Particle>,
    count:i32
}
fn model(app: &App) -> Model {
    app.new_window().size(2000, 1000).build().unwrap();
    let mut field = Vec::new();
    let mut speed: f32;
    let mut radius: f32;
    let mut direction: f32;
    for _i in 0..5000 {
        speed  = random_range(0.01,0.02);
        radius = random_range(0.5,9.9);
        direction = random_range(0.0,360.0);
        field.push(
            Particle{
                rad:radius,
                cx:0.0,
                cy:0.0,
                direction:direction,
                speed:speed
            }
        )
    }
    Model {
        field:field,
        count: 0,
    }
}

//deg_to_rad
fn update(_app: &App, model: &mut Model, _update: Update) {
    //c.x + rad * initangle.cos(),
    let mut d : f32;
    let i:usize;
    if model.count<(model.field.len()  as i32) {i=model.count as usize}
    else{i=model.field.len()}
    //i=model.field.len();
    for n in 0..i{
        let p = &mut model.field[n];
        if p.direction>135.0 && p.direction<225.0 {d=2.0*p.speed}
        else{d=p.speed}
        p.cx=p.cx+d*p.direction.to_radians().cos();
        p.cy=p.cy+d*p.direction.to_radians().sin();
        p.speed=p.speed*random_range(1.0,1.1)
    }
    model.count+=1
}

fn view(app: &App, model: &Model, frame: Frame){

    let draw = app.draw();
    draw.background().color(BLACK);
    for p in &model.field{
        draw.ellipse()
        .color(WHITE)
        .w(p.rad)
        .h(p.rad)
        .x_y(p.cx,p.cy);
        }

    draw.to_frame(app, &frame).unwrap();
}