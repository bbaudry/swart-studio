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

    socket.write_message(Message::Text("Hello WebSocket".into())).unwrap();
    loop {
        let msg = socket.read_message().expect("Error reading message");
        println!("Received: {}", msg);
    }
}