use leptos::*;
use leptos_meta::*;
use leptos_router::{Route, Router, Routes};

use crate::components::navbar::Navbar;
use crate::components::tailwind_indicator::TailwindIndicator;
use crate::error_template::{AppError, ErrorTemplate};
use crate::routes::page_home::HomePage;
use crate::routes::page_test::PageTest;

#[component]
pub fn App() -> impl IntoView {
    // Provides context that manages stylesheets, titles, meta tags, etc.
    provide_meta_context();

    view! {
        <Stylesheet id="leptos" href="/pkg/start-axum.css" />
        <Title text="Rust UI" />

        <body class="min-h-screen font-sans antialiased bg-background">
            <Router fallback=|| {
                let mut outside_errors = Errors::default();
                outside_errors.insert_with_default_key(AppError::NotFound);
                view! { <ErrorTemplate outside_errors /> }.into_view()
            }>
                <Navbar />
                <TailwindIndicator />
                <main class="flex relative flex-col mx-auto w-full min-h-screen">
                    <Routes>
                        <Route path="" view=HomePage />
                        <Route path="/test" view=PageTest />
                    </Routes>
                </main>
            </Router>
        </body>
    }
}
