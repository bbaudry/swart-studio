//https://youtu.be/v0Qp7eWVyes
use std::time::Duration;
use rodio::{OutputStream,Decoder,Sink};
use rodio::source::{SineWave, Source};

struct wavetableosc{
    samplerate : u32,
    wavetable : Vec<f32>,
    index : f32,
    indexincrement : f32,
}

impl wavetableosc{
    fn new(sr:u32,wt:Vec<f32>) -> wavetableosc{
        return wavetableosc{
            samplerate:sr,
            wavetable:wt,
            index:0.0,
            indexincrement: 0.0,
        };
    }

    fn setfreq (&mut self,freq:f32){
        self.indexincrement = freq * self.wavetable.len() as f32 / self.samplerate as f32;
    }

    fn getsample (&mut self) -> f32{
        let sample = self.lerp();
        self.index += self.indexincrement;
        self.index %= self.wavetable.len() as f32;
        return  sample;
    }

    fn lerp(&self) -> f32{
        let truncatedindex = self.index as usize;
        let nextindex = (truncatedindex + 1) % self.wavetable.len();
        let nextindexwei = self.index - truncatedindex as f32;
        let truncatedindexwei = 1.0 - nextindexwei;
        return  truncatedindexwei * self.wavetable[truncatedindex] + nextindexwei * self.wavetable[nextindex];
    }
}

impl Iterator for wavetableosc{
    type Item = f32;
    fn next(&mut self) -> Option<f32>{
        return Some(self.getsample());
    }
}

impl  Source for wavetableosc {
    fn channels(&self) -> u16 {
        return 1;
    }

    fn sample_rate(&self) -> u32 {
        return self.samplerate;
    }

    fn current_frame_len(&self) -> Option<usize> {
        return None;
    }

    fn total_duration(&self) -> Option<Duration> {
        return None;
    }
}


fn main(){
    
    let wavetablesize = 64;
    let mut wavetable: Vec<f32> = Vec::with_capacity(wavetablesize);
    for n in 0..wavetablesize{
        wavetable.push((2.0 * std::f32::consts::PI * n as f32 / wavetablesize as f32).sin())
    }
    let mut osc = wavetableosc::new(44100,wavetable);
    osc.setfreq(440.0); 

    let (_stream, stream_handle) = OutputStream::try_default().unwrap();
    //let _result = stream_handle.play_raw(osc.convert_samples());
    //std::thread::sleep(Duration::from_secs(5));


    let sink = Sink::try_new(&stream_handle).unwrap();

    // Add a dummy source of the sake of the example. .take_duration(Duration::from_secs_f32(25.0))
    let source = SineWave::new(440.0).amplify(0.15);
    sink.append(source);

    // The sound plays in a separate thread. This call will block the current thread until the sink
    // has finished playing all its queued sounds.
    sink.sleep_until_end();

}
