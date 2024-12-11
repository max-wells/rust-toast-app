use leptos::*;

use crate::components::icons::_icon_shared::SvgIcon;

#[component]
pub fn Check(
    #[prop(into, optional)] class: MaybeSignal<String>,
    #[prop(attrs)] attributes: Vec<(&'static str, Attribute)>,
) -> impl IntoView {
    view! {
        <SvgIcon {..attributes} class=class>
            <title>"Rust Icons - Check"</title>

            <path d="M20 6 9 17l-5-5" />
        </SvgIcon>
    }
}
