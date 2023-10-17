use wasm_bindgen::prelude::*;
use svg2gcode::SupportedFunctionality;
use svg2gcode::Machine;
use svg2gcode::ConversionOptions;
use svg2gcode::ConversionConfig;
use svgtypes::{Length, LengthUnit};
use svg2gcode::svg2program;

use g_code::emit::FormatOptions;
use g_code::emit::format_gcode_fmt;


#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

fn get_actual(
    input: &str,
    circular_interpolation: bool,
    dimensions: [Option<Length>; 2],
) -> String {
    log(&format!("len {}", input.len()));
    let config = ConversionConfig::default();
    let options = ConversionOptions { dimensions };
    let document = roxmltree::Document::parse(input);

    match document{
        Ok(document) => {

            log("Calling machine");

            let machine = Machine::new(
                SupportedFunctionality {
                    circular_interpolation,
                },
                None,
                None,
                None,
                None,
            );
            let program = svg2program(&document, &config, options, machine);
            log("Formatting program machine");
        
            let mut acc = String::new();
            format_gcode_fmt(&program, FormatOptions::default(), &mut acc).unwrap();
            acc
        }
        Err(e) => {
            log(&format!("Error ocurred {}", e));
            panic!("error")
        }
    }
}

#[wasm_bindgen]
pub fn svg2gcode(svg_content: &str) -> String {
    // We call svg2gcode
    log("Starting inside Wasm");
    let actual = get_actual(svg_content, true, [None; 2]);
    log("Encoding done inside Wasm");
    actual
}