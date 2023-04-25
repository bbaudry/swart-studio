//ws://localhost:9222/devtools/page/24C488F0B6682D43EA71B6911DEE77C1
use serde::{Serialize, Deserialize};
use tungstenite::*;
use url::*;

#[derive(serde::Deserialize, Debug)]
pub struct PositionTickInfo {

    pub line: i64,
    pub ticks: i64,
}
#[derive(serde::Deserialize, Debug)]
pub struct CallFrame {
    pub functionName: String,
    pub scriptId: String,
    pub url: String,
    pub lineNumber: i64,
    pub columnNumber: i64
}

#[derive(serde::Deserialize, Debug)]
pub struct ProfileNode {
    pub id: i64,
    pub callFrame: CallFrame,
    pub hitCount: i64,
    pub children: Option<Vec<i64>>,
    pub deoptReason: Option<String>,
    pub positionTicks: Option<Vec<PositionTickInfo>> 

}
#[derive(serde::Deserialize, Debug)]

pub struct Profile {

    pub nodes: Vec<ProfileNode>,

    pub startTime: i64,
    pub endTime: i64,
    pub samples: Vec<i64>,
    pub timeDeltas: Vec<i64>
}

#[derive(serde::Deserialize, Debug)]
pub struct ProfileWrapper {

    pub profile: Profile
}

#[derive(serde::Deserialize, Debug)]
pub struct GenericResult<T> 
{
    pub id: i64,
    pub result: Option<T>
}

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
    // socket.write_message("{\"id\": 1, \"method\": \"Profiler.enable\" }".into()).unwrap();
    socket.write_message(serde_json::json!({
        "id": 1i32,
        "method": "Profiler.enable"
    }).to_string().into()).unwrap();

    //socket.write_message("{\"id\": 3, \"method\": \"Runtime.enable\" }".into()).unwrap();

    loop {
        socket.write_message(serde_json::json!({
            "id": 2i32,
            "method": "Profiler.start"
        }).to_string().into()).unwrap();
        std::thread::sleep(std::time::Duration::from_secs(10));

        socket.write_message(serde_json::json!({
            "id": 3i32,
            "method": "Profiler.stop"
        }).to_string().into()).unwrap();

        let msg = socket.read_message().expect("Error reading message");
        let msg = msg.to_string();
        let result_obj = serde_json::from_str::<GenericResult<ProfileWrapper>>(&msg);
        match result_obj {
            Ok(result_obj) => {

                if let Some(result) = result_obj.result {
                    // println!("{:?}", result);
                    for node in result.profile.nodes {
                        println!("{}", node.callFrame.url);
                    }
                } 
            }
            Err(e) => {
                if msg.len() > 59 {
                    println!("msg {}", &msg[..59]);
                }
                println!("{}", e);
            }
        }
    }
}