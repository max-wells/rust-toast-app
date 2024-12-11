use leptos::*;

use crate::components::icons::_icon_shared::SvgIcon;

#[component]
pub fn Moon(
    #[prop(into, optional)] class: MaybeSignal<String>,
    #[prop(attrs)] attributes: Vec<(&'static str, Attribute)>,
) -> impl IntoView {
    view! {
        <SvgIcon {..attributes} class=class>
            <title>"Rust Icons - Moon"</title>

            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </SvgIcon>
    }
}
