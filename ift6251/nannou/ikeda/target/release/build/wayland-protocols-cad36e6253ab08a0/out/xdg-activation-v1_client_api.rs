use std::os::raw::{c_char, c_void};
const NULLPTR: *const c_void = 0 as *const c_void;
static mut types_null: [*const sys::common::wl_interface; 1] =
    [NULLPTR as *const sys::common::wl_interface];
#[doc = "interface for activating surfaces\n\nA global interface used for informing the compositor about applications\nbeing activated or started, or for applications to request to be\nactivated."]
pub mod xdg_activation_v1 {
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
        #[doc = "destroy the xdg_activation object\n\nNotify the compositor that the xdg_activation object will no longer be\nused.\n\nThe child objects created via this interface are unaffected and should\nbe destroyed separately.\n\nThis is a destructor, once sent this object cannot be used any longer."]
        Destroy,
        #[doc = "requests a token\n\nCreates an xdg_activation_token_v1 object that will provide\nthe initiating client with a unique token for this activation. This\ntoken should be offered to the clients to be activated."]
        GetActivationToken {},
        #[doc = "notify new interaction being available\n\nRequests surface activation. It's up to the compositor to display\nthis information as desired, for example by placing the surface above\nthe rest.\n\nThe compositor may know who requested this by checking the activation\ntoken and might decide not to follow through with the activation if it's\nconsidered unwanted.\n\nCompositors can ignore unknown presentation tokens when an invalid\ntoken is passed."]
        Activate {
            token: String,
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
                name: "get_activation_token",
                since: 1,
                signature: &[super::ArgumentType::NewId],
                destructor: false,
            },
            super::MessageDesc {
                name: "activate",
                since: 1,
                signature: &[super::ArgumentType::Str, super::ArgumentType::Object],
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
                Request::GetActivationToken { .. } => 1,
                Request::Activate { .. } => 2,
            }
        }
        fn since(&self) -> u32 {
            match *self {
                Request::Destroy => 1,
                Request::GetActivationToken { .. } => 1,
                Request::Activate { .. } => 1,
            }
        }
        fn child<Meta: ObjectMetadata>(
            opcode: u16,
            version: u32,
            meta: &Meta,
        ) -> Option<Object<Meta>> {
            match opcode {
                1 => Some(Object::from_interface::<
                    super::xdg_activation_token_v1::XdgActivationTokenV1,
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
                Request::GetActivationToken {} => Message {
                    sender_id: sender_id,
                    opcode: 1,
                    args: smallvec![Argument::NewId(0),],
                },
                Request::Activate { token, surface } => Message {
                    sender_id: sender_id,
                    opcode: 2,
                    args: smallvec![
                        Argument::Str(Box::new(unsafe {
                            ::std::ffi::CString::from_vec_unchecked(token.into())
                        })),
                        Argument::Object(surface.as_ref().id()),
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
                Request::Destroy => {
                    let mut _args_array: [wl_argument; 0] = unsafe { ::std::mem::zeroed() };
                    f(0, &mut _args_array)
                }
                Request::GetActivationToken {} => {
                    let mut _args_array: [wl_argument; 1] = unsafe { ::std::mem::zeroed() };
                    _args_array[0].o = ::std::ptr::null_mut() as *mut _;
                    f(1, &mut _args_array)
                }
                Request::Activate { token, surface } => {
                    let mut _args_array: [wl_argument; 2] = unsafe { ::std::mem::zeroed() };
                    let _arg_0 = ::std::ffi::CString::new(token).unwrap();
                    _args_array[0].s = _arg_0.as_ptr();
                    _args_array[1].o = surface.as_ref().c_ptr() as *mut _;
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
    pub struct XdgActivationV1(Proxy<XdgActivationV1>);
    impl AsRef<Proxy<XdgActivationV1>> for XdgActivationV1 {
        #[inline]
        fn as_ref(&self) -> &Proxy<Self> {
            &self.0
        }
    }
    impl From<Proxy<XdgActivationV1>> for XdgActivationV1 {
        #[inline]
        fn from(value: Proxy<Self>) -> Self {
            XdgActivationV1(value)
        }
    }
    impl From<XdgActivationV1> for Proxy<XdgActivationV1> {
        #[inline]
        fn from(value: XdgActivationV1) -> Self {
            value.0
        }
    }
    impl std::fmt::Debug for XdgActivationV1 {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            f.write_fmt(format_args!("{:?}", self.0))
        }
    }
    impl Interface for XdgActivationV1 {
        type Request = Request;
        type Event = Event;
        const NAME: &'static str = "xdg_activation_v1";
        const VERSION: u32 = 1;
        fn c_interface() -> *const wl_interface {
            unsafe { &xdg_activation_v1_interface }
        }
    }
    impl XdgActivationV1 {
        #[doc = "destroy the xdg_activation object\n\nNotify the compositor that the xdg_activation object will no longer be\nused.\n\nThe child objects created via this interface are unaffected and should\nbe destroyed separately.\n\nThis is a destructor, you cannot send requests to this object any longer once this method is called."]
        pub fn destroy(&self) -> () {
            let msg = Request::Destroy;
            self.0.send::<AnonymousObject>(msg, None);
        }
        #[doc = "requests a token\n\nCreates an xdg_activation_token_v1 object that will provide\nthe initiating client with a unique token for this activation. This\ntoken should be offered to the clients to be activated."]
        pub fn get_activation_token(
            &self,
        ) -> Main<super::xdg_activation_token_v1::XdgActivationTokenV1> {
            let msg = Request::GetActivationToken {};
            self.0.send(msg, None).unwrap()
        }
        #[doc = "notify new interaction being available\n\nRequests surface activation. It's up to the compositor to display\nthis information as desired, for example by placing the surface above\nthe rest.\n\nThe compositor may know who requested this by checking the activation\ntoken and might decide not to follow through with the activation if it's\nconsidered unwanted.\n\nCompositors can ignore unknown presentation tokens when an invalid\ntoken is passed."]
        pub fn activate(&self, token: String, surface: &super::wl_surface::WlSurface) -> () {
            let msg = Request::Activate {
                token: token,
                surface: surface.clone(),
            };
            self.0.send::<AnonymousObject>(msg, None);
        }
    }
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_DESTROY_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_GET_ACTIVATION_TOKEN_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_ACTIVATE_SINCE: u32 = 1u32;
    static mut xdg_activation_v1_requests_get_activation_token_types: [*const wl_interface; 1] =
        [unsafe {
            &super::xdg_activation_token_v1::xdg_activation_token_v1_interface
                as *const wl_interface
        }];
    static mut xdg_activation_v1_requests_activate_types: [*const wl_interface; 2] =
        [NULLPTR as *const wl_interface, unsafe {
            &super::wl_surface::wl_surface_interface as *const wl_interface
        }];
    #[doc = r" C-representation of the messages of this interface, for interop"]
    pub static mut xdg_activation_v1_requests: [wl_message; 3] = [
        wl_message {
            name: b"destroy\0" as *const u8 as *const c_char,
            signature: b"\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
        wl_message {
            name: b"get_activation_token\0" as *const u8 as *const c_char,
            signature: b"n\0" as *const u8 as *const c_char,
            types: unsafe { &xdg_activation_v1_requests_get_activation_token_types as *const _ },
        },
        wl_message {
            name: b"activate\0" as *const u8 as *const c_char,
            signature: b"so\0" as *const u8 as *const c_char,
            types: unsafe { &xdg_activation_v1_requests_activate_types as *const _ },
        },
    ];
    #[doc = r" C representation of this interface, for interop"]
    pub static mut xdg_activation_v1_interface: wl_interface = wl_interface {
        name: b"xdg_activation_v1\0" as *const u8 as *const c_char,
        version: 1,
        request_count: 3,
        requests: unsafe { &xdg_activation_v1_requests as *const _ },
        event_count: 0,
        events: NULLPTR as *const wl_message,
    };
}
#[doc = "an exported activation handle\n\nAn object for setting up a token and receiving a token handle that can\nbe passed as an activation token to another client.\n\nThe object is created using the xdg_activation_v1.get_activation_token\nrequest. This object should then be populated with the app_id, surface\nand serial information and committed. The compositor shall then issue a\ndone event with the token. In case the request's parameters are invalid,\nthe compositor will provide an invalid token."]
pub mod xdg_activation_token_v1 {
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
        #[doc = "The token has already been used previously"]
        AlreadyUsed = 0,
    }
    impl Error {
        pub fn from_raw(n: u32) -> Option<Error> {
            match n {
                0 => Some(Error::AlreadyUsed),
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
        #[doc = "specifies the seat and serial of the activating event\n\nProvides information about the seat and serial event that requested the\ntoken.\n\nMust be sent before commit. This information is optional."]
        SetSerial {
            serial: u32,
            seat: super::wl_seat::WlSeat,
        },
        #[doc = "specifies the application being activated\n\nThe requesting client can specify an app_id to associate the token\nbeing created with it.\n\nMust be sent before commit. This information is optional."]
        SetAppId { app_id: String },
        #[doc = "specifies the application being activated\n\nThe requesting client can specify a surface to associate the token\nbeing created with it.\n\nMust be triggered before commit. This information is optional."]
        SetSurface {
            surface: super::wl_surface::WlSurface,
        },
        #[doc = "issues the token request\n\nRequests an activation token based on the different parameters that\nhave been offered through set_serial, set_surface and set_app_id."]
        Commit,
        #[doc = "destroy the xdg_activation_token_v1 object\n\nNotify the compositor that the xdg_activation_token_v1 object will no\nlonger be used.\n\nThis is a destructor, once sent this object cannot be used any longer."]
        Destroy,
    }
    impl super::MessageGroup for Request {
        const MESSAGES: &'static [super::MessageDesc] = &[
            super::MessageDesc {
                name: "set_serial",
                since: 1,
                signature: &[super::ArgumentType::Uint, super::ArgumentType::Object],
                destructor: false,
            },
            super::MessageDesc {
                name: "set_app_id",
                since: 1,
                signature: &[super::ArgumentType::Str],
                destructor: false,
            },
            super::MessageDesc {
                name: "set_surface",
                since: 1,
                signature: &[super::ArgumentType::Object],
                destructor: false,
            },
            super::MessageDesc {
                name: "commit",
                since: 1,
                signature: &[],
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
                Request::SetSerial { .. } => 0,
                Request::SetAppId { .. } => 1,
                Request::SetSurface { .. } => 2,
                Request::Commit => 3,
                Request::Destroy => 4,
            }
        }
        fn since(&self) -> u32 {
            match *self {
                Request::SetSerial { .. } => 1,
                Request::SetAppId { .. } => 1,
                Request::SetSurface { .. } => 1,
                Request::Commit => 1,
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
                Request::SetSerial { serial, seat } => Message {
                    sender_id: sender_id,
                    opcode: 0,
                    args: smallvec![Argument::Uint(serial), Argument::Object(seat.as_ref().id()),],
                },
                Request::SetAppId { app_id } => Message {
                    sender_id: sender_id,
                    opcode: 1,
                    args: smallvec![Argument::Str(Box::new(unsafe {
                        ::std::ffi::CString::from_vec_unchecked(app_id.into())
                    })),],
                },
                Request::SetSurface { surface } => Message {
                    sender_id: sender_id,
                    opcode: 2,
                    args: smallvec![Argument::Object(surface.as_ref().id()),],
                },
                Request::Commit => Message {
                    sender_id: sender_id,
                    opcode: 3,
                    args: smallvec![],
                },
                Request::Destroy => Message {
                    sender_id: sender_id,
                    opcode: 4,
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
                Request::SetSerial { serial, seat } => {
                    let mut _args_array: [wl_argument; 2] = unsafe { ::std::mem::zeroed() };
                    _args_array[0].u = serial;
                    _args_array[1].o = seat.as_ref().c_ptr() as *mut _;
                    f(0, &mut _args_array)
                }
                Request::SetAppId { app_id } => {
                    let mut _args_array: [wl_argument; 1] = unsafe { ::std::mem::zeroed() };
                    let _arg_0 = ::std::ffi::CString::new(app_id).unwrap();
                    _args_array[0].s = _arg_0.as_ptr();
                    f(1, &mut _args_array)
                }
                Request::SetSurface { surface } => {
                    let mut _args_array: [wl_argument; 1] = unsafe { ::std::mem::zeroed() };
                    _args_array[0].o = surface.as_ref().c_ptr() as *mut _;
                    f(2, &mut _args_array)
                }
                Request::Commit => {
                    let mut _args_array: [wl_argument; 0] = unsafe { ::std::mem::zeroed() };
                    f(3, &mut _args_array)
                }
                Request::Destroy => {
                    let mut _args_array: [wl_argument; 0] = unsafe { ::std::mem::zeroed() };
                    f(4, &mut _args_array)
                }
            }
        }
    }
    #[derive(Debug)]
    #[non_exhaustive]
    pub enum Event {
        #[doc = "the exported activation token\n\nThe 'done' event contains the unique token of this activation request\nand notifies that the provider is done.\n\nApplications will typically receive the token through the\nXDG_ACTIVATION_TOKEN environment variable as set by its launcher, and\nshould unset the environment variable right after this request, in\norder to avoid propagating it to child processes.\n\nApplications implementing the D-Bus interface org.freedesktop.Application\nshould get their token under XDG_ACTIVATION_TOKEN on their platform_data.\n\nPresentation tokens may be transferred across clients through means not\ndescribed in this protocol."]
        Done { token: String },
    }
    impl super::MessageGroup for Event {
        const MESSAGES: &'static [super::MessageDesc] = &[super::MessageDesc {
            name: "done",
            since: 1,
            signature: &[super::ArgumentType::Str],
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
                Event::Done { .. } => 0,
            }
        }
        fn since(&self) -> u32 {
            match *self {
                Event::Done { .. } => 1,
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
                    Ok(Event::Done {
                        token: {
                            if let Some(Argument::Str(val)) = args.next() {
                                let s = String::from_utf8(val.into_bytes()).unwrap_or_else(|e| {
                                    String::from_utf8_lossy(&e.into_bytes()).into()
                                });
                                s
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
                    Ok(Event::Done {
                        token: ::std::ffi::CStr::from_ptr(_args[0].s)
                            .to_string_lossy()
                            .into_owned(),
                    })
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
    pub struct XdgActivationTokenV1(Proxy<XdgActivationTokenV1>);
    impl AsRef<Proxy<XdgActivationTokenV1>> for XdgActivationTokenV1 {
        #[inline]
        fn as_ref(&self) -> &Proxy<Self> {
            &self.0
        }
    }
    impl From<Proxy<XdgActivationTokenV1>> for XdgActivationTokenV1 {
        #[inline]
        fn from(value: Proxy<Self>) -> Self {
            XdgActivationTokenV1(value)
        }
    }
    impl From<XdgActivationTokenV1> for Proxy<XdgActivationTokenV1> {
        #[inline]
        fn from(value: XdgActivationTokenV1) -> Self {
            value.0
        }
    }
    impl std::fmt::Debug for XdgActivationTokenV1 {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            f.write_fmt(format_args!("{:?}", self.0))
        }
    }
    impl Interface for XdgActivationTokenV1 {
        type Request = Request;
        type Event = Event;
        const NAME: &'static str = "xdg_activation_token_v1";
        const VERSION: u32 = 1;
        fn c_interface() -> *const wl_interface {
            unsafe { &xdg_activation_token_v1_interface }
        }
    }
    impl XdgActivationTokenV1 {
        #[doc = "specifies the seat and serial of the activating event\n\nProvides information about the seat and serial event that requested the\ntoken.\n\nMust be sent before commit. This information is optional."]
        pub fn set_serial(&self, serial: u32, seat: &super::wl_seat::WlSeat) -> () {
            let msg = Request::SetSerial {
                serial: serial,
                seat: seat.clone(),
            };
            self.0.send::<AnonymousObject>(msg, None);
        }
        #[doc = "specifies the application being activated\n\nThe requesting client can specify an app_id to associate the token\nbeing created with it.\n\nMust be sent before commit. This information is optional."]
        pub fn set_app_id(&self, app_id: String) -> () {
            let msg = Request::SetAppId { app_id: app_id };
            self.0.send::<AnonymousObject>(msg, None);
        }
        #[doc = "specifies the application being activated\n\nThe requesting client can specify a surface to associate the token\nbeing created with it.\n\nMust be triggered before commit. This information is optional."]
        pub fn set_surface(&self, surface: &super::wl_surface::WlSurface) -> () {
            let msg = Request::SetSurface {
                surface: surface.clone(),
            };
            self.0.send::<AnonymousObject>(msg, None);
        }
        #[doc = "issues the token request\n\nRequests an activation token based on the different parameters that\nhave been offered through set_serial, set_surface and set_app_id."]
        pub fn commit(&self) -> () {
            let msg = Request::Commit;
            self.0.send::<AnonymousObject>(msg, None);
        }
        #[doc = "destroy the xdg_activation_token_v1 object\n\nNotify the compositor that the xdg_activation_token_v1 object will no\nlonger be used.\n\nThis is a destructor, you cannot send requests to this object any longer once this method is called."]
        pub fn destroy(&self) -> () {
            let msg = Request::Destroy;
            self.0.send::<AnonymousObject>(msg, None);
        }
    }
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_SET_SERIAL_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_SET_APP_ID_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_SET_SURFACE_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_COMMIT_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_DESTROY_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this event"]
    pub const EVT_DONE_SINCE: u32 = 1u32;
    static mut xdg_activation_token_v1_requests_set_serial_types: [*const wl_interface; 2] =
        [NULLPTR as *const wl_interface, unsafe {
            &super::wl_seat::wl_seat_interface as *const wl_interface
        }];
    static mut xdg_activation_token_v1_requests_set_surface_types: [*const wl_interface; 1] =
        [unsafe { &super::wl_surface::wl_surface_interface as *const wl_interface }];
    #[doc = r" C-representation of the messages of this interface, for interop"]
    pub static mut xdg_activation_token_v1_requests: [wl_message; 5] = [
        wl_message {
            name: b"set_serial\0" as *const u8 as *const c_char,
            signature: b"uo\0" as *const u8 as *const c_char,
            types: unsafe { &xdg_activation_token_v1_requests_set_serial_types as *const _ },
        },
        wl_message {
            name: b"set_app_id\0" as *const u8 as *const c_char,
            signature: b"s\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
        wl_message {
            name: b"set_surface\0" as *const u8 as *const c_char,
            signature: b"o\0" as *const u8 as *const c_char,
            types: unsafe { &xdg_activation_token_v1_requests_set_surface_types as *const _ },
        },
        wl_message {
            name: b"commit\0" as *const u8 as *const c_char,
            signature: b"\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
        wl_message {
            name: b"destroy\0" as *const u8 as *const c_char,
            signature: b"\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
    ];
    #[doc = r" C-representation of the messages of this interface, for interop"]
    pub static mut xdg_activation_token_v1_events: [wl_message; 1] = [wl_message {
        name: b"done\0" as *const u8 as *const c_char,
        signature: b"s\0" as *const u8 as *const c_char,
        types: unsafe { &types_null as *const _ },
    }];
    #[doc = r" C representation of this interface, for interop"]
    pub static mut xdg_activation_token_v1_interface: wl_interface = wl_interface {
        name: b"xdg_activation_token_v1\0" as *const u8 as *const c_char,
        version: 1,
        request_count: 5,
        requests: unsafe { &xdg_activation_token_v1_requests as *const _ },
        event_count: 1,
        events: unsafe { &xdg_activation_token_v1_events as *const _ },
    };
}
