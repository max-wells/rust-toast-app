use leptos::*;

use crate::{
    components::toaster_custom::{
        toast::{Toast, ToastVariant},
        toast_id::ToastId,
        toaster::Toaster,
        types::Toasts,
    },
    components::ui::button::Button,
};

#[component]
pub fn DemoToast() -> impl IntoView {
    view! {
        <Toaster>
            <Demo />
        </Toaster>
    }
}

#[component]
fn Demo() -> impl IntoView {
    let toast_context = expect_context::<Toasts>();

    let create_default_toast = move |_| {
        let toast_id = ToastId::new();
        toast_context.toast(
            view! {
                <Toast
                    toast_id
                    variant=ToastVariant::Default
                    title=view! { "Title" }.into_view()
                    description=Some(view! { "Description" }.into_view())
                />
            },
            Some(toast_id),
            None,
        );
    };

    view! { <Button on:click=create_default_toast>"Default Toast"</Button> }
}
