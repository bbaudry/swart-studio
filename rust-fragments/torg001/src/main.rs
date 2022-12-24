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

struct Radar {
    cx: f32,
    cy: f32,
    rayon: f32,
    stars: Vec<(f32,f32)>,
}

struct Model {
    occam: Vec<Cell>, //data for rectangles moving from right to left
    camel: Vec<Radar>,
    countoccam: i32,
    countcamel: i32,
    count: i32,
}

fn model(app: &App) -> Model {
    app.new_window().size(1000, 1000).build().unwrap();
    Model {
        occam: playground_occam(app),
        camel: playground_camel(app),
        countoccam: 200, // contract: countoccam < countcamel
        countcamel: 400,
        count: 0,
    }
}
fn playground_camel(app: &App) -> Vec<Radar> {
    let h = app.window_rect().h();
    let w = app.window_rect().w();
    let mut play = Vec::new();
    let mut particles = Vec::new();
    let mut r = 111.0;
    let mut vera = 0.0;
    let mut molnar = 0.0;
    for i in 0..5 {
        let x = vera + random_range(0.0,r)*(random_range(0.0,2.0*PI).cos());
        let y = molnar + random_range(0.0,r)*(random_range(0.0,2.0*PI).sin());
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
    if model.count > 0 && model.count < model.countoccam {
        update_occam(model);
    }
    if model.count > model.countoccam && model.count < model.countcamel {
        update_camel(model);
    }
    model.count += 1;
}

fn update_camel(model: &mut Model) {
    for baldessari in &mut model.camel {
        let mut particles = Vec::new();
        let m:i32 = random_range(5, 11);
        for i in 0..m {
            let x = baldessari.cx + random_range(0.0,baldessari.rayon)*(random_range(0.0,2.0*PI).cos());
            let y = baldessari.cy + random_range(0.0,baldessari.rayon)*(random_range(0.0,2.0*PI).sin());
            particles.push((x,y));
        }
    
        baldessari.stars = particles;
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
    let h = app.window_rect().h();
    let w = app.window_rect().w();
    if model.count > 0 && model.count < model.countoccam {
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
    if model.count > model.countoccam && model.count < model.countcamel {
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
                .color(hsl(0.0,1.0,1.0));
            }
        }
    }
    draw.to_frame(app, &frame).unwrap();
}
