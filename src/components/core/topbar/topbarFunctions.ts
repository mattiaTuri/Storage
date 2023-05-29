export const changeSectionName = () => {
    let sectionActive: string = window.location.pathname.replace("/", "");
    if (sectionActive === "") sectionActive = "dashboard"

    return sectionActive
}