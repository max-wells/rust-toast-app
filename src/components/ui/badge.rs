use leptos::*;
use rustui_merge::*;

#[derive(TwClass, Clone, Copy)]
#[tw(
    class = "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2  w-fit"
)]
pub struct BadgeClass {
    pub variant: BadgeVariant,
}

#[derive(TwVariant)]
pub enum BadgeVariant {
    #[tw(
        default,
        class = "border-transparent shadow bg-primary text-primary-foreground hover:bg-primary/80"
    )]
    Default,
    #[tw(
        class = "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
    )]
    Secondary,
    #[tw(
        class = "border-transparent shadow bg-destructive text-destructive-foreground hover:bg-destructive/80"
    )]
    Destructive,
    #[tw(class = "text-foreground")]
    Outline,
}

#[component]
pub fn Badge(
    #[prop(into, optional)] variant: MaybeSignal<BadgeVariant>,
    #[prop(into, optional)] class: MaybeSignal<String>,
    /// Arbitrary additional attributes.
    #[prop(attrs)]
    attributes: Vec<(&'static str, Attribute)>,
    children: Children,
) -> impl IntoView {
    let class = create_memo(move |_| {
        let variant = variant.get();

        let badge = BadgeClass {
            variant,
        };
        badge.with_class(class.get())
    });

    view! {
        <span {..attributes} class=class>
            {children()}
        </span>
    }
}
