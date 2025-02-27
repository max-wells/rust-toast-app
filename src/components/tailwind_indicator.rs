use leptos::*;

#[component]
pub fn TailwindIndicator() -> impl IntoView {
    view! {
        <div class="flex fixed bottom-1 left-1 z-50 justify-center items-center p-3 w-6 h-6 font-mono text-xs text-white bg-gray-800 rounded-full">
            <div class="block sm:hidden">"xs"</div>
            <div class="hidden sm:block md:hidden">"sm"</div>
            <div class="hidden md:block lg:hidden">"md"</div>
            <div class="hidden lg:block xl:hidden">"lg"</div>
            <div class="hidden xl:block 2xl:hidden">"xl"</div>
            <div class="hidden 2xl:block">"2xl"</div>
        </div>
    }
}
