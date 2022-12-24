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
        .loop_mode(LoopMode::loop_ntimes(499))
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

struct Model {
    occam: Vec<Cell>,
}

fn model(app: &App) -> Model {
    app.new_window().size(1000, 1000).build().unwrap();
    Model {
        occam: playground(app),
    }
}

fn playground(app: &App) -> Vec<Cell> {
    let h = app.window_rect().h();
    let w = app.window_rect().w();
    let mut play = Vec::new();
    let mut dsb = h / 2.0;
    while dsb > -h / 2.0 {
        let off_y = random_range(11.0, 27.0);
        let velo = random_range(311, 391);
        let mut sj = 100.0 * w;
        while sj > 0.0 {
            let off_x = random_range(77.0, 111.0);
            let cuba = random_range(0,111);
            let zombie;
            if cuba==0 {zombie=0.5;println!("blue zombie")}
            else {zombie=1.0;}
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
                c: Hsla::new(
                    230.0 / 360.0,
                    0.5,
                    zombie,
                    random_range(0.2, 0.5),
                ),
            });
            sj = sj - off_x - random_range(1.0, 11.0);
        }
    dsb = dsb - off_y - random_range(17.0, 23.0)
    }
    return play;
}

fn update(app: &App, model: &mut Model, _update: Update) {
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
    for baldessari in &model.occam {
        let r = baldessari.beam;
        draw.rect().x_y(r.x(), r.y()).w_h(r.w(), r.h()).color(hsla(
            baldessari.c.hue.to_degrees(),
            baldessari.c.saturation,
            baldessari.c.lightness,
            baldessari.c.alpha,
        ));
    }

    draw.to_frame(app, &frame).unwrap();
}
