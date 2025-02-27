use leptos::*;
use std::time::Duration;
use wasm_bindgen::JsValue;

use super::toast_id::ToastId;

#[derive(Clone, Debug)]
pub struct ToastOptions {
    pub dismissible: bool,
    /// Duration until the toast should be dismissed
    pub duration: Option<Duration>,
    /// The position of the toast
    pub position: Option<ToasterPosition>,
}

impl Default for ToastOptions {
    fn default() -> Self {
        ToastOptions {
            dismissible: true,
            duration: None,
            position: None,
        }
    }
}

#[derive(Clone)]
pub struct Toast {
    pub id: ToastId,
    pub view: View,
    pub options: ToastOptions,
}

#[derive(Clone, Copy)]
pub struct Toasts {
    // pub(crate) toasts: ReadSignal<Vec<Toast>>,
    pub(crate) set_toasts: WriteSignal<Vec<Toast>>,
}

impl Toasts {
    /// Create a new toast
    pub fn toast(&self, toast: impl IntoView, id: Option<ToastId>, options: Option<ToastOptions>) {
        let id = id.unwrap_or_else(ToastId::new);
        let toast = Toast {
            id,
            view: toast.into_view(),
            options: options.unwrap_or_default(),
        };
        self.set_toasts.update(|toasts| {
            toasts.insert(0, toast);
        });
    }

    pub fn dismiss(&self, toast_id: &ToastId) {
        self.set_toasts.update(|toasts| {
            if let Some(index) = toasts.iter().position(|t| &t.id == toast_id) {
                toasts.remove(index);
            };
        });
    }
}

/// Possible positions for the toasts
#[derive(Clone, Copy, PartialEq, Eq, Hash, Debug)]
pub enum ToasterPosition {
    BottomRight,
}

impl ToasterPosition {
    pub fn x(&self) -> String {
        "right".to_string()
    }

    pub fn y(&self) -> String {
        "bottom".to_string()
    }
}

/// Call this to dismiss the toast with the given id
pub fn dismiss_toast(toast_id: &ToastId) {
    let message = format!("LEPTOS_TOASTER:{}", toast_id.to_decodable_string());
    let _ = window().post_message(&JsValue::from_str(&message), "*");
}

pub fn decode_message(message: String) -> Option<ToastId> {
    if let Some(toast_id) = message.strip_prefix("LEPTOS_TOASTER:") {
        return Some(ToastId::decode_string(toast_id));
    }

    None
}

pub struct HeightT {
    pub toast_id: ToastId,
    pub height: f64,
}
