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
        //.loop_mode(LoopMode::loop_ntimes(499))
        .update(update)
        .view(view)
        //.simple_window(view)
        .run();
}

struct Petal{
    vera:Tri,
    center:pt2,
}

struct Model {
    field:Vec<Petal>,
    count:i32,
}

fn model(app: &App) -> Model {
    app.new_window().size(1000, 1000).build().unwrap();
    Model {
        field:init_field(app),
        count: 1,
    }
}

fn init_field(app: &App) -> Vec<Petal> {
    let w = app.window_rect().w();
    let h = app.window_rect().h();
    let mut field = Vec::new();
    let c = pt2(w/2.0,h/2.0);
    let maxrad = w/2.0;
    for _i in 1..8{
        let rad = random_range(maxrad/50.0,maxrad);
        let initangle = random_range(0.0,PI);
        let point1 = pt2(c.x+rad*cos(initangle),c.y+rad*sin(initangle));
        let point2 = pt2(c.x+rad*cos(initangle+2.0*PI/3.0),c.y+rad*sin(initangle+2.0*PI/3.0));
        let point3 = pt2(c.x+rad*cos(initangle+4.0*PI/3.0),c.y+rad*sin(initangle+4.0*PI/3.0));
        field.push(
            Petal { 
                vera: Tri([point1,point2,point3]), 
                center: c 
            }
        )
    }
    return field;
}

fn update(_app: &App, model: &mut Model, _update: Update) {

    model.count += 1;
}

fn view(app: &App, model: &Model, frame: Frame) {

    draw.to_frame(app, &frame).unwrap();
}
