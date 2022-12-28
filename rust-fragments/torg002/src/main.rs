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

struct DNA {
    beam: Rect,
    speed: i32,
    c: Hsla,
}

struct Cell{ //one string of 'DNA', all situated on the same y axis
    horizon: f32,
    chromosomes: Vec<DNA>,
}


struct Model {
    occam: Vec<Cell>, //data for rectangles moving from right to left
    count: i32,
    startoccam: i32,
    endoccam: i32,
    startoccamspeed:i32,
    endoccamspeed:i32,
    startoccamcol:i32,
    endoccamcol:i32,
    startoccamcolfast:i32,
    endoccamcolfast:i32,
}

fn model(app: &App) -> Model {
    app.new_window().size(1000, 1000).build().unwrap();
    Model {
        occam: playground_occam(app),
        count: 0,
        startoccamspeed:0,
        endoccamspeed:200,    
        startoccam:0,
        endoccam:1048,
        startoccamcol:111,
        endoccamcol:142,
        startoccamcolfast:142,
        endoccamcolfast:777,
    }
}

//intialize DNA and cells
fn playground_occam(app: &App) -> Vec<Cell> {
    let h = app.window_rect().h();
    let w = app.window_rect().w();
    let mut life =Vec::new();
    let mut dsb = h / 2.0;
    while dsb > -h / 2.0 {
        let mut play = Vec::new();
        let off_y = random_range(7.0, 29.0);
        let slow = random_range(0, 2);
        let velo;
        let mut sj;
        if slow == 0 {
            velo = random_range(141, 271);//random_range(291, 321);
            sj = 300.0 * w;
        } else {
            velo = random_range(1, 41);//random_range(151, 191);
            sj = 200.0 * w;
        }

        while sj > 0.0 {
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
                zombie = 1.0;
                lazybone = random_range(0.0, 0.5);
            }
            play.push(DNA {
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
            sj = sj - off_x - random_range(9.0, 13.0);
        }
        life.push(Cell{
            horizon: dsb,
            chromosomes: play,
        }

        );
        dsb = dsb - off_y - random_range(17.0, 23.0)
    }
    return life;
}

fn update(_app: &App, model: &mut Model, _update: Update) {
    if model.count >= model.startoccamspeed && model.count < model.endoccamspeed {
        update_occam_speed(model);
    }
    if model.count >= model.startoccam && model.count < model.endoccam {
        update_occam_reg(model);
    }
    if model.count >= model.startoccamcol && model.count < model.endoccamcol {
        update_occam_col(model);
    }
    if model.count >= model.startoccamcolfast && model.count < model.endoccamcolfast {
        update_occam_col_fast(model);
    }
    model.count += 1;
}

fn update_occam_col_fast(model: &mut Model) {
    for baldessari in &mut model.occam {
        for john in &mut baldessari.chromosomes{
            let bw=random_range(0,17);
            if bw==1{
                john.c = hsla(0.0,1.0,1.0,1.0);
            }
            if bw==0{
                john.c = hsla(0.0,0.0,0.0,1.0);
            }
            if bw>1{
                john.c = hsla(random_range(50.0,230.0)/360.0,1.0,0.5,random_range(0.92,1.0));
    
            }
        }
    }
}

fn update_occam_col(model: &mut Model) {
    for baldessari in &mut model.occam {
        for john in &mut baldessari.chromosomes{
            if random_range(0,72)==1 {
                john.c = hsla(random_range(50.0,230.0)/360.0,1.0,0.5,random_range(0.92,1.0));
            }
        }
    }
}

fn update_occam_speed(model: &mut Model) {
    for baldessari in &mut model.occam {
        for john in &mut baldessari.chromosomes{
            john.speed+=1;
        }
    }
}

fn update_occam_reg(model: &mut Model) {
    for baldessari in &mut model.occam {
        for john in &mut baldessari.chromosomes{
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
    if model.count >= model.startoccam && model.count < model.endoccam {
        view_occam(model,&draw);
    }
    draw.to_frame(app, &frame).unwrap();
}


fn view_occam(model : &Model, draw : &Draw){
    for baldessari in &model.occam {
        for john in &baldessari.chromosomes{
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