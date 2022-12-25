use std::array;

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

struct Cell {
    beam: Rect,
    speed: i32,
    c: Hsla,
}

struct Wheel{
    cx:f32,
    cy:f32,
    rad_in:f32,
    rad_out:f32,
    sectors:Vec<(f32,Hsla,f32)>, // this should be a series of angles between 0 and 2*PI
    clock:bool,
    speed:i32,

}

struct Radar {
    cx: f32,
    cy: f32,
    rayon: f32,
    stars: Vec<(f32,f32)>,
}

struct Model {
    occam: Vec<Cell>, //data for rectangles moving from right to left
    camel: Vec<Radar>,
    crispr: Vec<Radar>,
    spin: Vec<Wheel>,
    startoccam: i32, endoccam: i32,
    startcamel: i32, endcamel: i32,
    startcrispr: i32, endcrispr: i32,
    startspin: i32, endspin: i32,
    count: i32,
}

fn model(app: &App) -> Model {
    app.new_window().size(1000, 1000).build().unwrap();
    Model {
        occam: playground_occam(app),
        camel: playground_camel(app),
        crispr: playground_crispr(app),
        spin: playground_spin(app),
        startoccam: 1, endoccam: 768,
        startcamel: 540, endcamel: 768,
        startcrispr: 768, endcrispr: 2048,
        startspin:2048,endspin:3072,
        count: 0,
    }
}

fn playground_spin(app: &App) -> Vec<Wheel> {
    let corex=0.0;
    let corey=0.0;
    let h = app.window_rect().h();
    let w = app.window_rect().w();
    let mut play = Vec::new();
    let mut drone = Vec::new();
    drone.push((0.0,Hsla::new(230.0 / 360.0, 1.0, 0.5, 0.5),PI));
    drone.push((PI,Hsla::new(30.0 / 360.0, 1.0, 0.5, 0.5),PI+PI/2.0));
    drone.push((PI+PI/2.0,Hsla::new(130.0 / 360.0, 1.0, 0.5, 0.5),0));
    play.push(
        Wheel{
            cx:corex,
            cy:corey,
            rad_in:242.0,
            rad_out:287.0,
            sectors:drone,
            clock:true,
            speed:PI/42.0,
        }
    );
    return play;
}

fn playground_crispr(app: &App) -> Vec<Radar> {
    let h = app.window_rect().h();
    let w = app.window_rect().w();
    let mut play = Vec::new();
    let r = w/4.0;
    let mut vera = w/2.0;
    let mut molnar = h/4.0;
    for _j in 0..3{
        for _k in 0..2{
            let mut particles = Vec::new();
            for _i in 0..5 {
                let voodoo = random_range(0.0,r);
                let down = random_range(0.0,2.0*PI);
                let x = vera + voodoo *down.cos();
                let y = molnar + voodoo *down.sin();
                particles.push((x,y));
            }
            play.push(Radar {
                cx: vera,
                cy: molnar,
                rayon: r,
                stars: particles,
            });        
            molnar -= h/2.0;
        }
        vera -= w/2.0;
        molnar = h/4.0;
    }
    return play;
}

fn playground_camel(app: &App) -> Vec<Radar> {
    let w = app.window_rect().w();
    let mut play = Vec::new();
    let mut particles = Vec::new();
    let r = w/2.0;
    let vera = 0.0;
    let molnar = 0.0;
    for _i in 0..5 {
        let voodoo = random_range(0.0,r);
        let down = random_range(0.0,2.0*PI);
        let x = vera + voodoo *down.cos();
        let y = molnar + voodoo *down.sin();
        particles.push((x,y));
    }
    
    play.push(Radar {
        cx: vera,
        cy: molnar,
        rayon: r,
        stars: particles,
    });
    return play;
}

fn playground_occam(app: &App) -> Vec<Cell> {
    let h = app.window_rect().h();
    let w = app.window_rect().w();
    let mut play = Vec::new();
    let mut dsb = h / 2.0;
    while dsb > -h / 2.0 {
        let off_y = random_range(42.0, 67.0);
        let slow = random_range(0, 2);
        let velo;
        let mut sj;
        if slow == 0 {
            velo = random_range(311, 391);
            sj = 100.0 * w;
        } else {
            velo = random_range(11, 91);
            sj = 50.0 * w;
        }

        while sj > 0.0 {
            let off_x;
            if slow == 0 {
                off_x = random_range(77.0, 111.0);
            } else {
                off_x = random_range(121.0, 271.0);
            }
            let cuba = random_range(0, 111);
            let zombie;
            let lazybone;
            if cuba < 3 {
                zombie = 0.5;
                lazybone = 1.0;
            } else {
                zombie = 1.0;
                lazybone = random_range(0.0, 0.5);
            }
            play.push(Cell {
                beam: Rect {
                    x: Range {
                        start: sj - off_x,
                        end: sj,
                    },
                    y: Range {
                        start: dsb,
                        end: dsb - off_y,
                    },
                },
                speed: velo,
                c: Hsla::new(230.0 / 360.0, 1.0, zombie, lazybone),
            });
            sj = sj - off_x - random_range(11.0, 17.0);
        }
        dsb = dsb - off_y - random_range(17.0, 23.0)
    }
    return play;
}

fn update(_app: &App, model: &mut Model, _update: Update) {
    if model.count >= model.startoccam && model.count < model.endoccam {
        update_occam(model);
    }
    if model.count >= model.startcamel && model.count < model.endcamel {
        update_camel(model);
    }
    if model.count >= model.startcrispr && model.count < model.endcrispr {
        update_crispr(model);
    }
    if model.count >= model.startspin && model.count < model.endspin{
        update_spin(model);
    }
    model.count += 1;
}

fn update_spin(model: &mut Model) {
    for baldessari in &mut model.spin {
        for vera in &mut baldessari.sectors{
            vera.0+=baldessari.speed;
            vera.2+=baldessari.speed;
        }
    }
}

fn update_crispr(model: &mut Model) {
    for baldessari in &mut model.crispr {
        if random_range(1, 5) == 1 {
            let m:i32 = random_range(1, 5);
            for _i in 0..m {
                let teardrop; 
                if random_range(1, 10) == 1 {teardrop=baldessari.rayon;} 
                else {teardrop = random_range(0.0,baldessari.rayon);}
                let teen_spirit = random_range(0.0,2.0*PI);
                let x = baldessari.cx + teardrop*teen_spirit.cos();
                let y = baldessari.cy + teardrop*teen_spirit.sin();
                baldessari.stars.push((x,y));
            }
        }
    }
}

fn update_camel(model: &mut Model) {
    for baldessari in &mut model.camel {
        let m:i32 = random_range(1, 5);
        for _i in 0..m {
            let teardrop; 
            if random_range(1, 10) == 1 {teardrop=baldessari.rayon;} 
            else {teardrop = random_range(0.0,baldessari.rayon);}
            let teen_spirit = random_range(0.0,2.0*PI);
            let x = baldessari.cx + teardrop*teen_spirit.cos();
            let y = baldessari.cy + teardrop*teen_spirit.sin();
            baldessari.stars.push((x,y));
        }
    }
}

fn update_occam(model: &mut Model) {
    for baldessari in &mut model.occam {
        baldessari.beam.x.start -= baldessari.speed as f32;
        baldessari.beam.x.end -= baldessari.speed as f32;
    }
}

fn view(app: &App, model: &Model, frame: Frame) {
    let draw = app.draw();
    draw.background().color(BLACK);
    if model.count >= model.startoccam && model.count < model.endoccam {
        for baldessari in &model.occam {
            let r = baldessari.beam;
            draw.rect().x_y(r.x(), r.y()).w_h(r.w(), r.h()).color(hsla(
                baldessari.c.hue.to_degrees(),
                baldessari.c.saturation,
                baldessari.c.lightness,
                baldessari.c.alpha,
            ));
        }
    }
    if model.count >= model.startcamel && model.count < model.endcamel {
        for stevie in &model.camel {
            draw.ellipse()
                .x(stevie.cx)
                .y(stevie.cy)
                .radius(stevie.rayon)
                .stroke_color(hsl(230.0 / 360.0, 1.0, 0.5))
                .stroke_weight(3.73)
                .no_fill();//.color(hsl(0.0,1.0,1.0));
            for wonder in &stevie.stars{
                draw.ellipse()
                .x(wonder.0)
                .y(wonder.1)
                .radius(3.71)
                .stroke_color(hsl(0.0,1.0,1.0))
                .stroke_weight(0.2)
                .no_fill();
            }
        }
    }
    if model.count >= model.startcrispr && model.count < model.endcrispr {
        for stevie in &model.crispr {
            draw.ellipse()
                .x(stevie.cx)
                .y(stevie.cy)
                .radius(stevie.rayon)
                .stroke_color(hsl(230.0 / 360.0, 1.0, 0.5))
                .stroke_weight(1.73)
                .no_fill();//.color(hsl(0.0,1.0,1.0));
            for wonder in &stevie.stars{
                draw.ellipse()
                .x(wonder.0)
                .y(wonder.1)
                .radius(1.42)
                .stroke_color(hsl(0.0,1.0,1.0))
                .stroke_weight(0.1)
                .no_fill();
            }
        }
    }
    if model.count >= model.startspin && model.count<model.endspin{
        for baldessari in  &model.spin {
            for vera in &baldessari.sectors{
                let anglestart = vera.0;
                let angleend = vera.2;
                let x1 = baldessari.cx+baldessari.rad_in*anglestart.cos();
                let y1 = baldessari.cy+baldessari.rad_in*anglestart.sin();
                let x2 = baldessari.cx+baldessari.rad_in*angleend.cos();
                let y2 = baldessari.cy+baldessari.rad_in*angleend.sin();
                let start_point = pt2(x1,y1);
                let end_point   = pt2(x2,y2);
                draw.line()
                .start(start_point)
                .end(end_point)
                .weight(3.72)
                .color(hsl(vera.1.hue,vera.1.saturation,vera.1.lightness));

            }
        }    
    }
    draw.to_frame(app, &frame).unwrap();
}
