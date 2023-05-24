
export const ChangeMenu = (selected_link:string) => {

    document.querySelectorAll("#sectionsMenu a").forEach((elem:any) => {
        elem.style.color = "#cfcde7"
        elem.classList.remove("active")
    })

    const active_link: HTMLElement = document.getElementById(selected_link)!;
    const slider : HTMLElement = document.getElementById("sliderSections")!;

    slider.style.transform = `translateY(${active_link.offsetTop}px)`
    active_link.style.color = "white";
    active_link.classList.add("active");
}

export const ShowHoverLink = (selected_link:string) => {
    const active_link: HTMLElement = document.getElementById(selected_link)!;
    if(!active_link.classList.contains("active")){
        active_link.style.color = "#0066ff";
    }
}

export const HideHoverLink = (selected_link:string) => {
    const active_link: HTMLElement = document.getElementById(selected_link)!;
    if(!active_link.classList.contains("active")){
        active_link.style.color = "#cfcde7";
    }
}

export const ChangeTheme = (selected_theme:string) => {
    const active_theme: HTMLElement = document.getElementById(selected_theme)!;
    const slider : HTMLElement = document.getElementById("sliderTheme")!;

    slider.style.transform = `translateX(${active_theme.offsetLeft}px)`
}