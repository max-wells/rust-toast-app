use leptos::*;
use rustui_merge::*;
use std::time::Duration;

use crate::{
    components::icons::x::X,
    components::toaster_custom::{
        toast_id::ToastId, toaster::DEFAULT_TOAST_DURATION, types::dismiss_toast,
    },
};

#[derive(TwClass, Clone, Copy)]
#[tw(
    class = "flex gap-2 items-center p-4 text-sm rounded-lg border shadow-lg  w-[365px] border-input box-border"
)]
pub struct ToastClass {
    pub variant: ToastVariant,
}

#[derive(TwVariant)]
pub enum ToastVariant {
    #[tw(default, class = "default group bg-background")]
    Default,
    #[tw(
        class = "destructive group border-destructive/50 bg-destructive-foreground text-destructive"
    )]
    Destructive,
    #[tw(class = "success group border-success/50 bg-success-foreground text-success")]
    Success,
    #[tw(class = "info group border-info/50 bg-info-foreground text-info")]
    Info,
    #[tw(class = "warning group border-warning/50 bg-warning-foreground text-warning")]
    Warning,
}

#[component]
pub fn Toast(
    #[prop(into, optional)] variant: MaybeSignal<ToastVariant>,
    title: View,
    #[prop(default = None)] description: Option<View>,
    toast_id: ToastId,
    #[prop(default = true)] close_button: bool,
    #[prop(into, optional)] class: MaybeSignal<String>,
    // #[prop(default = ToastTheme::Light)] theme: ToastTheme,
) -> impl IntoView {
    let duration = std::time::Duration::from_millis(DEFAULT_TOAST_DURATION);

    let class = create_memo(move |_| {
        let variant = variant.get();

        let toast = ToastClass {
            variant,
        };
        toast.with_class(class.get())
    });

    view! {
        <div class=class>
            <Show when=move || close_button>
                <ToastCloseButton on:click=move |_| {
                    dismiss_toast(&toast_id);
                }>
                    <X class="size-5" />
                </ToastCloseButton>
            </Show>

            // <Show when=move || variant.get() != ToastVariant::Default>
            // <ToastIcon>
            // {match variant {
            // ToastVariant::Default => view! {}.into_view(),
            // ToastVariant::Success => view! { <Check /> }.into_view(),
            // ToastVariant::Info => view! { <Info /> }.into_view(),
            // ToastVariant::Warning => view! { <TriangleAlert /> }.into_view(),
            // ToastVariant::Destructive => view! { <ShieldX /> }.into_view(),
            // }}
            // </ToastIcon>
            // </Show>

            <div>
                <ToastTitle>{title}</ToastTitle>
                <ToastDescription>{description}</ToastDescription>
            </div>

            <ToastTracker duration=duration />
        </div>
    }
}

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                     ✨ FUNCTIONS ✨                        */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

#[component]
pub fn ToastTracker(duration: Duration) -> impl IntoView {
    view! {
        <div
            style=("animation-duration", format!("{}ms", duration.as_millis()))
            class="absolute bottom-0 left-0 w-full h-1 bg-current origin-left !ml-0 animate-trackToastDuration group-hover/toast:[animation-play-state:paused] group-focus/toast:[animation-play-state:paused]"
        />
    }
}

#[component]
pub fn ToastCloseButton(
    #[prop(into, optional)] class: MaybeSignal<String>,
    #[prop(attrs)] attributes: Vec<(&'static str, Attribute)>,
    children: Children,
) -> impl IntoView {
    let class = create_memo(move |_| {
        tw_merge!(
            "flex absolute top-2 right-2 flex-shrink-0 justify-center items-center p-0",
            class()
        )
    });

    view! {
        <button {..attributes} class=class>
            {children()}
        </button>
    }
}

#[component]
pub fn ToastIcon(
    #[prop(into, optional)] class: MaybeSignal<String>,
    #[prop(attrs)] attributes: Vec<(&'static str, Attribute)>,
    children: Children,
) -> impl IntoView {
    let class =
        create_memo(move |_| tw_merge!("flex relative justify-start items-center size-5", class()));

    view! {
        <button {..attributes} class=class>
            {children()}
        </button>
    }
}

#[component]
pub fn ToastTitle(
    #[prop(into, optional)] class: MaybeSignal<String>,
    #[prop(attrs)] attributes: Vec<(&'static str, Attribute)>,
    children: Children,
) -> impl IntoView {
    let class =
        create_memo(move |_| tw_merge!("font-semibold leading-relaxed text-inherit", class()));

    view! {
        <p {..attributes} class=class>
            {children()}
        </p>
    }
}

#[component]
pub fn ToastDescription(
    #[prop(into, optional)] class: MaybeSignal<String>,
    #[prop(attrs)] attributes: Vec<(&'static str, Attribute)>,
    children: Children,
) -> impl IntoView {
    let class =
        create_memo(move |_| tw_merge!("font-normal leading-relaxed text-inherit", class()));

    view! {
        <p {..attributes} class=class>
            {children()}
        </p>
    }
}
