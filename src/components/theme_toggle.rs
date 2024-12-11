use html::Div;
use leptos::*;
use leptos_use::{
    on_click_outside, use_color_mode_with_options, ColorMode, UseColorModeOptions,
    UseColorModeReturn,
};

use crate::components::icons::laptop_minimal::LaptopMinimal;
use crate::components::icons::moon::Moon;
use crate::components::icons::sun::Sun;
use crate::components::ui::dropdown_menu::{
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
};

#[component]
pub fn ThemeToggle() -> impl IntoView {
    let UseColorModeReturn {
        mode,
        set_mode,
        ..
    } = use_color_mode_with_options(UseColorModeOptions::default().cookie_enabled(true));

    let dropdown_open = create_rw_signal(false);
    let dropdown_ref = create_node_ref::<Div>();

    let toggle_dropdown = move |_| dropdown_open.update(|open| *open = !*open);

    // Close the dropdown when clicking outside
    let _ = on_click_outside(dropdown_ref, move |_| dropdown_open.set(false));

    let current_icon = move || match mode.get() {
        ColorMode::Light => view! { <Sun class="size-4" /> },
        ColorMode::Dark => view! { <Moon class="size-4" /> },
        ColorMode::Auto => view! { <LaptopMinimal class="size-4" /> }, // TODO. LaptopMinimal not displayed when set to Auto
        ColorMode::Custom(_) => view! { <Sun class="size-4" /> }, // TODO. Should not be SunIcon.
    };

    view! {
        <DropdownMenu node_ref=dropdown_ref>
            <DropdownMenuTrigger on:click=toggle_dropdown>{current_icon}</DropdownMenuTrigger>

            <DropdownMenuContent is_open=dropdown_open>
                <div class="py-1" role="none">
                    <DropdownMenuItem on_click=move |_| {
                        set_mode.set(ColorMode::Light);
                        dropdown_open.set(false);
                    }>"Light"</DropdownMenuItem>
                    <DropdownMenuItem on_click=move |_| {
                        set_mode.set(ColorMode::Dark);
                        dropdown_open.set(false);
                    }>"Dark"</DropdownMenuItem>
                    <DropdownMenuItem on_click=move |_| {
                        set_mode.set(ColorMode::Auto);
                        dropdown_open.set(false);
                    }>"System"</DropdownMenuItem>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    }
}
