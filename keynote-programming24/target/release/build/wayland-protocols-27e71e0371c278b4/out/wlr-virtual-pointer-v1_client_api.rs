use std::os::raw::{c_char, c_void};
const NULLPTR: *const c_void = 0 as *const c_void;
static mut types_null: [*const sys::common::wl_interface; 5] = [
    NULLPTR as *const sys::common::wl_interface,
    NULLPTR as *const sys::common::wl_interface,
    NULLPTR as *const sys::common::wl_interface,
    NULLPTR as *const sys::common::wl_interface,
    NULLPTR as *const sys::common::wl_interface,
];
#[doc = "virtual pointer\n\nThis protocol allows clients to emulate a physical pointer device. The\nrequests are mostly mirror opposites of those specified in wl_pointer."]
pub mod zwlr_virtual_pointer_v1 {
    use super::sys::client::*;
    use super::sys::common::{wl_argument, wl_array, wl_interface, wl_message};
    use super::{
        smallvec, types_null, AnonymousObject, Argument, ArgumentType, Interface, Main, Message,
        MessageDesc, MessageGroup, Object, ObjectMetadata, Proxy, NULLPTR,
    };
    use std::os::raw::c_char;
    #[repr(u32)]
    #[derive(Copy, Clone, Debug, PartialEq)]
    #[non_exhaustive]
    pub enum Error {
        #[doc = "client sent invalid axis enumeration value"]
        InvalidAxis = 0,
        #[doc = "client sent invalid axis source enumeration value"]
        InvalidAxisSource = 1,
    }
    impl Error {
        pub fn from_raw(n: u32) -> Option<Error> {
            match n {
                0 => Some(Error::InvalidAxis),
                1 => Some(Error::InvalidAxisSource),
                _ => Option::None,
            }
        }
        pub fn to_raw(&self) -> u32 {
            *self as u32
        }
    }
    #[derive(Debug)]
    #[non_exhaustive]
    pub enum Request {
        #[doc = "pointer relative motion event\n\nThe pointer has moved by a relative amount to the previous request.\n\nValues are in the global compositor space."]
        Motion { time: u32, dx: f64, dy: f64 },
        #[doc = "pointer absolute motion event\n\nThe pointer has moved in an absolute coordinate frame.\n\nValue of x can range from 0 to x_extent, value of y can range from 0\nto y_extent."]
        MotionAbsolute {
            time: u32,
            x: u32,
            y: u32,
            x_extent: u32,
            y_extent: u32,
        },
        #[doc = "button event\n\nA button was pressed or released."]
        Button {
            time: u32,
            button: u32,
            state: super::wl_pointer::ButtonState,
        },
        #[doc = "axis event\n\nScroll and other axis requests."]
        Axis {
            time: u32,
            axis: super::wl_pointer::Axis,
            value: f64,
        },
        #[doc = "end of a pointer event sequence\n\nIndicates the set of events that logically belong together."]
        Frame,
        #[doc = "axis source event\n\nSource information for scroll and other axis."]
        AxisSource {
            axis_source: super::wl_pointer::AxisSource,
        },
        #[doc = "axis stop event\n\nStop notification for scroll and other axes."]
        AxisStop {
            time: u32,
            axis: super::wl_pointer::Axis,
        },
        #[doc = "axis click event\n\nDiscrete step information for scroll and other axes.\n\nThis event allows the client to extend data normally sent using the axis\nevent with discrete value."]
        AxisDiscrete {
            time: u32,
            axis: super::wl_pointer::Axis,
            value: f64,
            discrete: i32,
        },
        #[doc = "destroy the virtual pointer object\n\n\n\nThis is a destructor, once sent this object cannot be used any longer."]
        Destroy,
    }
    impl super::MessageGroup for Request {
        const MESSAGES: &'static [super::MessageDesc] = &[
            super::MessageDesc {
                name: "motion",
                since: 1,
                signature: &[
                    super::ArgumentType::Uint,
                    super::ArgumentType::Fixed,
                    super::ArgumentType::Fixed,
                ],
                destructor: false,
            },
            super::MessageDesc {
                name: "motion_absolute",
                since: 1,
                signature: &[
                    super::ArgumentType::Uint,
                    super::ArgumentType::Uint,
                    super::ArgumentType::Uint,
                    super::ArgumentType::Uint,
                    super::ArgumentType::Uint,
                ],
                destructor: false,
            },
            super::MessageDesc {
                name: "button",
                since: 1,
                signature: &[
                    super::ArgumentType::Uint,
                    super::ArgumentType::Uint,
                    super::ArgumentType::Uint,
                ],
                destructor: false,
            },
            super::MessageDesc {
                name: "axis",
                since: 1,
                signature: &[
                    super::ArgumentType::Uint,
                    super::ArgumentType::Uint,
                    super::ArgumentType::Fixed,
                ],
                destructor: false,
            },
            super::MessageDesc {
                name: "frame",
                since: 1,
                signature: &[],
                destructor: false,
            },
            super::MessageDesc {
                name: "axis_source",
                since: 1,
                signature: &[super::ArgumentType::Uint],
                destructor: false,
            },
            super::MessageDesc {
                name: "axis_stop",
                since: 1,
                signature: &[super::ArgumentType::Uint, super::ArgumentType::Uint],
                destructor: false,
            },
            super::MessageDesc {
                name: "axis_discrete",
                since: 1,
                signature: &[
                    super::ArgumentType::Uint,
                    super::ArgumentType::Uint,
                    super::ArgumentType::Fixed,
                    super::ArgumentType::Int,
                ],
                destructor: false,
            },
            super::MessageDesc {
                name: "destroy",
                since: 1,
                signature: &[],
                destructor: true,
            },
        ];
        type Map = super::ProxyMap;
        fn is_destructor(&self) -> bool {
            match *self {
                Request::Destroy => true,
                _ => false,
            }
        }
        fn opcode(&self) -> u16 {
            match *self {
                Request::Motion { .. } => 0,
                Request::MotionAbsolute { .. } => 1,
                Request::Button { .. } => 2,
                Request::Axis { .. } => 3,
                Request::Frame => 4,
                Request::AxisSource { .. } => 5,
                Request::AxisStop { .. } => 6,
                Request::AxisDiscrete { .. } => 7,
                Request::Destroy => 8,
            }
        }
        fn since(&self) -> u32 {
            match *self {
                Request::Motion { .. } => 1,
                Request::MotionAbsolute { .. } => 1,
                Request::Button { .. } => 1,
                Request::Axis { .. } => 1,
                Request::Frame => 1,
                Request::AxisSource { .. } => 1,
                Request::AxisStop { .. } => 1,
                Request::AxisDiscrete { .. } => 1,
                Request::Destroy => 1,
            }
        }
        fn child<Meta: ObjectMetadata>(
            opcode: u16,
            version: u32,
            meta: &Meta,
        ) -> Option<Object<Meta>> {
            match opcode {
                _ => None,
            }
        }
        fn from_raw(msg: Message, map: &mut Self::Map) -> Result<Self, ()> {
            panic!("Request::from_raw can not be used Client-side.")
        }
        fn into_raw(self, sender_id: u32) -> Message {
            match self {
                Request::Motion { time, dx, dy } => Message {
                    sender_id: sender_id,
                    opcode: 0,
                    args: smallvec![
                        Argument::Uint(time),
                        Argument::Fixed((dx * 256.) as i32),
                        Argument::Fixed((dy * 256.) as i32),
                    ],
                },
                Request::MotionAbsolute {
                    time,
                    x,
                    y,
                    x_extent,
                    y_extent,
                } => Message {
                    sender_id: sender_id,
                    opcode: 1,
                    args: smallvec![
                        Argument::Uint(time),
                        Argument::Uint(x),
                        Argument::Uint(y),
                        Argument::Uint(x_extent),
                        Argument::Uint(y_extent),
                    ],
                },
                Request::Button {
                    time,
                    button,
                    state,
                } => Message {
                    sender_id: sender_id,
                    opcode: 2,
                    args: smallvec![
                        Argument::Uint(time),
                        Argument::Uint(button),
                        Argument::Uint(state.to_raw()),
                    ],
                },
                Request::Axis { time, axis, value } => Message {
                    sender_id: sender_id,
                    opcode: 3,
                    args: smallvec![
                        Argument::Uint(time),
                        Argument::Uint(axis.to_raw()),
                        Argument::Fixed((value * 256.) as i32),
                    ],
                },
                Request::Frame => Message {
                    sender_id: sender_id,
                    opcode: 4,
                    args: smallvec![],
                },
                Request::AxisSource { axis_source } => Message {
                    sender_id: sender_id,
                    opcode: 5,
                    args: smallvec![Argument::Uint(axis_source.to_raw()),],
                },
                Request::AxisStop { time, axis } => Message {
                    sender_id: sender_id,
                    opcode: 6,
                    args: smallvec![Argument::Uint(time), Argument::Uint(axis.to_raw()),],
                },
                Request::AxisDiscrete {
                    time,
                    axis,
                    value,
                    discrete,
                } => Message {
                    sender_id: sender_id,
                    opcode: 7,
                    args: smallvec![
                        Argument::Uint(time),
                        Argument::Uint(axis.to_raw()),
                        Argument::Fixed((value * 256.) as i32),
                        Argument::Int(discrete),
                    ],
                },
                Request::Destroy => Message {
                    sender_id: sender_id,
                    opcode: 8,
                    args: smallvec![],
                },
            }
        }
        unsafe fn from_raw_c(
            obj: *mut ::std::os::raw::c_void,
            opcode: u32,
            args: *const wl_argument,
        ) -> Result<Request, ()> {
            panic!("Request::from_raw_c can not be used Client-side.")
        }
        fn as_raw_c_in<F, T>(self, f: F) -> T
        where
            F: FnOnce(u32, &mut [wl_argument]) -> T,
        {
            match self {
                Request::Motion { time, dx, dy } => {
                    let mut _args_array: [wl_argument; 3] = unsafe { ::std::mem::zeroed() };
                    _args_array[0].u = time;
                    _args_array[1].f = (dx * 256.) as i32;
                    _args_array[2].f = (dy * 256.) as i32;
                    f(0, &mut _args_array)
                }
                Request::MotionAbsolute {
                    time,
                    x,
                    y,
                    x_extent,
                    y_extent,
                } => {
                    let mut _args_array: [wl_argument; 5] = unsafe { ::std::mem::zeroed() };
                    _args_array[0].u = time;
                    _args_array[1].u = x;
                    _args_array[2].u = y;
                    _args_array[3].u = x_extent;
                    _args_array[4].u = y_extent;
                    f(1, &mut _args_array)
                }
                Request::Button {
                    time,
                    button,
                    state,
                } => {
                    let mut _args_array: [wl_argument; 3] = unsafe { ::std::mem::zeroed() };
                    _args_array[0].u = time;
                    _args_array[1].u = button;
                    _args_array[2].u = state.to_raw();
                    f(2, &mut _args_array)
                }
                Request::Axis { time, axis, value } => {
                    let mut _args_array: [wl_argument; 3] = unsafe { ::std::mem::zeroed() };
                    _args_array[0].u = time;
                    _args_array[1].u = axis.to_raw();
                    _args_array[2].f = (value * 256.) as i32;
                    f(3, &mut _args_array)
                }
                Request::Frame => {
                    let mut _args_array: [wl_argument; 0] = unsafe { ::std::mem::zeroed() };
                    f(4, &mut _args_array)
                }
                Request::AxisSource { axis_source } => {
                    let mut _args_array: [wl_argument; 1] = unsafe { ::std::mem::zeroed() };
                    _args_array[0].u = axis_source.to_raw();
                    f(5, &mut _args_array)
                }
                Request::AxisStop { time, axis } => {
                    let mut _args_array: [wl_argument; 2] = unsafe { ::std::mem::zeroed() };
                    _args_array[0].u = time;
                    _args_array[1].u = axis.to_raw();
                    f(6, &mut _args_array)
                }
                Request::AxisDiscrete {
                    time,
                    axis,
                    value,
                    discrete,
                } => {
                    let mut _args_array: [wl_argument; 4] = unsafe { ::std::mem::zeroed() };
                    _args_array[0].u = time;
                    _args_array[1].u = axis.to_raw();
                    _args_array[2].f = (value * 256.) as i32;
                    _args_array[3].i = discrete;
                    f(7, &mut _args_array)
                }
                Request::Destroy => {
                    let mut _args_array: [wl_argument; 0] = unsafe { ::std::mem::zeroed() };
                    f(8, &mut _args_array)
                }
            }
        }
    }
    #[derive(Debug)]
    #[non_exhaustive]
    pub enum Event {}
    impl super::MessageGroup for Event {
        const MESSAGES: &'static [super::MessageDesc] = &[];
        type Map = super::ProxyMap;
        fn is_destructor(&self) -> bool {
            match *self {}
        }
        fn opcode(&self) -> u16 {
            match *self {}
        }
        fn since(&self) -> u32 {
            match *self {}
        }
        fn child<Meta: ObjectMetadata>(
            opcode: u16,
            version: u32,
            meta: &Meta,
        ) -> Option<Object<Meta>> {
            match opcode {
                _ => None,
            }
        }
        fn from_raw(msg: Message, map: &mut Self::Map) -> Result<Self, ()> {
            match msg.opcode {
                _ => Err(()),
            }
        }
        fn into_raw(self, sender_id: u32) -> Message {
            panic!("Event::into_raw can not be used Client-side.")
        }
        unsafe fn from_raw_c(
            obj: *mut ::std::os::raw::c_void,
            opcode: u32,
            args: *const wl_argument,
        ) -> Result<Event, ()> {
            match opcode {
                _ => return Err(()),
            }
        }
        fn as_raw_c_in<F, T>(self, f: F) -> T
        where
            F: FnOnce(u32, &mut [wl_argument]) -> T,
        {
            panic!("Event::as_raw_c_in can not be used Client-side.")
        }
    }
    #[derive(Clone, Eq, PartialEq)]
    pub struct ZwlrVirtualPointerV1(Proxy<ZwlrVirtualPointerV1>);
    impl AsRef<Proxy<ZwlrVirtualPointerV1>> for ZwlrVirtualPointerV1 {
        #[inline]
        fn as_ref(&self) -> &Proxy<Self> {
            &self.0
        }
    }
    impl From<Proxy<ZwlrVirtualPointerV1>> for ZwlrVirtualPointerV1 {
        #[inline]
        fn from(value: Proxy<Self>) -> Self {
            ZwlrVirtualPointerV1(value)
        }
    }
    impl From<ZwlrVirtualPointerV1> for Proxy<ZwlrVirtualPointerV1> {
        #[inline]
        fn from(value: ZwlrVirtualPointerV1) -> Self {
            value.0
        }
    }
    impl std::fmt::Debug for ZwlrVirtualPointerV1 {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            f.write_fmt(format_args!("{:?}", self.0))
        }
    }
    impl Interface for ZwlrVirtualPointerV1 {
        type Request = Request;
        type Event = Event;
        const NAME: &'static str = "zwlr_virtual_pointer_v1";
        const VERSION: u32 = 2;
        fn c_interface() -> *const wl_interface {
            unsafe { &zwlr_virtual_pointer_v1_interface }
        }
    }
    impl ZwlrVirtualPointerV1 {
        #[doc = "pointer relative motion event\n\nThe pointer has moved by a relative amount to the previous request.\n\nValues are in the global compositor space."]
        pub fn motion(&self, time: u32, dx: f64, dy: f64) -> () {
            let msg = Request::Motion {
                time: time,
                dx: dx,
                dy: dy,
            };
            self.0.send::<AnonymousObject>(msg, None);
        }
        #[doc = "pointer absolute motion event\n\nThe pointer has moved in an absolute coordinate frame.\n\nValue of x can range from 0 to x_extent, value of y can range from 0\nto y_extent."]
        pub fn motion_absolute(
            &self,
            time: u32,
            x: u32,
            y: u32,
            x_extent: u32,
            y_extent: u32,
        ) -> () {
            let msg = Request::MotionAbsolute {
                time: time,
                x: x,
                y: y,
                x_extent: x_extent,
                y_extent: y_extent,
            };
            self.0.send::<AnonymousObject>(msg, None);
        }
        #[doc = "button event\n\nA button was pressed or released."]
        pub fn button(&self, time: u32, button: u32, state: super::wl_pointer::ButtonState) -> () {
            let msg = Request::Button {
                time: time,
                button: button,
                state: state,
            };
            self.0.send::<AnonymousObject>(msg, None);
        }
        #[doc = "axis event\n\nScroll and other axis requests."]
        pub fn axis(&self, time: u32, axis: super::wl_pointer::Axis, value: f64) -> () {
            let msg = Request::Axis {
                time: time,
                axis: axis,
                value: value,
            };
            self.0.send::<AnonymousObject>(msg, None);
        }
        #[doc = "end of a pointer event sequence\n\nIndicates the set of events that logically belong together."]
        pub fn frame(&self) -> () {
            let msg = Request::Frame;
            self.0.send::<AnonymousObject>(msg, None);
        }
        #[doc = "axis source event\n\nSource information for scroll and other axis."]
        pub fn axis_source(&self, axis_source: super::wl_pointer::AxisSource) -> () {
            let msg = Request::AxisSource {
                axis_source: axis_source,
            };
            self.0.send::<AnonymousObject>(msg, None);
        }
        #[doc = "axis stop event\n\nStop notification for scroll and other axes."]
        pub fn axis_stop(&self, time: u32, axis: super::wl_pointer::Axis) -> () {
            let msg = Request::AxisStop {
                time: time,
                axis: axis,
            };
            self.0.send::<AnonymousObject>(msg, None);
        }
        #[doc = "axis click event\n\nDiscrete step information for scroll and other axes.\n\nThis event allows the client to extend data normally sent using the axis\nevent with discrete value."]
        pub fn axis_discrete(
            &self,
            time: u32,
            axis: super::wl_pointer::Axis,
            value: f64,
            discrete: i32,
        ) -> () {
            let msg = Request::AxisDiscrete {
                time: time,
                axis: axis,
                value: value,
                discrete: discrete,
            };
            self.0.send::<AnonymousObject>(msg, None);
        }
        #[doc = "destroy the virtual pointer object\n\n\n\nThis is a destructor, you cannot send requests to this object any longer once this method is called."]
        pub fn destroy(&self) -> () {
            let msg = Request::Destroy;
            self.0.send::<AnonymousObject>(msg, None);
        }
    }
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_MOTION_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_MOTION_ABSOLUTE_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_BUTTON_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_AXIS_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_FRAME_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_AXIS_SOURCE_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_AXIS_STOP_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_AXIS_DISCRETE_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_DESTROY_SINCE: u32 = 1u32;
    #[doc = r" C-representation of the messages of this interface, for interop"]
    pub static mut zwlr_virtual_pointer_v1_requests: [wl_message; 9] = [
        wl_message {
            name: b"motion\0" as *const u8 as *const c_char,
            signature: b"uff\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
        wl_message {
            name: b"motion_absolute\0" as *const u8 as *const c_char,
            signature: b"uuuuu\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
        wl_message {
            name: b"button\0" as *const u8 as *const c_char,
            signature: b"uuu\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
        wl_message {
            name: b"axis\0" as *const u8 as *const c_char,
            signature: b"uuf\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
        wl_message {
            name: b"frame\0" as *const u8 as *const c_char,
            signature: b"\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
        wl_message {
            name: b"axis_source\0" as *const u8 as *const c_char,
            signature: b"u\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
        wl_message {
            name: b"axis_stop\0" as *const u8 as *const c_char,
            signature: b"uu\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
        wl_message {
            name: b"axis_discrete\0" as *const u8 as *const c_char,
            signature: b"uufi\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
        wl_message {
            name: b"destroy\0" as *const u8 as *const c_char,
            signature: b"\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
    ];
    #[doc = r" C representation of this interface, for interop"]
    pub static mut zwlr_virtual_pointer_v1_interface: wl_interface = wl_interface {
        name: b"zwlr_virtual_pointer_v1\0" as *const u8 as *const c_char,
        version: 2,
        request_count: 9,
        requests: unsafe { &zwlr_virtual_pointer_v1_requests as *const _ },
        event_count: 0,
        events: NULLPTR as *const wl_message,
    };
}
#[doc = "virtual pointer manager\n\nThis object allows clients to create individual virtual pointer objects."]
pub mod zwlr_virtual_pointer_manager_v1 {
    use super::sys::client::*;
    use super::sys::common::{wl_argument, wl_array, wl_interface, wl_message};
    use super::{
        smallvec, types_null, AnonymousObject, Argument, ArgumentType, Interface, Main, Message,
        MessageDesc, MessageGroup, Object, ObjectMetadata, Proxy, NULLPTR,
    };
    use std::os::raw::c_char;
    #[derive(Debug)]
    #[non_exhaustive]
    pub enum Request {
        #[doc = "Create a new virtual pointer\n\nCreates a new virtual pointer. The optional seat is a suggestion to the\ncompositor."]
        CreateVirtualPointer {
            seat: Option<super::wl_seat::WlSeat>,
        },
        #[doc = "destroy the virtual pointer manager\n\n\n\nThis is a destructor, once sent this object cannot be used any longer."]
        Destroy,
        #[doc = "Create a new virtual pointer\n\nCreates a new virtual pointer. The seat and the output arguments are\noptional. If the seat argument is set, the compositor should assign the\ninput device to the requested seat. If the output argument is set, the\ncompositor should map the input device to the requested output.\n\nOnly available since version 2 of the interface"]
        CreateVirtualPointerWithOutput {
            seat: Option<super::wl_seat::WlSeat>,
            output: Option<super::wl_output::WlOutput>,
        },
    }
    impl super::MessageGroup for Request {
        const MESSAGES: &'static [super::MessageDesc] = &[
            super::MessageDesc {
                name: "create_virtual_pointer",
                since: 1,
                signature: &[super::ArgumentType::Object, super::ArgumentType::NewId],
                destructor: false,
            },
            super::MessageDesc {
                name: "destroy",
                since: 1,
                signature: &[],
                destructor: true,
            },
            super::MessageDesc {
                name: "create_virtual_pointer_with_output",
                since: 2,
                signature: &[
                    super::ArgumentType::Object,
                    super::ArgumentType::Object,
                    super::ArgumentType::NewId,
                ],
                destructor: false,
            },
        ];
        type Map = super::ProxyMap;
        fn is_destructor(&self) -> bool {
            match *self {
                Request::Destroy => true,
                _ => false,
            }
        }
        fn opcode(&self) -> u16 {
            match *self {
                Request::CreateVirtualPointer { .. } => 0,
                Request::Destroy => 1,
                Request::CreateVirtualPointerWithOutput { .. } => 2,
            }
        }
        fn since(&self) -> u32 {
            match *self {
                Request::CreateVirtualPointer { .. } => 1,
                Request::Destroy => 1,
                Request::CreateVirtualPointerWithOutput { .. } => 2,
            }
        }
        fn child<Meta: ObjectMetadata>(
            opcode: u16,
            version: u32,
            meta: &Meta,
        ) -> Option<Object<Meta>> {
            match opcode {
                0 => Some(Object::from_interface::<
                    super::zwlr_virtual_pointer_v1::ZwlrVirtualPointerV1,
                >(version, meta.child())),
                2 => Some(Object::from_interface::<
                    super::zwlr_virtual_pointer_v1::ZwlrVirtualPointerV1,
                >(version, meta.child())),
                _ => None,
            }
        }
        fn from_raw(msg: Message, map: &mut Self::Map) -> Result<Self, ()> {
            panic!("Request::from_raw can not be used Client-side.")
        }
        fn into_raw(self, sender_id: u32) -> Message {
            match self {
                Request::CreateVirtualPointer { seat } => Message {
                    sender_id: sender_id,
                    opcode: 0,
                    args: smallvec![
                        Argument::Object(seat.map(|o| o.as_ref().id()).unwrap_or(0)),
                        Argument::NewId(0),
                    ],
                },
                Request::Destroy => Message {
                    sender_id: sender_id,
                    opcode: 1,
                    args: smallvec![],
                },
                Request::CreateVirtualPointerWithOutput { seat, output } => Message {
                    sender_id: sender_id,
                    opcode: 2,
                    args: smallvec![
                        Argument::Object(seat.map(|o| o.as_ref().id()).unwrap_or(0)),
                        Argument::Object(output.map(|o| o.as_ref().id()).unwrap_or(0)),
                        Argument::NewId(0),
                    ],
                },
            }
        }
        unsafe fn from_raw_c(
            obj: *mut ::std::os::raw::c_void,
            opcode: u32,
            args: *const wl_argument,
        ) -> Result<Request, ()> {
            panic!("Request::from_raw_c can not be used Client-side.")
        }
        fn as_raw_c_in<F, T>(self, f: F) -> T
        where
            F: FnOnce(u32, &mut [wl_argument]) -> T,
        {
            match self {
                Request::CreateVirtualPointer { seat } => {
                    let mut _args_array: [wl_argument; 2] = unsafe { ::std::mem::zeroed() };
                    _args_array[0].o = seat
                        .map(|o| o.as_ref().c_ptr() as *mut _)
                        .unwrap_or(::std::ptr::null_mut());
                    _args_array[1].o = ::std::ptr::null_mut() as *mut _;
                    f(0, &mut _args_array)
                }
                Request::Destroy => {
                    let mut _args_array: [wl_argument; 0] = unsafe { ::std::mem::zeroed() };
                    f(1, &mut _args_array)
                }
                Request::CreateVirtualPointerWithOutput { seat, output } => {
                    let mut _args_array: [wl_argument; 3] = unsafe { ::std::mem::zeroed() };
                    _args_array[0].o = seat
                        .map(|o| o.as_ref().c_ptr() as *mut _)
                        .unwrap_or(::std::ptr::null_mut());
                    _args_array[1].o = output
                        .map(|o| o.as_ref().c_ptr() as *mut _)
                        .unwrap_or(::std::ptr::null_mut());
                    _args_array[2].o = ::std::ptr::null_mut() as *mut _;
                    f(2, &mut _args_array)
                }
            }
        }
    }
    #[derive(Debug)]
    #[non_exhaustive]
    pub enum Event {}
    impl super::MessageGroup for Event {
        const MESSAGES: &'static [super::MessageDesc] = &[];
        type Map = super::ProxyMap;
        fn is_destructor(&self) -> bool {
            match *self {}
        }
        fn opcode(&self) -> u16 {
            match *self {}
        }
        fn since(&self) -> u32 {
            match *self {}
        }
        fn child<Meta: ObjectMetadata>(
            opcode: u16,
            version: u32,
            meta: &Meta,
        ) -> Option<Object<Meta>> {
            match opcode {
                _ => None,
            }
        }
        fn from_raw(msg: Message, map: &mut Self::Map) -> Result<Self, ()> {
            match msg.opcode {
                _ => Err(()),
            }
        }
        fn into_raw(self, sender_id: u32) -> Message {
            panic!("Event::into_raw can not be used Client-side.")
        }
        unsafe fn from_raw_c(
            obj: *mut ::std::os::raw::c_void,
            opcode: u32,
            args: *const wl_argument,
        ) -> Result<Event, ()> {
            match opcode {
                _ => return Err(()),
            }
        }
        fn as_raw_c_in<F, T>(self, f: F) -> T
        where
            F: FnOnce(u32, &mut [wl_argument]) -> T,
        {
            panic!("Event::as_raw_c_in can not be used Client-side.")
        }
    }
    #[derive(Clone, Eq, PartialEq)]
    pub struct ZwlrVirtualPointerManagerV1(Proxy<ZwlrVirtualPointerManagerV1>);
    impl AsRef<Proxy<ZwlrVirtualPointerManagerV1>> for ZwlrVirtualPointerManagerV1 {
        #[inline]
        fn as_ref(&self) -> &Proxy<Self> {
            &self.0
        }
    }
    impl From<Proxy<ZwlrVirtualPointerManagerV1>> for ZwlrVirtualPointerManagerV1 {
        #[inline]
        fn from(value: Proxy<Self>) -> Self {
            ZwlrVirtualPointerManagerV1(value)
        }
    }
    impl From<ZwlrVirtualPointerManagerV1> for Proxy<ZwlrVirtualPointerManagerV1> {
        #[inline]
        fn from(value: ZwlrVirtualPointerManagerV1) -> Self {
            value.0
        }
    }
    impl std::fmt::Debug for ZwlrVirtualPointerManagerV1 {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            f.write_fmt(format_args!("{:?}", self.0))
        }
    }
    impl Interface for ZwlrVirtualPointerManagerV1 {
        type Request = Request;
        type Event = Event;
        const NAME: &'static str = "zwlr_virtual_pointer_manager_v1";
        const VERSION: u32 = 2;
        fn c_interface() -> *const wl_interface {
            unsafe { &zwlr_virtual_pointer_manager_v1_interface }
        }
    }
    impl ZwlrVirtualPointerManagerV1 {
        #[doc = "Create a new virtual pointer\n\nCreates a new virtual pointer. The optional seat is a suggestion to the\ncompositor."]
        pub fn create_virtual_pointer(
            &self,
            seat: Option<&super::wl_seat::WlSeat>,
        ) -> Main<super::zwlr_virtual_pointer_v1::ZwlrVirtualPointerV1> {
            let msg = Request::CreateVirtualPointer {
                seat: seat.map(|o| o.clone()),
            };
            self.0.send(msg, None).unwrap()
        }
        #[doc = "destroy the virtual pointer manager\n\n\n\nThis is a destructor, you cannot send requests to this object any longer once this method is called."]
        pub fn destroy(&self) -> () {
            let msg = Request::Destroy;
            self.0.send::<AnonymousObject>(msg, None);
        }
        #[doc = "Create a new virtual pointer\n\nCreates a new virtual pointer. The seat and the output arguments are\noptional. If the seat argument is set, the compositor should assign the\ninput device to the requested seat. If the output argument is set, the\ncompositor should map the input device to the requested output.\n\nOnly available since version 2 of the interface."]
        pub fn create_virtual_pointer_with_output(
            &self,
            seat: Option<&super::wl_seat::WlSeat>,
            output: Option<&super::wl_output::WlOutput>,
        ) -> Main<super::zwlr_virtual_pointer_v1::ZwlrVirtualPointerV1> {
            let msg = Request::CreateVirtualPointerWithOutput {
                seat: seat.map(|o| o.clone()),
                output: output.map(|o| o.clone()),
            };
            self.0.send(msg, None).unwrap()
        }
    }
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_CREATE_VIRTUAL_POINTER_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_DESTROY_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_CREATE_VIRTUAL_POINTER_WITH_OUTPUT_SINCE: u32 = 2u32;
    static mut zwlr_virtual_pointer_manager_v1_requests_create_virtual_pointer_types:
        [*const wl_interface; 2] = [
        unsafe { &super::wl_seat::wl_seat_interface as *const wl_interface },
        unsafe {
            &super::zwlr_virtual_pointer_v1::zwlr_virtual_pointer_v1_interface
                as *const wl_interface
        },
    ];
    static mut zwlr_virtual_pointer_manager_v1_requests_create_virtual_pointer_with_output_types:
        [*const wl_interface; 3] = [
        unsafe { &super::wl_seat::wl_seat_interface as *const wl_interface },
        unsafe { &super::wl_output::wl_output_interface as *const wl_interface },
        unsafe {
            &super::zwlr_virtual_pointer_v1::zwlr_virtual_pointer_v1_interface
                as *const wl_interface
        },
    ];
    #[doc = r" C-representation of the messages of this interface, for interop"]
    pub static mut zwlr_virtual_pointer_manager_v1_requests: [wl_message; 3] = [
        wl_message {
            name: b"create_virtual_pointer\0" as *const u8 as *const c_char,
            signature: b"?on\0" as *const u8 as *const c_char,
            types: unsafe {
                &zwlr_virtual_pointer_manager_v1_requests_create_virtual_pointer_types as *const _
            },
        },
        wl_message {
            name: b"destroy\0" as *const u8 as *const c_char,
            signature: b"\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
        wl_message {
            name: b"create_virtual_pointer_with_output\0" as *const u8 as *const c_char,
            signature: b"2?o?on\0" as *const u8 as *const c_char,
            types: unsafe {
                &zwlr_virtual_pointer_manager_v1_requests_create_virtual_pointer_with_output_types
                    as *const _
            },
        },
    ];
    #[doc = r" C representation of this interface, for interop"]
    pub static mut zwlr_virtual_pointer_manager_v1_interface: wl_interface = wl_interface {
        name: b"zwlr_virtual_pointer_manager_v1\0" as *const u8 as *const c_char,
        version: 2,
        request_count: 3,
        requests: unsafe { &zwlr_virtual_pointer_manager_v1_requests as *const _ },
        event_count: 0,
        events: NULLPTR as *const wl_message,
    };
}
