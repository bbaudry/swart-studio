//ws://localhost:9222/devtools/page/24C488F0B6682D43EA71B6911DEE77C1
use tungstenite::*;
use url::*;

pub fn main(){

    let (mut socket, response) =
        connect(Url::parse("ws://localhost:9222/devtools/page/24C488F0B6682D43EA71B6911DEE77C1").unwrap()).expect("Can't connect");

    println!("Connected to the server");
    println!("Response HTTP code: {}", response.status());
    println!("Response contains the following headers:");
    for (ref header, _value) in response.headers() {
        println!("* {}", header);
    }

    // This enables the network event listener
    // socket.write_message("{\"id\": 1, \"method\": \"Network.enable\"}".into()).unwrap();
    // This enables the performance event listener
    socket.write_message("{\"id\": 1, \"method\": \"Profiler.enable\" }".into()).unwrap();

    //socket.write_message("{\"id\": 3, \"method\": \"Runtime.enable\" }".into()).unwrap();

    loop {
        socket.write_message("{\"id\": 2, \"method\": \"Profiler.start\" }".into()).unwrap();
        std::thread::sleep(std::time::Duration::from_secs(10));
        socket.write_message("{\"id\": 3, \"method\": \"Profiler.stop\" }".into()).unwrap();
        let msg = socket.read_message().expect("Error reading message");
        println!("{}", msg);
    }
}