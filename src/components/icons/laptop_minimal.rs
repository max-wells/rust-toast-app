use leptos::*;

use crate::components::icons::_icon_shared::SvgIcon;

#[component]
pub fn LaptopMinimal(
    #[prop(into, optional)] class: MaybeSignal<String>,
    #[prop(attrs)] attributes: Vec<(&'static str, Attribute)>,
) -> impl IntoView {
    view! {
        <SvgIcon {..attributes} class=class>
            <title>"Rust Icons - Laptop Minimal"</title>

            <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
            <line x1="2" x2="22" y1="20" y2="20" />
        </SvgIcon>
    }
}
