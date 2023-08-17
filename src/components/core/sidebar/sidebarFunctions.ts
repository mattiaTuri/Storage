export const ChangeMenu = (selected_link:string) => {

    document.querySelectorAll("#actionsMenu a").forEach((elem:any) => {
        elem.style.color = ""
        elem.classList.remove("active")
    })

    const active_link: HTMLElement = document.getElementById(selected_link)!;
    const slider : HTMLElement = document.getElementById("sliderActions")!;

    slider.style.transform = `translateY(${active_link.offsetTop}px)`
    active_link.style.color = "white"
    active_link.classList.add("active");  
}

export const CheckActiveLink = (selected_link:string) => {
    const active_link: HTMLElement = document.getElementById(selected_link)!;
    if(active_link.classList.contains("active")){
        active_link.style.color = "white";
    }
}


