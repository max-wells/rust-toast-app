use leptos::*;

use crate::components::icons::_icon_shared::SvgIcon;

#[component]
pub fn X(
    #[prop(into, optional)] class: MaybeSignal<String>,
    #[prop(attrs)] attributes: Vec<(&'static str, Attribute)>,
) -> impl IntoView {
    view! {
        <SvgIcon {..attributes} class=class>
            <title>"Rust Icons - X"</title>

            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </SvgIcon>
    }
}
