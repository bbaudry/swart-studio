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
    spin: Vec<Spin>,
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
        startoccam: 1, endoccam: 640,
        startcamel: 412, endcamel: 640,
        startcrispr: 2084, endcrispr: 3000,
        startspin:640,endspin:2084,
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

//intialize DNA and cells
fn playground_occam(app: &App) -> Vec<Cell> {
    let h = app.window_rect().h();
    let w = app.window_rect().w();
    let mut life =Vec::new();
    let mut dsb = h / 2.0;
    while dsb > -h / 2.0 {
        let mut play = Vec::new();
        let off_y = random_range(21.0, 49.0);
        let slow = random_range(0, 2);
        let velo;
        let mut sj;
        if slow == 0 {
            velo = random_range(311, 391);
            sj = 300.0 * w;
        } else {
            velo = random_range(11, 91);
            sj = 200.0 * w;
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
            sj = sj - off_x - random_range(11.0, 17.0);
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
        if random_range(0,17)==1 {add_sector(baldessari);}
    }
}

fn add_sector(roulette: &mut Spin){
    let mr = roulette.rad_max;
    let apollo=random_range(mr/10.0,mr); //for the rad_in of the new sectors added in the roulette
    let start = random_range(0.0, PI);
    let mut eno=Vec::new();
    let c;
    if random_range(0,40)<35 {
    c= Hsla::new(230.0 / 360.0, 1.0, 1.0, 0.5);}
    else {c= Hsla::new(230.0 / 360.0, 1.0, 0.5, 0.5);}
    eno.push((start,c,start+(2.0*PI/3.0)));
    eno.push((start+(2.0*PI/3.0),c,start+(4.0*PI/3.0)));
    eno.push((start+(4.0*PI/3.0),c,start));
    let c;
    if random_range(0,2)==1 {c=true;}
    else {c=false;}
    roulette.petals.push(
        Wheel{
            rad_in:apollo,
            rad_out:apollo+42.0,
            sectors:eno,
            clock:c,
            speed:PI/random_range(42.0,142.0),
        }
    );
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
    if model.count >= model.startcamel && model.count < model.endcamel {
        if random_range(0, 11)==1{
            draw.rect()
            .color(hsl(0.0,1.0,0.5))
            .x_y(0.0, 0.0)
            .w_h(w/2.0, w/2.0);
            draw.ellipse()
            .radius(w/4.0)
            .x_y(0.0, 0.0)
            .color(hsl(0.0,1.0,0.0));
        }
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
    draw.to_frame(app, &frame).unwrap();
}
