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
const init_rot_speed: f32 = PI/999.0;

struct Petal {
    vera: Tri,
    center: Vec2,            //coordinates for center of triangle
    translation_speed: Vec2, //speed to move the coordinates
    rotation_speed: f32,     //speed to turn the petal
    rad: f32,                //rad of the circle in which is drawn the triangle
    init_angle: f32,         //initial angle to start drawinf the triangle
    clock: bool,             //petal rotates clockwise or not
    fill_color: Hsla,
    stroke_color: Hsl,
}

struct Model {
    flower: Vec<Petal>,
    count: i32,
    density: f32,
    back_color: Hsl,
}

fn model(app: &App) -> Model {
    app.new_window().size(1000, 1000).build().unwrap();
    let petal_density = 500.0;
    Model {
        flower: init_flower(app,petal_density),
        count: 1,
        density: petal_density,
        back_color: hsl(0.0,0.0,0.0),
    }
}

fn init_flower(app: &App,pd: f32) -> Vec<Petal> {
    let w = app.window_rect().w();
    let mut field = Vec::new();
    let c = pt2(0.0, 0.0);
    let r = w / pd;
    let initangle = random_range(0.0, PI);
    field.push(Petal {
        vera: make_tri(c, r, initangle),
        center: pt2(0.0, 0.0),
        translation_speed: rand_tspeed(),
        rotation_speed: init_rot_speed,
        rad: r,
        init_angle: initangle,
        clock: true,
        fill_color: hsla(0.0, 1.0, 1.0, 1.0),
        stroke_color: hsl(230.0 / 360.0, 1.0, 0.5),
    });
    return field;
}

///////[[[[[[[{{{{{{{:::::utils:::::}}}}}}}]]]]]]]\\\\\\\

fn rand_tspeed() -> Vec2 {
    return pt2(random_range(-1.0, 1.0), random_range(-1.0, 1.0));
}

fn make_tri(c: Vec2, rad: f32, initangle: f32) -> Tri {
    let point1 = pt3(
        c.x + rad * initangle.cos(),
        c.y + rad * initangle.sin(),
        0.0,
    );
    let point2 = pt3(
        c.x + rad * (initangle + 2.0 * PI / 3.0).cos(),
        c.y + rad * (initangle + 2.0 * PI / 3.0).sin(),
        0.0,
    );
    let point3 = pt3(
        c.x + rad * (initangle + 4.0 * PI / 3.0).cos(),
        c.y + rad * (initangle + 4.0 * PI / 3.0).sin(),
        0.0,
    );
    return Tri {
        0: [point1, point2, point3],
    };
}

///////[[[[[[[{{{{{{{:::::UPDATE:::::}}}}}}}]]]]]]]\\\\\\\

fn update(app: &App, model: &mut Model, _update: Update) {
    //update_petals_rad(model);
    //petals_wander(app, model);//&& (model.flower.len() as f32)<model.density 
    let t = app.time%0.2;
    if model.count%3==0 && (model.count as f32)  < model.density * 2.9{grow_flower(model);}//(model.flower.len() as f32)<model.density*2.0 
    //if (model.flower.len() as f32) >= model.density*2.0 {model.grow=false;}
    if model.count > model.density as i32 * 2 && model.count < model.density as i32 * 10 {rotate_flower(model);}
    //if model.count > model.density as i32 * 7 && model.count < model.density as i32 * 8 {one_black_petal(model);}
    if model.count > model.density as i32 * 3 && (model.count as f32) < model.density  * 3.9 {one_less_wheel(model);}
    if model.count > model.density as i32 * 4 && (model.count as f32) < model.density  * 4.5 {one_less_wheel(model);}
    if model.count > model.density as i32 * 5 && model.count < model.density as i32 * 7 {if random_range(0, 2) == 1 {one_asynch_spin_petal(model);}}
    if model.count > model.density as i32 * 8 && model.count < model.density as i32 * 9 {one_revert_petal(model);}
    if model.count > model.density as i32 * 10 && model.count < model.density as i32 * 11 {if random_range(0, 2) == 1 {one_less_wheel(model);}}
    if model.count > model.density as i32 * 11 && (model.count as f32) < model.density  * 11.1 {white_flower(model);}
    if (model.count as f32) > model.density * 11.1 && (model.count as f32) < model.density * 11.6 {white_flower(model);}
    model.count += 1;
}

fn white_flower(model: &mut Model) {
    model.back_color=hsl(0.0,0.0,1.0);
}

fn flash_petal(model: &mut Model) {
    model.back_color=hsl(0.0,0.0,1.0);
    
    let lingus = model.flower.len();
    let cory = random_range(2, lingus - 1);
    model.flower[cory].fill_color = hsla(330.0/360.0, 1.0, 0.5, 0.0)
}


fn update_petals_rad(model: &mut Model) {
    for mut petal in &mut model.flower {
        petal.rad += random_range(-0.5, 0.5);
        petal.vera = make_tri(petal.center, petal.rad, petal.init_angle);
    }
}

fn petals_wander(app: &App, model: &mut Model) {
    let boundary = app.window_rect();
    for mut petal in &mut model.flower {
        petal.center[0] += petal.translation_speed[0];
        if petal.center[0] < boundary.left() || petal.center[0] > boundary.right() {
            petal.translation_speed[0] = petal.translation_speed[0] * -1.0;
        }
        petal.center[1] += petal.translation_speed[1];
        if petal.center[1] < boundary.bottom() || petal.center[1] > boundary.top() {
            petal.translation_speed[1] = petal.translation_speed[1] * -1.0;
        }
        petal.vera = make_tri(petal.center, petal.rad, petal.init_angle);
    }
}

fn one_less_wheel(model: &mut Model) {
    let lingus = model.flower.len();
    let cory = random_range(2, lingus - 1);
    model.flower.remove(cory);
}

fn one_revert_petal(model: &mut Model) {
    let lingus = model.flower.len();
    let cory = random_range(0, lingus);
    model.flower[cory].clock = !model.flower[cory].clock;
}

fn one_asynch_spin_petal(model: &mut Model) {
    let lingus = model.flower.len();
    let cory = random_range(0, lingus);
    model.flower[cory].rotation_speed += random_range(PI / 5999.0, PI / 5111.0);
}

fn one_black_petal(model: &mut Model) {
    let lingus = model.flower.len();
    let cory = random_range(0, lingus);
    model.flower[cory].stroke_color.saturation = 0.0;
    model.flower[cory].stroke_color.lightness = 0.0;
}

fn grow_flower(model: &mut Model) {
    let lingus = model.flower.len();
    let r = model.flower[lingus-1].rad+1.0;
    let initangle = model.flower[lingus-1].init_angle;
    model.flower.push(Petal {
        vera: make_tri(model.flower[lingus-1].center, r, initangle),
        center: model.flower[lingus-1].center,
        translation_speed: rand_tspeed(),
        rotation_speed: init_rot_speed,
        rad: r,
        init_angle: initangle,
        clock: true,
        fill_color: hsla(0.0, 1.0, 1.0, 1.0),
        stroke_color: hsl(310.0 / 360.0, 1.0, 0.5),
    });
    if random_range(1, 84) == 42 {
    model.flower.push(Petal {
        vera: make_tri(model.flower[lingus-1].center, r, initangle),
        center: model.flower[lingus-1].center,
        translation_speed: rand_tspeed(),
        rotation_speed: init_rot_speed,
        rad: r,
        init_angle: initangle,
        clock: true,
        fill_color: hsla(0.0, 1.0, 1.0, 1.0),
        stroke_color: hsl(50.0 / 360.0, 1.0, 0.5),
    });}
    if random_range(1, 84) == 42 {
        model.flower.push(Petal {
            vera: make_tri(model.flower[lingus-1].center, r, initangle),
            center: model.flower[lingus-1].center,
            translation_speed: rand_tspeed(),
            rotation_speed: init_rot_speed,
            rad: r,
            init_angle: initangle,
            clock: true,
            fill_color: hsla(0.0, 1.0, 1.0, 1.0),
            stroke_color: hsl(130.0 / 360.0, 1.0, 0.5),
        });}
        model.flower.push(Petal {
        vera: make_tri(model.flower[lingus-1].center, r, initangle),
        center: model.flower[lingus-1].center,
        translation_speed: rand_tspeed(),
        rotation_speed: init_rot_speed,
        rad: r,
        init_angle: initangle,
        clock: true,
        fill_color: hsla(0.0, 1.0, 1.0, 1.0),
        stroke_color: hsl(230.0 / 360.0, 1.0, 0.5),
    });



}

fn rotate_flower(model: &mut Model) {
    for mut baldessari in &mut model.flower{
        if baldessari.clock {baldessari.init_angle+=baldessari.rotation_speed;}
        else {baldessari.init_angle-=baldessari.rotation_speed;}
        baldessari.vera=make_tri(baldessari.center, baldessari.rad, baldessari.init_angle);
    }
}



///////[[[[[[[{{{{{{{:::::VIEW:::::}}}}}}}]]]]]]]\\\\\\\

fn view(app: &App, model: &Model, frame: Frame) {
    let draw = app.draw();
    draw.background().color(model.back_color);
    view_petals(&draw, model);
    draw.to_frame(app, &frame).unwrap();
}

fn view_petals(draw: &Draw, model: &Model) {
    for p in &model.flower {
        let x1 = p.vera.0[0][0];
        let y1 = p.vera.0[0][1];
        let x2 = p.vera.0[1][0];
        let y2 = p.vera.0[1][1];
        let x3 = p.vera.0[2][0];
        let y3 = p.vera.0[2][1];
        if p.fill_color.alpha == 1.0 {
        draw.tri()
            .points((x1, y1), (x2, y2), (x3, y3))
            .no_fill()
            .stroke(p.stroke_color)
            .stroke_weight(1.0);
        }
        else{
            println!("fill tri");
        draw.tri()
                .points((x1, y1), (x2, y2), (x3, y3))
                .color(p.fill_color)
                .stroke(p.stroke_color)
                .stroke_weight(1.0);
        }
    }
}
