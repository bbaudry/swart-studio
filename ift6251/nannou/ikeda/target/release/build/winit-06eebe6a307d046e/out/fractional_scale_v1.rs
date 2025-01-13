use std::os::raw::{c_char, c_void};
const NULLPTR: *const c_void = 0 as *const c_void;
static mut types_null: [*const sys::common::wl_interface; 1] =
    [NULLPTR as *const sys::common::wl_interface];
#[doc = "fractional surface scale information\n\nA global interface for requesting surfaces to use fractional scales."]
pub mod wp_fractional_scale_manager_v1 {
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
        #[doc = "the surface already has a fractional_scale object associated"]
        FractionalScaleExists = 0,
    }
    impl Error {
        pub fn from_raw(n: u32) -> Option<Error> {
            match n {
                0 => Some(Error::FractionalScaleExists),
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
        #[doc = "unbind the fractional surface scale interface\n\nInforms the server that the client will not be using this protocol\nobject anymore. This does not affect any other objects,\nwp_fractional_scale_v1 objects included.\n\nThis is a destructor, once sent this object cannot be used any longer."]
        Destroy,
        #[doc = "extend surface interface for scale information\n\nCreate an add-on object for the the wl_surface to let the compositor\nrequest fractional scales. If the given wl_surface already has a\nwp_fractional_scale_v1 object associated, the fractional_scale_exists\nprotocol error is raised."]
        GetFractionalScale {
            surface: super::wl_surface::WlSurface,
        },
    }
    impl super::MessageGroup for Request {
        const MESSAGES: &'static [super::MessageDesc] = &[
            super::MessageDesc {
                name: "destroy",
                since: 1,
                signature: &[],
                destructor: true,
            },
            super::MessageDesc {
                name: "get_fractional_scale",
                since: 1,
                signature: &[super::ArgumentType::NewId, super::ArgumentType::Object],
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
                Request::Destroy => 0,
                Request::GetFractionalScale { .. } => 1,
            }
        }
        fn since(&self) -> u32 {
            match *self {
                Request::Destroy => 1,
                Request::GetFractionalScale { .. } => 1,
            }
        }
        fn child<Meta: ObjectMetadata>(
            opcode: u16,
            version: u32,
            meta: &Meta,
        ) -> Option<Object<Meta>> {
            match opcode {
                1 => Some(Object::from_interface::<
                    super::wp_fractional_scale_v1::WpFractionalScaleV1,
                >(version, meta.child())),
                _ => None,
            }
        }
        fn from_raw(msg: Message, map: &mut Self::Map) -> Result<Self, ()> {
            panic!("Request::from_raw can not be used Client-side.")
        }
        fn into_raw(self, sender_id: u32) -> Message {
            match self {
                Request::Destroy => Message {
                    sender_id: sender_id,
                    opcode: 0,
                    args: smallvec![],
                },
                Request::GetFractionalScale { surface } => Message {
                    sender_id: sender_id,
                    opcode: 1,
                    args: smallvec![Argument::NewId(0), Argument::Object(surface.as_ref().id()),],
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
                Request::Destroy => {
                    let mut _args_array: [wl_argument; 0] = unsafe { ::std::mem::zeroed() };
                    f(0, &mut _args_array)
                }
                Request::GetFractionalScale { surface } => {
                    let mut _args_array: [wl_argument; 2] = unsafe { ::std::mem::zeroed() };
                    _args_array[0].o = ::std::ptr::null_mut() as *mut _;
                    _args_array[1].o = surface.as_ref().c_ptr() as *mut _;
                    f(1, &mut _args_array)
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
    pub struct WpFractionalScaleManagerV1(Proxy<WpFractionalScaleManagerV1>);
    impl AsRef<Proxy<WpFractionalScaleManagerV1>> for WpFractionalScaleManagerV1 {
        #[inline]
        fn as_ref(&self) -> &Proxy<Self> {
            &self.0
        }
    }
    impl From<Proxy<WpFractionalScaleManagerV1>> for WpFractionalScaleManagerV1 {
        #[inline]
        fn from(value: Proxy<Self>) -> Self {
            WpFractionalScaleManagerV1(value)
        }
    }
    impl From<WpFractionalScaleManagerV1> for Proxy<WpFractionalScaleManagerV1> {
        #[inline]
        fn from(value: WpFractionalScaleManagerV1) -> Self {
            value.0
        }
    }
    impl std::fmt::Debug for WpFractionalScaleManagerV1 {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            f.write_fmt(format_args!("{:?}", self.0))
        }
    }
    impl Interface for WpFractionalScaleManagerV1 {
        type Request = Request;
        type Event = Event;
        const NAME: &'static str = "wp_fractional_scale_manager_v1";
        const VERSION: u32 = 1;
        fn c_interface() -> *const wl_interface {
            unsafe { &wp_fractional_scale_manager_v1_interface }
        }
    }
    impl WpFractionalScaleManagerV1 {
        #[doc = "unbind the fractional surface scale interface\n\nInforms the server that the client will not be using this protocol\nobject anymore. This does not affect any other objects,\nwp_fractional_scale_v1 objects included.\n\nThis is a destructor, you cannot send requests to this object any longer once this method is called."]
        pub fn destroy(&self) -> () {
            let msg = Request::Destroy;
            self.0.send::<AnonymousObject>(msg, None);
        }
        #[doc = "extend surface interface for scale information\n\nCreate an add-on object for the the wl_surface to let the compositor\nrequest fractional scales. If the given wl_surface already has a\nwp_fractional_scale_v1 object associated, the fractional_scale_exists\nprotocol error is raised."]
        pub fn get_fractional_scale(
            &self,
            surface: &super::wl_surface::WlSurface,
        ) -> Main<super::wp_fractional_scale_v1::WpFractionalScaleV1> {
            let msg = Request::GetFractionalScale {
                surface: surface.clone(),
            };
            self.0.send(msg, None).unwrap()
        }
    }
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_DESTROY_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_GET_FRACTIONAL_SCALE_SINCE: u32 = 1u32;
    static mut wp_fractional_scale_manager_v1_requests_get_fractional_scale_types:
        [*const wl_interface; 2] = [
        unsafe {
            &super::wp_fractional_scale_v1::wp_fractional_scale_v1_interface as *const wl_interface
        },
        unsafe { &super::wl_surface::wl_surface_interface as *const wl_interface },
    ];
    #[doc = r" C-representation of the messages of this interface, for interop"]
    pub static mut wp_fractional_scale_manager_v1_requests: [wl_message; 2] = [
        wl_message {
            name: b"destroy\0" as *const u8 as *const c_char,
            signature: b"\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
        wl_message {
            name: b"get_fractional_scale\0" as *const u8 as *const c_char,
            signature: b"no\0" as *const u8 as *const c_char,
            types: unsafe {
                &wp_fractional_scale_manager_v1_requests_get_fractional_scale_types as *const _
            },
        },
    ];
    #[doc = r" C representation of this interface, for interop"]
    pub static mut wp_fractional_scale_manager_v1_interface: wl_interface = wl_interface {
        name: b"wp_fractional_scale_manager_v1\0" as *const u8 as *const c_char,
        version: 1,
        request_count: 2,
        requests: unsafe { &wp_fractional_scale_manager_v1_requests as *const _ },
        event_count: 0,
        events: NULLPTR as *const wl_message,
    };
}
#[doc = "fractional scale interface to a wl_surface\n\nAn additional interface to a wl_surface object which allows the compositor\nto inform the client of the preferred scale."]
pub mod wp_fractional_scale_v1 {
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
        #[doc = "remove surface scale information for surface\n\nDestroy the fractional scale object. When this object is destroyed,\npreferred_scale events will no longer be sent.\n\nThis is a destructor, once sent this object cannot be used any longer."]
        Destroy,
    }
    impl super::MessageGroup for Request {
        const MESSAGES: &'static [super::MessageDesc] = &[super::MessageDesc {
            name: "destroy",
            since: 1,
            signature: &[],
            destructor: true,
        }];
        type Map = super::ProxyMap;
        fn is_destructor(&self) -> bool {
            match *self {
                Request::Destroy => true,
            }
        }
        fn opcode(&self) -> u16 {
            match *self {
                Request::Destroy => 0,
            }
        }
        fn since(&self) -> u32 {
            match *self {
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
                Request::Destroy => Message {
                    sender_id: sender_id,
                    opcode: 0,
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
                Request::Destroy => {
                    let mut _args_array: [wl_argument; 0] = unsafe { ::std::mem::zeroed() };
                    f(0, &mut _args_array)
                }
            }
        }
    }
    #[derive(Debug)]
    #[non_exhaustive]
    pub enum Event {
        #[doc = "notify of new preferred scale\n\nNotification of a new preferred scale for this surface that the\ncompositor suggests that the client should use.\n\nThe sent scale is the numerator of a fraction with a denominator of 120."]
        PreferredScale { scale: u32 },
    }
    impl super::MessageGroup for Event {
        const MESSAGES: &'static [super::MessageDesc] = &[super::MessageDesc {
            name: "preferred_scale",
            since: 1,
            signature: &[super::ArgumentType::Uint],
            destructor: false,
        }];
        type Map = super::ProxyMap;
        fn is_destructor(&self) -> bool {
            match *self {
                _ => false,
            }
        }
        fn opcode(&self) -> u16 {
            match *self {
                Event::PreferredScale { .. } => 0,
            }
        }
        fn since(&self) -> u32 {
            match *self {
                Event::PreferredScale { .. } => 1,
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
            match msg.opcode {
                0 => {
                    let mut args = msg.args.into_iter();
                    Ok(Event::PreferredScale {
                        scale: {
                            if let Some(Argument::Uint(val)) = args.next() {
                                val
                            } else {
                                return Err(());
                            }
                        },
                    })
                }
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
                0 => {
                    let _args = ::std::slice::from_raw_parts(args, 1);
                    Ok(Event::PreferredScale { scale: _args[0].u })
                }
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
    pub struct WpFractionalScaleV1(Proxy<WpFractionalScaleV1>);
    impl AsRef<Proxy<WpFractionalScaleV1>> for WpFractionalScaleV1 {
        #[inline]
        fn as_ref(&self) -> &Proxy<Self> {
            &self.0
        }
    }
    impl From<Proxy<WpFractionalScaleV1>> for WpFractionalScaleV1 {
        #[inline]
        fn from(value: Proxy<Self>) -> Self {
            WpFractionalScaleV1(value)
        }
    }
    impl From<WpFractionalScaleV1> for Proxy<WpFractionalScaleV1> {
        #[inline]
        fn from(value: WpFractionalScaleV1) -> Self {
            value.0
        }
    }
    impl std::fmt::Debug for WpFractionalScaleV1 {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            f.write_fmt(format_args!("{:?}", self.0))
        }
    }
    impl Interface for WpFractionalScaleV1 {
        type Request = Request;
        type Event = Event;
        const NAME: &'static str = "wp_fractional_scale_v1";
        const VERSION: u32 = 1;
        fn c_interface() -> *const wl_interface {
            unsafe { &wp_fractional_scale_v1_interface }
        }
    }
    impl WpFractionalScaleV1 {
        #[doc = "remove surface scale information for surface\n\nDestroy the fractional scale object. When this object is destroyed,\npreferred_scale events will no longer be sent.\n\nThis is a destructor, you cannot send requests to this object any longer once this method is called."]
        pub fn destroy(&self) -> () {
            let msg = Request::Destroy;
            self.0.send::<AnonymousObject>(msg, None);
        }
    }
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_DESTROY_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this event"]
    pub const EVT_PREFERRED_SCALE_SINCE: u32 = 1u32;
    #[doc = r" C-representation of the messages of this interface, for interop"]
    pub static mut wp_fractional_scale_v1_requests: [wl_message; 1] = [wl_message {
        name: b"destroy\0" as *const u8 as *const c_char,
        signature: b"\0" as *const u8 as *const c_char,
        types: unsafe { &types_null as *const _ },
    }];
    #[doc = r" C-representation of the messages of this interface, for interop"]
    pub static mut wp_fractional_scale_v1_events: [wl_message; 1] = [wl_message {
        name: b"preferred_scale\0" as *const u8 as *const c_char,
        signature: b"u\0" as *const u8 as *const c_char,
        types: unsafe { &types_null as *const _ },
    }];
    #[doc = r" C representation of this interface, for interop"]
    pub static mut wp_fractional_scale_v1_interface: wl_interface = wl_interface {
        name: b"wp_fractional_scale_v1\0" as *const u8 as *const c_char,
        version: 1,
        request_count: 1,
        requests: unsafe { &wp_fractional_scale_v1_requests as *const _ },
        event_count: 1,
        events: unsafe { &wp_fractional_scale_v1_events as *const _ },
    };
}
