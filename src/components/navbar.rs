use leptos::*;

use crate::components::{reactive_indicator::ReactiveIndicator, theme_toggle::ThemeToggle};

#[component]
pub fn Navbar() -> impl IntoView {
    view! {
        <header class="sticky top-0 z-50 w-full bg-transparent border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div class="container flex justify-between items-center px-4 h-14">
                <nav class="flex flex-1 justify-between items-center">
                    <div class="flex items-center space-x-4">
                        <a href="/">"Home"</a>
                        <a href="/test">"Test"</a>
                    </div>

                    <div class="flex items-center space-x-2">
                        <ReactiveIndicator />
                        <ThemeToggle />
                    </div>
                </nav>
            </div>
        </header>
    }
}
