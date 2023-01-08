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

///////[[[[[[[{{{{{{{:::::MODEL:::::}}}}}}}]]]]]]]\\\\\\\

struct Petal{
    vera:Tri,
    center:Vec2, //coordinates for center of triangle
    speed:Vec2, //speed to move the coordinates
    rad:f32, //rad of the circle in which is drawn the triangle
    init_angle:f32, //initial angle to start drawinf the triangle
    fill_color:Hsla,
    stroke_color:Hsl,
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
    let c = pt2(0.0,0.0);
    let maxrad = w/2.0;
    for _i in 1..8{
        let rad = random_range(maxrad/50.0,maxrad);
        let initangle = random_range(0.0,PI);
        field.push(
            Petal { 
                vera: make_tri(c, rad, initangle), 
                center: c,
                speed: pt2(random_range(-1.0,1.0),random_range(-1.0,1.0)),
                rad: rad, 
                init_angle: initangle,
                fill_color: Hsla::new(0.0,1.0,1.0,1.0),
                stroke_color: Hsl::new(230.0/360.0,1.0,0.5),
            }
        )
    }
    return field;
}

fn make_tri(c:Vec2,rad:f32,initangle:f32)->Tri{
    let point1 = pt3(c.x+rad*initangle.cos(),c.y+rad*initangle.sin(),0.0);
    let point2 = pt3(c.x+rad*(initangle+2.0*PI/3.0).cos(),c.y+rad*(initangle+2.0*PI/3.0).sin(),0.0);
    let point3 = pt3(c.x+rad*(initangle+4.0*PI/3.0).cos(),c.y+rad*(initangle+4.0*PI/3.0).sin(),0.0);
    return Tri{0:[point1,point2,point3]};
}

///////[[[[[[[{{{{{{{:::::UPDATE:::::}}}}}}}]]]]]]]\\\\\\\

fn update(app: &App, model: &mut Model, _update: Update) {
    //update_petal_rad(model);
    
    update_petal_wander(app,model);
    model.count += 1;
}

fn update_petal_rad(model: &mut Model) {
    for mut petal in &mut model.field{
        petal.rad+=random_range(-0.5,0.5);
        petal.vera=make_tri(petal.center, petal.rad, petal.init_angle);
    }
}

fn update_petal_wander(app: &App,model: &mut Model) {
    let boundary = app.window_rect();
    for mut petal in &mut model.field{
        petal.center[0]+= petal.speed[0];
        if petal.center[0]<boundary.left() || petal.center[0]>boundary.right() {
            petal.speed[0] = petal.speed[0] * -1.0;
        }
        petal.center[1] += petal.speed[1];
        if petal.center[1] < boundary.bottom() || petal.center[1]>boundary.top() {
            petal.speed[1] = petal.speed[1] * -1.0;
        }
        petal.vera=make_tri(petal.center, petal.rad, petal.init_angle);
    }
    let sx = model.field[0].center[0];
    let sy = model.field[0].center[1];
    println!("x: {sx}; y: {sy}")
}


///////[[[[[[[{{{{{{{:::::VIEW:::::}}}}}}}]]]]]]]\\\\\\\

fn view(app: &App, model: &Model, frame: Frame) {
    let draw = app.draw();
    draw.background().color(BLACK);
    view_petals(&draw, model);
    draw.to_frame(app, &frame).unwrap();
}

fn view_petals(draw: &Draw, model: &Model){
    for p in &model.field{
        let x1 = p.vera.0[0][0];
        let y1 = p.vera.0[0][1];
        let x2 = p.vera.0[1][0];
        let y2 = p.vera.0[1][1];
        let x3 = p.vera.0[2][0];
        let y3 = p.vera.0[2][1];
         draw.tri()
        .points((x1,y1),(x2,y2),(x3,y3))
        .no_fill()
        .stroke(hsl(p.stroke_color.hue.to_degrees(),p.stroke_color.saturation,p.stroke_color.lightness))
        //.stroke(hsl(230.0/360.0,1.0,0.5))
        .stroke_weight(1.0);
    }
}