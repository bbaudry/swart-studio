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



struct Wheel{
    rad_in:f32,
    rad_out:f32,
    sectors:Vec<(f32,Hsla,f32)>, // this should be a series of angles between 0 and 2*PI
    clock:bool,
    speed:f32,
}

struct Spin{
    cx:f32, cy:f32, // center of the spin
    rad_max:f32,
    rad_largest:f32, //the largest rad_in among the petals
    petals:Vec<Wheel>
}

struct Model {
    spin: Vec<Spin>,
    growspin:bool,
    startspin:i32,endspin:i32,
    startblack:i32,endblack:i32,
    startasynch:i32,endasynch:i32,
    startrevert:i32,endrevert:i32,
    startmoreblack:i32,endmoreblack:i32,
    count: i32,
}

fn model(app: &App) -> Model {
    app.new_window().size(1000, 1000).build().unwrap();
    Model {
        spin: playground_spin(app),
        startspin:0,endspin:4224,
        startblack:0,endblack:0,
        startasynch:0,endasynch:0,
        startrevert:0,endrevert:0,
        startmoreblack:0,endmoreblack:0,
        growspin:true,
        count: 0,
    }
}

fn playground_spin(app: &App) -> Vec<Spin> {
    let w = app.window_rect().w();
    let RMax = w/2.0;
    let mut play = Vec::new(); //for the general list of Spins, for now 1
    let mut fire = Vec::new();//for the list of wheels
    fire.push(init_wheel(0.01*RMax,0.01*RMax+1.0));
    play.push(
        Spin{
            cx:0.0,
            cy:0.0,
            rad_max:RMax,
            rad_largest:0.01*RMax,
            petals:fire,
        }
    );
    return play;
}

fn init_wheel(rin:f32,rout:f32) -> Wheel{
    let mut drone = Vec::new();// for the list of sectors in the wheels
    drone.push((0.0,Hsla::new(230.0 / 360.0, 1.0, 0.5, 0.5),2.0*PI/3.0));
    drone.push((2.0*PI/3.0,Hsla::new(230.0 / 360.0, 1.0, 0.5, 0.5),4.0*PI/3.0));
    drone.push((4.0*PI/3.0,Hsla::new(230.0 / 360.0, 1.0, 0.5, 0.5),0.0));

    return Wheel{
        rad_in:rin,
        rad_out:rout,
        sectors:drone,
        clock:false,
        speed:PI/1000.0,
    }
}

fn update(_app: &App, model: &mut Model, _update: Update) {
    if !grow_spin(model) && model.growspin { 
        model.startspin=model.count; 
        model.endspin+=model.count;
        model.growspin=false;
        model.startblack=model.endspin/10+model.count;
        model.endblack=2*model.endspin/10+model.count;
        model.startasynch=2*model.endspin/10+model.count;
        model.endasynch=5*model.endspin/10+model.count;
        model.startrevert=5*model.endspin/10+model.count;
        model.endrevert=6*model.endspin/10+model.count;
        model.startmoreblack=6*model.endspin/10+model.count;
        model.endmoreblack=9*model.endspin/10+model.count;
    }
    if model.count<model.endspin && !model.growspin {
        update_spin(model);
    }
    if model.count>=model.startblack && model.count<model.endblack &&  random_range(1,41) < 3 {
        one_black_wheel(model)
    }
    if model.count>=model.startasynch && model.count<model.endasynch &&  random_range(1,41) < 13 {
        one_asynch_wheel(model)
    }
    if model.count>=model.startrevert && model.count<model.endrevert &&  random_range(1,41) < 7 {
        one_revert_wheel(model)
    }
    if model.count>=model.startmoreblack && model.count<model.endmoreblack &&  random_range(1,41) < 5 {
        one_less_wheel(model)
    }

    model.count += 1;
}
//        baldessari.petals.remove(cory);

fn one_less_wheel(model: &mut Model){
    for baldessari in &mut model.spin {
        let lingus = baldessari.petals.len();
        let cory = random_range(2, lingus-1);
        baldessari.petals.remove(cory);
    } 
}


fn one_revert_wheel(model: &mut Model){
    for baldessari in &mut model.spin {
        let lingus = baldessari.petals.len();
        let cory = random_range(0, lingus);
        baldessari.petals[cory].clock=!baldessari.petals[cory].clock;
    } 
}

fn one_asynch_wheel(model: &mut Model){
    for baldessari in &mut model.spin {
        let lingus = baldessari.petals.len();
        let cory = random_range(0, lingus);
        baldessari.petals[cory].speed+=random_range(PI/999.0,PI/500.0);
    }  
}
fn one_black_wheel(model: &mut Model){
    for baldessari in &mut model.spin {
        let lingus = baldessari.petals.len();
        let cory = random_range(0, lingus);
        //let bob = &baldessari.petals[cory];
        for vera in  &mut baldessari.petals[cory].sectors{
            vera.1.lightness=0.0;
            vera.1.saturation=0.0;
        }
    } 
}

fn grow_spin(model: &mut Model) -> bool{
    let mut grow = false;
    for baldessari in &mut model.spin {
        if baldessari.rad_largest<baldessari.rad_max{
            //add a petal
            let r_in = baldessari.rad_largest + 3.0; //the constant controls how much space between each wheel
            baldessari.petals.push(init_wheel(r_in, r_in+1.0));
            baldessari.rad_largest=r_in;
            grow = true;
        }
    }
    return grow;
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
    }
}

fn view(app: &App, model: &Model, frame: Frame) {
    let h = app.window_rect().h();
    let w = app.window_rect().w();
    let draw = app.draw();
    draw.background().color(BLACK);
    view_spin(model,&draw);
    if model.count > model.endspin{
        view_flash_spin(model,&draw);
    }
    draw.to_frame(app, &frame).unwrap();
}

fn view_flash_spin(model: &Model,draw: &Draw){
    for baldessari in &model.spin {
        let lingus = baldessari.petals.len();
        let cory = random_range(0, lingus);
        let vera = &baldessari.petals[cory];
        let jarrett = pt2(baldessari.cx+vera.rad_in*vera.sectors[0].0.cos(), baldessari.cy+vera.rad_in*vera.sectors[0].0.sin());
        let peacock = pt2(baldessari.cx+vera.rad_in*vera.sectors[1].0.cos(), baldessari.cy+vera.rad_in*vera.sectors[1].0.sin());
        let johnette = pt2(baldessari.cx+vera.rad_in*vera.sectors[2].0.cos(), baldessari.cy+vera.rad_in*vera.sectors[2].0.sin());
        draw.tri()
            .points(jarrett, peacock, johnette)
            .color(hsl(0.0,1.0,1.0));
    }
}
fn view_spin(model: &Model,draw: &Draw){
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