export const ChangeTheme = (selected_theme:string) => {
    const active_theme: HTMLElement = document.getElementById(selected_theme)!;
    const slider : HTMLElement = document.getElementById("sliderTheme")!;

    slider.style.transform = `translateX(${active_theme.offsetLeft}px)`
}
