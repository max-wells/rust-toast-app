use leptos::*;

use crate::components::toaster_custom::{
    toast::{Toast, ToastVariant},
    toast_id::ToastId,
    toaster::Toaster,
    types::Toasts,
};
use crate::components::ui::button::{Button, ButtonVariant};

#[component]
pub fn DemoToastVariants() -> impl IntoView {
    view! {
        <Toaster>
            <Demo />
        </Toaster>
    }
}

#[component]
fn Demo() -> impl IntoView {
    let toast_context = expect_context::<Toasts>();

    let create_toast = |variant: ToastVariant| {
        move |_| {
            let toast_id = ToastId::new();
            toast_context.toast(
                view! {
                    <Toast
                        toast_id
                        variant=variant
                        title=view! { "Title" }.into_view()
                        description=Some(view! { "Description" }.into_view())
                    />
                },
                Some(toast_id),
                None,
            );
        }
    };

    let create_info_toast = create_toast(ToastVariant::Destructive);
    let create_warning_toast = create_toast(ToastVariant::Warning);
    let create_success_toast = create_toast(ToastVariant::Success);

    view! {
        <div class="flex flex-wrap gap-4 mx-auto">
            <Button on:click=create_info_toast variant=ButtonVariant::Destructive>
                "Destructive Toast"
            </Button>
            <Button on:click=create_warning_toast variant=ButtonVariant::Warning>
                "Warning Toast"
            </Button>
            <Button on:click=create_success_toast variant=ButtonVariant::Success>
                "Success Toast"
            </Button>
        </div>
    }
}
