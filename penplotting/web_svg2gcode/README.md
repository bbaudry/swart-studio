# Web SVG2GCODE

This crate is meant to create a JS-Wasm bridge for SVG to GCODE encoding. The `lib.rs` contains a `svg2gcode` function that receives a SVG content as string and return the gcode encoding. For the gcode encoding, we use the `svg2gcode` crate.

## Requirements

- Install wasm-pack, `cargo install wasm-pack`

## How to build

- Build the project for web usage, `wasm-pack build --target web`
- Collect the JS + Wasm code in the `pkg` folder

## How to use it

In your page copy and integrate the following code as a script. See `plottable001.html` for a full integration example.

```js
    import init, { svg2gcode } from "./pkg/simplesvg.js";
    init().then(() => {
        let svg_content = <read_from_html_element>;
        console.log(svg_content);
        console.log("Calling the converter");
        let gcode = svg2gcode(svg_content);
        console.log(gcode);
    });
```