use ev::MouseEvent;
use html::Div;
use leptos::*;
use rustui_merge::*;

use crate::components::ui::button::{Button, ButtonVariant};

// TODO. Change bg-white.

#[allow(unused_variables)]
#[component]
pub fn DropdownMenu(
    #[prop(into, optional)] class: MaybeSignal<String>,
    #[prop(attrs)] attributes: Vec<(&'static str, Attribute)>,
    children: Children,
    #[prop(optional)] node_ref: NodeRef<Div>,
) -> impl IntoView {
    let class = create_memo(move |_| tw_merge!("relative inline-block text-left", class()));

    view! {
        <div {..attributes} class=class node_ref=node_ref>
            {children()}
        </div>
    }
}

#[component]
pub fn DropdownMenuTrigger(
    #[prop(into, optional)] class: MaybeSignal<String>,
    children: Children,
) -> impl IntoView {
    let class = create_memo(move |_| tw_merge!("size-10 p-0", class()));

    view! {
        <Button variant=ButtonVariant::Outline class=class id="theme-menu">
            // aria-haspopup="true"
            // aria-expanded=move || aria_expanded.get().to_string()
            {children()}
        </Button>
    }
}

#[component]
pub fn DropdownMenuContent(
    #[prop(into, optional)] class: MaybeSignal<String>,
    #[prop(into)] is_open: MaybeSignal<bool>,
    children: Children,
) -> impl IntoView {
    let class = create_memo(move |_| {
        tw_merge!(
            "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none",
            class()
        )
    });

    view! {
        <div
            class=class
            class:hidden=move || !is_open.get()
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="theme-menu"
        >
            {children()}
        </div>
    }
}

#[component]
pub fn DropdownMenuItem(
    #[prop(into, optional)] on_click: Option<Callback<MouseEvent>>,
    #[prop(into, optional)] class: MaybeSignal<String>,
    children: Children,
) -> impl IntoView {
    let class = create_memo(move |_| {
        tw_merge!(
            "flex items-center w-full px-4 py-2 text-sm text-gray-700 group hover:bg-gray-100 hover:text-gray-900",
            class()
        )
    });

    let on_click = on_click.unwrap_or_else(|| Callback::from(|_| {}));

    view! {
        <button class=class role="menuitem" on:click=on_click>
            {children()}
        </button>
    }
}
