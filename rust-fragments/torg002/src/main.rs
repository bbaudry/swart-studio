use nannou::color::Alpha;
use nannou::color::GetHue;
use nannou::draw::mesh::vertex::Color;
use nannou::geom::Range;
use nannou::geom::Rect;
use nannou::image::Frames;
use nannou::lyon::geom::arrayvec::Array;
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

struct DNA {
    beam: Rect,
    speed: i32,
    c: Hsla,
}

struct Cell {
    //one string of 'DNA', all situated on the same y axis
    horizon: f32,
    chromosomes: Vec<DNA>,
}

struct Model {
    pre_occam: Vec<Cell>,
    occam: Vec<Cell>, //data for rectangles moving from horizontally
    end: [(f32, f32); 4],
    count: i32,
    startpreoccam: i32,
    endpreoccam: i32,
    startoccam: i32,
    endoccam: i32,
    startoccamspeed: i32,
    endoccamspeed: i32,
    startoccamslow: i32,
    endoccamslow: i32,
    startoccamcol: i32,
    endoccamcol: i32,
    startoccamcolfast: i32,
    endoccamcolfast: i32,
    startendoccam: i32,
}

fn model(app: &App) -> Model {
    app.new_window().size(1000, 1000).build().unwrap();
    Model {
        pre_occam: playground_pre_occam(app),
        occam: playground_occam(app),
        end: init_end(app),
        count: 0,
        startoccamspeed: 0,
        endoccamspeed: 200,
        startpreoccam: 0,
        endpreoccam: 552,
        startoccam: 552,
        endoccam: 1300,
        startoccamcol: 652,
        endoccamcol: 762,
        startoccamcolfast: 712,
        endoccamcolfast: 840,
        startoccamslow: 840,
        endoccamslow: 1100,
        startendoccam: 1100,
    }
}

fn init_end(app: &App) -> [(f32, f32); 4] {
    let h = app.window_rect().h();
    let w = app.window_rect().w();
    let mut endcoord = [(0.0, 0.0); 4];
    endcoord[0] = (0.0, h / 2.0);
    endcoord[1] = (0.0, h / 2.0);
    endcoord[2] = (0.0, -h / 2.0);
    endcoord[3] = (0.0, -h / 2.0);
    return endcoord;
}

//intialize DNA and cells
fn playground_pre_occam(app: &App) -> Vec<Cell> {
    let mut brin = Vec::new();
    brin.push(DNA {
        beam: Rect {
            x: Range {
                start: -100.0,
                end: 100.0,
            },
            y: Range {
                start: 100.0,
                end: -100.0,
            },
        },
        speed: 0,
        c: Hsla::new(0.0, 1.0, 0.5, 1.0),
    });
    let mut life = Vec::new();
    life.push(Cell {
        horizon: 100.0,
        chromosomes: brin,
    });
    return life;
}

//intialize DNA and cells
fn playground_occam(app: &App) -> Vec<Cell> {
    let h = app.window_rect().h();
    let w = app.window_rect().w();
    let mut life = Vec::new();
    let mut dsb = h / 2.0; // for the y-axis
    while dsb > -h / 2.0 {
        let mut play = Vec::new();
        let off_y = random_range(13.0, 39.0);
        let slow = random_range(0, 2);
        let velo;
        let mut sj; //for the x-axis
        if slow == 0 {
            velo = random_range(141, 271);
            sj = 300.0 * w;
        } else {
            velo = random_range(1, 41);
            sj = 200.0 * w;
        }

        while sj > -w / 2.0 {
            let off_x;
            if slow == 0 {
                off_x = random_range(47.0, 83.0);
            } else {
                off_x = random_range(101.0, 177.0);
            }
            let cuba = random_range(0, 111);
            let zombie;
            let lazybone;
            if cuba < 3 {
                zombie = 0.5;
                lazybone = 1.0;
            } else {
                zombie = 1.0; //random_range(0.4, 1.0);
                lazybone = random_range(0.2, 0.6);
            }
            let actual_off_y = (off_y - random_range(0.0, off_y)) / 2.0;
            play.push(DNA {
                beam: Rect {
                    x: Range {
                        start: sj - off_x,
                        end: sj,
                    },
                    y: Range {
                        start: dsb - actual_off_y,
                        end: dsb - off_y + actual_off_y,
                    },
                },
                speed: velo,
                c: Hsla::new(230.0 / 360.0, 1.0, zombie, lazybone),
            });
            sj = sj - off_x - random_range(0.0, 23.0);
        }
        life.push(Cell {
            horizon: dsb,
            chromosomes: play,
        });
        dsb = dsb - off_y - random_range(9.0, 13.0)
    }
    return life;
}

fn update(_app: &App, model: &mut Model, _update: Update) {
    if model.count >= model.startpreoccam && model.count < model.endpreoccam {
        update_pre_occam(model);
    }

    if model.count >= model.startoccam && model.count < model.endoccam {
        update_occam_reg(model);
    }

    if model.count >= model.startoccamspeed && model.count < model.endoccamspeed {
        update_occam_speed(model);
    }
    if model.count == model.endoccamspeed {
        println!("stop increase speed");
    }
    if model.count == model.startoccamspeed {
        println!("start increase speed");
    }

    if model.count >= model.startoccamslow && model.count < model.endoccamslow {
        update_occam_slow(model);
    }
    if model.count == model.endoccamslow {
        println!("stop decrease speed");
    }
    if model.count == model.startoccamslow {
        println!("start decrease speed");
    }

    if model.count >= model.startoccamcol && model.count < model.endoccamcol {
        update_occam_col(model);
    }
    if model.count == model.endoccamcol {
        println!("stop  color changes");
    }
    if model.count == model.startoccamcol {
        println!("start  color changes");
    }

    if model.count >= model.startoccamcolfast && model.count < model.endoccamcolfast {
        update_occam_col_fast(model);
    }
    if model.count == model.endoccamcolfast {
        println!("stop fast color changes");
    }
    if model.count == model.startoccamcolfast {
        println!("start fast color changes");
    }

    if model.count >= model.endoccamcolfast {
        update_occam_col(model);
    }

    if model.count > model.startendoccam {
        close(model);
    }

    model.count += 1;
}

fn close(model: &mut Model) {
    let closing_speed = 5.0;
    model.end[0].0 -= closing_speed;
    model.end[1].0 += closing_speed;
    model.end[2].0 -= closing_speed;
    model.end[3].0 += closing_speed;
}

fn update_pre_occam(model: &mut Model) {
    //before 42, no update
    if model.count >= 84 && model.count < 296{
        for baldessari in &mut model.pre_occam {
            for john in &mut baldessari.chromosomes {
                if model.count == 295 {
                    john.speed = 3;
                    john.c = hsla(0.0, 1.0, 1.0, 1.0);
                } else {
                    if model.count < 184 {
                        john.c.lightness-=0.01;
                    } else {
                        let bw = random_range(0, 2);
                        if bw == 1 {
                            john.c = hsla(0.0, 1.0, 1.0, 1.0);
                        } else {
                            john.c = hsla(0.0, 0.0, 0.0, 1.0);
                        }
                    }
                }
            }
        }
    }
    if model.count >= 296 && model.count < model.endpreoccam {
        for baldessari in &mut model.pre_occam {
            for john in &mut baldessari.chromosomes {
                john.beam.x.start -= john.speed as f32;
                john.beam.x.end -= john.speed as f32;
            }
        }
    }
}

fn update_occam_col_fast(model: &mut Model) {
    for baldessari in &mut model.occam {
        for john in &mut baldessari.chromosomes {
            let bw = random_range(0, 17);
            if bw == 1 {
                john.c = hsla(0.0, 1.0, 1.0, 1.0);
            }
            if bw == 0 {
                john.c = hsla(0.0, 0.0, 0.0, 1.0);
            }
            if bw > 1 {
                john.c = hsla(
                    random_range(50.0, 230.0) / 360.0,
                    1.0,
                    0.5,
                    random_range(0.92, 1.0),
                );
            }
        }
    }
}

fn update_occam_col(model: &mut Model) {
    for baldessari in &mut model.occam {
        for john in &mut baldessari.chromosomes {
            if random_range(0, 72) == 1 {
                john.c = hsla(
                    random_range(50.0, 230.0) / 360.0,
                    1.0,
                    0.5,
                    random_range(0.92, 1.0),
                );
            }
        }
    }
}

fn update_occam_slow(model: &mut Model) {
    for baldessari in &mut model.occam {
        for john in &mut baldessari.chromosomes {
            john.speed -= 1;
        }
    }
}

fn update_occam_speed(model: &mut Model) {
    for baldessari in &mut model.occam {
        for john in &mut baldessari.chromosomes {
            john.speed += 1;
        }
    }
}

fn update_occam_reg(model: &mut Model) {
    for baldessari in &mut model.occam {
        for john in &mut baldessari.chromosomes {
            john.beam.x.start -= john.speed as f32;
            john.beam.x.end -= john.speed as f32;
        }
    }
}

fn view(app: &App, model: &Model, frame: Frame) {
    let h = app.window_rect().h();
    let w = app.window_rect().w();
    let draw = app.draw();
    draw.background().color(BLACK);
    if model.count >= model.startpreoccam && model.count < model.endpreoccam {
        view_pre_occam(model, &draw);
    }
    if model.count >= model.startoccam && model.count < model.endoccam {
        view_occam(model, &draw);
    }
    if model.count >= model.startendoccam {
        close_occam(model, &draw);
    }
    draw.to_frame(app, &frame).unwrap();
}

fn close_occam(model: &Model, draw: &Draw) {
    let point1 = pt2(model.end[0].0, model.end[0].1);
    let point2 = pt2(model.end[1].0, model.end[1].1);
    let point3 = pt2(model.end[2].0, model.end[2].1);
    let point4 = pt2(model.end[3].0, model.end[3].1);
    draw.tri()
        .points(point1, point2, pt2(0.0, 0.0))
        .color(hsl(0.0, 0.0, 0.0));
    draw.tri()
        .points(point3, point4, pt2(0.0, 0.0))
        .color(hsl(0.0, 0.0, 0.0));
}

fn view_pre_occam(model: &Model, draw: &Draw) {
    for baldessari in &model.pre_occam {
        for john in &baldessari.chromosomes {
            let r = john.beam;
            draw.rect().x_y(r.x(), r.y()).w_h(r.w(), r.h()).color(hsla(
                john.c.hue.to_degrees(),
                john.c.saturation,
                john.c.lightness,
                john.c.alpha,
            ));
        }
    }
}

fn view_occam(model: &Model, draw: &Draw) {
    for baldessari in &model.occam {
        for john in &baldessari.chromosomes {
            let r = john.beam;
            draw.rect().x_y(r.x(), r.y()).w_h(r.w(), r.h()).color(hsla(
                john.c.hue.to_degrees(),
                john.c.saturation,
                john.c.lightness,
                john.c.alpha,
            ));
        }
    }
}
