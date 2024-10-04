use std::os::raw::{c_char, c_void};
const NULLPTR: *const c_void = 0 as *const c_void;
static mut types_null: [*const sys::common::wl_interface; 3] = [
    NULLPTR as *const sys::common::wl_interface,
    NULLPTR as *const sys::common::wl_interface,
    NULLPTR as *const sys::common::wl_interface,
];
#[doc = "output device configuration manager\n\nThis interface is a manager that allows reading and writing the current\noutput device configuration.\n\nOutput devices that display pixels (e.g. a physical monitor or a virtual\noutput in a window) are represented as heads. Heads cannot be created nor\ndestroyed by the client, but they can be enabled or disabled and their\nproperties can be changed. Each head may have one or more available modes.\n\nWhenever a head appears (e.g. a monitor is plugged in), it will be\nadvertised via the head event. Immediately after the output manager is\nbound, all current heads are advertised.\n\nWhenever a head's properties change, the relevant wlr_output_head events\nwill be sent. Not all head properties will be sent: only properties that\nhave changed need to.\n\nWhenever a head disappears (e.g. a monitor is unplugged), a\nwlr_output_head.finished event will be sent.\n\nAfter one or more heads appear, change or disappear, the done event will\nbe sent. It carries a serial which can be used in a create_configuration\nrequest to update heads properties.\n\nThe information obtained from this protocol should only be used for output\nconfiguration purposes. This protocol is not designed to be a generic\noutput property advertisement protocol for regular clients. Instead,\nprotocols such as xdg-output should be used."]
pub mod zwlr_output_manager_v1 {
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
        #[doc = "create a new output configuration object\n\nCreate a new output configuration object. This allows to update head\nproperties."]
        CreateConfiguration { serial: u32 },
        #[doc = "stop sending events\n\nIndicates the client no longer wishes to receive events for output\nconfiguration changes. However the compositor may emit further events,\nuntil the finished event is emitted.\n\nThe client must not send any more requests after this one."]
        Stop,
    }
    impl super::MessageGroup for Request {
        const MESSAGES: &'static [super::MessageDesc] = &[
            super::MessageDesc {
                name: "create_configuration",
                since: 1,
                signature: &[super::ArgumentType::NewId, super::ArgumentType::Uint],
                destructor: false,
            },
            super::MessageDesc {
                name: "stop",
                since: 1,
                signature: &[],
                destructor: false,
            },
        ];
        type Map = super::ProxyMap;
        fn is_destructor(&self) -> bool {
            match *self {
                _ => false,
            }
        }
        fn opcode(&self) -> u16 {
            match *self {
                Request::CreateConfiguration { .. } => 0,
                Request::Stop => 1,
            }
        }
        fn since(&self) -> u32 {
            match *self {
                Request::CreateConfiguration { .. } => 1,
                Request::Stop => 1,
            }
        }
        fn child<Meta: ObjectMetadata>(
            opcode: u16,
            version: u32,
            meta: &Meta,
        ) -> Option<Object<Meta>> {
            match opcode {
                0 => Some(Object::from_interface::<
                    super::zwlr_output_configuration_v1::ZwlrOutputConfigurationV1,
                >(version, meta.child())),
                _ => None,
            }
        }
        fn from_raw(msg: Message, map: &mut Self::Map) -> Result<Self, ()> {
            panic!("Request::from_raw can not be used Client-side.")
        }
        fn into_raw(self, sender_id: u32) -> Message {
            match self {
                Request::CreateConfiguration { serial } => Message {
                    sender_id: sender_id,
                    opcode: 0,
                    args: smallvec![Argument::NewId(0), Argument::Uint(serial),],
                },
                Request::Stop => Message {
                    sender_id: sender_id,
                    opcode: 1,
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
                Request::CreateConfiguration { serial } => {
                    let mut _args_array: [wl_argument; 2] = unsafe { ::std::mem::zeroed() };
                    _args_array[0].o = ::std::ptr::null_mut() as *mut _;
                    _args_array[1].u = serial;
                    f(0, &mut _args_array)
                }
                Request::Stop => {
                    let mut _args_array: [wl_argument; 0] = unsafe { ::std::mem::zeroed() };
                    f(1, &mut _args_array)
                }
            }
        }
    }
    #[derive(Debug)]
    #[non_exhaustive]
    pub enum Event {
        #[doc = "introduce a new head\n\nThis event introduces a new head. This happens whenever a new head\nappears (e.g. a monitor is plugged in) or after the output manager is\nbound."]
        Head {
            head: Main<super::zwlr_output_head_v1::ZwlrOutputHeadV1>,
        },
        #[doc = "sent all information about current configuration\n\nThis event is sent after all information has been sent after binding to\nthe output manager object and after any subsequent changes. This applies\nto child head and mode objects as well. In other words, this event is\nsent whenever a head or mode is created or destroyed and whenever one of\ntheir properties has been changed. Not all state is re-sent each time\nthe current configuration changes: only the actual changes are sent.\n\nThis allows changes to the output configuration to be seen as atomic,\neven if they happen via multiple events.\n\nA serial is sent to be used in a future create_configuration request."]
        Done { serial: u32 },
        #[doc = "the compositor has finished with the manager\n\nThis event indicates that the compositor is done sending manager events.\nThe compositor will destroy the object immediately after sending this\nevent, so it will become invalid and the client should release any\nresources associated with it."]
        Finished,
    }
    impl super::MessageGroup for Event {
        const MESSAGES: &'static [super::MessageDesc] = &[
            super::MessageDesc {
                name: "head",
                since: 1,
                signature: &[super::ArgumentType::NewId],
                destructor: false,
            },
            super::MessageDesc {
                name: "done",
                since: 1,
                signature: &[super::ArgumentType::Uint],
                destructor: false,
            },
            super::MessageDesc {
                name: "finished",
                since: 1,
                signature: &[],
                destructor: false,
            },
        ];
        type Map = super::ProxyMap;
        fn is_destructor(&self) -> bool {
            match *self {
                _ => false,
            }
        }
        fn opcode(&self) -> u16 {
            match *self {
                Event::Head { .. } => 0,
                Event::Done { .. } => 1,
                Event::Finished => 2,
            }
        }
        fn since(&self) -> u32 {
            match *self {
                Event::Head { .. } => 1,
                Event::Done { .. } => 1,
                Event::Finished => 1,
            }
        }
        fn child<Meta: ObjectMetadata>(
            opcode: u16,
            version: u32,
            meta: &Meta,
        ) -> Option<Object<Meta>> {
            match opcode {
                0 => Some(Object::from_interface::<
                    super::zwlr_output_head_v1::ZwlrOutputHeadV1,
                >(version, meta.child())),
                _ => None,
            }
        }
        fn from_raw(msg: Message, map: &mut Self::Map) -> Result<Self, ()> {
            match msg.opcode {
                0 => {
                    let mut args = msg.args.into_iter();
                    Ok(Event::Head {
                        head: {
                            if let Some(Argument::NewId(val)) = args.next() {
                                map.get_new(val).ok_or(())?
                            } else {
                                return Err(());
                            }
                        },
                    })
                }
                1 => {
                    let mut args = msg.args.into_iter();
                    Ok(Event::Done {
                        serial: {
                            if let Some(Argument::Uint(val)) = args.next() {
                                val
                            } else {
                                return Err(());
                            }
                        },
                    })
                }
                2 => Ok(Event::Finished),
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
                    Ok(Event::Head {
                        head: Main::<super::zwlr_output_head_v1::ZwlrOutputHeadV1>::from_c_ptr(
                            _args[0].o as *mut _,
                        ),
                    })
                }
                1 => {
                    let _args = ::std::slice::from_raw_parts(args, 1);
                    Ok(Event::Done { serial: _args[0].u })
                }
                2 => Ok(Event::Finished),
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
    pub struct ZwlrOutputManagerV1(Proxy<ZwlrOutputManagerV1>);
    impl AsRef<Proxy<ZwlrOutputManagerV1>> for ZwlrOutputManagerV1 {
        #[inline]
        fn as_ref(&self) -> &Proxy<Self> {
            &self.0
        }
    }
    impl From<Proxy<ZwlrOutputManagerV1>> for ZwlrOutputManagerV1 {
        #[inline]
        fn from(value: Proxy<Self>) -> Self {
            ZwlrOutputManagerV1(value)
        }
    }
    impl From<ZwlrOutputManagerV1> for Proxy<ZwlrOutputManagerV1> {
        #[inline]
        fn from(value: ZwlrOutputManagerV1) -> Self {
            value.0
        }
    }
    impl std::fmt::Debug for ZwlrOutputManagerV1 {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            f.write_fmt(format_args!("{:?}", self.0))
        }
    }
    impl Interface for ZwlrOutputManagerV1 {
        type Request = Request;
        type Event = Event;
        const NAME: &'static str = "zwlr_output_manager_v1";
        const VERSION: u32 = 2;
        fn c_interface() -> *const wl_interface {
            unsafe { &zwlr_output_manager_v1_interface }
        }
    }
    impl ZwlrOutputManagerV1 {
        #[doc = "create a new output configuration object\n\nCreate a new output configuration object. This allows to update head\nproperties."]
        pub fn create_configuration(
            &self,
            serial: u32,
        ) -> Main<super::zwlr_output_configuration_v1::ZwlrOutputConfigurationV1> {
            let msg = Request::CreateConfiguration { serial: serial };
            self.0.send(msg, None).unwrap()
        }
        #[doc = "stop sending events\n\nIndicates the client no longer wishes to receive events for output\nconfiguration changes. However the compositor may emit further events,\nuntil the finished event is emitted.\n\nThe client must not send any more requests after this one."]
        pub fn stop(&self) -> () {
            let msg = Request::Stop;
            self.0.send::<AnonymousObject>(msg, None);
        }
    }
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_CREATE_CONFIGURATION_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_STOP_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this event"]
    pub const EVT_HEAD_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this event"]
    pub const EVT_DONE_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this event"]
    pub const EVT_FINISHED_SINCE: u32 = 1u32;
    static mut zwlr_output_manager_v1_requests_create_configuration_types: [*const wl_interface;
        2] = [
        unsafe {
            &super::zwlr_output_configuration_v1::zwlr_output_configuration_v1_interface
                as *const wl_interface
        },
        NULLPTR as *const wl_interface,
    ];
    #[doc = r" C-representation of the messages of this interface, for interop"]
    pub static mut zwlr_output_manager_v1_requests: [wl_message; 2] = [
        wl_message {
            name: b"create_configuration\0" as *const u8 as *const c_char,
            signature: b"nu\0" as *const u8 as *const c_char,
            types: unsafe {
                &zwlr_output_manager_v1_requests_create_configuration_types as *const _
            },
        },
        wl_message {
            name: b"stop\0" as *const u8 as *const c_char,
            signature: b"\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
    ];
    static mut zwlr_output_manager_v1_events_head_types: [*const wl_interface; 1] = [unsafe {
        &super::zwlr_output_head_v1::zwlr_output_head_v1_interface as *const wl_interface
    }];
    #[doc = r" C-representation of the messages of this interface, for interop"]
    pub static mut zwlr_output_manager_v1_events: [wl_message; 3] = [
        wl_message {
            name: b"head\0" as *const u8 as *const c_char,
            signature: b"n\0" as *const u8 as *const c_char,
            types: unsafe { &zwlr_output_manager_v1_events_head_types as *const _ },
        },
        wl_message {
            name: b"done\0" as *const u8 as *const c_char,
            signature: b"u\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
        wl_message {
            name: b"finished\0" as *const u8 as *const c_char,
            signature: b"\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
    ];
    #[doc = r" C representation of this interface, for interop"]
    pub static mut zwlr_output_manager_v1_interface: wl_interface = wl_interface {
        name: b"zwlr_output_manager_v1\0" as *const u8 as *const c_char,
        version: 2,
        request_count: 2,
        requests: unsafe { &zwlr_output_manager_v1_requests as *const _ },
        event_count: 3,
        events: unsafe { &zwlr_output_manager_v1_events as *const _ },
    };
}
#[doc = "output device\n\nA head is an output device. The difference between a wl_output object and\na head is that heads are advertised even if they are turned off. A head\nobject only advertises properties and cannot be used directly to change\nthem.\n\nA head has some read-only properties: modes, name, description and\nphysical_size. These cannot be changed by clients.\n\nOther properties can be updated via a wlr_output_configuration object.\n\nProperties sent via this interface are applied atomically via the\nwlr_output_manager.done event. No guarantees are made regarding the order\nin which properties are sent."]
pub mod zwlr_output_head_v1 {
    use super::sys::client::*;
    use super::sys::common::{wl_argument, wl_array, wl_interface, wl_message};
    use super::{
        smallvec, types_null, AnonymousObject, Argument, ArgumentType, Interface, Main, Message,
        MessageDesc, MessageGroup, Object, ObjectMetadata, Proxy, NULLPTR,
    };
    use std::os::raw::c_char;
    #[derive(Debug)]
    #[non_exhaustive]
    pub enum Request {}
    impl super::MessageGroup for Request {
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
            panic!("Request::from_raw can not be used Client-side.")
        }
        fn into_raw(self, sender_id: u32) -> Message {
            match self {}
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
            match self {}
        }
    }
    #[derive(Debug)]
    #[non_exhaustive]
    pub enum Event {
        #[doc = "head name\n\nThis event describes the head name.\n\nThe naming convention is compositor defined, but limited to alphanumeric\ncharacters and dashes (-). Each name is unique among all wlr_output_head\nobjects, but if a wlr_output_head object is destroyed the same name may\nbe reused later. The names will also remain consistent across sessions\nwith the same hardware and software configuration.\n\nExamples of names include 'HDMI-A-1', 'WL-1', 'X11-1', etc. However, do\nnot assume that the name is a reflection of an underlying DRM\nconnector, X11 connection, etc.\n\nIf the compositor implements the xdg-output protocol and this head is\nenabled, the xdg_output.name event must report the same name.\n\nThe name event is sent after a wlr_output_head object is created. This\nevent is only sent once per object, and the name does not change over\nthe lifetime of the wlr_output_head object."]
        Name { name: String },
        #[doc = "head description\n\nThis event describes a human-readable description of the head.\n\nThe description is a UTF-8 string with no convention defined for its\ncontents. Examples might include 'Foocorp 11\" Display' or 'Virtual X11\noutput via :1'. However, do not assume that the name is a reflection of\nthe make, model, serial of the underlying DRM connector or the display\nname of the underlying X11 connection, etc.\n\nIf the compositor implements xdg-output and this head is enabled,\nthe xdg_output.description must report the same description.\n\nThe description event is sent after a wlr_output_head object is created.\nThis event is only sent once per object, and the description does not\nchange over the lifetime of the wlr_output_head object."]
        Description { description: String },
        #[doc = "head physical size\n\nThis event describes the physical size of the head. This event is only\nsent if the head has a physical size (e.g. is not a projector or a\nvirtual device)."]
        PhysicalSize { width: i32, height: i32 },
        #[doc = "introduce a mode\n\nThis event introduces a mode for this head. It is sent once per\nsupported mode."]
        Mode {
            mode: Main<super::zwlr_output_mode_v1::ZwlrOutputModeV1>,
        },
        #[doc = "head is enabled or disabled\n\nThis event describes whether the head is enabled. A disabled head is not\nmapped to a region of the global compositor space.\n\nWhen a head is disabled, some properties (current_mode, position,\ntransform and scale) are irrelevant."]
        Enabled { enabled: i32 },
        #[doc = "current mode\n\nThis event describes the mode currently in use for this head. It is only\nsent if the output is enabled."]
        CurrentMode {
            mode: super::zwlr_output_mode_v1::ZwlrOutputModeV1,
        },
        #[doc = "current position\n\nThis events describes the position of the head in the global compositor\nspace. It is only sent if the output is enabled."]
        Position { x: i32, y: i32 },
        #[doc = "current transformation\n\nThis event describes the transformation currently applied to the head.\nIt is only sent if the output is enabled."]
        Transform {
            transform: super::wl_output::Transform,
        },
        #[doc = "current scale\n\nThis events describes the scale of the head in the global compositor\nspace. It is only sent if the output is enabled."]
        Scale { scale: f64 },
        #[doc = "the head has been destroyed\n\nThe compositor will destroy the object immediately after sending this\nevent, so it will become invalid and the client should release any\nresources associated with it."]
        Finished,
        #[doc = "head manufacturer\n\nThis event describes the manufacturer of the head.\n\nThis must report the same make as the wl_output interface does in its\ngeometry event.\n\nTogether with the model and serial_number events the purpose is to\nallow clients to recognize heads from previous sessions and for example\nload head-specific configurations back.\n\nIt is not guaranteed this event will be ever sent. A reason for that\ncan be that the compositor does not have information about the make of\nthe head or the definition of a make is not sensible in the current\nsetup, for example in a virtual session. Clients can still try to\nidentify the head by available information from other events but should\nbe aware that there is an increased risk of false positives.\n\nIt is not recommended to display the make string in UI to users. For\nthat the string provided by the description event should be preferred.\n\nOnly available since version 2 of the interface"]
        Make { make: String },
        #[doc = "head model\n\nThis event describes the model of the head.\n\nThis must report the same model as the wl_output interface does in its\ngeometry event.\n\nTogether with the make and serial_number events the purpose is to\nallow clients to recognize heads from previous sessions and for example\nload head-specific configurations back.\n\nIt is not guaranteed this event will be ever sent. A reason for that\ncan be that the compositor does not have information about the model of\nthe head or the definition of a model is not sensible in the current\nsetup, for example in a virtual session. Clients can still try to\nidentify the head by available information from other events but should\nbe aware that there is an increased risk of false positives.\n\nIt is not recommended to display the model string in UI to users. For\nthat the string provided by the description event should be preferred.\n\nOnly available since version 2 of the interface"]
        Model { model: String },
        #[doc = "head serial number\n\nThis event describes the serial number of the head.\n\nTogether with the make and model events the purpose is to allow clients\nto recognize heads from previous sessions and for example load head-\nspecific configurations back.\n\nIt is not guaranteed this event will be ever sent. A reason for that\ncan be that the compositor does not have information about the serial\nnumber of the head or the definition of a serial number is not sensible\nin the current setup. Clients can still try to identify the head by\navailable information from other events but should be aware that there\nis an increased risk of false positives.\n\nIt is not recommended to display the serial_number string in UI to\nusers. For that the string provided by the description event should be\npreferred.\n\nOnly available since version 2 of the interface"]
        SerialNumber { serial_number: String },
    }
    impl super::MessageGroup for Event {
        const MESSAGES: &'static [super::MessageDesc] = &[
            super::MessageDesc {
                name: "name",
                since: 1,
                signature: &[super::ArgumentType::Str],
                destructor: false,
            },
            super::MessageDesc {
                name: "description",
                since: 1,
                signature: &[super::ArgumentType::Str],
                destructor: false,
            },
            super::MessageDesc {
                name: "physical_size",
                since: 1,
                signature: &[super::ArgumentType::Int, super::ArgumentType::Int],
                destructor: false,
            },
            super::MessageDesc {
                name: "mode",
                since: 1,
                signature: &[super::ArgumentType::NewId],
                destructor: false,
            },
            super::MessageDesc {
                name: "enabled",
                since: 1,
                signature: &[super::ArgumentType::Int],
                destructor: false,
            },
            super::MessageDesc {
                name: "current_mode",
                since: 1,
                signature: &[super::ArgumentType::Object],
                destructor: false,
            },
            super::MessageDesc {
                name: "position",
                since: 1,
                signature: &[super::ArgumentType::Int, super::ArgumentType::Int],
                destructor: false,
            },
            super::MessageDesc {
                name: "transform",
                since: 1,
                signature: &[super::ArgumentType::Int],
                destructor: false,
            },
            super::MessageDesc {
                name: "scale",
                since: 1,
                signature: &[super::ArgumentType::Fixed],
                destructor: false,
            },
            super::MessageDesc {
                name: "finished",
                since: 1,
                signature: &[],
                destructor: false,
            },
            super::MessageDesc {
                name: "make",
                since: 2,
                signature: &[super::ArgumentType::Str],
                destructor: false,
            },
            super::MessageDesc {
                name: "model",
                since: 2,
                signature: &[super::ArgumentType::Str],
                destructor: false,
            },
            super::MessageDesc {
                name: "serial_number",
                since: 2,
                signature: &[super::ArgumentType::Str],
                destructor: false,
            },
        ];
        type Map = super::ProxyMap;
        fn is_destructor(&self) -> bool {
            match *self {
                _ => false,
            }
        }
        fn opcode(&self) -> u16 {
            match *self {
                Event::Name { .. } => 0,
                Event::Description { .. } => 1,
                Event::PhysicalSize { .. } => 2,
                Event::Mode { .. } => 3,
                Event::Enabled { .. } => 4,
                Event::CurrentMode { .. } => 5,
                Event::Position { .. } => 6,
                Event::Transform { .. } => 7,
                Event::Scale { .. } => 8,
                Event::Finished => 9,
                Event::Make { .. } => 10,
                Event::Model { .. } => 11,
                Event::SerialNumber { .. } => 12,
            }
        }
        fn since(&self) -> u32 {
            match *self {
                Event::Name { .. } => 1,
                Event::Description { .. } => 1,
                Event::PhysicalSize { .. } => 1,
                Event::Mode { .. } => 1,
                Event::Enabled { .. } => 1,
                Event::CurrentMode { .. } => 1,
                Event::Position { .. } => 1,
                Event::Transform { .. } => 1,
                Event::Scale { .. } => 1,
                Event::Finished => 1,
                Event::Make { .. } => 2,
                Event::Model { .. } => 2,
                Event::SerialNumber { .. } => 2,
            }
        }
        fn child<Meta: ObjectMetadata>(
            opcode: u16,
            version: u32,
            meta: &Meta,
        ) -> Option<Object<Meta>> {
            match opcode {
                3 => Some(Object::from_interface::<
                    super::zwlr_output_mode_v1::ZwlrOutputModeV1,
                >(version, meta.child())),
                _ => None,
            }
        }
        fn from_raw(msg: Message, map: &mut Self::Map) -> Result<Self, ()> {
            match msg.opcode {
                0 => {
                    let mut args = msg.args.into_iter();
                    Ok(Event::Name {
                        name: {
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
                1 => {
                    let mut args = msg.args.into_iter();
                    Ok(Event::Description {
                        description: {
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
                2 => {
                    let mut args = msg.args.into_iter();
                    Ok(Event::PhysicalSize {
                        width: {
                            if let Some(Argument::Int(val)) = args.next() {
                                val
                            } else {
                                return Err(());
                            }
                        },
                        height: {
                            if let Some(Argument::Int(val)) = args.next() {
                                val
                            } else {
                                return Err(());
                            }
                        },
                    })
                }
                3 => {
                    let mut args = msg.args.into_iter();
                    Ok(Event::Mode {
                        mode: {
                            if let Some(Argument::NewId(val)) = args.next() {
                                map.get_new(val).ok_or(())?
                            } else {
                                return Err(());
                            }
                        },
                    })
                }
                4 => {
                    let mut args = msg.args.into_iter();
                    Ok(Event::Enabled {
                        enabled: {
                            if let Some(Argument::Int(val)) = args.next() {
                                val
                            } else {
                                return Err(());
                            }
                        },
                    })
                }
                5 => {
                    let mut args = msg.args.into_iter();
                    Ok(Event::CurrentMode {
                        mode: {
                            if let Some(Argument::Object(val)) = args.next() {
                                map.get_or_dead(val).into()
                            } else {
                                return Err(());
                            }
                        },
                    })
                }
                6 => {
                    let mut args = msg.args.into_iter();
                    Ok(Event::Position {
                        x: {
                            if let Some(Argument::Int(val)) = args.next() {
                                val
                            } else {
                                return Err(());
                            }
                        },
                        y: {
                            if let Some(Argument::Int(val)) = args.next() {
                                val
                            } else {
                                return Err(());
                            }
                        },
                    })
                }
                7 => {
                    let mut args = msg.args.into_iter();
                    Ok(Event::Transform {
                        transform: {
                            if let Some(Argument::Int(val)) = args.next() {
                                super::wl_output::Transform::from_raw(val as u32).ok_or(())?
                            } else {
                                return Err(());
                            }
                        },
                    })
                }
                8 => {
                    let mut args = msg.args.into_iter();
                    Ok(Event::Scale {
                        scale: {
                            if let Some(Argument::Fixed(val)) = args.next() {
                                (val as f64) / 256.
                            } else {
                                return Err(());
                            }
                        },
                    })
                }
                9 => Ok(Event::Finished),
                10 => {
                    let mut args = msg.args.into_iter();
                    Ok(Event::Make {
                        make: {
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
                11 => {
                    let mut args = msg.args.into_iter();
                    Ok(Event::Model {
                        model: {
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
                12 => {
                    let mut args = msg.args.into_iter();
                    Ok(Event::SerialNumber {
                        serial_number: {
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
                    Ok(Event::Name {
                        name: ::std::ffi::CStr::from_ptr(_args[0].s)
                            .to_string_lossy()
                            .into_owned(),
                    })
                }
                1 => {
                    let _args = ::std::slice::from_raw_parts(args, 1);
                    Ok(Event::Description {
                        description: ::std::ffi::CStr::from_ptr(_args[0].s)
                            .to_string_lossy()
                            .into_owned(),
                    })
                }
                2 => {
                    let _args = ::std::slice::from_raw_parts(args, 2);
                    Ok(Event::PhysicalSize {
                        width: _args[0].i,
                        height: _args[1].i,
                    })
                }
                3 => {
                    let _args = ::std::slice::from_raw_parts(args, 1);
                    Ok(Event::Mode {
                        mode: Main::<super::zwlr_output_mode_v1::ZwlrOutputModeV1>::from_c_ptr(
                            _args[0].o as *mut _,
                        ),
                    })
                }
                4 => {
                    let _args = ::std::slice::from_raw_parts(args, 1);
                    Ok(Event::Enabled {
                        enabled: _args[0].i,
                    })
                }
                5 => {
                    let _args = ::std::slice::from_raw_parts(args, 1);
                    Ok(Event::CurrentMode {
                        mode: Proxy::<super::zwlr_output_mode_v1::ZwlrOutputModeV1>::from_c_ptr(
                            _args[0].o as *mut _,
                        )
                        .into(),
                    })
                }
                6 => {
                    let _args = ::std::slice::from_raw_parts(args, 2);
                    Ok(Event::Position {
                        x: _args[0].i,
                        y: _args[1].i,
                    })
                }
                7 => {
                    let _args = ::std::slice::from_raw_parts(args, 1);
                    Ok(Event::Transform {
                        transform: super::wl_output::Transform::from_raw(_args[0].i as u32)
                            .ok_or(())?,
                    })
                }
                8 => {
                    let _args = ::std::slice::from_raw_parts(args, 1);
                    Ok(Event::Scale {
                        scale: (_args[0].f as f64) / 256.,
                    })
                }
                9 => Ok(Event::Finished),
                10 => {
                    let _args = ::std::slice::from_raw_parts(args, 1);
                    Ok(Event::Make {
                        make: ::std::ffi::CStr::from_ptr(_args[0].s)
                            .to_string_lossy()
                            .into_owned(),
                    })
                }
                11 => {
                    let _args = ::std::slice::from_raw_parts(args, 1);
                    Ok(Event::Model {
                        model: ::std::ffi::CStr::from_ptr(_args[0].s)
                            .to_string_lossy()
                            .into_owned(),
                    })
                }
                12 => {
                    let _args = ::std::slice::from_raw_parts(args, 1);
                    Ok(Event::SerialNumber {
                        serial_number: ::std::ffi::CStr::from_ptr(_args[0].s)
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
    pub struct ZwlrOutputHeadV1(Proxy<ZwlrOutputHeadV1>);
    impl AsRef<Proxy<ZwlrOutputHeadV1>> for ZwlrOutputHeadV1 {
        #[inline]
        fn as_ref(&self) -> &Proxy<Self> {
            &self.0
        }
    }
    impl From<Proxy<ZwlrOutputHeadV1>> for ZwlrOutputHeadV1 {
        #[inline]
        fn from(value: Proxy<Self>) -> Self {
            ZwlrOutputHeadV1(value)
        }
    }
    impl From<ZwlrOutputHeadV1> for Proxy<ZwlrOutputHeadV1> {
        #[inline]
        fn from(value: ZwlrOutputHeadV1) -> Self {
            value.0
        }
    }
    impl std::fmt::Debug for ZwlrOutputHeadV1 {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            f.write_fmt(format_args!("{:?}", self.0))
        }
    }
    impl Interface for ZwlrOutputHeadV1 {
        type Request = Request;
        type Event = Event;
        const NAME: &'static str = "zwlr_output_head_v1";
        const VERSION: u32 = 2;
        fn c_interface() -> *const wl_interface {
            unsafe { &zwlr_output_head_v1_interface }
        }
    }
    impl ZwlrOutputHeadV1 {}
    #[doc = r" The minimal object version supporting this event"]
    pub const EVT_NAME_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this event"]
    pub const EVT_DESCRIPTION_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this event"]
    pub const EVT_PHYSICAL_SIZE_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this event"]
    pub const EVT_MODE_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this event"]
    pub const EVT_ENABLED_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this event"]
    pub const EVT_CURRENT_MODE_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this event"]
    pub const EVT_POSITION_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this event"]
    pub const EVT_TRANSFORM_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this event"]
    pub const EVT_SCALE_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this event"]
    pub const EVT_FINISHED_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this event"]
    pub const EVT_MAKE_SINCE: u32 = 2u32;
    #[doc = r" The minimal object version supporting this event"]
    pub const EVT_MODEL_SINCE: u32 = 2u32;
    #[doc = r" The minimal object version supporting this event"]
    pub const EVT_SERIAL_NUMBER_SINCE: u32 = 2u32;
    static mut zwlr_output_head_v1_events_mode_types: [*const wl_interface; 1] = [unsafe {
        &super::zwlr_output_mode_v1::zwlr_output_mode_v1_interface as *const wl_interface
    }];
    static mut zwlr_output_head_v1_events_current_mode_types: [*const wl_interface; 1] = [unsafe {
        &super::zwlr_output_mode_v1::zwlr_output_mode_v1_interface as *const wl_interface
    }];
    #[doc = r" C-representation of the messages of this interface, for interop"]
    pub static mut zwlr_output_head_v1_events: [wl_message; 13] = [
        wl_message {
            name: b"name\0" as *const u8 as *const c_char,
            signature: b"s\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
        wl_message {
            name: b"description\0" as *const u8 as *const c_char,
            signature: b"s\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
        wl_message {
            name: b"physical_size\0" as *const u8 as *const c_char,
            signature: b"ii\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
        wl_message {
            name: b"mode\0" as *const u8 as *const c_char,
            signature: b"n\0" as *const u8 as *const c_char,
            types: unsafe { &zwlr_output_head_v1_events_mode_types as *const _ },
        },
        wl_message {
            name: b"enabled\0" as *const u8 as *const c_char,
            signature: b"i\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
        wl_message {
            name: b"current_mode\0" as *const u8 as *const c_char,
            signature: b"o\0" as *const u8 as *const c_char,
            types: unsafe { &zwlr_output_head_v1_events_current_mode_types as *const _ },
        },
        wl_message {
            name: b"position\0" as *const u8 as *const c_char,
            signature: b"ii\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
        wl_message {
            name: b"transform\0" as *const u8 as *const c_char,
            signature: b"i\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
        wl_message {
            name: b"scale\0" as *const u8 as *const c_char,
            signature: b"f\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
        wl_message {
            name: b"finished\0" as *const u8 as *const c_char,
            signature: b"\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
        wl_message {
            name: b"make\0" as *const u8 as *const c_char,
            signature: b"2s\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
        wl_message {
            name: b"model\0" as *const u8 as *const c_char,
            signature: b"2s\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
        wl_message {
            name: b"serial_number\0" as *const u8 as *const c_char,
            signature: b"2s\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
    ];
    #[doc = r" C representation of this interface, for interop"]
    pub static mut zwlr_output_head_v1_interface: wl_interface = wl_interface {
        name: b"zwlr_output_head_v1\0" as *const u8 as *const c_char,
        version: 2,
        request_count: 0,
        requests: NULLPTR as *const wl_message,
        event_count: 13,
        events: unsafe { &zwlr_output_head_v1_events as *const _ },
    };
}
#[doc = "output mode\n\nThis object describes an output mode.\n\nSome heads don't support output modes, in which case modes won't be\nadvertised.\n\nProperties sent via this interface are applied atomically via the\nwlr_output_manager.done event. No guarantees are made regarding the order\nin which properties are sent."]
pub mod zwlr_output_mode_v1 {
    use super::sys::client::*;
    use super::sys::common::{wl_argument, wl_array, wl_interface, wl_message};
    use super::{
        smallvec, types_null, AnonymousObject, Argument, ArgumentType, Interface, Main, Message,
        MessageDesc, MessageGroup, Object, ObjectMetadata, Proxy, NULLPTR,
    };
    use std::os::raw::c_char;
    #[derive(Debug)]
    #[non_exhaustive]
    pub enum Request {}
    impl super::MessageGroup for Request {
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
            panic!("Request::from_raw can not be used Client-side.")
        }
        fn into_raw(self, sender_id: u32) -> Message {
            match self {}
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
            match self {}
        }
    }
    #[derive(Debug)]
    #[non_exhaustive]
    pub enum Event {
        #[doc = "mode size\n\nThis event describes the mode size. The size is given in physical\nhardware units of the output device. This is not necessarily the same as\nthe output size in the global compositor space. For instance, the output\nmay be scaled or transformed."]
        Size { width: i32, height: i32 },
        #[doc = "mode refresh rate\n\nThis event describes the mode's fixed vertical refresh rate. It is only\nsent if the mode has a fixed refresh rate."]
        Refresh { refresh: i32 },
        #[doc = "mode is preferred\n\nThis event advertises this mode as preferred."]
        Preferred,
        #[doc = "the mode has been destroyed\n\nThe compositor will destroy the object immediately after sending this\nevent, so it will become invalid and the client should release any\nresources associated with it."]
        Finished,
    }
    impl super::MessageGroup for Event {
        const MESSAGES: &'static [super::MessageDesc] = &[
            super::MessageDesc {
                name: "size",
                since: 1,
                signature: &[super::ArgumentType::Int, super::ArgumentType::Int],
                destructor: false,
            },
            super::MessageDesc {
                name: "refresh",
                since: 1,
                signature: &[super::ArgumentType::Int],
                destructor: false,
            },
            super::MessageDesc {
                name: "preferred",
                since: 1,
                signature: &[],
                destructor: false,
            },
            super::MessageDesc {
                name: "finished",
                since: 1,
                signature: &[],
                destructor: false,
            },
        ];
        type Map = super::ProxyMap;
        fn is_destructor(&self) -> bool {
            match *self {
                _ => false,
            }
        }
        fn opcode(&self) -> u16 {
            match *self {
                Event::Size { .. } => 0,
                Event::Refresh { .. } => 1,
                Event::Preferred => 2,
                Event::Finished => 3,
            }
        }
        fn since(&self) -> u32 {
            match *self {
                Event::Size { .. } => 1,
                Event::Refresh { .. } => 1,
                Event::Preferred => 1,
                Event::Finished => 1,
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
                    Ok(Event::Size {
                        width: {
                            if let Some(Argument::Int(val)) = args.next() {
                                val
                            } else {
                                return Err(());
                            }
                        },
                        height: {
                            if let Some(Argument::Int(val)) = args.next() {
                                val
                            } else {
                                return Err(());
                            }
                        },
                    })
                }
                1 => {
                    let mut args = msg.args.into_iter();
                    Ok(Event::Refresh {
                        refresh: {
                            if let Some(Argument::Int(val)) = args.next() {
                                val
                            } else {
                                return Err(());
                            }
                        },
                    })
                }
                2 => Ok(Event::Preferred),
                3 => Ok(Event::Finished),
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
                    let _args = ::std::slice::from_raw_parts(args, 2);
                    Ok(Event::Size {
                        width: _args[0].i,
                        height: _args[1].i,
                    })
                }
                1 => {
                    let _args = ::std::slice::from_raw_parts(args, 1);
                    Ok(Event::Refresh {
                        refresh: _args[0].i,
                    })
                }
                2 => Ok(Event::Preferred),
                3 => Ok(Event::Finished),
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
    pub struct ZwlrOutputModeV1(Proxy<ZwlrOutputModeV1>);
    impl AsRef<Proxy<ZwlrOutputModeV1>> for ZwlrOutputModeV1 {
        #[inline]
        fn as_ref(&self) -> &Proxy<Self> {
            &self.0
        }
    }
    impl From<Proxy<ZwlrOutputModeV1>> for ZwlrOutputModeV1 {
        #[inline]
        fn from(value: Proxy<Self>) -> Self {
            ZwlrOutputModeV1(value)
        }
    }
    impl From<ZwlrOutputModeV1> for Proxy<ZwlrOutputModeV1> {
        #[inline]
        fn from(value: ZwlrOutputModeV1) -> Self {
            value.0
        }
    }
    impl std::fmt::Debug for ZwlrOutputModeV1 {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            f.write_fmt(format_args!("{:?}", self.0))
        }
    }
    impl Interface for ZwlrOutputModeV1 {
        type Request = Request;
        type Event = Event;
        const NAME: &'static str = "zwlr_output_mode_v1";
        const VERSION: u32 = 2;
        fn c_interface() -> *const wl_interface {
            unsafe { &zwlr_output_mode_v1_interface }
        }
    }
    impl ZwlrOutputModeV1 {}
    #[doc = r" The minimal object version supporting this event"]
    pub const EVT_SIZE_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this event"]
    pub const EVT_REFRESH_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this event"]
    pub const EVT_PREFERRED_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this event"]
    pub const EVT_FINISHED_SINCE: u32 = 1u32;
    #[doc = r" C-representation of the messages of this interface, for interop"]
    pub static mut zwlr_output_mode_v1_events: [wl_message; 4] = [
        wl_message {
            name: b"size\0" as *const u8 as *const c_char,
            signature: b"ii\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
        wl_message {
            name: b"refresh\0" as *const u8 as *const c_char,
            signature: b"i\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
        wl_message {
            name: b"preferred\0" as *const u8 as *const c_char,
            signature: b"\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
        wl_message {
            name: b"finished\0" as *const u8 as *const c_char,
            signature: b"\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
    ];
    #[doc = r" C representation of this interface, for interop"]
    pub static mut zwlr_output_mode_v1_interface: wl_interface = wl_interface {
        name: b"zwlr_output_mode_v1\0" as *const u8 as *const c_char,
        version: 2,
        request_count: 0,
        requests: NULLPTR as *const wl_message,
        event_count: 4,
        events: unsafe { &zwlr_output_mode_v1_events as *const _ },
    };
}
#[doc = "output configuration\n\nThis object is used by the client to describe a full output configuration.\n\nFirst, the client needs to setup the output configuration. Each head can\nbe either enabled (and configured) or disabled. It is a protocol error to\nsend two enable_head or disable_head requests with the same head. It is a\nprotocol error to omit a head in a configuration.\n\nThen, the client can apply or test the configuration. The compositor will\nthen reply with a succeeded, failed or cancelled event. Finally the client\nshould destroy the configuration object."]
pub mod zwlr_output_configuration_v1 {
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
        #[doc = "head has been configured twice"]
        AlreadyConfiguredHead = 1,
        #[doc = "head has not been configured"]
        UnconfiguredHead = 2,
        #[doc = "request sent after configuration has been applied or tested"]
        AlreadyUsed = 3,
    }
    impl Error {
        pub fn from_raw(n: u32) -> Option<Error> {
            match n {
                1 => Some(Error::AlreadyConfiguredHead),
                2 => Some(Error::UnconfiguredHead),
                3 => Some(Error::AlreadyUsed),
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
        #[doc = "enable and configure a head\n\nEnable a head. This request creates a head configuration object that can\nbe used to change the head's properties."]
        EnableHead {
            head: super::zwlr_output_head_v1::ZwlrOutputHeadV1,
        },
        #[doc = "disable a head\n\nDisable a head."]
        DisableHead {
            head: super::zwlr_output_head_v1::ZwlrOutputHeadV1,
        },
        #[doc = "apply the configuration\n\nApply the new output configuration.\n\nIn case the configuration is successfully applied, there is no guarantee\nthat the new output state matches completely the requested\nconfiguration. For instance, a compositor might round the scale if it\ndoesn't support fractional scaling.\n\nAfter this request has been sent, the compositor must respond with an\nsucceeded, failed or cancelled event. Sending a request that isn't the\ndestructor is a protocol error."]
        Apply,
        #[doc = "test the configuration\n\nTest the new output configuration. The configuration won't be applied,\nbut will only be validated.\n\nEven if the compositor succeeds to test a configuration, applying it may\nfail.\n\nAfter this request has been sent, the compositor must respond with an\nsucceeded, failed or cancelled event. Sending a request that isn't the\ndestructor is a protocol error."]
        Test,
        #[doc = "destroy the output configuration\n\nUsing this request a client can tell the compositor that it is not going\nto use the configuration object anymore. Any changes to the outputs\nthat have not been applied will be discarded.\n\nThis request also destroys wlr_output_configuration_head objects created\nvia this object.\n\nThis is a destructor, once sent this object cannot be used any longer."]
        Destroy,
    }
    impl super::MessageGroup for Request {
        const MESSAGES: &'static [super::MessageDesc] = &[
            super::MessageDesc {
                name: "enable_head",
                since: 1,
                signature: &[super::ArgumentType::NewId, super::ArgumentType::Object],
                destructor: false,
            },
            super::MessageDesc {
                name: "disable_head",
                since: 1,
                signature: &[super::ArgumentType::Object],
                destructor: false,
            },
            super::MessageDesc {
                name: "apply",
                since: 1,
                signature: &[],
                destructor: false,
            },
            super::MessageDesc {
                name: "test",
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
                Request::EnableHead { .. } => 0,
                Request::DisableHead { .. } => 1,
                Request::Apply => 2,
                Request::Test => 3,
                Request::Destroy => 4,
            }
        }
        fn since(&self) -> u32 {
            match *self {
                Request::EnableHead { .. } => 1,
                Request::DisableHead { .. } => 1,
                Request::Apply => 1,
                Request::Test => 1,
                Request::Destroy => 1,
            }
        }
        fn child<Meta: ObjectMetadata>(
            opcode: u16,
            version: u32,
            meta: &Meta,
        ) -> Option<Object<Meta>> {
            match opcode {
                0 => Some(Object::from_interface::<
                    super::zwlr_output_configuration_head_v1::ZwlrOutputConfigurationHeadV1,
                >(version, meta.child())),
                _ => None,
            }
        }
        fn from_raw(msg: Message, map: &mut Self::Map) -> Result<Self, ()> {
            panic!("Request::from_raw can not be used Client-side.")
        }
        fn into_raw(self, sender_id: u32) -> Message {
            match self {
                Request::EnableHead { head } => Message {
                    sender_id: sender_id,
                    opcode: 0,
                    args: smallvec![Argument::NewId(0), Argument::Object(head.as_ref().id()),],
                },
                Request::DisableHead { head } => Message {
                    sender_id: sender_id,
                    opcode: 1,
                    args: smallvec![Argument::Object(head.as_ref().id()),],
                },
                Request::Apply => Message {
                    sender_id: sender_id,
                    opcode: 2,
                    args: smallvec![],
                },
                Request::Test => Message {
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
                Request::EnableHead { head } => {
                    let mut _args_array: [wl_argument; 2] = unsafe { ::std::mem::zeroed() };
                    _args_array[0].o = ::std::ptr::null_mut() as *mut _;
                    _args_array[1].o = head.as_ref().c_ptr() as *mut _;
                    f(0, &mut _args_array)
                }
                Request::DisableHead { head } => {
                    let mut _args_array: [wl_argument; 1] = unsafe { ::std::mem::zeroed() };
                    _args_array[0].o = head.as_ref().c_ptr() as *mut _;
                    f(1, &mut _args_array)
                }
                Request::Apply => {
                    let mut _args_array: [wl_argument; 0] = unsafe { ::std::mem::zeroed() };
                    f(2, &mut _args_array)
                }
                Request::Test => {
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
        #[doc = "configuration changes succeeded\n\nSent after the compositor has successfully applied the changes or\ntested them.\n\nUpon receiving this event, the client should destroy this object.\n\nIf the current configuration has changed, events to describe the changes\nwill be sent followed by a wlr_output_manager.done event."]
        Succeeded,
        #[doc = "configuration changes failed\n\nSent if the compositor rejects the changes or failed to apply them. The\ncompositor should revert any changes made by the apply request that\ntriggered this event.\n\nUpon receiving this event, the client should destroy this object."]
        Failed,
        #[doc = "configuration has been cancelled\n\nSent if the compositor cancels the configuration because the state of an\noutput changed and the client has outdated information (e.g. after an\noutput has been hotplugged).\n\nThe client can create a new configuration with a newer serial and try\nagain.\n\nUpon receiving this event, the client should destroy this object."]
        Cancelled,
    }
    impl super::MessageGroup for Event {
        const MESSAGES: &'static [super::MessageDesc] = &[
            super::MessageDesc {
                name: "succeeded",
                since: 1,
                signature: &[],
                destructor: false,
            },
            super::MessageDesc {
                name: "failed",
                since: 1,
                signature: &[],
                destructor: false,
            },
            super::MessageDesc {
                name: "cancelled",
                since: 1,
                signature: &[],
                destructor: false,
            },
        ];
        type Map = super::ProxyMap;
        fn is_destructor(&self) -> bool {
            match *self {
                _ => false,
            }
        }
        fn opcode(&self) -> u16 {
            match *self {
                Event::Succeeded => 0,
                Event::Failed => 1,
                Event::Cancelled => 2,
            }
        }
        fn since(&self) -> u32 {
            match *self {
                Event::Succeeded => 1,
                Event::Failed => 1,
                Event::Cancelled => 1,
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
                0 => Ok(Event::Succeeded),
                1 => Ok(Event::Failed),
                2 => Ok(Event::Cancelled),
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
                0 => Ok(Event::Succeeded),
                1 => Ok(Event::Failed),
                2 => Ok(Event::Cancelled),
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
    pub struct ZwlrOutputConfigurationV1(Proxy<ZwlrOutputConfigurationV1>);
    impl AsRef<Proxy<ZwlrOutputConfigurationV1>> for ZwlrOutputConfigurationV1 {
        #[inline]
        fn as_ref(&self) -> &Proxy<Self> {
            &self.0
        }
    }
    impl From<Proxy<ZwlrOutputConfigurationV1>> for ZwlrOutputConfigurationV1 {
        #[inline]
        fn from(value: Proxy<Self>) -> Self {
            ZwlrOutputConfigurationV1(value)
        }
    }
    impl From<ZwlrOutputConfigurationV1> for Proxy<ZwlrOutputConfigurationV1> {
        #[inline]
        fn from(value: ZwlrOutputConfigurationV1) -> Self {
            value.0
        }
    }
    impl std::fmt::Debug for ZwlrOutputConfigurationV1 {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            f.write_fmt(format_args!("{:?}", self.0))
        }
    }
    impl Interface for ZwlrOutputConfigurationV1 {
        type Request = Request;
        type Event = Event;
        const NAME: &'static str = "zwlr_output_configuration_v1";
        const VERSION: u32 = 2;
        fn c_interface() -> *const wl_interface {
            unsafe { &zwlr_output_configuration_v1_interface }
        }
    }
    impl ZwlrOutputConfigurationV1 {
        #[doc = "enable and configure a head\n\nEnable a head. This request creates a head configuration object that can\nbe used to change the head's properties."]
        pub fn enable_head(
            &self,
            head: &super::zwlr_output_head_v1::ZwlrOutputHeadV1,
        ) -> Main<super::zwlr_output_configuration_head_v1::ZwlrOutputConfigurationHeadV1> {
            let msg = Request::EnableHead { head: head.clone() };
            self.0.send(msg, None).unwrap()
        }
        #[doc = "disable a head\n\nDisable a head."]
        pub fn disable_head(&self, head: &super::zwlr_output_head_v1::ZwlrOutputHeadV1) -> () {
            let msg = Request::DisableHead { head: head.clone() };
            self.0.send::<AnonymousObject>(msg, None);
        }
        #[doc = "apply the configuration\n\nApply the new output configuration.\n\nIn case the configuration is successfully applied, there is no guarantee\nthat the new output state matches completely the requested\nconfiguration. For instance, a compositor might round the scale if it\ndoesn't support fractional scaling.\n\nAfter this request has been sent, the compositor must respond with an\nsucceeded, failed or cancelled event. Sending a request that isn't the\ndestructor is a protocol error."]
        pub fn apply(&self) -> () {
            let msg = Request::Apply;
            self.0.send::<AnonymousObject>(msg, None);
        }
        #[doc = "test the configuration\n\nTest the new output configuration. The configuration won't be applied,\nbut will only be validated.\n\nEven if the compositor succeeds to test a configuration, applying it may\nfail.\n\nAfter this request has been sent, the compositor must respond with an\nsucceeded, failed or cancelled event. Sending a request that isn't the\ndestructor is a protocol error."]
        pub fn test(&self) -> () {
            let msg = Request::Test;
            self.0.send::<AnonymousObject>(msg, None);
        }
        #[doc = "destroy the output configuration\n\nUsing this request a client can tell the compositor that it is not going\nto use the configuration object anymore. Any changes to the outputs\nthat have not been applied will be discarded.\n\nThis request also destroys wlr_output_configuration_head objects created\nvia this object.\n\nThis is a destructor, you cannot send requests to this object any longer once this method is called."]
        pub fn destroy(&self) -> () {
            let msg = Request::Destroy;
            self.0.send::<AnonymousObject>(msg, None);
        }
    }
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_ENABLE_HEAD_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_DISABLE_HEAD_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_APPLY_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_TEST_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_DESTROY_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this event"]
    pub const EVT_SUCCEEDED_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this event"]
    pub const EVT_FAILED_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this event"]
    pub const EVT_CANCELLED_SINCE: u32 = 1u32;
    static mut zwlr_output_configuration_v1_requests_enable_head_types: [*const wl_interface; 2] = [
        unsafe {
            &super::zwlr_output_configuration_head_v1::zwlr_output_configuration_head_v1_interface
                as *const wl_interface
        },
        unsafe {
            &super::zwlr_output_head_v1::zwlr_output_head_v1_interface as *const wl_interface
        },
    ];
    static mut zwlr_output_configuration_v1_requests_disable_head_types: [*const wl_interface; 1] =
        [unsafe {
            &super::zwlr_output_head_v1::zwlr_output_head_v1_interface as *const wl_interface
        }];
    #[doc = r" C-representation of the messages of this interface, for interop"]
    pub static mut zwlr_output_configuration_v1_requests: [wl_message; 5] = [
        wl_message {
            name: b"enable_head\0" as *const u8 as *const c_char,
            signature: b"no\0" as *const u8 as *const c_char,
            types: unsafe { &zwlr_output_configuration_v1_requests_enable_head_types as *const _ },
        },
        wl_message {
            name: b"disable_head\0" as *const u8 as *const c_char,
            signature: b"o\0" as *const u8 as *const c_char,
            types: unsafe { &zwlr_output_configuration_v1_requests_disable_head_types as *const _ },
        },
        wl_message {
            name: b"apply\0" as *const u8 as *const c_char,
            signature: b"\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
        wl_message {
            name: b"test\0" as *const u8 as *const c_char,
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
    pub static mut zwlr_output_configuration_v1_events: [wl_message; 3] = [
        wl_message {
            name: b"succeeded\0" as *const u8 as *const c_char,
            signature: b"\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
        wl_message {
            name: b"failed\0" as *const u8 as *const c_char,
            signature: b"\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
        wl_message {
            name: b"cancelled\0" as *const u8 as *const c_char,
            signature: b"\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
    ];
    #[doc = r" C representation of this interface, for interop"]
    pub static mut zwlr_output_configuration_v1_interface: wl_interface = wl_interface {
        name: b"zwlr_output_configuration_v1\0" as *const u8 as *const c_char,
        version: 2,
        request_count: 5,
        requests: unsafe { &zwlr_output_configuration_v1_requests as *const _ },
        event_count: 3,
        events: unsafe { &zwlr_output_configuration_v1_events as *const _ },
    };
}
#[doc = "head configuration\n\nThis object is used by the client to update a single head's configuration.\n\nIt is a protocol error to set the same property twice."]
pub mod zwlr_output_configuration_head_v1 {
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
        #[doc = "property has already been set"]
        AlreadySet = 1,
        #[doc = "mode doesn't belong to head"]
        InvalidMode = 2,
        #[doc = "mode is invalid"]
        InvalidCustomMode = 3,
        #[doc = "transform value outside enum"]
        InvalidTransform = 4,
        #[doc = "scale negative or zero"]
        InvalidScale = 5,
    }
    impl Error {
        pub fn from_raw(n: u32) -> Option<Error> {
            match n {
                1 => Some(Error::AlreadySet),
                2 => Some(Error::InvalidMode),
                3 => Some(Error::InvalidCustomMode),
                4 => Some(Error::InvalidTransform),
                5 => Some(Error::InvalidScale),
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
        #[doc = "set the mode\n\nThis request sets the head's mode."]
        SetMode {
            mode: super::zwlr_output_mode_v1::ZwlrOutputModeV1,
        },
        #[doc = "set a custom mode\n\nThis request assigns a custom mode to the head. The size is given in\nphysical hardware units of the output device. If set to zero, the\nrefresh rate is unspecified.\n\nIt is a protocol error to set both a mode and a custom mode."]
        SetCustomMode {
            width: i32,
            height: i32,
            refresh: i32,
        },
        #[doc = "set the position\n\nThis request sets the head's position in the global compositor space."]
        SetPosition { x: i32, y: i32 },
        #[doc = "set the transform\n\nThis request sets the head's transform."]
        SetTransform {
            transform: super::wl_output::Transform,
        },
        #[doc = "set the scale\n\nThis request sets the head's scale."]
        SetScale { scale: f64 },
    }
    impl super::MessageGroup for Request {
        const MESSAGES: &'static [super::MessageDesc] = &[
            super::MessageDesc {
                name: "set_mode",
                since: 1,
                signature: &[super::ArgumentType::Object],
                destructor: false,
            },
            super::MessageDesc {
                name: "set_custom_mode",
                since: 1,
                signature: &[
                    super::ArgumentType::Int,
                    super::ArgumentType::Int,
                    super::ArgumentType::Int,
                ],
                destructor: false,
            },
            super::MessageDesc {
                name: "set_position",
                since: 1,
                signature: &[super::ArgumentType::Int, super::ArgumentType::Int],
                destructor: false,
            },
            super::MessageDesc {
                name: "set_transform",
                since: 1,
                signature: &[super::ArgumentType::Int],
                destructor: false,
            },
            super::MessageDesc {
                name: "set_scale",
                since: 1,
                signature: &[super::ArgumentType::Fixed],
                destructor: false,
            },
        ];
        type Map = super::ProxyMap;
        fn is_destructor(&self) -> bool {
            match *self {
                _ => false,
            }
        }
        fn opcode(&self) -> u16 {
            match *self {
                Request::SetMode { .. } => 0,
                Request::SetCustomMode { .. } => 1,
                Request::SetPosition { .. } => 2,
                Request::SetTransform { .. } => 3,
                Request::SetScale { .. } => 4,
            }
        }
        fn since(&self) -> u32 {
            match *self {
                Request::SetMode { .. } => 1,
                Request::SetCustomMode { .. } => 1,
                Request::SetPosition { .. } => 1,
                Request::SetTransform { .. } => 1,
                Request::SetScale { .. } => 1,
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
                Request::SetMode { mode } => Message {
                    sender_id: sender_id,
                    opcode: 0,
                    args: smallvec![Argument::Object(mode.as_ref().id()),],
                },
                Request::SetCustomMode {
                    width,
                    height,
                    refresh,
                } => Message {
                    sender_id: sender_id,
                    opcode: 1,
                    args: smallvec![
                        Argument::Int(width),
                        Argument::Int(height),
                        Argument::Int(refresh),
                    ],
                },
                Request::SetPosition { x, y } => Message {
                    sender_id: sender_id,
                    opcode: 2,
                    args: smallvec![Argument::Int(x), Argument::Int(y),],
                },
                Request::SetTransform { transform } => Message {
                    sender_id: sender_id,
                    opcode: 3,
                    args: smallvec![Argument::Int(transform.to_raw() as i32),],
                },
                Request::SetScale { scale } => Message {
                    sender_id: sender_id,
                    opcode: 4,
                    args: smallvec![Argument::Fixed((scale * 256.) as i32),],
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
                Request::SetMode { mode } => {
                    let mut _args_array: [wl_argument; 1] = unsafe { ::std::mem::zeroed() };
                    _args_array[0].o = mode.as_ref().c_ptr() as *mut _;
                    f(0, &mut _args_array)
                }
                Request::SetCustomMode {
                    width,
                    height,
                    refresh,
                } => {
                    let mut _args_array: [wl_argument; 3] = unsafe { ::std::mem::zeroed() };
                    _args_array[0].i = width;
                    _args_array[1].i = height;
                    _args_array[2].i = refresh;
                    f(1, &mut _args_array)
                }
                Request::SetPosition { x, y } => {
                    let mut _args_array: [wl_argument; 2] = unsafe { ::std::mem::zeroed() };
                    _args_array[0].i = x;
                    _args_array[1].i = y;
                    f(2, &mut _args_array)
                }
                Request::SetTransform { transform } => {
                    let mut _args_array: [wl_argument; 1] = unsafe { ::std::mem::zeroed() };
                    _args_array[0].i = transform.to_raw() as i32;
                    f(3, &mut _args_array)
                }
                Request::SetScale { scale } => {
                    let mut _args_array: [wl_argument; 1] = unsafe { ::std::mem::zeroed() };
                    _args_array[0].f = (scale * 256.) as i32;
                    f(4, &mut _args_array)
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
    pub struct ZwlrOutputConfigurationHeadV1(Proxy<ZwlrOutputConfigurationHeadV1>);
    impl AsRef<Proxy<ZwlrOutputConfigurationHeadV1>> for ZwlrOutputConfigurationHeadV1 {
        #[inline]
        fn as_ref(&self) -> &Proxy<Self> {
            &self.0
        }
    }
    impl From<Proxy<ZwlrOutputConfigurationHeadV1>> for ZwlrOutputConfigurationHeadV1 {
        #[inline]
        fn from(value: Proxy<Self>) -> Self {
            ZwlrOutputConfigurationHeadV1(value)
        }
    }
    impl From<ZwlrOutputConfigurationHeadV1> for Proxy<ZwlrOutputConfigurationHeadV1> {
        #[inline]
        fn from(value: ZwlrOutputConfigurationHeadV1) -> Self {
            value.0
        }
    }
    impl std::fmt::Debug for ZwlrOutputConfigurationHeadV1 {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            f.write_fmt(format_args!("{:?}", self.0))
        }
    }
    impl Interface for ZwlrOutputConfigurationHeadV1 {
        type Request = Request;
        type Event = Event;
        const NAME: &'static str = "zwlr_output_configuration_head_v1";
        const VERSION: u32 = 2;
        fn c_interface() -> *const wl_interface {
            unsafe { &zwlr_output_configuration_head_v1_interface }
        }
    }
    impl ZwlrOutputConfigurationHeadV1 {
        #[doc = "set the mode\n\nThis request sets the head's mode."]
        pub fn set_mode(&self, mode: &super::zwlr_output_mode_v1::ZwlrOutputModeV1) -> () {
            let msg = Request::SetMode { mode: mode.clone() };
            self.0.send::<AnonymousObject>(msg, None);
        }
        #[doc = "set a custom mode\n\nThis request assigns a custom mode to the head. The size is given in\nphysical hardware units of the output device. If set to zero, the\nrefresh rate is unspecified.\n\nIt is a protocol error to set both a mode and a custom mode."]
        pub fn set_custom_mode(&self, width: i32, height: i32, refresh: i32) -> () {
            let msg = Request::SetCustomMode {
                width: width,
                height: height,
                refresh: refresh,
            };
            self.0.send::<AnonymousObject>(msg, None);
        }
        #[doc = "set the position\n\nThis request sets the head's position in the global compositor space."]
        pub fn set_position(&self, x: i32, y: i32) -> () {
            let msg = Request::SetPosition { x: x, y: y };
            self.0.send::<AnonymousObject>(msg, None);
        }
        #[doc = "set the transform\n\nThis request sets the head's transform."]
        pub fn set_transform(&self, transform: super::wl_output::Transform) -> () {
            let msg = Request::SetTransform {
                transform: transform,
            };
            self.0.send::<AnonymousObject>(msg, None);
        }
        #[doc = "set the scale\n\nThis request sets the head's scale."]
        pub fn set_scale(&self, scale: f64) -> () {
            let msg = Request::SetScale { scale: scale };
            self.0.send::<AnonymousObject>(msg, None);
        }
    }
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_SET_MODE_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_SET_CUSTOM_MODE_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_SET_POSITION_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_SET_TRANSFORM_SINCE: u32 = 1u32;
    #[doc = r" The minimal object version supporting this request"]
    pub const REQ_SET_SCALE_SINCE: u32 = 1u32;
    static mut zwlr_output_configuration_head_v1_requests_set_mode_types: [*const wl_interface; 1] =
        [unsafe {
            &super::zwlr_output_mode_v1::zwlr_output_mode_v1_interface as *const wl_interface
        }];
    #[doc = r" C-representation of the messages of this interface, for interop"]
    pub static mut zwlr_output_configuration_head_v1_requests: [wl_message; 5] = [
        wl_message {
            name: b"set_mode\0" as *const u8 as *const c_char,
            signature: b"o\0" as *const u8 as *const c_char,
            types: unsafe {
                &zwlr_output_configuration_head_v1_requests_set_mode_types as *const _
            },
        },
        wl_message {
            name: b"set_custom_mode\0" as *const u8 as *const c_char,
            signature: b"iii\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
        wl_message {
            name: b"set_position\0" as *const u8 as *const c_char,
            signature: b"ii\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
        wl_message {
            name: b"set_transform\0" as *const u8 as *const c_char,
            signature: b"i\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
        wl_message {
            name: b"set_scale\0" as *const u8 as *const c_char,
            signature: b"f\0" as *const u8 as *const c_char,
            types: unsafe { &types_null as *const _ },
        },
    ];
    #[doc = r" C representation of this interface, for interop"]
    pub static mut zwlr_output_configuration_head_v1_interface: wl_interface = wl_interface {
        name: b"zwlr_output_configuration_head_v1\0" as *const u8 as *const c_char,
        version: 2,
        request_count: 5,
        requests: unsafe { &zwlr_output_configuration_head_v1_requests as *const _ },
        event_count: 0,
        events: NULLPTR as *const wl_message,
    };
}
